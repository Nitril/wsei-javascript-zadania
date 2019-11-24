var Calculator = function() {
    this.operationlog = []

}


Calculator.prototype.add = function(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    result = this.num1 + this.num2
    this.operationlog.push(`added ${this.num1} to ${this.num2} got ${result}`);
    return result


};


Calculator.prototype.multiply = function(num1, num2) {

    this.num1 = num1;
    this.num2 = num2;
    result = this.num1 * this.num2
    this.operationlog.push(`multiplied ${this.num1} with ${this.num2} got ${result}`);
    return result


};

Calculator.prototype.subtract = function(num1, num2) {

    this.num1 = num1;
    this.num2 = num2;
    result = this.num1 - this.num2
    this.operationlog.push(`subtracted ${this.num1} from ${this.num2} got ${result}`);
    return result

};

Calculator.prototype.divide = function(num1, num2) {

    this.num1 = num1;
    this.num2 = num2;
    result = this.num1 / this.num2
    this.operationlog.push(`divided ${this.num1} to ${this.num2} got ${result}`);
    return result

};

Calculator.prototype.printOperations = function(num1, num2) {

    for (let index = 0; index < this.operationlog.length; index++) {
        console.log(this.operationlog[index]);
        
    }

};


Calculator.prototype.clearoperations = function(num1, num2) {
    
    this.operationlog = [];


};



var kalkulator = new Calculator();
kalkulator.add(2,2);
kalkulator.multiply(2,2);
kalkulator.subtract(2,2);
kalkulator.divide(2,2);
kalkulator.printOperations(2,2);
kalkulator.clearoperations(2,2);
kalkulator.printOperations(2,2);
