
describe('Проверка авторизации', function () {
    
    it('Верный логин, верный пароль', function () {
        cy.visit('https://login.qa.studio//'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти активна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio//'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#forgotEmailButton').should('be.enabled'); // кнопка Забыли пароль? активна
        cy.get('#forgotEmailButton').click();; // клик кнопка войти
        cy.get('#forgotForm > .header').should('be.visible'); // видим слово
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); // текст совпадает
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#restoreEmailButton').click(); // клик отправить код активна
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

    it('Верный логин, неверный пароль', function () {
        cy.visit('https://login.qa.studio//'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio123'); // ввели не верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти активна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

    it('Проверка валидации полей', function () {
        cy.visit('https://login.qa.studio//'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без собачки
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена 
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти активна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })

    it('Проверка на привведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio//'); // захожу на сайт
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#mail').type('GerMan@dolnikov.ru'); // ввели логин
        cy.get('#loginButton').should('be.disabled'); // кнопка войти задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввели пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка войти активна
        cy.get('#loginButton').click(); // клик кнопка войти
        cy.get('#messageHeader').should('be.visible'); // видим слово
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // видим крестик
        })


     

        
    

     


     



    })
