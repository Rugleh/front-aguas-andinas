$(document).ready( function() {
  $('.btn-menu').click(function(){
    $('.menu-lateral').addClass('visible');
  });
  $('.cerrar-menu').click(function(){
    $('.menu-lateral').removeClass('visible');
  });
  $('.accesos-rapidos span').click(function(){
    $('.accesos-rapidos').toggleClass('visible');
  });
  $('.menu-lateral nav > ul > li > span').click(function(){
    $(this).parent().toggleClass('open');
  });
  $('.lupa').click(function(){
    $('.buscador').toggleClass('visible');
  });
  $('.user').click(function(){
    $('.login').addClass('visible');
  });
  $('.cerrar-login').click(function(){
    $('.login').removeClass('visible');
  });
});