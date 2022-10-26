const openPopUp = document.querySelector('#open_pop_up');
const closePopUp = document.querySelector('#pop_up_close');
const popUP = document.querySelector('#pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUP.classList.add('open');
})

closePopUp.addEventListener('click', () => {
    popUP.classList.remove('open');
})

const navBtn = document.querySelector('.menu__toggle');
const menuIcon = document.querySelector('.menu-icon')
const menuListM = document.querySelector('.menu__listM')

navBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon--active');
    menuListM.classList.toggle('open')
};


