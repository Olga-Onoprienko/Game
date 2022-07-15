const React = require('react');
const Layout = require('./Layout');

module.exports = function DeckView({ cards, deck, title, user }) {
  return (
    <Layout title={deck.title} user ={user}>
      <h1>{deck.title}</h1>
      <div className="cards-container"data-title={deck.id} data-userId={user.id}>
        {cards.map((card) => (
          <article  className="gameCard" id={`${card.id}`} key={card.id} data-title={card.answer} data-status={card.status}>
            <div id={`${card.id}`} className="question" >{card.question}</div>
            <input id={`${card.id}inp`} type="text" placeholder='Your Answer'></input>
            <button type="submit" name="submit_answer" value="answer_value">Ответ</button>
          </article>
        ))}
      </div>
    </Layout>
  );
};

