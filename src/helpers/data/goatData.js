const goats = [
  {
    id: 'goat1',
    name: 'Peyton Manning',
    age: 44,
    description: 'Peyton Williams Manning is an American former professional football quarterback.',
    imgUrl: 'https://i.imgur.com/x5QSEHN.jpg',
    isBusy: true,
  },
  {
    id: 'goat2',
    name: 'Reggie White',
    age: 65,
    description: 'Reginald White was aprofessional football player. He played college football for the University of Tennessee.',
    imgUrl: 'https://i.imgur.com/nITHX8n.jpg',
    isBusy: true,
  },
  {
    id: 'goat3',
    name: 'Alvin Kamara',
    age: 25,
    description: 'Alvin Kamara is a running back for the New Orleans Saints. He played college football at the University of Tennessee',
    imgUrl: 'https://i.imgur.com/7beLCQ2.jpg',
    isBusy: false,
  },
  {
    id: 'goat4',
    name: 'Butter',
    age: 1,
    description: 'RAWRRRR',
    imgUrl: 'https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg',
    isBusy: false,
  },
  {
    id: 'goat5',
    name: 'Ramsey',
    age: 0.5,
    description: 'Nope',
    imgUrl: 'https://www.psephizo.com/wp-content/uploads/2018/09/1438297793139.jpeg',
    isBusy: false,
  },
];

const getGoats = () => goats;

export default { getGoats };
