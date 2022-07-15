const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration({ props }) {
  return (
    <Layout>
      <h3 className='mt-5 mb-4 text-center'>Зарегистрироваться</h3>
      <form className='formRegistration' action='/registration' method='POST'>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Имя</label>
          <input required type="text" className="form-control" name="name" id="validationDefault03"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" className="form-label">Пароль</label>
          <input required type="text" className="form-control" id="exampleInputPassword1" name="password" id="validationDefault03"/>
        </div>
        <button type="submit" className="btn btn-primary">Создать профиль</button>
      </form>
    </Layout>
  );
};
