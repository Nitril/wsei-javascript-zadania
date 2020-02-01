var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];


var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

// Zadanie 0
var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

function checkArray(inputArray) {

    var outputArray = [];

    for (let x = 0; x < inputArray.length; x++) {
        outputArray[x] = true
        for (let y = 0; y < inputArray[x].length; y++) {

            if (inputArray[x][y] % 2 != 0) {
                outputArray[x] = false

            }

        }
    }

    return outputArray;
}

checkArray(arr);

//Zadanie 1

console.log(task1Array[3][2]);
console.log(task1Array[2].length);
console.log(task1Array[4][2]);


//Zadanie 2


for (let x = 0; x < task2Array.length; x++) {
    console.log(task2Array[x]);


}

for (let x = 0; x < task2Array.length; x++) {
    console.log(task2Array[x].length)

}

for (let x = 0; x < task2Array.length; x++) {

    for (let y = 0; y < task2Array[x].length; y++) {

        console.log(task2Array[x][y]);


    }
}

//Zadanie 3

function print2DArray(array2D) {

    for (let x = 0; x < array2D.length; x++) {

        for (let y = 0; y < array2D[x].length; y++) {

            console.log(array2D[x][y]);


        }
    }


}


print2DArray(arr)
//Zadanie 4

var task4Array = [
    ["Tak", "Nie", "Może"],
    ["Banany", "Śliwki", "Kokosy", "Jabłka"],
    [true, false],
    [5, 6, 7, 8]
];

print2DArray(task4Array);


//Zadanie 5

function create2DArray(rows, columns) {

    var array2D = [];
    var counter = 1;

    for (let row = 0; row < rows; row++) {
        array2D.push([]);

        for (let column = 0; column < columns; column++) {
            array2D[row].push(counter);
            counter++;

        }
    }
    return array2D;

}

create2DArray(4, 4);