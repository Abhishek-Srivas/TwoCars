//commonly used properties are defined for shortcut
var width_ = window.innerWidth;
var height_ = window.innerHeight;
var canvas = document.getElementById("canvas");
var c = canvas.getContext('2d');
canvas.width = width_;
canvas.height = height_;
canvas.style.backgroundColor = "#25337a";

function clearCanvas() {
    c.clearRect(0, 0, width_, height_);
}

function drawLanes() {
    c.fillStyle = "grey"; //line color
    c.fillRect(width_/2,0,2,height_);
    c.fillRect(width_/2 - 100,0,2,height_);
    c.fillRect(width_/2-200,0,2,height_);
    c.fillRect(width_/2+100,0,2,height_);
    c.fillRect(width_/2+200,0,2,height_);
}
drawLanes();
/*
fillrect refernce from http://drawingincode.com/lessons/reference/fill_rect/index.html
*/

