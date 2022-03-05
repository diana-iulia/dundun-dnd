const router = require('express').Router();
const { User, Campaign, Npc } = require('../../models');
const nameGenerator = require("fantasy-content-generator");
/* // from original code. I don't think we're using 
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);


    req.session.user_id = userData.id;
    req.session.logged_in = true;
    req.session.save(() => {
      

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
*/
router.post("/newNPC", async (req, res) => {
  try {
    const npcData = Npc.findOne({ where: { name: req.body.name } });

    if (npcData && npcData.campaign_id === req.body.campaign_id)
    {
      res
        .status(400)
        .json({ message: 'You already have an NPC with that name' });
      return;
    }

    let newNPC = await Npc.create({
      name: req.body.name,
      alignment_id: req.body.alignment_id,
      hp: req.body.hp,
      description: req.body.description,
      campaign_id: req.body.campaign_id,
      icon_id: req.body.icon_id
    },
    {
      individualHooks: true,
      returning: true,
    });

    res.json({ message: 'New NPC is created' });
  }
  catch (err)
  {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/newCampaign", async (req, res) => {
  try {
    const campaignData = Campaign.findOne({ where: { name: req.body.name } });

    if (campaignData && campaignData.user_id === req.session.user_id)
    {
      res
        .status(400)
        .json({ message: 'You already have a campaign with that name' });
      return;
    }

    let newCampaign = await Campaign.create({
      name: req.body.name,
      description: req.body.description,
      user_id: req.session.user_id
    },
    {
      individualHooks: true,
      returning: true,
    });

    res.json({ message: 'New Campaign is created' });
  }
  catch (err)
  {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    
    const userData = await User.findOne({ where: { name: req.body.name } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.user_id = userData.id;
    req.session.logged_in = true;

    req.session.save(() => {
      
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const userNameTest = await User.findOne({ where: { name: req.body.name } });

    if (userNameTest) {
      res
        .status(400)
        .json({ message: 'Username already in use' });
      return;
    }
    
    
    const emailNameTest = await User.findOne({ where: { email: req.body.email } });

    if (emailNameTest) {
      res
        .status(400)
        .json({ message: 'Email already has an account associated with it' });
      return;
    }

    

    if (req.body.password.length < 8) {
      res
        .status(400)
        .json({ message: 'Password is fewer than 8 characters' });
      return;
    }

    let newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    {
      individualHooks: true,
      returning: true,
    });


    req.session.user_id = newUser.id;
    req.session.logged_in = true;

    req.session.save(() => {
      
      
      res.json({ user: newUser, message: 'New account \"' + newUser.name+ "\" was created" });
    });

  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/getRandomName", async (req, res) => {
  try {
  
    const name = nameGenerator.Names.generate();

    res.json({message: name.name});

  }
  catch
  {
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router;
