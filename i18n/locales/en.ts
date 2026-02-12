export default {
  common: {
    studioName: 'Invisible Rabbit',
    info: 'Info',
    langEn: 'EN',
    langZh: '中文',
    langJa: '日本語',
  },
  home: {
    intro: "You won't find anything familiar here. Invisible Rabbit only makes games that sit outside common sense: we turn absurd, fresh, unreasonable ideas into game mechanics. If that feels uncomfortable, we're doing it right.",
  },
  games: {
    1: {
      title: 'The Invisible Room',
      category: 'Puzzle / Mystery',
      description: [
        'This game grew from an interest in "pure auditory interaction" and cross-media storytelling: we strip away visuals and combine audio-based puzzles with physical objects outside the screen, blurring the line between in-game and real world. You play as a member of the "Strange Tales Bureau", guiding a blinded, trapped agent through a single communication channel. Environmental sound, dialogue and faint audio clues are the only way to perceive the world; all spatial and logical reasoning happens in the player\'s mind.',
        'At its core, The Invisible Room ties auditory perception to logical deduction. To deepen this kind of immersion, the game uses physical props: you work alongside PDF handouts that ship with the game, and these materials are key to solving the puzzles.',
        'By weaving high-quality sound design with real-world documents in this meta-narrative way, we aim to offer a puzzle experience that feels tangible and deliberately outside the usual rules of games.',
      ],
    },
    2: {
      title: 'Long Wait',
      category: 'Narrative / Healing',
      description: 'A story about waiting and reunion. Over time we lose many things, and in the end we find the pieces that matter most. A warm, modern fable.',
    },
  },
  game: {
    steam: 'Steam',
  },
  about: {
    title: 'About',
    p1: 'Beijing Invisible Rabbit Technology was founded in 2025, with the team based in Beijing and Shijiazhuang. We focus on indie games for Steam and on puzzle and board game design.',
    p2: 'We are more interested in interaction that hasn’t been defined yet, and in turning bold ideas into concrete play. We plan to bring these experiments to Switch and mobile in the future.',
    quote: '"If every game in the world is turning left, we’re not even planning to walk on the ground."',
    location: 'Location',
    locationValue: 'Beijing | Shijiazhuang',
    contact: 'Contact',
  },
} as const;
