const sequelize = require('../config/connection');

const { User } = require('../models');
const seedNpc = require('./npcData');
const seedCampaign = require('./campaignData');
const seedOrg = require('./orgData');
const seedLocation = require('./locationData');

const userData = require('./userData.json');
const seedUser = require('./userData');

/**
 * Leaving for future reference
 */
 
// const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  /**
   * Leaving for future reference
   */

  // for (const project of projectData) {
  //   await Project.create({
  //     ...project,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //   });
  // }
  await seedCampaign();
  await seedNpc();
  await seedOrg();
  await seedLocation();

  process.exit(0);
};

seedDatabase();
