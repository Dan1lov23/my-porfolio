const audio = document.getElementById('audio');
let audioCheck = 0;

function music() {
    if (audioCheck % 2 === 0) {
        audio.currentTime = 0;
        audio.play();
    } else {
        audio.pause();
    }
    audioCheck++;
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    modal.querySelector('.modal-content').style.animation = 'slideIn 0.3s ease-out';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';

    modal.querySelector('.modal-content').style.animation = '';
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

let check = 1;

// сделал нормальное переключение темы

function themeChange() {
    const link = document.getElementById('cssLink');
    if (check % 2 === 0) {
        link.setAttribute("href", "./lightTheme.css");
    } else {
        link.setAttribute("href", "./main.css");
    }
    check++;
}

let translateCheck = 2;

function translatePage() {
    if (translateCheck % 2 === 0) {
        document.getElementById('aboutModal').innerHTML = 'О мне';
        document.getElementById('skillsModal').innerHTML = 'Навыки';
        document.getElementById('contactsModal').innerHTML = 'Контакты';
        document.getElementById('about').innerHTML = 'О мне'
        document.getElementById('skills').innerHTML = 'Мои навыки'
        document.getElementById('contacts').innerHTML = 'Контакты'
        document.getElementById('nameCreator').innerHTML = 'Святослав Данилов';
        document.getElementById('prof').innerHTML = 'фронтенд веб разработчик';
        document.getElementById('pt0').innerHTML = 'Мои проекты';
        document.getElementById('pt1').innerHTML = 'Генератор паролей';
        document.getElementById('pt2').innerHTML = 'Форма регистарции';
        document.getElementById('pt3').innerHTML = 'Форма регистарции';
        document.getElementById('pt4').innerHTML = 'Список дел';
        document.getElementById('pt5').innerHTML = 'Игра змейка';
        document.getElementById('pt6').innerHTML = 'Игра угадай слово';
        document.getElementById('pt7').innerHTML = 'Онлайн ковертаор криптовалют';
        document.getElementById('ptCalc').innerHTML = 'Калькулятор';
        document.getElementById('pt8').innerHTML = 'Погодное приложение';
        document.getElementById('pt9').innerHTML = 'Конструктор ПК';
        document.getElementById('pt10').innerHTML = 'Проекты на реакт';
        document.getElementById('pt11').innerHTML = 'Онлайн магазин наушников';
        document.getElementById('pt12').innerHTML = 'Крипто-приложение';
    } else {
        document.getElementById('aboutModal').innerHTML = 'About me';
        document.getElementById('skillsModal').innerHTML = 'Skills';
        document.getElementById('contactsModal').innerHTML = 'Contacts';
        document.getElementById('about').innerHTML = 'About me';
        document.getElementById('skills').innerHTML = 'My skills';
        document.getElementById('contacts').innerHTML = 'My contacts'
        document.getElementById('nameCreator').innerHTML = 'Svyatoslav Danilov';
        document.getElementById('prof').innerHTML = 'frontend web developer';
        document.getElementById('pt0').innerHTML = 'My projects';
        document.getElementById('pt1').innerHTML = 'Password generator in veb';
        document.getElementById('pt2').innerHTML = 'Registration form';
        document.getElementById('pt3').innerHTML = 'Registration form';
        document.getElementById('pt4').innerHTML = 'Todo list';
        document.getElementById('pt5').innerHTML = 'Snake game';
        document.getElementById('pt6').innerHTML = 'Guess the word game';
        document.getElementById('pt7').innerHTML = 'Online cryptocurrency course';
        document.getElementById('ptCalc').innerHTML = 'Calculator';
        document.getElementById('pt8').innerHTML = 'Online weather app';
        document.getElementById('pt9').innerHTML = 'PC constructor online';
        document.getElementById('pt10').innerHTML = 'Pet projects on React';
        document.getElementById('pt11').innerHTML = 'Online headphone store';
        document.getElementById('pt12').innerHTML = 'Cripto app';
    }
    translateCheck++;
}


// ссылка на сайт - http://109.194.51.67/~sv/professional%20portfolio/main/main.html
