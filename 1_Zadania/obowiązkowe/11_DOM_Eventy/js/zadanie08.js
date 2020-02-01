

var width = document.getElementById("windowWidth");
var height = document.getElementById("windowHeight");
width.innerText = window.innerWidth;
height.innerText = window.innerHeight;
window.addEventListener('resize', function () {
    //console.log(window.innerHeight);

    width.innerText = window.innerWidth;
    height.innerText = window.innerHeight;
});