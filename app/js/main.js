$(function () {
  $('.reviews__box').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icon-prev-arrow.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icon-prev-arrow.svg" alt="arrow-right"></button>',
  });
});

var mixer = mixitup('.popular-categories__content');