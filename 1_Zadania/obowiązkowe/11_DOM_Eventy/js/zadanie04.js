document.addEventListener("DOMContentLoaded", function () {

    buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        //console.log(buttons);
        buttons[i].addEventListener('click', function () {

            let count = this.parentElement.querySelector(".counter");
            //console.log(count);
            count.innerText = parseInt(count.innerText) + 1;

        }, false);

    }

}, false);