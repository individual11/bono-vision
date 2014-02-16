if(!document.querySelectorAll('#bono_vision').length){
  //create the div we need
  var bono = document.createElement("div");
  bono.setAttribute('id', 'bono_vision');

  //color purple we are using
  bono.style.background = '#820BBB';

  //transparency stuff
  var maxTransparency = 0.4; 
  bono.style.opacity = 0.0;
  bono.style.filter = "alpha(opacity=00)";

  //dimensions and positioning
  bono.style.height = '100%';
  bono.style.width = '100%';
  bono.style.position = 'absolute';
  bono.style.top = 0;
  bono.style.left = 0;
  bono.style.zIndex = 4242;

  //makes it so you can still click through
  bono.style.pointerEvents = 'none';

  //helps insure it's full screen
  document.body.style.height= '100%';
  document.body.style.width = '100%';
  document.body.parentElement.style.position = 'relative';

  //prepend it to the body
  document.body.insertBefore(bono, document.body.firstChild);

  //fadein code (courtesy of http://youmightnotneedjquery.com/)
  function fadeIn(el, endTransparency) {
    el.style.opacity = 0;

    var last = +new Date;
    var tick = function() {
      el.style.opacity = Number(el.style.opacity) + (new Date - last) / 400;
      last = +new Date;
      if (el.style.opacity < endTransparency){
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    }
    tick();
  }

  //now fade it in
  fadeIn(bono, maxTransparency);
}