canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width_of_line=1;
canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouseEvent="mouseDown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
}
canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseEvent="mouseUP";
    
}
canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x,y=");
        console.log("x="+ last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x,y=");
        console.log("x="+ current_position_of_x + "y=" + current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke()

    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}
function clear_area(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}