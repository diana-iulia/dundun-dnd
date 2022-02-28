const { Alignment } = require('../models');

const alignmentData = [
  {
    name: 'Lawful Good',
    alignmentImg: "/alignment-icons/1"
  },
  {
    name: 'Neutral Good',
    alignmentImg: "/alignment-icons/2"
  },
  {
    name: 'Chaotic Good',
    alignmentImg: "/alignment-icons/3"
  },
  {
    name: 'Lawful Neutral',
    alignmentImg: "/alignment-icons/4"
  },
  {
    name: 'True Neutral',
    alignmentImg: "/alignment-icons/5"
  },
  {
    name: 'Chaotic Neutral',
    alignmentImg: "/alignment-icons/6"
  },
  {
    name: 'Lawful Evil',
    alignmentImg: "/alignment-icons/7"
  },
  {
    name: 'Neutral Evil',
    alignmentImg: "/alignment-icons/8"
  },
  {
    name: 'Chaotic Evil',
    alignmentImg: "/alignment-icons/9"
  },

];

const seedAlignment = () => Alignment.bulkCreate(alignmentData);

module.exports = seedAlignment;
