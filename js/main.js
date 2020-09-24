$(function () {


  $('.burger__menu').magnificPopup({
    type: 'inline'
  });


  var typed = new Typed('.element-typed', {
    typeSpeed: 100,
    stringsElement: '#typed'
  });

  setTimeout(function () {
    var type = new Typed('.element', {
      typeSpeed: 100,
      backSpeed: 100,
      stringsElement: '#element-typed',
      loop: true,
      loopCount: false,
    });
  }, 5000);

  setTimeout(function () { $('.typed-cursor').hide(); }, 5000);

  setTimeout(function () { $('.typed-text-show.hide').removeClass('hide'); }, 5000);


});