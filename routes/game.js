const express = require('express');
const router = express.Router();
const renderTemplate = require('../lib/renderTemplate');
const Game = require('../views/Game');

router.get('/', async (req, res) => {
  renderTemplate(Game, { title: 'Game', user:req.session?.user }, res);
});

module.exports = router;
