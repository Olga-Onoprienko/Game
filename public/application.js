console.log('Front connected');

const cards = document.querySelector('.cards-container');
const deckId = cards?.dataset.title; //находим deckId 
const userId = cards?.dataset.userId; //находим userId 
const lastCard = document.querySelector('.cards-container');


let totalAnswers = 0;
let firstCorrect = 0;
if(cards) cards.firstChild.style.display = 'block';

cards?.addEventListener('click', async (event) => {
  event.preventDefault();

  const cardId = event.target.parentElement.id;
  const article = event.target.parentElement;

  if (event.target.type === 'submit') {
    const answer = document.getElementById(`${cardId}inp`).value; // получаем ответ     
    const baseAnswer = article.dataset.title; //вытаскиваем ответ из data-title, data-status из тега article 
    let answerStatus = article.dataset.status;    
    
    if (answer === baseAnswer) {
      if (answerStatus === "0") {
        firstCorrect += 1;        
      }

      article.remove(); //  удаляем элемент            
      if (lastCard.firstChild) cards.firstChild.style.display = 'block';

    } else {
      if (answerStatus === "0") {
        article.setAttribute("data-status", "2"); //устанавливаем новый статус, чтобы отличить вопросы, отгаданные со 2 раза
      }
      
      window.alert(`Нужно ${baseAnswer}`);
      article.style.display = 'none';
      cards.append(article);
      if (lastCard.firstChild) cards.firstChild.style.display = 'block';
    }
    totalAnswers += 1;
    //console.log("totalAnswers ====>", totalAnswers);
  }
  if (!cards.firstChild) {

    window.alert('Game Over');    
    try {
      const response = await fetch(`/deck/${deckId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstCorrect,
          totalAnswers
        }),
      });
  
      if (response.status === 200) return window.location.href = `/profile/${userId}`;
    } catch (err) {
      console.log(err);
    }
  }
});


// рендерятся все карты, но только у перврой display=block, у остальныз display=none
// при нажатии на кнопку answer идет сравнение полученного ответа с базовым, который сохранен в  data-title тега article для каждой карты.
// если карта отгадана с первого раза, она сразу удаляется из контейнера, увеличивается счетчик firstCorrect. 

// Если не отгадана, то меняется статус карты answerStatus на "2" , она скрывается display=none и добавляется в конец контейнерв

// Когда все карты отгаданы, отправляется запрос на сервер и передается firstCorrect,totalAnswers (количество отганных вопросов с первого раза и количество попыток.) 

// На сервере создается новый Round, где user_id получаем из req.session, deck_id - из req.params, firstCorrect и totalAnswers с фронта.
// На фронт отправляется ответ(статус 200), фронт делает редирект на профиль пользователя
