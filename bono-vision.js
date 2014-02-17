if(!document.querySelectorAll('#bono_vision').length){
  var bono_body = document.body,
      bono_html = document.documentElement;

  //keeps track if we need to change the height later
  var bono_height = -1;

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
  bono.style.width = '100%';
  bono.style.position = 'absolute';
  bono.style.top = 0;
  bono.style.left = 0;
  bono.style.zIndex = 4242;

  //set the height
  extendOverlay(bono);

  //makes it so you can still click through
  bono.style.pointerEvents = 'none';

  //helps insure it's full screen
  bono_body.style.height= '100%';
  bono_body.style.width = '100%';
  bono_html.style.position = 'relative';

  //prepend it to the body
  bono_body.insertBefore(bono, document.body.firstChild);

  ////////////
  //FUNCTIONS
  ///////////

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

  //make overlay the right size
  function extendOverlay(el){
    var maxHeight = Math.max( bono_body.scrollHeight, bono_body.offsetHeight, bono_html.clientHeight, bono_html.scrollHeight, bono_html.offsetHeight );
    if(bono_height !== maxHeight){
      var height_str = (maxHeight)? String(maxHeight + 'px'):'100%';
      el.style.height = height_str;
      bono_height = maxHeight;
    }
  }

  //now fade it in
  fadeIn(bono, maxTransparency);

  //when the user scrolls, adjust the height if needed (fixes infinite scroll sites)
  window.addEventListener("scroll", function(evt) {
    extendOverlay(bono);
  });
}