import { BlogPost, Language } from '../types';

interface MultilingualBlogPosts {
  zh: BlogPost[];
  en: BlogPost[];
  ja: BlogPost[];
}

export const BLOG_POSTS: MultilingualBlogPosts = {
  zh: [
    {
      id: '001',
      title: '第一次参加游戏展！还拿了几个奖！',
      date: '2025-10-19',
      excerpt: '第一次参加游戏展！还拿了几个奖！',
      tags: ['EVENT', 'AWARD'],
      content: `
![游戏展照片 1](/blog_image/1.jpg)

![游戏展照片 2](/blog_image/2.jpg)

![游戏展照片 3](/blog_image/3.jpg)

![游戏展照片 4](/blog_image/4.jpg)

![游戏展照片 5](/blog_image/5.jpg)
      `
    }
  ],
  en: [
    {
      id: '001',
      title: 'First Game Expo! And We Won Several Awards!',
      date: '2025-10-19',
      excerpt: 'First Game Expo! And We Won Several Awards!',
      tags: ['EVENT', 'AWARD'],
      content: `
![Game Expo Photo 1](/blog_image/1.jpg)

![Game Expo Photo 2](/blog_image/2.jpg)

![Game Expo Photo 3](/blog_image/3.jpg)

![Game Expo Photo 4](/blog_image/4.jpg)

![Game Expo Photo 5](/blog_image/5.jpg)
      `
    }
  ],
  ja: [
    {
      id: '001',
      title: '初めてのゲーム展！そして数々の賞を受賞！',
      date: '2025-10-19',
      excerpt: '初めてのゲーム展！そして数々の賞を受賞！',
      tags: ['EVENT', 'AWARD'],
      content: `
![ゲーム展写真 1](/blog_image/1.jpg)

![ゲーム展写真 2](/blog_image/2.jpg)

![ゲーム展写真 3](/blog_image/3.jpg)

![ゲーム展写真 4](/blog_image/4.jpg)

![ゲーム展写真 5](/blog_image/5.jpg)
      `
    }
  ]
};