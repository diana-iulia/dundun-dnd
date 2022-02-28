const User = require('./User');
const Npc = require('./Npc');
const Campaign = require('./Campaign');
const Location = require('./Location');
const Organization = require('./Organization');

const Alignment = require('./Alignment');
const AlignmentImg = require('./AlignmentImg');

const Icon = require('./Organization');
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

// Icon.belongsTo()

Alignment.belongsTo(Npc, {
    foreignKey: "alignment"
});

Npc.hasMany(Alignment, {
    foreignKey: "npc_id",
    onDelete: "CASCADE"
});

AlignmentImg.belongsTo(Alignment, {
    foreignKey: "alignment_id"
});

Alignment.hasMany(AlignmentImg, {
    foreignKey: "alignment_id",
    onDelete: "CASCADE"
})

module.exports = { User, Npc, Campaign, Location, Organization, Alignment, AlignmentImg };