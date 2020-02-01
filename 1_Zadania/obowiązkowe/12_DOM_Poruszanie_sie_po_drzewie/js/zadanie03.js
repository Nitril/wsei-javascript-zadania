document.addEventListener("DOMContentLoaded", function () {


    console.log("dziala");
    var divsEl = document.getElementsByClassName("listContainer");
    console.log(divsEl);
    for (let i = 0; i < divsEl.length; i++) {

        divsEl[i].addEventListener('mouseover', function () {

            var list = this.querySelector(".list");
            //console.log(list);

            list.firstElementChild.style.backgroundColor = "red";
            list.lastElementChild.style.backgroundColor = "blue";

            for (let i = 0; i < list.children.length; i++) {
                if (i == 0 || i == list.children.length - 1) continue;
                list.children[i].style.backgroundColor = "green";


            }
        })

    }


})
