'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Kolja',
        password: '123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Olga',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Andrey',
        password: '12345',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    await queryInterface.bulkInsert('Decks', [
      {
        title: 'Откадай-ка',
        questions_number: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Профессии',
        questions_number: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'IT загадки',
        questions_number: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    await queryInterface.bulkInsert('Cards', [
      {
        question: 'Вы находитесь в самолете, перед вами лошадь, сзади вас - автомобиль. Где вы находитесь?',
        answer: 'на карусели',
        status: "0",
        deck_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Что может путешествовать по миру, оставаясь в одном и том же углу? ',
        answer: 'марка',
        status: "0",
        deck_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Кого решили изобразить на плакате против расизма, потому что они одновременно и белые, и чёрные, и азиаты?',
        answer: 'панды',
        status: "0",
        deck_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Чем заканчивается ночь и день?',
        answer: 'ь',
        status: "0",
        deck_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Какое молоко никто не пил?',
        answer: 'причье',
        status: "0",
        deck_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Какой узел нельзя развязать? ',
        answer: 'Железнодорожный',
        status: "0",
        deck_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'На какой вопрос нельзя дать положительный ответ? ',
        answer: 'Ты спишь?',
        status: "0",
        deck_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: ' Кто познаётся в беде?',
        answer: 'спасатели',
        status: "0",
        deck_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Кто выносит сор из избы?',
        answer: 'уборщица',
        status: "0",
        deck_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Кто погружается в работу с головой?',
        answer: 'водолаз',
        status: "0",
        deck_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Человек, работающий с огоньком, – это… Кто? ',
        answer: 'пиротехник',
        status: "0",
        deck_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Врач, который видит пациентов насквозь, – это... Кто?',
        answer: 'рентгенолог',
        status: "0",
        deck_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Если бы осьминоги умели считать, то какой бы системой они, скорее всего, пользовались?',
        answer: 'восьмеричной',
        status: "0",
        deck_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Излюбленное мясное блюдо всех программистов — это …',
        answer: 'биточки',
        status: "0",
        deck_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Какой компьютерный термин английского происхождения при дословном переводе означает междумордие»?',
        answer: 'интерфейс',
        status: "0",
        deck_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Почему кошки любят лизать руки компьютерщикам? ',
        answer: 'руки пахнут мышкой',
        status: "0",
        deck_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: ' Закончите народную компьютерную пословицу: «Русский вирус влезет и в …» ',
        answer: 'BIOS',
        status: "0",
        deck_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Закончите переделанную программистами на свой лад известную русскую пословицу: «Семь бед — один …» ',
        answer: 'reset',
        status: "0",
        deck_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
    
    await queryInterface.bulkInsert('Rounds', [
      {
        user_id: '1',
        deck_id: '1',        
        total_guesses: '2',
        first_guess_correct: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: '2',
        deck_id: '2',
        total_guesses: '3',
        first_guess_correct: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: '3',
        deck_id: '1',
        total_guesses: '13',
        first_guess_correct: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: '1',
        deck_id: '3',
        total_guesses: '10',
        first_guess_correct: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: '1',
        deck_id: '2',
        total_guesses: '16',
        first_guess_correct: '8',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Decks', null, {});
    await queryInterface.bulkDelete('Cards', null, {});    
    await queryInterface.bulkDelete('Rounds', null, {});
  }
};
