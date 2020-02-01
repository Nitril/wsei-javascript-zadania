
//Zadanie 1 
function countHello(number) {

    var counter = 1;

    var interval = setInterval(() => {
        console.log("Hello ", counter);
        counter++;

        if (counter > number) {

            clearInterval(interval);
        }
    }, 500)
}

countHello(5);



