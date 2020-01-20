document.addEventListener('DOMContentLoaded', function () {


    

        var button1 = document.getElementById("button1");
    var c1 = 0;
    var button2 = document.getElementById("button2");
    var c2 = 0;
    var button3 = document.getElementById("button3");
    var c3 = 0;
    var counters = document.getElementsByClassName("counter");
    button1.addEventListener('click', function() {
        //var counter = this.querySelector('.counter');
        // console.log(this);
        c1++;
        counters[0].innerText = c1 ;

    }, false);

    button2.addEventListener('click', function() {
        //var counter = this.querySelector('.counter');
        c2++;
        counters[1].innerText = c2 ;        
    }, false);

    button3.addEventListener('click', function() {
        //var counter = this.querySelector('.counter');
        c3++;
        counters[2].innerText = c3 ;
    }, false);
}, false);