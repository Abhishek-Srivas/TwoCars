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

function component_of_car(type) {
    if(type == "red") {
        this.cur = "left";//initial side on lane
        //copy image to this ponter
        this.car = redcar,this.x = width/2 - 180,this.y = height - 180;
    } 
    else 
    {
        this.cur= "right";//initial side on lane
        //copy image to this ponter
        this.car = bluecar,this.x = width/2 + 120,this.y = height - 180;
    }

    this.newPos = function () {
        c.drawImage(this.car, this.x, this.y);
    };

    this.next_pos = function () 
    {
        if(this.cur== "left") 
        {
            this.cur= "right",this.x += 100; //updating next pos to right
        } 
        else 
        {
            this.cur= "left",this.x -= 100; //updating next pos to left
        }
    };
}

//create new cars instance,not drawing again
var redone = new component_of_car("red");
var blueone = new component_of_car("blue");

// adding keyboard controllers
document.addEventListener("keydown",move_car,false); 
function move_car(e)
{
    switch(e.keyCode)
    {
        case 37:
            //left key pressed
            redone.next_pos();
            break;

        case 39:
            //right key is presed
            blueone.next_pos();
            break;

    }
}


function drawLaneandObstacles() //onload is used to draw when image has loaded
{   
    //to draw a line passed x,y,width,height
    c.fillStyle = "#fff";
    c.fillRect(width/2,0,2,height);
    c.fillRect(width/2 - 100,0,2,height);
    c.fillRect(width/2-200,0,2,height);
    c.fillRect(width/2+100,0,2,height);
    c.fillRect(width/2+200,0,2,height);

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

function all_function_call()
{
    clearCanvas();
    drawLaneandObstacles();
    redone.newPos();
    blueone.newPos();
}


// to hide the start screen while playing
function playbutton(){
      document.querySelector('#startMenu').style.display = "none";
}
window.onload = function () {
    
    setInterval(all_function_call,1);
};

/*
fillrect refernce from http://drawingincode.com/lessons/reference/fillrect/index.html
*/


