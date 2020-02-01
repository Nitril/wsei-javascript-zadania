
//Zadanie 1
//ad 1.1 - tag script w sekcji "head" jest ładowany przed kodem w sekcji body - tzn. skrypty są wykonywane przed 
// załadowaniem elementów z body. A , że skrypt się do nich bezpośrednio odnosi
// to w przypadku umieszczenia skryptu w tagu body skrypty nie są wykonywanie poprawnie ponieważ elementy do których się odnoszą nie zostały załadowane 


document.addEventListener('DOMContentLoaded', function () {

    var menu = document.querySelector("#menu");
    var paragraf = document.querySelector("p");

    menu.classList.add("menu");
    paragraf.innerHTML = "A to jest paragraf w zadaniu 1";


}, false);


//ad 1.2 - tak

//ad 1.3 - teraz nie ma różnicy, ponieważ użycie eventu "domcontentloaded" sprawia, że wszystkie elementy strony muszą byc załadowane
// przed wykonaniem skryptów

//Zadanie 2

