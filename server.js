const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET || 'replace me',
  cookie: {
    // Stored in milliseconds (86400 === 1 day)
    maxAge: 86400,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/background-images", express.static(path.join(__dirname, 'background-images')));
app.use("/npc-icons", express.static(path.join(__dirname, 'npc-icons')));
app.use("/alignment-icons", express.static(path.join(__dirname, 'alignment-icons')));

app.use(routes);

sequelize.sync({ force: false })
.then(()=>
{
  async function checkTable (){
    const { Alignment } = require("./models");
    const { Icons } = require("./models");
    const seedAlignment = require('./seeds/alignmentData');
    const seedIcons = require('./seeds/npcIconData');

    let alignments = await Alignment.findAll();
    let icons = await Icons.findAll();

    if (alignments.length <= 0) {
      await seedAlignment();
    }

    if (icons.length <= 0) {
      await seedIcons();
    }
  }
      checkTable();
})
.then(() => {
  app.listen(PORT, () => console.log(`Now listening: http://localhost:${PORT}`));
});