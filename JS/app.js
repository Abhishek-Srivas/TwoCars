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
};

/*
fillrect refernce from http://drawingincode.com/lessons/reference/fill_rect/index.html
*/


// to hide the start screen while playing
function playbutton(){
      document.querySelector('#startMenu').style.display = "none";
}


