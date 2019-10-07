
//zad 1
function countHello(number) {

    var counter = 1;

    var interval = setInterval(()=> {
        console.log("Hello ", counter);
        counter++;

    if(counter > number) {

        clearInterval(interval);
    }

    },500)




}

countHello(5);

//zad 0
function distFromAverge(inputArray) {
    var sum = 0;
    for(var i=0; inputArray.length;i++) {

        sum += inputArray[i];
    }

    var averge = sum/inputArray.length;
    var newArray = [];

    for(var i=0; inputArray.length;i++){
        newArray.push(inputArray[i]-averge);

    }
    return newArray;
}

distFromAverge([1,2,3,4,5,6,7]);


//zad 1
var array=["gruszka", "jablko", "sliwka", "morela"];

console.log(array[0]);
console.log(array[array.length-1]);
for(var i=0; i<array.length;i++){
    console.log(array[i]);
}


//zad 3
function printTable(array) {
    for(var i =0; i<array.length;i++){
        console.log(array[i])

    }

}

printTable([1,2,3,4]);


//zad 4

function multiply(array) {
    var multiplier=1;
    for( var i = 0; i<array.length; i++) {
        multiplier = array[i] * multiplier;

    }
    return multiplier;
}

multiply([1,2,3,4,5,6,7]);
//zad 5

function getEvenAvarage(array) {
    var average = 0;
    var counter = 0;

    for( var i = 0; i<array.length; i++) {
        if (array[i]%2 === 0) {
            average = average+ element;
            counter++;

        }

    };

    if (counter === 0 ) return null;
    return average /counter;

}

getEvenAvarage([1,2,3,4,5,6,7]);
getEvenAvarage([1,1,1,1]);
getEvenAvarage([2,8,3,7,4]);