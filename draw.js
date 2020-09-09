var canvas = document.getElementById("drops");
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(100,100,10,0,Math.PI*2);
ctx.strokeStyle= 'yellow';
ctx.stroke();


function drop(x, y) {
 
    canvas.width = 600;
    canvas.height = 600;

    ctx.fillStyle = "lightblue";
   
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fill();
    y=y+2;
    
    if (y == canvas.height) {
        y = 0;
    }

    var m = setTimeout('drop(' + x + ',' + y + ')', 25);

}
drop(500,0);



