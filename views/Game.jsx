const React = require('react');
const Layout = require('./Layout');

module.exports = function Game({ card, deck, title, user }) {
  return (
    <Layout user ={user}>
      <h1 className='mt-5 mb-4'>Начни игру!</h1>
      <p>        
        {''}       
      </p>
      <div className="block__game">
        <div className="link__box">
          <a className="game__link" href="/deck/1">Откадай-ка</a>
        </div>
        <div className="link__box">
          <a className="game__link" href="/deck/2">Профессии</a>
        </div>
        <div className="link__box">
          <a className="game__link" href="/deck/3">IT загадки</a>
        </div>
      </div>
    </Layout >
  );
};
