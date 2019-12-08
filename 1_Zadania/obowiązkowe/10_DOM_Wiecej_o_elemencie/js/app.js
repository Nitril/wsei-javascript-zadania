document.addEventListener("DOMContentLoaded", function () {
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

    //Zadanie 0
    var ex5 = document.querySelectorAll('.ex5 li');
    
    for (let i = 0; i < ex5.length; i++) {
        if (i === 0 || i % 2 === 0) ex5[i].style.backgroundColor = "green";
        if (i % 5 === 0) ex5[i].classList.toggle("big");
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

    chrome.nextElementSibling.innerHTML =  'Chrome'; //zwraca element nie obiekt
    chrome.nextElementSibling.setAttribute('href', 'http://chrome.com');
    edge.nextElementSibling.innerHTML =  'Edge'; //zwraca element nie obiekt
    edge.nextElementSibling.setAttribute('href', 'http://edge.com');
    firefox.nextElementSibling.innerHTML =  'Firefox'; //zwraca element nie obiekt
    firefox.nextElementSibling.setAttribute('href', 'http://firefox.com');
    //backgroundRepeat
});