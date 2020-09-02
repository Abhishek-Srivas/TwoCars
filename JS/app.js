//commonly used properties are defined for shortcut
var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById("canvas");
var c = canvas.getContext('2d');
canvas.width = width;
canvas.height = height;
canvas.style.backgroundColor = "#25337a";
c.fillStyle = "grey"; //line color

//array to store generated obstacles
var red_circle_rectangles= [];  //for red one 
var blue_circles_rectangles= [];// for blue one

function clearCanvas()
{
    //it is used to clear the pixels 
    c.clearRect(0, 0, width, height); 
}
// Create new img element
var redcar = new Image(); 
var bluecar= new Image();  
// Set source path
redcar.src="../Images/Red.png"; 
bluecar.src="../Images/Blue.png";

function component_of_car(colour) 
{
    if(colour == "blue") 
        //initial side on lane
        this.cur = "right",
        //copy image to this pointer
        this.car = redcar,this.x = width/2 - 180,this.y = height - 180;
    else
        //initial side on lane
        this.cur= "left",
        //copy image to this pointer
        this.car = bluecar,this.x = width/2 + 120,this.y = height - 180;
        

    this.newPos = function ()
    {
        //drawing car at new position 
        c.drawImage(this.car, this.x, this.y);
    };

    //after drawing a car updating its position for next click 
    //if it was on left lane left part then it will move to right and vice -versa
    //if it was on right lane left part then it will move to left and vice-versa

    this.next_pos = function () 
    {
        if(this.cur== "left") 
        {
            //updating next pos to right
            this.cur= "right",this.x += 100; 
        } 
        else 
        {
            //updating next pos to left
            this.cur= "left",this.x -= 100; 
        }
    };
}

//create new cars instance,not drawing again
var redone = new component_of_car("red");
var blueone = new component_of_car("blue");

// adding keyboard controllers
document.addEventListener("keydown",move_car,false);
//function for keyborad call 
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


function drawTrack()
{   
    //to draw a line passed x,y,width,height
    //white line 
    c.fillStyle = "#fff";
    //middle one
    c.fillRect(width/2,0,2,height);
    //middle -1
    c.fillRect(width/2 - 100,0,2,height);
    //mddle -2
    c.fillRect(width/2-200,0,2,height);
    //midlle +1
    c.fillRect(width/2+100,0,2,height);
    //middle+2
    c.fillRect(width/2+200,0,2,height);

};
function random_value()
{
    //returns 0 or 1
    return Math.floor((Math.random()*2));
}
function draw_circles(X,Y,Z)
{
    //outer most part
    c.beginPath();//used to draw sth from beginning no contact from last drawing otherwise all drawing will join each other
    c.arc(X, Y, 25, 0, 2*Math.PI); //x and y are co-ordinate
    c.stroke(); 
    c.fillStyle = Z; //colour
    c.fill();

    //middle part
    c.beginPath();
    c.arc(X, Y, 25*0.8, 0, 2*Math.PI);
    c.stroke(); 
    c.fillStyle ="#ffffff";
    c.fill();

    //inner most part
    c.beginPath();
    c.arc(X, Y, 25*0.5, 0, 2*Math.PI);
    c.stroke(); 
    c.fillStyle = Z;
    c.fill();
}
function draw_rect(X,Y,Z)
{
        //outer portion in solid color
        c.fillStyle = Z;
        c.fillRect(X-8, Y, 40, 40);

        //just inner part part with white color
        c.fillStyle = '#ffffff';
        c.fillRect(X-2, Y+5, 30, 30);

        //middle part
        c.fillStyle = Z;
        c.fillRect(X-4, Y+10, 20, 20);
}

function generated_object(color)
{
    //coordinates
    this.posX=0;
    this.posY=0;

    //colour of obstacle
    if(color=="red") this.color="#FE3E67";
    else this.color="#05A8C4";

    //decide shape randomly

    if(random_value()) this.shape="circle";
    else this.shape="rect";

    //decide position randomly

    if(random_value()) this.update_pos="left";
    else this.update_pos="right";

    //decide width of object

    if(this.shape == "circle")  this.posX = width/2 - 150;
    else this.posX = width/2 - 162.5;
    
    //update co-ordinate for object for respective lane

    if(this.update_pos == "left") this.posX += 100;
    if(color == "red") this.posX += 200;

    //draw circles and rectangles acc to random guessed as above
    
    this.draw = function () 
    {
        if(this.shape == "rect") draw_rect(this.posX,this.posY,this.color);
        else draw_circles(this.posX,this.posY,this.color);
    };

    this.update = function () 
    {
        this.posY += 10;
    }
}


function all_function_call()
{
    clearCanvas();
    drawTrack();
    redone.newPos();
    blueone.newPos();
    red_circle_rectangles.forEach(function (generated_object) {
        generated_object.update();
        generated_object.draw();
    });
    blue_circles_rectangles.forEach(function (generated_object) {
        generated_object.update();
        generated_object.draw();
    })
    
}


// to hide the start screen while playing
function playbutton(){
      document.querySelector('#startMenu').style.display = "none";
}
window.onload = function () {

    //generating obstacles and storing in an array
    setInterval
    (function () {
        red_circle_rectangles.push(new generated_object("red"));
        blue_circles_rectangles.push(new generated_object("blue"));
    }, 1000);

    setInterval(all_function_call,30);
};

/*
fillrect refernce from http://drawingincode.com/lessons/reference/fillrect/index.html
*/


