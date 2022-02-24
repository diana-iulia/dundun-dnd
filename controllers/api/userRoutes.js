const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again  asdfasdfadsfasd' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
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

     User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    {
      individualHooks: true,
      returning: true,
    });

    const userData = await (await User.findOne({ where: { name: req.body.name } })).toJSON();



    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'New account \"' + userData.name + "\" was created" });
    });

  } catch (err) {
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

module.exports = router;
