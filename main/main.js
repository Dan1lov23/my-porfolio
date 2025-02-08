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

let check = 2;

function themeChange() {
    const body = document.body;
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const mainTitle = document.getElementById('mainTitle');
    const arrowDown = document.getElementById('arrowDown');
    const titleName = document.getElementById('titleName');
    if (check % 2 === 0) {
        body.style.backgroundColor = 'white';
        header.style.backgroundColor = 'black';
        titleName.style.color = 'white';
        Array.from(header.getElementsByTagName('a')).forEach((a) => {
            a.style.color = 'white';
        });
        Array.from(header.getElementsByTagName('button')).forEach((button) => {
            button.style.backgroundColor = 'white';
        });
        Array.from(header.getElementsByTagName('button')).forEach((button) => {
            button.style.color = 'black';
        });
        Array.from(main.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'black';
        });
        Array.from(main.getElementsByTagName('img')).forEach((img) => {
            img.style.borderColor = 'black';
        });
        Array.from(main.getElementsByTagName('button')).forEach((button) => {
            button.style.backgroundColor = 'black';
        });
        Array.from(main.getElementsByTagName('button')).forEach((button) => {
            button.style.color = 'white';
        });
        Array.from(mainTitle.getElementsByTagName('h2')).forEach((h2) => {
            h2.style.color = 'black';
        });
        Array.from(arrowDown.getElementsByTagName('i')).forEach((i) => {
            i.style.color = 'black';
        });
    } else {
        body.style.backgroundColor = '#121212';
        header.style.backgroundColor = '#1E1E1E';
        titleName.style.color = 'LimeGreen';
        Array.from(header.getElementsByTagName('a')).forEach((a) => {
            a.style.color = 'LimeGreen';
        });
        Array.from(header.getElementsByTagName('button')).forEach((button) => {
            button.style.backgroundColor = 'LimeGreen';
        });
        Array.from(header.getElementsByTagName('button')).forEach((button) => {
            button.style.color = 'black';
        });
        Array.from(main.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'LimeGreen';
        });
        Array.from(main.getElementsByTagName('img')).forEach((img) => {
            img.style.borderColor = 'white';
        });
        Array.from(main.getElementsByTagName('button')).forEach((button) => {
            button.style.backgroundColor = 'LimeGreen';
        });
        Array.from(main.getElementsByTagName('button')).forEach((button) => {
            button.style.color = 'white';
        });
        Array.from(mainTitle.getElementsByTagName('h2')).forEach((h2) => {
            h2.style.color = 'LimeGreen';
        });
        Array.from(arrowDown.getElementsByTagName('i')).forEach((i) => {
            i.style.color = 'LimeGreen';
        });
    }
    check++;
}

//http://109.194.51.67/~sv/professional%20portfolio/main/main.html

let translateCheck = 2;

function translatePage() {
    if (translateCheck % 2 === 0) {
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

    } else {
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
    }
    translateCheck++;
}
