//Zadanie 0a

var city = {
    capital: 'Warszawa',
    population: 38000000,
    president: 'Andrzej Duda',
    primeMinisters: ["minister1", "minister2"]

}


console.log(city.capital)
console.log(city.population)
console.log(city.president)
console.log(city.primeMinisters)



// Zadanie 0b

var timeMachine = {};

timeMachine.shape = 'string';
timeMachine.model = 'model';
//timeMachine.president = 'president';

timeMachine.run = function (date, place) {

    this.date = date;
    this.place = place;
    console.log(this.shape);
    console.log(this.model);
    console.log(this.date);
    console.log(this.place);
}



timeMachine.run('08/07/2000', 'egipt');


// Zadanie 1

var book = new Object();

book.title = 'ksiażka';
book.author = 'autor';
book.numberOfPages = 44;

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);


//Zadanie 2

function person() {
    this.name = 'imię';
    this.age = 0;

    this.sayHello = function () {
        console.log("hello");

    }
}

var person = new person();

console.log(person.name);
console.log(person.age);
person.sayHello();


//Zadanie 3

var recipe = new function () {
    this.title = "nazwa";
    this.servings = 4;

}

przepis.ingredients = ['pietruszka', 'mango'];

console.log(przepis.title);
console.log(przepis.servings);
console.log(przepis.ingredients);

//Zadanie 4

var movie = {
    director: "Peter Jackson",
    writers: [" J.R.R. Tolkien ", "Fran Walsh", "Philippa Boyens", "Peter Jackson"],
    stars: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
    country: "New Zealand | USA",
    budget: "$93,000,000",
    imdbPoints: 8.8,
    year: 2001,
    time: "2h 58 min",
    category: " Adventure, Drama, Fantasy"
}

for (var property in movie) {
    //if (Object.prototype.hasOwnProperty.call(movie, property)) {
    console.log(`property : ${property}, value: ${movie[property]} `)
    //}
}


//Zadanie 5

var animals = [
    {
        type: "cat",
        breed: "persian",
        name: "Tiberius",
        health: [
            {
                date: "2012-03-03",
                visitType: "grafting"
            },
            {
                date: "2015-06-23",
                visitType: "bowel surgery"
            }
        ]
    },
    {
        type: "Guinea pig",
        breed: "The Rex",
        name: "Marko",
        health: [
            {
                date: "2015-12-04",
                visitType: "grafting"
            },
            {
                date: "2016-03-15",
                visitType: "ear cleaning"
            }
        ]
    }

]


var iterateAll = function (obj) {


    for (var property in obj) {

        if (obj.hasOwnProperty(property) && (typeof obj[property] === "object")) {
            //if (Object.prototype.hasOwnProperty.call(obj, property)&& (typeof obj[property] === "object")) {
            iterateAll(obj[property]);
        }
        else console.log(`property : ${property}, value: ${obj[property]}\n`);



    }


}

iterateAll(animals)

//Zadanie 6

var spoon = {
    isExist: true
}

var fork = spoon;
fork.isExist = false;

console.log(spoon.isExist)



