const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ user, stats }) {
  return (
    <Layout user ={user}>
      <h3 className='mt-5 mb-4'>Личный кабинет</h3>
      <div className="profile__block">
        <h4 className='user__name'>{user.name}</h4>
        <form method="post" action="/game">
          <a href="/game" name="start_btn" value="submit_value" className="start__btn btn btn-primary">Начать игру</a>
        </form>
      </div>      
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">Дата игры</th>
            <th scope="col">Название игры</th>
            <th scope="col">Количество вопросов</th>
            <th scope="col">Отгадал с первого раза</th>
            <th scope="col">Всего попыток</th>
          </tr>
        </thead>
        <tbody>
        {
          stats && stats.map((el)=>
          <tr>
            <td>{el.date.toDateString()}</td>
            <td>{el.deckTitle}</td>
            <td>{el.questionsNum}</td>
            <td>{el.firstCorrect} </td>
            <td>{el.totalGuesses} </td>
          </tr>
          )
        }
        </tbody>
      </table>
    </Layout>
  );
};
