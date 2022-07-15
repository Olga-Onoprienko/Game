const express = require('express');
const router = express.Router();
const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');
const { sequelize, User, Card, Deck, Round, Guess }  = require('../db/models');

router.get('/:id', async (req, res) => {

  const userRounds = await Round.findAll({
    raw: true,
    attributes: ['first_guess_correct', 'total_guesses', 'createdAt'],
    where: { user_id: req.session.user.id },
    include:
    {
      model: Deck,
      attributes: ['title', 'questions_number'],
    },
  });

  const stats = userRounds.map((el) => ({
    deckTitle: el['Deck.title'],
    questionsNum: el['Deck.questions_number'],
    date: el.createdAt,
    firstCorrect: el.first_guess_correct,
    totalGuesses: el.total_guesses,
  }));

  renderTemplate(Profile, { user:req.session.user,stats }, res);
});

module.exports = router;



