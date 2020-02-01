document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania. Odpowiedzi oddzielaj komentarzami.
     */
    //Zadanie 0

    var title = document.getElementsByClassName("title")[0];


    function getDataAnimation(selector) {
        var dataanimation = selector.getAttribute("data-animation");
        return dataanimation
    }

    console.log(getDataAnimation(title));

    //Zadanie 1

    var home1 = document.getElementById("home");

    var home2 = document.querySelector("#home");
    console.log(home1);
    console.log(home2);

    var li1 = document.querySelector("[data-direction]");
    console.log(li1);

    var block = document.querySelector(".block");
    console.log(block);

    //Zadanie 2    
    var navli = document.getElementsByTagName("nav")[0].getElementsByTagName("li");
    //var nav = document.querySelectorAll("nav > ul > li");
    console.log(navli);
    console.log(navli.length);

    var par = document.querySelectorAll("div > p");
    console.log(par);
    console.log(par.length);

    var divs = document.querySelectorAll("article div");
    console.log(divs);
    console.log(divs.length);



    //Zadanie 3


    var firstart = document.querySelectorAll("article.first");
    console.log(firstart);
    console.log(firstart.length);



    var h1 = document.querySelectorAll("article.first h1")
    // for (let i = 0; i < h1.length; i++) {

    //     console.log(h1[i]);

    // }
    console.log(h1);
    console.log(h1.length);

});

