
//Zadanie 1

function Tree(type) {
    this.type = type;

};

var tree1 = new Tree('sosna');
var tree2 = new Tree('buk');
var tree3 = new Tree('świerk');

Tree.prototype.bloom = function () {
    return 'I am blooming';
};

console.log(tree1.bloom());


