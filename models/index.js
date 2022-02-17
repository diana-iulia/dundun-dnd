const User = require('./User');
const Npc = require('./Npc');
const Campaign = require('./Campaign');
const Location = require('./Location');
const Organization = require('./Organization');

User.hasMany(Campaign, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Campaign.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Campaign.hasMany(Npc, {
    foreignKey: 'campaign_id',
    onDelete: "CASCADE"
});

Npc.belongsTo(Campaign, {
    foreignKey: "campaign_id"
});

Campaign.hasMany(Location, {
    foreignKey: 'campaign_id',
    onDelete: "CASCADE"
});

Location.belongsTo(Campaign, {
    foreignKey: "campaign_id"
});

Campaign.hasMany(Organization, {
    foreignKey: 'campaign_id',
    onDelete: "CASCADE"
});

Organization.belongsTo(Campaign, {
    foreignKey: "campaign_id"
});

module.exports = { User, Npc, Campaign, Location, Organization };