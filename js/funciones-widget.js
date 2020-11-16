const carrusel1 = document.getElementsByClassName('c-1');
if(carrusel1){
[].forEach.call(document.querySelectorAll('.c-1'), function (el) {
  var slider = tns({
      container: el,
      items: 1,
      controls: true,
      nav: true,
      navPosition: 'bottom',
      gutter: 0,
      preventScrollOnTouch: "force",
      responsive: {
          0: {
              items: 1
          },
          768: {
              items: 1
          },
          991: {
            items: 1
          },
          1200: {
            items: 1
          }
      }
    });
  });
}

const carrusel4 = document.getElementsByClassName('c-4');
if(carrusel4){
[].forEach.call(document.querySelectorAll('.c-4'), function (el) {
  var slider = tns({
      container: el,
      items: 4,
      controls: true,
      nav: true,
      navPosition: 'bottom',
      gutter: 20,
      preventScrollOnTouch: "force",
      responsive: {
          0: {
              items: 2,
              gutter: 10
          },
          480: {
            items: 2,
            gutter: 10
          },
          768: {
              items: 2
          },
          991: {
            items: 3
          },
          1200: {
            items: 4
          }
      }
    });
  });
}

const carrusel6 = document.getElementsByClassName('c-6');
if(carrusel6){
[].forEach.call(document.querySelectorAll('.c-6'), function (el) {
  var slider = tns({
      container: el,
      items: 6,
      controls: true,
      nav: true,
      navPosition: 'bottom',
      gutter: 20,
      preventScrollOnTouch: "force",
      responsive: {
          0: {
              items: 2
          },
          480: {
            items: 2
          },
          768: {
              items: 4
          },
          991: {
            items: 5
          },
          1200: {
            items: 6
          }
      }
    });
  });
}

//Acordeon
const acc = document.getElementsByClassName('accordion');
if(acc){
  for (let i = 0; i < acc.length; i++) {
      let item = acc[i];
      var accordion = new Accordion({
          element: item,
          oneOpen: true
      });
  }
}
/*--WOW--*/
wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100,
    mobile: false,
    callback: function(box) {
    }
  }
);
wow.init();
/*--FIN WOW--*/

$(function(){
  
  $('a.ancla[href*=\\#]').click(function() {
    $('.btn-menu').toggleClass('open');
    $('header nav').toggleClass('visible');
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      && location.hostname == this.hostname) {

          var $target = $(this.hash);

          $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

          if ($target.length) {

              var targetOffset = $target.offset().top;

              $('html,body').animate({scrollTop: targetOffset}, 1000);

              return false;

         }

    }

});

});