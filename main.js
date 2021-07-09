canvas = document.getElementById('mycanvas');

ctx = canvas.getContext("2d");

width_rover = 100;
height_rover = 90;

rover_x = 10;
rover_y = 10;

img_array = [" mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
random = Math.floor(Math.random()*4); 
bg = img_array[random];

bgmain = img_array[random];


rover = "rover.png";

function add(){
    bg = new Image();
    bg.onload = uploadBackground;
    bg.src = bgmain;
    
    rg = new Image();
    rg.onload = uploadrover;
    rg.src = rover;
}

function uploadBackground() {
    ctx.drawImage(bg,0,0,canvas.width,canvas.height);
}

function uploadrover() {
    ctx.drawImage(rg,rover_x,rover_y,width_rover,height_rover);
}


window.addEventListener("keydown", mykeydown);

function mykeydown (e){
    keypress = e.keyCode;
    console.log(keypress);
    
    if(keypress=='38'){
        up();
        console.log("up");
    }
    
    if(keypress=='40'){
        down();
        console.log("down");
    }
    
    if(keypress=='37'){
        left();
        console.log("left");
    }
    
    if(keypress=='39'){
        right();
        console.log("right");
    }
}



function up(){
    
    if(rover_y >= 0)
            {
        rover_y = rover_y -10;
                console.log("Rover X ="+rover_x+"Rover Y ="+rover_y);
    
                uploadBackground();
                uploadrover();
}
}
    function down(){
    
    if(rover_y <= 500)
            {
        rover_y = rover_y +10;
                console.log("Rover X ="+rover_x+"Rover Y ="+rover_y);
    
                uploadBackground();
                uploadrover();
}
    }
function right(){
    
    if(rover_x <= 760)
            {
        rover_x = rover_x +10;
                console.log("Rover X ="+rover_x+"Rover Y ="+rover_y);
    
                uploadBackground();
                uploadrover();
}
}
        

function left(){
    
    if(rover_x >= 0)
            {
        rover_x = rover_x -10;
                console.log("Rover X ="+rover_x+"Rover Y ="+rover_y);
    
                uploadBackground();
                uploadrover();
}
}




