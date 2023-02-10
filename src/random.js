const randomWords = function () {
  let words = [
    [
      ` “I'm sick of following my dreams, man. I'm just going to ask where
they're going and hook up with ’em later."`,
    ],
    [
      `"Mathematics is much less formally complete and precise than computer programs."`,
    ],
    ['I am currently under construction. Thank you for your patience.'],
    ['I tried to be normal once. Worst two minutes of my life.'],
    [
      `"Every time you are able to find humor in a difficult situation, you win."`,
    ],
    [
      `"Some days you eat salads and go to the gym, some days you eat cupcakes and refuse to put on pants. It's called balance."`,
    ],
    [
      `"If you're around someone who sucks all the air out of the room, go to another room and play the game"`,
    ],
    [`"This will go much faster if you just accept that I am right."`],
    [
      `“If at first you don’t succeed then skydiving definitely isn’t for you.” `,
    ],
    [
      `"If you don't want me to tell you what I really think, you'd best refrain from asking for my opinion."`,
    ],
    [`"A pessimist is a person who has had to listen to too many optimists."`],
    [
      `"Don’t worry about the world coming to an end today. It is already tomorrow in Australia."`,
    ],
    [
      `"If you think you are too small to make a difference, try sleeping with a mosquito."`,
    ],
    [
      `"Marriage is the only war in which you sleep with the enemy.

    "`,
    ],
    [`"I had plastic surgery last week – I cut up my credit cards."`],
    [
      ` “I'm sick of following my dreams, man. I'm just going to ask where
    they're going and hook up with ’em later."`,
    ],
  ];

  const matematika = Math.floor(Math.random() * words.length);

  const random = words[matematika];

  return random;
};
