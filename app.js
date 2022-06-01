// Header
const header = document.querySelector('.header');

addEventListener('scroll', function(e) {
    header.classList.add('white');
}) 

// Видео popup
const openPopUp = document.querySelector('#modal');
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');

openPopUp.addEventListener('click', function(e){
	e.preventDefault();
	popUp.classList.add('active');
});

closePopUp.addEventListener('click', () => {
	popUp.classList.remove('active');
});