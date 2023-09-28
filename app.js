var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height=H;

var fontsize = 16;
var columns = Math.floor(W / fontsize);
var drops = [];
for (var i=0; i <columns; i++){
    drops.push(0);
} 
var str = "Zeph_Codes()";//Here You can type any letters you want to be used in the matrix
function draw(){
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0,0,W,H);
    context.fontsize = "700"+fontsize +"px"
    context.fillStyle= "#00cc33";
    for(var i=0; i<columns; i++){
        var index = Math.floor(Math.random() * str.length);
        var x = i *fontsize;
        var y = drops[i]* fontsize;
        context.fillText(str[index],x,y);
        if(y >= canvas.height && Math.random() > 0.99){
            drops[i]=0;
        }
        drops[i]++;
    }
}
draw();
setInterval(draw, 35);

