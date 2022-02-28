const { Npc } = require('../models');

const npcData = [
  {
    campaign_id: 1,
    name: 'Hilore Maltanthir',
    alignment_id: 2,
    hp: 24,
    icon_id: 0,
    description: 'He is moody but kind. He has a round, extremely forgettable face, with 3 piercings on his right ear. He discretely worships Corellon Larethian, God of elves, magic, music, arts, crafts, war, poetry, bards, warriors.'
  },
  {
    campaign_id: 2,
    name: 'Bryce Rowntree',
    alignment_id: 1,
    hp: 26,
    icon_id: 45,
    description: 'He has an oval, magnificent face with a short moustache. Curt, but considerate and always happy to help those in need. He fervently worships Lathander, God of spring.'
  },
  {
    campaign_id: 2,
    name: 'Zaghain Bluntchin',
    alignment_id: 3,
    hp: 13,
    icon_id: 7,
    description: 'He has short, wavy, blond hair and blue eyes, with wicked sideburns. He has a bland tribal tattoo on his right hand, openly worshipping Oghma, God of Knowledge.'
  },
  {
    campaign_id: 3,
    name: 'Fendrel de Bolbec',
    alignment_id: 4,
    hp: 20,
    icon_id: 16,
    description: 'He has a triangular, typical face, and detests Dragonborn. He occasionally uses long words to sound smart.'
  },
  {
    campaign_id: 1,
    name: 'Emma Twoorb',
    alignment_id: 5,
    hp: 29,
    icon_id: 23,
    description: "She has silky green skin. She used to be bullied as a child and learned to fight so that it wouldn't happen again. She always does what she is told not to."
  },
  {
    campaign_id: 3,
    name: 'William Chaucer',
    alignment_id: 2,
    hp: 12,
    icon_id: 9,
    description: "He has short, straight, auburn hair and gray eyes. He smells of roses, though he detests them, and uses sarcasm and insults commonly."
  },
  {
    campaign_id: 1,
    name: 'Joseph Redstream',
    alignment_id: 2,
    hp: 20,
    icon_id: 31,
    description: "He loudly claims to worship the demon prince Demogorgon, the Iron Duke, but secretly worships the demon prince Demogorgon, the Iron Duke, Prince of Demons. He is missing his right hand."
  },
  {
    campaign_id: 2,
    name: 'Nainarv Bronzehide',
    alignment_id: 6,
    hp: 21,
    icon_id: 34,
    description: "He is slightly cross-eyed and wears a fancy hat. Loud and often belligerent, he believes that all dwarves are planning to destroy the world."
  },
  {
    campaign_id: 1,
    name: 'Erelmila Talraidal',
    alignment_id: 9,
    hp: 19,
    icon_id: 49,
    description: "She has a soft, angelic face, though she is haunted by horrible memories.She is always polite and respectful, but will ponder the pros and cons before making a decision."
  },
];

const seedNpc = () => Npc.bulkCreate(npcData);

module.exports = seedNpc;
