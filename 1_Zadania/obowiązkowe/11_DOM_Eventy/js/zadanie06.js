document.addEventListener("DOMContentLoaded", function () {

    var box = document.querySelector("#box");
    var lx = document.getElementById("localX");
    var ly = document.getElementById("localY");
    var gx = document.getElementById("globalX");
    var gy = document.getElementById("globalY");

    box.addEventListener('mousemove', function (e) {

        lx.innerText = e.clientX - this.offsetLeft;
        // console.log(e.clientY);
        ly.innerText = e.clientY - this.offsetTop;
        // console.log(e.screenX);
        gx.innerText = e.screenX;
        // console.log(e.screenY);
        gy.innerText = e.screenY;

        //console.log(this);

    });

}, false);