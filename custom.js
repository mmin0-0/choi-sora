$(function(){
  /*trigger*/
  $('.trigger').on('click', function(){
    $(this).toggleClass('active');
    $('.gnb').toggleClass('active');
    $('.trigger span').toggleClass('active');
  });
  $('section, .menu a').on('click', function(){
    $('.gnb').removeClass('active');
    $('.trigger').removeClass('active');
  });

  /*smooth scrolling*/
  $('.menu a, .gototop').on('click', function(e){
    $.scrollTo(this.hash || 0, 900)
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 50){
      $('header').addClass('active');
      $('.gototop').addClass('active');
      $('.trigger span').addClass('active');
      $('.logo img').addClass('active');
    }else{
      $('header').removeClass('active');
      $('.gototop').removeClass('active');
      $('.trigger span').removeClass('active');
      $('.logo img').removeClass('active');
    }
  });

  /*slick.js: history*/
  $('.broadcast-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /*slick.js: project photo*/
  $('.about-photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  });
})