$(function () {

  $('.product-tabs__info-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__info-item').removeClass('product-tabs__info-item--active');
    $(this).addClass('product-tabs__info-item--active');

    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active')

  });



  $(".product-description__star,.comments__star").rateYo({
    starWidth: "16px",
    starHeight: "16px",
    normalFill: "rgba(193, 193, 193, 0.3)",
    ratedFill: "#FFB800",
    readOnly: true,
    spacing: "6px",
    starSvg: '<svg class="product-description__star-icon"><use xlink:href="images/sprite.svg#icon-star"></use></svg>'
  });


  const counters = document.querySelectorAll('[data-counter]');

  if (counters) {
    counters.forEach(counter => {
      counter.addEventListener('click', e => {
        const target = e.target;

        if (target.closest('.product-description__span')) {
          let value = parseInt(target.closest('.product-description__counter').querySelector('input').value);

          if (target.classList.contains('product-description__span--pluse')) {
            value++;
          } else {
            --value;
          }

          if (value <= 0) {
            value = 0
          }

          target.closest('.product-description__counter').querySelector('input').value = value;
        }
      })
    })
  }


  $('.select-style').styler();

  $('.product-catalog__price-input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.product-catalog__price-from').text(data.from);
      $('.product-catalog__price-to').text(data.to);
    },
    onChange: function (data) {
      $('.product-catalog__price-from').text(data.from);
      $('.product-catalog__price-to').text(data.to);
    },
  });


  $('.recent__list').slick({
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: '<button type="button" class="recent-arrows__slick-prev"> <svg class="recent__icon"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg> </button>',
    nextArrow: '<button type="button" class="recent-arrows__slick-next"> <svg class="recent__icon"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg> </button>',
    appendArrows: '.recent-arrows',
  });



  $('.reviews__box').slick({
    dots: true,
    infinite: false,
    prevArrow: '<button type="button" class="reviews-arrows__slick-prev"> <svg class="reviews__icon"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg> </button>',
    nextArrow: '<button type="button" class="reviews-arrows__slick-next"> <svg class="reviews__icon"><use xlink:href="images/sprite.svg#icon-prev-arrow"></use></svg> </button>',
    appendArrows: '.reviews-arrows',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: false,
        }
      },
    ]
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


var mixer = mixitup('.popular-categories__content');


document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.page-menu'); 
  const bodyLock = document.querySelector('body');

  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== mobileMenu) {
      mobileMenu.classList.remove('menu--active');
      bodyLock.classList.remove('lock');
    }
  });

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('menu--active'); 
    if (mobileMenu.classList.contains('menu--active')) { 
      bodyLock.classList.add('lock'); 
    }
    else { 
      bodyLock.classList.remove('lock'); 
    }
  });

});

