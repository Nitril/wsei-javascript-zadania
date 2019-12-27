/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener('DOMContentLoaded', myCode, false);

function myCode() {

    console.log("dziala");

    var tooltips = document.getElementsByClassName("tooltip");

    for (let i = 0; i < tooltips.length; i++) {
        
                
        tooltips[i].addEventListener('mouseover', function() {
            
            //console.log(this.dataset.text);
            let span = document.createElement("span");
            span.classList.add('tooltipText');
            let close = document.createTextNode(this.dataset.text);                        
            span.appendChild(close);
            this.appendChild(span);

        }, false);
        
        tooltips[i].addEventListener('mouseout', function() {
            
            //console.log(this.dataset.text);
            let span = this.querySelector(".tooltipText");

            //span.removeChild(close);
            this.removeChild(span);

        }, false);
    }
}