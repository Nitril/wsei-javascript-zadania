
// funkcja sayHi wywołuje się poprawnie przed (jak i po definicji funkcji)
sayHi();

function sayHi() {
    console.log("Cześć")


}
// funkcja sayHi wywołuje się poprawnie przed (jak i po definicji funkcji)
sayHi();

// funkcja sayHello nie wywołuje się poprawnie wywołyawna przed jak definicją funkcji
sayHello();

var sayHello = function() {

    console.log("Witaj")


}

sayHello();
// funkcja sayHello wywołuje się poprawnie wywołyawna po definicji funkcji