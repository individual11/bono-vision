//create the div we need
var bono = document.createElement("div");
//color purple we are using
bono.style.background = '#820BBB';
//how transparent we want it
bono.style.opacity = 0.4;
bono.style.filter = "alpha(opacity=40)";
//dimensions and positioning
bono.style.height = '100%';
bono.style.width = '100%';
bono.style.position = 'absolute';
bono.style.top = 0;
bono.style.left = 0;
bono.style.zIndex = 4242;

//makes it so you can still click through
bono.style.pointerEvents = 'none';

document.body.style.height= '100%';
document.body.style.width = '100%';
document.body.parentElement.style.position = 'relative';

//prepend it to the body
document.body.insertBefore(bono, document.body.firstChild);

//fadein code
function fadeIn(el) {
  el.style.opacity = 0;

  var last = +new Date;
  var tick = function() {
    el.style.opacity = Number(el.style.opacity) + (new Date - last) / 400;

    last = +new Date;


    if (el.style.opacity < 1){
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  }
  	

  tick();
}

//fadeIn(bono);