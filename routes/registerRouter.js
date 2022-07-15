const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
const renderTemplate = require('../lib/renderTemplate');
const Registration = require('../views/Registration');
const isNotAuth = require('../lib/isNotAuth');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  renderTemplate(Registration, null, res);
});

router.post('/', isNotAuth, async (req, res) => {
  const { name, password } = req.body;
  try {
    const userExists = await User.findOne({where: { name: name }});
    if(userExists) return res.send('имя занято!')

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name: name, password: hashedPassword });

    req.session.user = { id: user.id, name: user.name }; // создай куку  и запиши в БД session storage
    console.log(req.session.user);
    res.redirect('/');
  } catch (error) {
    res.send(`Error -> ${error.message}`);
  }
});



module.exports = router;
