var card = document.querySelector(".banner__flipbox");
var playing = false;

card.addEventListener('click',function() {
  if(event.target.tagName != 'INPUT'){
    if(playing)
    return;
  
  playing = true;
  anime({
    targets: card,
    scale: [{value: 1}, {value: 1.4}, {value: 1, delay: 250}],
    rotateY: {value: '+=180', delay: 200},
    easing: 'easeInOutSine',
    duration: 400,
    complete: function(anim){
       playing = false;
    }
  });
  }
});


