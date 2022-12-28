let header = document.querySelector('.main-header');
let navToggle = document.querySelector('.main-header__nav-toggle');

/*navMain.classList.remove('no-js');*/

header.classList.remove('no-js');
navToggle.addEventListener('click', ()=>header.classList.toggle('is-open'));
