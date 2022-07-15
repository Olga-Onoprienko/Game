const express = require('express');
const router = express.Router();
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

router.get('/', (req, res) => {
  res.redirect('/home');
});

router.get('/home', async (req, res) => {  
  renderTemplate(Home, { title: 'Главная страница', user:req.session?.user}, res);
});

module.exports = router;
