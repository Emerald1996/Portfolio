// scroll

// init controller
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.timeline').each(function() {
  
  // build a tween
  var tween = TweenMax.from($(this), 0.3, {autoAlpha: 0, scale: 0.5, y: '+=30', ease:Linear.easeNone});

  // build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this
  })
  .setTween(tween) // trigger a TweenMax.to tween
  .addTo(controller);
  
});