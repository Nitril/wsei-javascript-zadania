
document.addEventListener('DOMContentLoaded', function() {
    

    //Zadanie 1

    function getNumber(number, array) {

        
        if (array.indexOf(number) > -1){

            return true;

        }
        
        return false;


    }
    console.log(getNumber(2, [33, 54, 2, 1, 4, 100]));
    console.log(getNumber(5, [33, 54, 2, 1, 4, 100]));
    //Zadanie 2

    function createIdentityMatrix(rows, columns) {

        let array = [];

        for (let x = 0; x < rows; x++) {
            
            array[x] = [];

            for (let y = 0; y < columns; y++) {
                if (x === y) array[x].push(1);
                else array[x].push(0);

            }
        }


        return array;


    }

    console.log(createIdentityMatrix(4,4));

    //zadanie 3

    function sortPlanet(planets) {

        return planets.sort((a,b) => parseInt(b.numberOfMoons) - parseInt(a.numberOfMoons));


    }

    console.log(sortPlanet(planets));

    //Zadanie 1 - dodatkowe

    function addTheSameNumbers(number, array) {
    
        var sum = 0;
        if (array.indexOf(number) > -1) {

            for (let i = 0; i < array.length; i++) {
                
                if(array[i] == number ) sum += number;  
                

            }
            return sum;
        }
        return null;

    }
    console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
    console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100])); 
    console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
    console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));


    //Zadanie 2 - dodatkowe 

    function factors(number) {
        factorsArray = [];
        
        if (number > 2) {
            factorsArray.push(number);
        }

        if(number >0) {
            for (let i = Math.floor(number/2)+1; i > 0; i--) {
                if (number % i == 0) factorsArray.push(i);
                
            }
            
        }   

        return factorsArray;
    }

    console.log(factors(2));
    console.log(factors(54));
    console.log(factors(-4));
    //zadanie 3 - dodatkowe

    function getMissingElement(array) {
        if (array.length > 1) {
            for (let i = 0; i < array.length-1; i++) {
                if ((array[i+1] - array[i]) > 1) return array[i] +1;
                
            }
        }
        return null;
    }

    console.log(getMissingElement([1,2,3,4,5,6,7]));
    console.log(getMissingElement([6,7,8,10,11,12,13,14,15]));
    console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]));

    //Zadadnie 4 - dodatkowe

    function getLastNumbers(number, array) {
        var retArray = [];
        if (typeof(number) != undefined && !isNaN(number))   {
            for (let i = (array.length-number); number > 0; number--, i++) {
            
            retArray.push(array[i]);
            }
        }
        return retArray;
    }

    console.log(getLastNumbers(2, [1,2,3,4,5,6,7])); // [6, 7]
    console.log(getLastNumbers(4, [6,7,8,10,11,12,13,14,15])); // [12, 13, 14, 15]
    console.log(getLastNumbers([-4,-3,-2,0,1,2,3,4])); // []
    console.log(getLastNumbers('ala', [-4,-3,-2,0,1,2,3,4])); // []
})