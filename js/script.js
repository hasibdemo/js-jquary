// aos activation start 
// js
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
// aos activation end 
// type effect start
var typed = new Typed('#element', {
    strings: ["<i>javascript and</i>","jquery animation example"],
    typeSpeed: 80,
  });
// type effect end

    $('.owl-carousel').owlCarousel();
    $('.loop').owlCarousel({
        center: true,
        items:2,
        loop:true
    });
    var owl = $('.owl-carousel');
      owl.owlCarousel({
        margin: 10,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      })

// perallax 
jQuery(window).trigger('resize').trigger('scroll');
 //counter-1
 $('.counter').counterUp({
  delay: 10,
  time: 2000
});
//counter-2
$("#num1").countMe(40,65);
$("#num2").countMe(30, 30);
$("#num3").countMe(40, 50);
$("#num4").countMe(100,200);

//counter-3
$('textarea').characterCountdown();
  //slick slider
  $('.slick_slide').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

 //lightbox
 $('#gallery').lbtLightBox({
  qtd_pagination: 6,
  pagination_width: "160px",
  pagination_height: "160px",
  custom_children: ".boximg img",
  captions: true,
  captions_selector: ".caption p",
});

// ripple 
$(function() {

  $(document).on('click', '[href="#"]', function(e) { e.preventDefault(); })

  window.rippler = $.ripple('.btn:not(.no-bind), .area', {
    debug: true,
    multi: true
  });

  $.ripple('.no-bind.demo', {
    on: 'mouseleave',
    multi: true
  });

  $.ripple('.no-bind.jakiestfu', {
    on: 'mouseenter',
    multi: true
  });
});
// img ripple 
$(document).ready(function() {
	try {
		$('.a,.b,.c').ripples({
			resolution: 256,
			perturbance: 0.04
		});
	}
	catch (e) {
		$('.error').show().text(e);
	}
});
// load more 
$('.list1 .loadMore').loadMoreResults();
		$('.list2 .loadMore').loadMoreResults({
			tag: {
				name: 'li',
				'class': 'thumbnail'
			},
			displayedItems: 5,
			showItems: 2
		});

  // partical js 
  
particlesJS('particles-js',
  
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

);