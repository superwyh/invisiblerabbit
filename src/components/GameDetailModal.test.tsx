import assert from 'node:assert/strict';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { DEFAULT_GAMES } from '../data/defaultGames';
import { Language } from '../types';
import { GameDetailModal } from './GameDetailModal';

test('game copy is current and festival badges keep awards and selections separate in every language', () => {
  const descriptions = {
    'key-hero': '《KeyHero》是一款用方向键搭桥的解谜游戏。方向键既能控制移动，也能放进关卡中搭桥，但每放下一枚，你就会暂时失去对应方向的移动能力。你需要决定用哪些方向键铺路、保留哪些用来移动，才能顺利过关。',
    'invisible-room': '《看不见的房间》是一款没有画面的声音解谜游戏。你将作为“怪谈办”的成员，通过通讯引导一名失明的探员逃离险境。你需要聆听环境音和角色对话，结合游戏附带的可打印资料，在脑中还原环境、判断危险，逐步揭开真相。',
    'fight-with-keys': '《Fight With Keys》是一款结合打字与走位的动作游戏。你需要用右手操作方向键移动、躲避敌人，同时用左手输入敌人头顶的字符来击杀目标。字符会在敌人进入攻击范围后出现，考验你一边走位、一边观察和输入的双手配合。',
  };
  assert.deepEqual(DEFAULT_GAMES.map(game => game.id), ['invisible-room', 'fight-with-keys', 'key-hero']);
  for (const game of DEFAULT_GAMES) {
    assert.equal(game.descriptionZh, descriptions[game.id as keyof typeof descriptions]);
    assert.equal(game.detailsZh?.length ?? 0, 0);
    assert.equal(game.details?.length ?? 0, 0);
    for (const lang of ['en', 'ja', 'ko'] as const) {
      const localized = game.locales?.[lang];
      assert.ok(localized?.description ?? game.description);
      assert.equal(localized?.details?.length ?? 0, 0);
    }
  }

  const room = DEFAULT_GAMES[0];
  for (const lang of ['zh', 'en', 'ja', 'ko'] as Language[]) {
    const groups = room.locales?.[lang]?.awardGroups ?? room.awardGroups!;
    assert.equal(groups.length, 2);
    assert.equal(groups[0].awards.length, 3);
    assert.deepEqual(groups[1].awards, ['SELECTED INDIE 80']);
    const markup = renderToStaticMarkup(
      <GameDetailModal game={room} allGames={DEFAULT_GAMES} lang={lang} onClose={() => {}} onSelectGame={() => {}} />,
    );
    const awardsSection = markup.match(/<section\b[^>]*>([\s\S]*?)<\/section>/)?.[1] ?? '';
    assert.equal((awardsSection.match(/<ul\b/g) ?? []).length, 2);
    assert.equal((awardsSection.match(/viewBox="0 0 48 180"/g) ?? []).length, 4);
    assert.match(awardsSection, /SELECTED <\/span><span[^>]*>INDIE 80<\/span>/);
    for (const group of groups) {
      assert.ok(awardsSection.includes(group.organizer));
      for (const award of group.awards) assert.ok(awardsSection.includes(award));
    }
  }
});
