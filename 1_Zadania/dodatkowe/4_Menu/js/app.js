document.addEventListener('DOMContentLoaded', myCode, false);


function myCode() {
    console.log("dziala");
    //var menu = document.getElementsByClassName("menu")[0].getElements
    var li = Array.from(document.querySelectorAll(".nav > ul > li"));
    console.log(li);

    for (let i = 0; i < li.length; i++) {

        li[i].addEventListener("mouseover", function () {

            var subList = this.querySelector("ul");
            if (subList != null) {
                //console.log(subList);
                //console.log("mousover");
                subList.style.display = "inline-block";
            }
        }, false);


        li[i].addEventListener("mouseout", function () {

            var subList = this.querySelector("ul");
            if (subList != null) {
                //console.log(subList);
                //console.log("mouseout");
                subList.style.display = "none";
            }
        }, false);
    }
}