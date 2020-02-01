//Zadanie 0
function distFromAvarage(inputArray) {

    var sum = 0;

    for (var i = 0; i < inputArray.length; i++) {
        sum += inputArray[i];

    }

    var avarage = sum / inputArray.length;
    var outputArray = [];

    for (var i = 0; i < inputArray.length; i++) {
        outputArray.push(inputArray[i] - avarage);

    }

    return outputArray;
}

distFromAvarage([1, 2, 3, 4, 5, 6, 7]);
distFromAvarage([1, 1, 1, 1]);
distFromAvarage([2, 8, 3, 7]);

//Zadanie 1
var array = ["gruszka", "jablko", "mango", "ananas"];

console.log(array[0]);
console.log(array[array.length - 1]);

for (var i = 0; i < array.length; i++) {

    console.log(array[i]);

}


//Zadanie 3
function printTable(array) {

    for (var i = 0; i < array.length; i++) {

        console.log(array[i]);

    }

}

printTable([1, 2, 3, 4]);


//Zadanie 4
function multiply(array) {

    var multiplication = 1;

    for (let i = 0; i < array.length; i++) {
        multiplication *= array[i];

    }

    return multiplication;

}


//Zadanie 5
function getEvenAvarage(array) {

    var sum = 0;
    var counter = 0;

    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) {
            sum += array[i];
            counter++;

        }

    }

    if (counter == 0) return null;
    return sum / counter;

}

getEvenAvarage([1, 2, 3, 4, 5, 6, 7]); s
getEvenAvarage([1, 1, 1, 1]);
getEvenAvarage([2, 8, 3, 7, 4]);

//Zadanie 6
function sortArray(array) {

    /* 
    function forCompare(a, b) {
        return a - b;
    }
    */

    return array.sort((a, b) => a - b);


}

sortArray([145, 11, 3, 64, 4, 6, 10]);

//Zadanie 7
function addArrays(array, array2) {

    var length = 0;
    var compare = array.length - array2.length;

    if (compare > 0) {

        length = array.length

    }
    else {

        length = array2.length

    }

    var outputArray = [];

    for (let i = 0; i < length; i++) {

        if (compare == 0 || i < length - Math.abs(compare)) {
            outputArray[i] = array[i] + array2[i];

        }
        else {

            if (compare > 0) {   //if array is longer  than array2

                outputArray[i] = array[i];
            }
            else {

                outputArray[i] = array2[i];
            }

        }


    }

    return outputArray;

}

addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]);
addArrays([8, 3, 22], [1, 3, 2]);
addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]);