//1

var menuEl = document.getElementById('menu');

function getDataInfo(element) {

    let array = [];
    let elements = element.children;
    for (let i = 0; i < elements.length; i++) {
        array.push(elements[i].dataset.info);


    }
    return array;
}

console.log(getDataInfo(menuEl));

//2 

var contenerEl = document.getElementById('main-contener');

function getElementClass(element) {
    var array = [];
    for (let i = 0; i < element.classList.length; i++) {
        array.push(element.classList[i]);

    }

    return array;
}

console.log(getElementClass(contenerEl));


//3 


var pinkColor = document.getElementsByClassName('pink-color')[0];

function getElementText(element) {

    return element.innerText;

}

console.log(getElementText(pinkColor));

//4

var imagesCls = document.getElementsByClassName('images');

function getElementAlt(element) {

    array = [];

    for (let i = 0; i < element.length; i++) {
        array.push(element[i].getAttribute('alt'));

    }
    return array;
}

console.log(getElementAlt(imagesCls));


//5 

var link = document.querySelectorAll('.my-link');

function getElementHref(element) {

    array = [];

    for (let i = 0; i < element.length; i++) {
        array.push(element[i].getAttribute('href'));

    }
    return array;
}
console.log(getElementHref(link));
