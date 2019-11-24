var Calculator = function() {
    this.operationlog = [];

}

Calculator.prototype.add = function(num1, num2) {
    
    var result = num1 + num2;
    this.operationlog.push(`added ${num1} to ${num2} got ${result}`);
    return result;

};

Calculator.prototype.multiply = function(num1, num2) {

    result = num1 * num2;
    this.operationlog.push(`multiplied ${num1} with ${num2} got ${result}`);
    return result;

};

Calculator.prototype.subtract = function(num1, num2) {

    result = num1 - num2;
    this.operationlog.push(`substracted ${num1} from ${num2} got ${result}`);
    return result;

};

Calculator.prototype.divide = function(num1, num2) {

    result = num1 / num2;
    this.operationlog.push(`divided ${num1} by ${num2} got ${result}`);
    return result

};

Calculator.prototype.printOperations = function() {

    console.table(this.operationlog);

};


Calculator.prototype.clearoperations = function() {
    
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
