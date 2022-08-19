

autoPlayYouTubeModal();

$(".card-lingkup").mouseover(function(){
    $(".card-lingkup").removeClass('active');
  });

var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
});

var slider_lingkup = new Swiper('#slider-lingkup', {
    slidesPerView: 1,
    pagination: {
        el: '.lingkup-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});

var slider_testi = new Swiper('#testi-slider', {
    slidesPerView: 1,
    pagination: {
        el: '.testi-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
});

var slider_service = new Swiper('#service-slider', {
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay : false,
    keyboard: {
        enabled: true,
        onlyInViewport: true
      },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        }
    }
});

function autoPlayYouTubeModal() {
var trigger = $("body").find('[data-toggle="modal"]');
trigger.click(function () {
  var theModal = $(this).data("target"),
      videoSRC = $(this).attr("data-theVideo"),
      videoSRCauto = videoSRC + "?autoplay=1";
  $(theModal + ' iframe').attr('src', videoSRCauto);
  $(theModal + ' button.close').click(function () {
      $(theModal + ' iframe').attr('src', videoSRC);
  });
});
}	
