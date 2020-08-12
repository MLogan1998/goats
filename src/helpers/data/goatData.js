const goats = [
  {
    id: 'goat1',
    name: 'Peyton Manning',
    age: 44,
    description: 'Peyton Williams Manning is an American former professional football quarterback.',
    imgUrl: 'https://i.imgur.com/x5QSEHN.jpg',
    isTaken: true,
  },
  {
    id: 'goat2',
    name: 'Reggie White',
    age: 65,
    description: 'Reginald White was aprofessional football player. He played college football for the University of Tennessee.',
    imgUrl: 'https://i.imgur.com/nITHX8n.jpg',
    isTaken: true,
  },
  {
    id: 'goat3',
    name: 'Alvin Kamara',
    age: 25,
    description: 'Alvin Kamara is a running back for the New Orleans Saints. He played college football at the University of Tennessee',
    imgUrl: 'https://i.imgur.com/7beLCQ2.jpg',
    isTaken: false,
  },
  {
    id: 'goat4',
    name: 'Eric Berry',
    age: 31,
    description: 'He played college football at Tennessee, where he was a two-time All-American and recognized as the best defensive back in the country. ',
    imgUrl: 'https://i.imgur.com/0wDS2RX.jpg',
    isTaken: false,
  },
  {
    id: 'goat5',
    name: 'Al Wilson',
    age: 43,
    description: 'Al Wilson is a former football player. He played college football for the University of Tennessee, and was recognized as an All-American.',
    imgUrl: 'https://i.imgur.com/AGxDzUb.jpg',
    isTaken: false,
  },
];

const getGoats = () => goats;

const takeGoat = (goatId) => {
  goats.forEach((response) => {
    if (response.id === goatId) {
      response.isTaken = true;
    }
  });
};

const freeGoat = (goatId) => {
  goats.forEach((response) => {
    if (response.id === goatId) {
      response.isTaken = false;
    }
  });
};

export default { getGoats, takeGoat, freeGoat };
