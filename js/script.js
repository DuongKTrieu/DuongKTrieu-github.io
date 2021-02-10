$(document).ready(function () {
  // for sticky nav 
  $('.js--section-feature').waypoint(function (direction) {
    if (direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  // scroll button
  $('.navbar-brand').click(function () {
    $('nav').animate({ scrollDown: $('.js--nav').offset().top }, 1000);


  });
  $('.js--scroll-to-plan').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-plan').offset().top }, 1000);


  });
  $('.js--scroll-to-start').click(function () {
    $('html,body').animate({ scrollTop: $('.js--section-feature').offset().top }, 1000);
  });




  // navigation scroll
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function () {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });




  // animation on scroll
  
$('.js--wp-1').waypoint(
      (direction) => {
        $('.js--wp-1').addClass('animate__animated animate__fadeInDown');
      },
      {
        offset: '50%',
      }
    );

    $('.js--wp-2').waypoint(
      (direction) => {
        $('.js--wp-2').addClass('animate__animated animate__fadeIn');
      },
      {
        offset: '50%',
      }
    );

    $('.js--wp-3').waypoint(
      (direction) => {
        $('.js--wp-3').addClass('animate__animated animate__fadeInUp');
      },
      {
        offset: '50%',
      }
    );

    $('.js--wp-4').waypoint(
      (direction) => {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
      },
      {
        offset: '50%',
      }
    );



  // mobile nav
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon ion-icon');
    
        nav.slideToggle(200);
    if (icon.attr("name") === 'reorder-three-outline') {
        icon.attr("name", 'close-outline');
    } else {
        icon.attr("name", 'reorder-three-outline');
    }
});
/* Window resizing and nav display */
$(window).resize(function(){
 
  if ($(window).width() > 767){
      nav.css("display", "block");
  } 
  else {
      nav.css("display", "none");
      icon.attr("name", 'menu')
  }
});
});