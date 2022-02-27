const router = require('express').Router();
const session = require('express-session');
const { User, Campaign, Npc } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
  try {

    // Pass serialized data and session flag into template
    res.render('intro', {
      logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/mycampaigns');
    return;
  }

  res.render('login');
});

// Use withAuth middleware to prevent access to route
router.get('/mycampaigns', async (req, res) => {
  try {
    /*
    let test = 1;

    console.log("test " + test++);

    console.log(req.session.user_id)
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Project }],
    });

    console.log("test " + test++);

    //const user = userData.get({ plain: true });
    
    console.log("test " + test++);
    
    const campaignsData = await Campaign.findAll({
      where: {
        user_id: req.session.user_id
      }
    });

    console.log("test " + test++);

    const campaigns = campaignsData.map((data) => data.get({ plain: true }));

    console.log("test " + test++);
*/

    let user = await (await User.findByPk(1)).toJSON();
    

    let campaigns = await (await Campaign.findAll({where: { user_id: 1}})).map((e) => e.toJSON());
    console.log(campaigns);

    res.render('allcampaigns', { //TODO: pass in user data and campaigns that belong to user
      user,
      campaigns,
      logged_in: true
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/campaigns/new', withAuth, async (req, res) => {
  try {
    

    res.render('newcampaign', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/campaign/:id', async (req, res) => {
  try {

    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });



    const campaignData = await Campaign.findByPk(req.params.id);

    const campaign = campaignData.get({ plain: true });


    const npcData = await Npc.findAll({
      where: {
        campaign_id: req.params.id
      }
    });

    const npcs = npcData.map((data) => data.get({ plain: true }));




    res.render('campaign-npcs', {// user data, particular campaign data, all npcs related to campaign
      user,
      campaign,
      npcs,
      logged_in: true
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



// Use withAuth middleware to prevent access to route
router.get('/campaign/:id/add', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Project }],
    });

    //  TODO: If we want to add organizations and locations we'd likely want to pass that info along to be in a drop down

    const user = userData.get({ plain: true });

    res.render(' TO DO ADD MY HANLDEBARS FILE ', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
