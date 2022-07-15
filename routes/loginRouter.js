const express = require('express');
const router = express.Router();
const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
const { User } = require('../db/models');
const bcrypt=require('bcrypt');

router.get('/', (req, res) => {
  renderTemplate(Login, null, res);
});

router.post('/', async (req, res) => {
  
  try {
    const { name, password } = req.body;
    const user = await User.findOne({where: { name: name }});
    if(!user) return res.send('неверное имя или пароль!')
    
    const isValidPassword = await bcrypt.compare(password, user.password);
    if(!isValidPassword) return res.send('неверное имя или пароль!!')
  
    req.session.user = { id: user.id, name: user.name };
    res.redirect('/');
    
  } catch (error) {
    res.send(`Error -> ${error.message}`);
  }
});

module.exports = router;
