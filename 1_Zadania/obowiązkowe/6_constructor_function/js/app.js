//Zadanie 0

var Basket = function () {
    this.products = [];
    this.sum = 0; 

};


Basket.prototype.addProduct = function(name, price) {
    this.products.push({name, price});

};

Basket.prototype.showBasket = function() {

    // for (let index = 0; index < this.products.length; index++) {
    //     console.log(this.products[index]);
        
    // }
    return this.products

};

var aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

var bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();


