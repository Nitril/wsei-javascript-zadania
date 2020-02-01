document.addEventListener("DOMContentLoaded", function () {
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;
    console.log(links);

    function getDatasInfo(elements) {
        var newArray = [];

        for (let i = 0; i < array.length; i++) {
            newArray.push(elements[i].getAttribute('data-color'));

        }
        console.log(newArray);
        return newArray;


    }
    /*
    Poniżej napisz kod rozwiązujący zadania
     */
    getDatasInfo(links);

    //Zadanie 1
    console.log(homeElement);
    console.log(childElements);
    console.log(banner);
    console.log(blocks);
    console.log(links);

    for (let i = 0; i < childElements.length; i++) {
        console.log(childElements.tagName, childElements.classList);

    }

    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks.tagName, blocks.classList);

    }


    for (let i = 0; i < links.length; i++) {
        console.log(links.tagName, links.classList);

    }


    //Zadanie 2

    for (el of blocks) {
        console.log(el.innerHTML);
        console.log(el.outerHTML);
        el.innerHTML = "Nowa wartość diva o klasie blocks"
        console.log(el.innerHTML);
        console.log(el.outerHTML);
    }


    //Zadanie 3

    var mainFooter = document.querySelector('#mainFooter');
    function getID(element) {
        console.log(element.id);
        return element.id;

    }

    getID(mainFooter);

    //Zadanie 4

    function getTags(elements) {
        let arr1 = [];

        for (let i = 0; i < elements.length; i++) {
            arr1.push(elements[i].childElements.tagName);

        }
        return childElements

    }

    getTags(childElements);

    //Zadanie 5

    function getClassInfo(element) {
        let arr = [];

        for (let i = 0; i < element.classList.length; i++) {
            arr.push(element.classList[i]);

        }
        console.log(arr);
        return arr;

    }

    getClassInfo(banner);

    //Zadanie 6

    var liElements = document.querySelectorAll('new li');

    function setDataDirection(elements) {
        for (item of elements) {
            if (!item.getAttribute('data-direction')) {
                item.setAttribute('data-direction', 'top');

            }

        }


    }
    setDataDirection();

});
