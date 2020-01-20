document.addEventListener('DOMContentLoaded', function() {


    //Zadanie 0a
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

    //Zadanie 0b

    for (let i = 0; i < parent.length; i++) {
        
        parent[i].addEventListener('mouseover', function() {
            
            hideChildrenElement();

        }, false);
        
        parent[i].addEventListener('mouseout', function() {
            
            // console.log("mout");
            var selected = this.querySelector(".children");
            //console.log(selected);
            console.log(this);
            
            
            selected.style.display = "none";

        }, false);
    }
        
    function hideChildrenElement(){
        var selected = this.querySelector('.children');
    
        console.log(this);
        selected.style.display = "block";
    }
    
    //Zadanie 1

    

},false);


