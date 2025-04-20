const story1 = [
  {
    id: 1,
    text: "You open your eyes and notice you're in a empty white room with a pipe and button lying on the floor.",
    options: [
      {
        text: "Pick up the pipe",
        setState: { pipe: true },
        nextText: 3,
      },
      {
        text: "Push the button.",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "You hear a loud noise followed by everything going dark. You are dead.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 3,
    text: "As you pickup the pipe, a mechanism opens up from the wall with space indicating something must be left there...",
    options: [
      {
        text: "Put the pipe within the space",
        setState: { pipe: false },
        nextText: 4,
      },
      {
        text: "Smash the button from before with the pipe",
        nextText: 5,
      },
      {
        text: "Wait for awhile...",
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: "All of a sudden another mechanism from the floor rises containing...a zombie!!",
    options: [
      {
        text: "Smack the zombie on the head with your pipe",
        requiredState: (currentState) => currentState.pipe,
        nextText: 6,
      },
      {
        text: "Run away!!!",
        nextText: 7,
      },
      {
        text: "Punch the zombie",
        nextText: 8,
      },
    ],
  },
  {
    id: 5,
    text: "The next moment you are blinded by a white light and...where am i again?",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 6,
    text: "The zombie goes down and seems to be dead (again). A doorway manifests with a scenary of a city in the distance. You have escaped?",
    options: [
      {
        text: "Go again",
        nextText: -1,
      },
    ],
  },
  {
    id: 7,
    text: "Alas there is no where to run and the zombie eventually catches you as you tire out and eats you.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 8,
    text: "You punch the zombie, unfortunatly it just seems to make it angrier. You are overpowered and eaten.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
];

const story2 = [
  {
    id: 1,
    text: "You are in the forest at night. Do you light a torch or continue in the dark?",
    options: [
      {
        text: "Light a torch",
        nextText: 2,
      },
      {
        text: "Continue in the dark",
        nextText: 3,
      },
    ],
  },
  {
    id: 2,
    text: "You can now see, do you follow the rabbit with the note?",
    options: [
      {
        text: "Follow it",
        nextText: 4,
      },
      {
        text: "Ignore it",
        nextText: 5,
      },
    ],
  },
  {
    id: 3,
    text: "Do you go left toward the sound of water or right toward the smell of smoke?",
    options: [
      {
        text: "Go left",
        nextText: 6,
      },
      {
        text: "Go right",
        nextText: 7,
      },
    ],
  },
  {
    id: 6,
    text: "You fall into a lake and drown",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 7,
    text: "🎉You find other people at a campfire and are saved. You survived the forest!🎉",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 4,
    text: "You follow the rabit and now hear voices, do you hide or call out?",
    options: [
      {
        text: "Hide",
        nextText: 10,
      },
      {
        text: "Call out",
        nextText: 11,
      },
    ],
  },
  {
    id: 10,
    text: "💀You hide but are never found. You were lost forever in the forest...💀",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 11,
    text: "🎉People hear you and you are saved. You survived the forest!🎉",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 5,
    text: "You notice a glowing plant do you touch it or walk past?",
    options: [
      {
        text: "Touch it",
        nextText: 8,
      },
      {
        text: "Walk past",
        nextText: 9,
      },
    ],
  },
  {
    id: 8,
    text: "💀You die of poisoning...💀",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 9,
    text: "💀You are lost and never make it out alive...💀",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
];

const story3 = [
  {
    id: 1,
    text: "You enter the casino, filled with hope and delusion. You have £3,000 cash in hand.",
    options: [
      {
        text: "Walk out, it's time to quit",
        nextText: 2,
      },
      {
        text: "Walk towards the roulette table",
        setState: { money: 3000 },
        nextText: 4,
      },
    ],
  },
  {
    id: 2,
    text: "You leave the casino. One problem... you still have no job, bills and a whole lot of debt.",
    options: [
      {
        text: "Go back inside",
        nextText: 1,
      },
      {
        text: "Keep walking away, never to return",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "You have quit gambling and live a happy fulfilling life",
    options: [
      {
        text: "Restart",
        nextText: 1,
      },
    ],
  },
  {
    id: 4,
    text: "You approach the roulette table, what harm can one spin do.",
    options: [
      {
        text: "All in on black",
        nextText: 5,
      },
      {
        text: "All in on red",
        nextText: 5,
      },
      {
        text: "All in on green",
        nextText: 6,
      },
    ],
  },
  {
    id: 5,
    text: "The wheel spins. red... black... red... but finally... green. You have lost everything.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 6,
    text: "The wheel spins. red... black... red... then finally... GREEN! You just won £105,000. Someone approaches you, You are asked to join the high rollers in the back rooom.",
    options: [
      {
        text: "Join the high rollers",
        nextText: 7,
      },
      {
        text: "Leave with the winnings",
        nextText: 8,
      },
    ],
  },
  {
    id: 7,
    text: "You are escorted towards the high rollers table.",
    options: [
      {
        text: "Approach the table",
        nextText: 10,
      },
      {
        text: "Leave, you don't need more",
        nextText: 11,
      },
    ],
  },
  {
    id: 8,
    text: "You leave with £105,000 but are thinking it could have been more.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 10,
    text: "You are welcomed to the high rollers table, it's all or nothing",
    options: [
      {
        text: "All in on black",
        nextText: 12,
      },
      {
        text: "All in on red",
        nextText: 12,
      },
      {
        text: "All in on green",
        nextText: 13,
      },
    ],
  },
  {
    id: 11,
    text: "You try to leave, a door locks behind you. A voice says 'No one leaves the high rollers room without betting.",
    options: [
      {
        text: "Sit at the table",
        nextText: 10,
      },
    ],
  },
  {
    id: 12,
    text: "You lose it all. You're handed a mop and told, 'Welcome to your new job.'",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 13,
    text: "The wheel spins. red... black... red... then finally... GREEN! You just won £3,675,000. You are kicked out, money in hand, and the game is over.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
];


export { story1, story2, story3 };
