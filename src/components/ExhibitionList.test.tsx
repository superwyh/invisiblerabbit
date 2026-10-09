import assert from 'node:assert/strict';
import { existsSync, statSync } from 'node:fs';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import App from '../App';
import { DEFAULT_GAMES } from '../data/defaultGames';
import { ExhibitionAlbum, ExhibitionList, EXHIBITIONS } from './ExhibitionList';

test('exhibitions show photo covers and open multi-photo albums with the correct localized awards above the photos', () => {
  assert.deepEqual(EXHIBITIONS.map(event => event.date), ['2026-09', '2025-10']);
  assert.deepEqual(EXHIBITIONS.map(event => event.titles.zh), ['东京电玩展', '「摊开玩」独立游戏市集']);
  assert.equal(EXHIBITIONS[1].titles.en, 'Booom IndieFair');
  assert.deepEqual(EXHIBITIONS.map(event => event.details.zh.date), ['2026年9月17日—20日', '2025年10月18日—19日']);
  assert.match(EXHIBITIONS[0].details.zh.organizer, /CESA.*日经 BP.*Sony Music Solutions/);
  assert.equal(EXHIBITIONS[1].details.zh.organizer, '机核 GCORES · BOOOM 暴造游戏孵化器');
  assert.match(EXHIBITIONS[0].details.zh.venue, /幕张展览馆/);
  assert.match(EXHIBITIONS[1].details.zh.venue, /东进国际中心 B1 下沉广场/);
  assert.deepEqual(EXHIBITIONS.map(event => event.photos.length), [5, 5]);
  assert.ok(!EXHIBITIONS[1].photos.includes('/exhibitions/booom-indiefair-2025/photo-01.jpg'));
  assert.deepEqual(EXHIBITIONS.map(event => event.awardGroupIndex), [1, 0]);
  for (const event of EXHIBITIONS) {
    assert.ok(event.photos.length > 1);
    assert.equal(new Set(event.photos).size, event.photos.length);
    assert.ok(event.photos[0].endsWith('/cover.jpg'));
    for (const photo of event.photos) {
      assert.ok(photo.startsWith('/exhibitions/'));
      const asset = new URL(`../../public${photo}`, import.meta.url);
      assert.ok(existsSync(asset));
      if (event.id === 'tgs-2026') assert.ok(statSync(asset).size < 512_000);
    }
  }
  const room = DEFAULT_GAMES.find(game => game.id === 'invisible-room')!;
  for (const lang of ['zh', 'en', 'ja', 'ko'] as const) {
    const markup = renderToStaticMarkup(<ExhibitionList lang={lang} />);
    assert.doesNotMatch(markup, /<h[1-6]\b/);
    assert.equal((markup.match(/<time\b/g) ?? []).length, 2);
    assert.equal((markup.match(/<img\b/g) ?? []).length, 2);
    assert.ok(markup.indexOf(EXHIBITIONS[0].titles[lang]) < markup.indexOf(EXHIBITIONS[1].titles[lang]));
    for (const event of EXHIBITIONS) {
      assert.ok(markup.includes(event.titles[lang]));
      assert.ok(markup.includes(`dateTime="${event.date}"`));
      assert.ok(markup.includes(event.date.replace('-', '.')));
      assert.ok(markup.includes(`src="${event.photos[0]}"`));

      const album = renderToStaticMarkup(<ExhibitionAlbum exhibition={event} lang={lang} />);
      assert.doesNotMatch(album, /台风|typhoon|canceled|台風|中止|태풍|취소/i);
      assert.equal((album.match(/<dt\b/g) ?? []).length, 3);
      assert.equal((album.match(/<dd\b/g) ?? []).length, 3);
      assert.ok(album.indexOf('<dl') < album.indexOf('<section'));
      for (const detail of Object.values(event.details[lang])) {
        assert.ok(album.includes(renderToStaticMarkup(<>{detail}</>)));
      }
      const groups = room.locales?.[lang]?.awardGroups ?? room.awardGroups!;
      const group = groups[event.awardGroupIndex];
      const otherGroup = groups[1 - event.awardGroupIndex];
      assert.equal((album.match(/<img\b/g) ?? []).length, event.photos.length);
      assert.equal((album.match(/<ul\b/g) ?? []).length, 1);
      assert.equal((album.match(/viewBox="0 0 48 180"/g) ?? []).length, 2);
      assert.ok(album.indexOf(group.organizer) < album.indexOf('<img'));
      assert.ok(album.includes(group.organizer));
      assert.ok(!album.includes(otherGroup.organizer));
      for (const award of group.awards) assert.ok(album.includes(award));
      for (const photo of event.photos) assert.ok(album.includes(`src="${photo}"`));
    }
  }
  const homepage = renderToStaticMarkup(<App />);
  assert.match(homepage, /<header\b[\s\S]*?<button\b[^>]*>中文<\/button>/);
  assert.ok(homepage.indexOf('KeyHero') < homepage.indexOf('东京电玩展'));
});
