document.addEventListener("DOMContentLoaded", function () {


    console.log("dziala");
    var buttons = document.getElementsByClassName("button");

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', function () {

            var parent = this.parentElement;

            if (parent != null) {

                var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                parent.style.backgroundColor = randomColor;

            }


            //console.log(parent);
        })

    }


})

