document.addEventListener('DOMContentLoaded', function() {
    //Zadanie 0    

    //1
    var firstCl = document.querySelector(".first").firstElementChild.children[2]; 
    console.log(firstCl);

    //2
    var secondID = document.getElementById("second").parentElement.children[3];
    console.log(secondID);

    //3
    var count = document.querySelector("[data-ex='third']").parentElement.parentElement.lastElementChild.firstElementChild.children.length;
    var thirdAt =document.querySelector("[data-ex='third']").parentElement.parentElement.lastElementChild.firstElementChild.children[Math.floor(count/2)]; 
  
    console.log(thirdAt);
    
    //4
    var fourthEl = document.querySelector("div .forth").parentElement.querySelectorAll("article p")[1];
    console.log(fourthEl);


    
});
