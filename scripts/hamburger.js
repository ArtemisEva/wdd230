const hamButton = document.querySelector('#menu');
const navElement = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamButton.classList.toggle('open');
});