// Zadanie 0

var car = {

    brand: "Mercedes",
    color: "Czerwony",
    numberOfKilometers: 0,

    printCarinfo: function() {

        return `${this.color} ${this.brand}, ${this.numberOfKilometers}`;


    },

    drive: function(km) {
        this.numberOfKilometers += km;
    }        
    


}

car.printCarinfo();
car.drive(20);
car.printCarinfo();

// Zadanie 1

car.controlList = [];

car.addControl = function(controlDate) {
    this.controlList.push(controlDate);

};

car.showAllControls = function() {
    for (let i = 0; i < this.controlList.length; i++){

        console.log(this.controlList[i]);
        
    }


} 

// Zadanie 3 

var stairs = {

    step: 0,
    up: function() {
        this.step++;

    },

    down: function() {

        this.step--;
    },


    printStep: function() {
        console.log(this.step);

    }
}

stairs.up();
stairs.up();
stairs.up();
stairs.down(); 
stairs.printStep()