/* var canvas =document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext('2d');
let dpi = window.devicePixelRatio;
function fix_dpi() {
   
      let style = {
        height() {
          return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
        },
        width() {
          return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
        }
      }
      canvas.setAttribute('width', style.width() * dpi);
      canvas.setAttribute('height', style.height() * dpi);
    }
    fix_dpi();
    var x=50;y=1250;
    ctx.beginPath();
    ctx.setLineDash([15, 3]);
    ctx.moveTo(x,y);
    ctx.lineTo(600,y);
    ctx.lineTo(600,y+=2300);
    ctx.lineTo(100,y);
    ctx.lineTo(100,y+=2000);
    ctx.lineTo(600,y);
    ctx.lineTo(600,y+=3300);
    ctx.lineTo(100,y);
    ctx.lineTo(100,y+=3600);
    ctx.lineTo(600,y);
    
  
    ctx.strokeStyle ='#006cff';
    ctx.stroke(); */

    var text = ["Exceed client expectations","Build richer relationships"];
    var counter = 0;
    var elem = $("#sliding-title");
    var inst = setInterval(change, 1200);

    function change() {
      elem.fadeOut(function(){
          elem.html(text[counter]);
          counter++;
          if(counter >= text.length) { counter = 0; }
          elem.fadeIn();
      });
  }

  