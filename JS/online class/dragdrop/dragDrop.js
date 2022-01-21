
//grab it changes position clientX.Y and top,left
var element, posx, posy, diffx, diffy;
document.getElementById("ele1").addEventListener("mousedown", grabber, false);
document.getElementById("ele2").addEventListener("mousedown", grabber, false);
function grabber(event) {

    element = event.currentTarget;

    posx = parseInt(element.style.left);
    posy = parseInt(element.style.top);


    diffx = event.clientX - posx;
    diffy = event.clientY - posy;

    document.addEventListener("mousemove", mover, false);
    document.addEventListener("mouseup", dropper, false);

}

//move

function mover(event) {
    element.style.left = event.clientX - diffx + "px";

    element.style.top = event.clientY - diffy + "px";

}
//drop
function dropper() {
    document.removeEventListener("mousemove", mover, false);
    document.removeEventListener("mouseup", dropper, false);

}

