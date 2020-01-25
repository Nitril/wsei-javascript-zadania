document.addEventListener("DOMContentLoaded", function() {

    
    console.log("dziala");
    var buttons = document.getElementsByClassName("button");

    for (let i = 0; i < buttons.length; i++) {
        
        buttons[i].addEventListener('click', function() {

            var below = this.nextElementSibling;

            if (below != null) below.classList.toggle("hidden");
            console.log(below);
        })
        
    }


})

