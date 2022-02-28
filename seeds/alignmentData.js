const { Alignment } = require('../models');

const alignmentData = [
  {
    name: 'Lawful Good',
    alignment_path: "/alignment-icons/1"
  },
  {
    name: 'Neutral Good',
    alignment_path: "/alignment-icons/2"
  },
  {
    name: 'Chaotic Good',
    alignment_path: "/alignment-icons/3"
  },
  {
    name: 'Lawful Neutral',
    alignment_path: "/alignment-icons/4"
  },
  {
    name: 'True Neutral',
    alignment_path: "/alignment-icons/5"
  },
  {
    name: 'Chaotic Neutral',
    alignment_path: "/alignment-icons/6"
  },
  {
    name: 'Lawful Evil',
    alignment_path: "/alignment-icons/7"
  },
  {
    name: 'Neutral Evil',
    alignment_path: "/alignment-icons/8"
  },
  {
    name: 'Chaotic Evil',
    alignment_path: "/alignment-icons/9"
  },

];

const seedAlignment = () => Alignment.bulkCreate(alignmentData);

module.exports = seedAlignment;
