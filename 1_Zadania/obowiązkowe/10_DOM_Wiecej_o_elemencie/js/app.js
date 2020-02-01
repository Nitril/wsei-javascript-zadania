document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zadanie 0
    var ex5 = document.querySelectorAll('.ex5 li');

    for (let i = 0; i < ex5.length; i++) {
        if (i === 0 || i % 2 === 0) ex5[i].style.backgroundColor = "green";
        if (i % 5 === 0) ex5[i].classList.add("big");
        if (i % 3 === 0) ex5[i].style.textDecoration = "underline";
    }


    //Zadanie 1

    var chrome = document.querySelector('.chrome');
    var edge = document.querySelector('.edge');
    var firefox = document.querySelector('.firefox');

    chrome.style.backgroundRepeat = 'no-repeat';
    edge.style.backgroundImage = "url('./assets/img/edge.png')";
    firefox.style.backgroundImage = "url('./assets/img/firefox.png')";

    chrome.style.width = '100px';
    chrome.style.height = '100px';

    chrome.nextElementSibling.innerHTML = 'Chrome'; //zwraca element nie obiekt
    chrome.nextElementSibling.setAttribute('href', 'http://chrome.com');
    edge.nextElementSibling.innerHTML = 'Edge'; //zwraca element nie obiekt
    edge.nextElementSibling.setAttribute('href', 'http://edge.com');
    firefox.nextElementSibling.innerHTML = 'Firefox'; //zwraca element nie obiekt
    firefox.nextElementSibling.setAttribute('href', 'http://firefox.com');
    //backgroundRepeat

    //Zadanie 2
    var ex2 = document.querySelectorAll('.ex2 li');

    var name = document.getElementById('name');
    var fav_color = document.getElementById('fav_color');
    var fav_meal = document.getElementById('fav_meal');

    name.innerHTML = 'Karol';
    fav_color.innerHTML = 'niebieski';
    fav_meal.innerHTML = 'pizza';

    //Zadanie 3

    var ex2 = document.querySelector('.ex3 ul');
    ex2.classList.add("menu");
    var li = Array.from(document.querySelectorAll('.ex3 li'));

    for (let i = 0; i < li.length; i++) {
        li[i].classList.add("menuElement");
        li[i].classList.remove("error");
    }

    //Zadanie 4

    var ex4 = Array.from(document.querySelectorAll('.ex4 li'));

    for (let i = 0; i < ex4.length; i++) {

        ex4[i].setAttribute('data-id', i + 1);
        //console.log(ex4[i].dataset);
    }




});