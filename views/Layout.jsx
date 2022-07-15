const React = require('react');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <head>
        <title>{title}</title>
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/style.css" />
        <script defer src="https://kit.fontawesome.com/a70fdb3b0d.js" crossorigin="anonymous"></script>
        <script defer src="/application.js" />
      </head>
      <body>
        <div className="container">
          <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <i class="fa-solid fa-dice-d6"></i>
              <a class="navbar-brand fw-bold" href="/home">Flash game</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">

                  {user?.name ? (
                    <>
                      <li class="nav-item">
                        <p class="nav-link" >Добро пожаловать, {user.name}! </p>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/">На главную</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href={`/profile/${user.id}`}>Профиль</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/logout">Выйти</a>
                      </li>
                    </>
                  ) : (
                    <>
                      <li class="nav-item">
                        <a class="nav-link" href="/">На главную</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/registration">Регистрация</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="/login">Войти</a>
                      </li>
                    </>
                  )}

                </ul>
              </div>
            </div>
          </nav>
          {children}
        </div>
      </body>
    </html>
  );
};
