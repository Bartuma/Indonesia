$(function(){

$('.slider-item__info-wrapper').slick({
    infinite: true,
    fade: true,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt=""></img>',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt=""></img>',
});

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu-item');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__item--active');
})

$('.flowing-scroll').on('click', function() {
  var el = $(this);
  var dest = el.attr('href'); // получаем направление
  if (dest !== undefined && dest !== '') { // проверяем существование
    $('html').animate({
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      }, 1500 // скорость прокрутки
    );
  }
  return false;
});
  
});

