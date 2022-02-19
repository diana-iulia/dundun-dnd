const { Location } = require('../models');

const locationData = [
  {
    campaign_id: 2,
    name: 'Jamlempire',
    description: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It's this multicultural identity that has truly left its mark. Hundreds of bistros, sandwich bars and food carts offer a plethora of culinary choices and those who feel hungry for something else can enjoy nature, an amusement park, libraries or one of the many other recreational venues."
  },
  {
    campaign_id: 1,
    name: 'Red Stream',
    description: "Red Stream was built around an oasis in the middle of a desert and is truly an evergrowing urban phenomenon. Its grace is matched by the backdrop of clear blue skies and the occasional windstorm. "
  },
  {
    campaign_id: 3,
    name: 'Ilame City',
    description: "The city of Ilame was built amidst the murky waters of an enormous swamp and is truly an ancient sight. Its appearance is matched by the backdrop of an abundance of hills which have helped shape the city to what it is today. The riches these hills brought were of great importance, but they were also influential when it came to architectural designs as the vast majority of buildings have been built in shapes and with elements of the hills around them."
  },
  {
    campaign_id: 1,
    name: 'Sabbard',
    description: "Built at the base of a potentially active volcano and is truly a state-of-the-art sight. Its elegance is matched by the backdrop of rich, luscious fields which have helped shape the city to what it is today. The skyline is growing with impressive skyscrapers and they seem to be reaching higher and higher each year. Parks and gardens are flourishing in Madhollow and it has attracted a lot of attention. Many new cultures have left their mark not just on business, but also upon the city's identity. What historically was a city of few cultures has grown into a fusion of everything and it's this that unites the 12 million people to this day."
  },
  {
    campaign_id: 3,
    name: 'Owlenstow Wood',
    description: "A small graveyard in a dark mountain top marks the entrance to this dungeon. Beyond the graveyard lies a scanty, deteriorated room. It's covered in ash, cobwebs and small bones."
  },
  {
    campaign_id: 1,
    name: 'Crobland',
    description: "A minor pair of granite doors in a eerie morass marks the entrance to this dungeon. Beyond the pair of granite doors lies a grand, ragged room. It's covered in large bones, dead insects and rat droppings."
  },
  {
    campaign_id: 2,
    name: 'Bluefarm Hamlet',
    description: "Bluefarm Hamlet is built upon the friendship, prosperous trade and horrible crimes of its past, this small town is now among the most coveted of cities in its corner of the world. Their exports, apples and cows, are among its current greatest strengths. Unfortunately they lack a lot in literacy and science."
  },
];

const seedLocation = () => Location.bulkCreate(locationData);

module.exports = seedLocation;
