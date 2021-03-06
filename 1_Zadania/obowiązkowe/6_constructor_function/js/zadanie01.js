var Robot = function (name) {
    this.name = name;
    this.isFunctional = false;
}

Robot.prototype.sayHi = function (toWho) {
    if (this.isFunctional === true) {
        console.log("Robot " + this.name + " greets " + toWho);
    }
    else {
        console.log("Robot " + this.name + "is broken");
    }
};

Robot.prototype.changeName = function (newname) {
    console.log("Robot " + this.name + "changes name to " + newname);
    this.name = newname;
};

Robot.prototype.fixIt = function () {
    this.isFunctional = true;
    console.log("Robot " + this.name + "was fixed");
};


var robot1 = new Robot("Alex");
robot1.fixIt();
var robot2 = new Robot("Bastion");

robot2.fixIt();
robot1.sayHi("Bastion");
robot1.changeName("Bubu");
robot2.sayHi("Zbylu");