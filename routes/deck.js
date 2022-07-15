const express = require('express');
const { Deck, Card, User,Round } = require('../db/models');

const router = express.Router();
const renderTemplate = require('../lib/renderTemplate');

const DeckView = require('../views/Deck');

router.get('/:id', async (req, res) => {
  const deckId = req.params.id;  
  const deck = await Deck.findOne({ where: { id: deckId } });
  const cards = await Card.findAll({ where: { deck_id: deckId } }); 
  cards.sort(() => Math.random() - 0.5); // перемешиваем массив
  renderTemplate(DeckView, { cards, deck, title: 'Deck', user: req.session?.user }, res);
});

router.post('/:id', async (req, res) => {
   
  try{
  const playerId = req.session.user.id; 
  const deckId = req.params.id; 
  const {firstCorrect,totalAnswers} =req.body;
  console.log(req.body);

  const round = await Round.create({ 
  user_id: playerId, deck_id: deckId, total_guesses: totalAnswers, first_guess_correct: firstCorrect });  
  res.sendStatus(200);

  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
