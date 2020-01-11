document.addEventListener('DOMContentLoaded', function() {

    var childrens = Array.from(document.querySelectorAll("children"));
    var parent = Array.from(document.getElementsByClassName("parent"));
    

    for (let i = 0; i < parent.length; i++) {
        
        parent[i].addEventListener('mouseover', function() {
            
            //console.log("mo");
            var selected = this.querySelector('.children');
            
            console.log(this);
            selected.style.display = "block";

        }, false);
        
        parent[i].addEventListener('mouseout', function() {
            
            // console.log("mout");
            var selected = this.querySelector(".children");
            //console.log(selected);
            console.log(this);
            
            
            selected.style.display = "none";

        }, false);
    }

    

},false);
