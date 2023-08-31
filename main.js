var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var width=screen.width
var newwidth=screen.width-12
var newheight=screen.height-15
var current_touch_x, current_touch_y, last_touch_x, last_touch_y
current_touch_x=0
current_touch_y=0
last_touch_x=0
last_touch_y=0


    canvas = document.getElementById('myCanvas');
    draw = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    if(width<992){
        document.getElementById("myCanvas").width=newwidth
        document.getElementById("myCanvas").height=newheight
        document.body.style.overflow="hidden"
    }
    
    canvas.addEventListener("touchstart", my_touchstart)
    function my_touchstart(e){
        color=document.getElementById("color").value
        width=document.getElementById("width").value
        last_touch_x=e.touches[0].clientX-canvas.offsetLeft
        last_touch_y=e.touches[0].clientY-canvas.offsetTop
        console.log("touchstart")
    }
    canvas.addEventListener("touchmove",touch_mousemove)
    function touch_mousemove(e){
        current_touch_x=e.touches[0].clientX-canvas.offsetLeft
        current_touch_y=e.touches[0].clientY-canvas.offsetTop
        draw.beginPath()
        draw.strokeStyle=color
        draw.lineWidth=width
        draw.moveTo(last_touch_x, last_touch_y)
        draw.lineTo(current_touch_x,current_touch_y)
        draw.stroke()
        last_touch_x=current_touch_x
        last_touch_y=current_touch_y
    }
canvas.addEventListener("mousedown", my_sweda)
function my_sweda(e){
width_of_line=document.getElementById("width").value
color=document.getElementById("color").value
mouseEvent="mousedown"
}

canvas.addEventListener("mouseleave", hj)
function hj(e){
    mouseEvent="mouseleave"
}

canvas.addEventListener("mouseup", sk)
function sk(e){
    mouseEvent="mouseup"
}

canvas.addEventListener("mousemove", yu)
function yu(e){
    current_x=e.clientX-canvas.offsetLeft
    current_y=e.clientY-canvas.offsetTop
    if(mouseEvent=="mousedown"){
        draw.beginPath()
        draw.strokeStyle=color
        draw.lineWidth=width_of_line
        draw.moveTo(last_x,last_y)
        draw.lineTo(current_x,current_y)
        draw.stroke()
    }
    last_x=current_x
    last_y=current_y
}

    function uajsf(){
        draw.clearRec(0,0,canvas.width,canvas.height)
    }