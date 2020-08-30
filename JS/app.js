//commonly used properties are defined for shortcut
var width_ = window.innerWidth;
var height_ = window.innerHeight;
var canvas = document.getElementById("canvas");
var c = canvas.getContext('2d');
canvas.width = width_;
canvas.height = height_;
canvas.style.backgroundColor = "#25337a";
c.fillStyle = "grey"; //line color

function clearCanvas() {
    c.clearRect(0, 0, width_, height_);
}
var redcar = new Image(); // Create new img element
var bluecar= new Image();  
redcar.src="../Images/Red.png"; // Set source path
bluecar.src="../Images/Blue.png";

window.onload = function () //onload is used to draw when image has loaded
{   
    //to draw a line passed x,y,width,height
    c.fillRect(width_/2,0,2,height_);
    c.fillRect(width_/2 - 100,0,2,height_);
    c.fillRect(width_/2-200,0,2,height_);
    c.fillRect(width_/2+100,0,2,height_);
    c.fillRect(width_/2+200,0,2,height_);
    //draw image function name coordinates
    c.drawImage(redcar,width_/2 - 180,height_-180);
    c.drawImage(bluecar,width_/2 +120,height_-180);
};

/*
fillrect refernce from http://drawingincode.com/lessons/reference/fill_rect/index.html
*/
