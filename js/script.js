let popup = document.querySelector('.popup');
let buttonOpen = document.querySelector('.button-open');
let buttonClose = popup.querySelector('.close');
let personalName = popup.querySelector('[name = personal-data]');


buttonOpen.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('popup-animation');
    personalName.focus();
})

buttonClose.addEventListener('click', function(){
    popup.classList.remove('popup-animation');
})

window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
        if(popup.classList.contains('popup-animation')) {
            popup.classList.remove('popup-animation');
        }
    }
})
