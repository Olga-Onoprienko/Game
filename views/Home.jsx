const React = require('react');
const Layout = require('./Layout');
const Game = require('./Game');

module.exports = function Home({ name, title, user }) {
  return (
    <Layout title={title} user={user}>
      <h3 className='mt-5 mb-4'>{title}</h3>
      
      {user?.name ? (
        <>
        <p className='fs-4'>Привет! давай сыграем, выбери тему:</p>
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
        </>
      ) : (
        <>
         <p className='fs-4'>Привет! Зарегистрируйся, чтобы выбрать тему!</p>
        </>
      )
      }
    </Layout>
  );
};
