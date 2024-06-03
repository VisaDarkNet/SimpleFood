$(function () {
  $('.reviews__box').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="reviews-arrows__slick-prev"> <svg class="reviews__icon"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg> </button>',
    nextArrow: '<button type="button" class="reviews-arrows__slick-next"> <svg class="reviews__icon"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg> </button>',
    appendArrows: '.reviews-arrows',
  });

});


$(window).on('load resize', function () {
  if ($(window).width() < 576) {
    $('.restaurant__box:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1
    });
  } else {
    $(".restaurant__box.slick-initialized").slick("unslick");
  }
});

const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu');
const body = document.querySelector('body')

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  menuList.classList.toggle('menu__list--active');
  body.classList.toggle('lock');

});

var mixer = mixitup('.popular-categories__content');