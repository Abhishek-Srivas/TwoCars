//commonly used properties are defined for shortcut
var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById("canvas");
var c = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;
canvas.style.backgroundColor = "#25337a";
c.fillStyle = "grey"; //line color



function clearCanvas() {
    c.clearRect(0, 0, width, height);
}
var redcar = new Image(); // Create new img element
var bluecar= new Image();  
redcar.src="../Images/Red.png"; // Set source path
bluecar.src="../Images/Blue.png";



window.onload = function () //onload is used to draw when image has loaded
{   
    //to draw a line passed x,y,width,height
    c.fillStyle = "#fff";
    c.fillRect(width/2,0,2,height);
    c.fillRect(width/2 - 100,0,2,height);
    c.fillRect(width/2-200,0,2,height);
    c.fillRect(width/2+100,0,2,height);
    c.fillRect(width/2+200,0,2,height);
    //draw image function name coordinates
    c.drawImage(redcar,width/2 - 180,height-180);
    c.drawImage(bluecar,width/2 +120,height-180);

    /*------------RED CIRCLE---------------W3schools*/
    c.strokeStyle = "red";
    //red circle
    c.beginPath();//The beginPath() clears the current path drawing state
    c.arc(width/2 - 150,height - 360,25,0,2*Math.PI);
    c.stroke(); //Draws the shape by stroking its outline.
    c.fillStyle = '#FE3E67';
    c.fill();//draws a solid shape by filling context area
    //white circle under red one
    c.beginPath();
    c.arc(width/2 - 150,height - 360,20,0,2*Math.PI);
    c.stroke();
    c.fillStyle = '#ffffff';
    c.fill();
    //another red one under white one
    c.beginPath();
    c.arc(width/2 - 150,height - 360,12,0,2*Math.PI);
    c.stroke();
    c.fillStyle = '#FE3E67';
    c.fill();

    /*------------RED RECTANGLE-----------W3schools------*/
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, width, height, radius) 
    {
        this.beginPath();
        this.moveTo(x + radius, y);
        this.arcTo(x + width, y, x + width, y + height, radius);
        this.arcTo(x + width, y + height, x, y + height, radius);
        this.arcTo(x, y + height, x, y, radius);
        this.arcTo(x, y, x + width, y, radius);
        this.closePath();
        return this;
      }
      c.roundRect(595, 55, 47, 47, 10);
      c.fillStyle = "#FE3E67";
      c.fill();
      c.roundRect(600, 60, 37, 37, 10);
      c.fillStyle = "#ffffff";
      c.fill();
      c.roundRect(605, 65,27, 27, 5);
      c.fillStyle = "#FE3E67";
      c.fill();

    /*------------BLUE CIRCLE---------------W3schools*/
    c.strokeStyle = "#05A8C4";
    //blue circle
    c.beginPath();
    c.arc(width/2 + 150,height - 560,25,0,2*Math.PI);
    c.fillStyle = '#05A8C4';
    c.fill();
    //white circle under blue one
    c.beginPath();
    c.arc(width/2 + 150,height - 560,20,0,2*Math.PI);
    c.stroke();
    c.fillStyle = '#ffffff';
    c.fill();
    //another blue circle under white one
    c.beginPath();
    c.arc(width/2 + 150,height - 560,12,0,2*Math.PI);
    c.stroke();
    c.fillStyle = '#05A8C4';
    c.fill();

    /*--------------BLUE RECTANGLE-------------*/
    c.roundRect(795, 355, 47, 47, 10);
    c.fillStyle = "05A8C4";
    c.fill();
    c.roundRect(800, 360, 37, 37, 10);
    c.fillStyle = "#ffffff";
    c.fill();
    c.roundRect(805,365,27,27, 5);
    c.fillStyle = "#05A8C4";
    c.fill();
};

/*
fillrect refernce from http://drawingincode.com/lessons/reference/fillrect/index.html
*/


// to hide the start screen while playing
function playbutton(){
      document.querySelector('#startMenu').style.display = "none";
}


