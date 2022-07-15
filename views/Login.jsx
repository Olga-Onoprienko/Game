const React = require('react');
const Layout = require('./Layout');

module.exports = function Profile({ props }) {
  return (
    <Layout>
      <h3 className='mt-5 mb-4 text-center'>Войти в личный кабинет</h3>
      <form className='formLogin' action='/login' method='POST'>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Имя</label>
          <input required type="text" class="form-control" name="name" id="validationDefault03"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Пароль</label>
          <input required type="password" class="form-control" id="validationDefault03" id="exampleInputPassword1" name="password"/>
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
    </Layout>
  );
};
