$(function(){

  // var typed = new Typed('.element', {
  //   // 
  //   typeSpeed: 300,
  //   backSpeed: 200,
  //   loop: true,
  //   loopCount: Infinity,
  //   stringElement: $('#title__text')
  // });



  var typed = new Typed('.element-1', {
    showCursor: false,
    typeSpeed: 100,
    startDelay: 0,
    stringsElement: '#tre-1'
  });

  var typed = new Typed('.element-2', {
    showCursor: false,
    typeSpeed: 100,
    // startDelay: 1200,
    stringsElement: '#tre-2'
  });

  var typed = new Typed('.element-3', {
    showCursor: false,
    typeSpeed: 200,
    // startDelay: 2600,
    stringsElement: '#tre-3'
  });

  var typed = new Typed('.element-4', {
    showCursor: false,
    typeSpeed: 300,
    // startDelay: 3500,
    stringsElement: '#tre-4'
  });

  var typed = new Typed('.element-5', {

    typeSpeed: 300,
    // startDelay: 4200,,
    showCursor: false,
    backSpeed: 100,
    stringsElement: '#tre-5',
    loop: true,
    loopCount: Infinity,
  });

  $('.burger__menu').magnificPopup({
    type: 'inline'
  });

});