document.addEventListener("DOMContentLoaded", function () {

    var cardNumber = document.getElementById("name");
    var type = document.getElementById("type");

    cardNumber.addEventListener('input', function(){

        var currentValue = cardNumber.value;
        
        if (currentValue[0] == '4') {
            
            type.innerText = "Visa";
            //console.log(currentValue.length);

            cardNumber.style.removeProperty('border');
            if(currentValue.length < 13 || currentValue.length > 16) {
                cardNumber.style.removeProperty('border');
            }
            else {
                cardNumber.style.borderColor = "green";

            }
        
        }
        else if(currentValue[0] == 5) {
            type.innerText = "Mastercard";
            cardNumber.style.removeProperty('border');
            if(currentValue.length != 16) cardNumber.style.removeProperty('border');
            else cardNumber.style.borderColor = "green";
        }
        else if(currentValue[0] == 3) {
            type.innerText = "American Express";      
            cardNumber.style.removeProperty('border');     
            if  (currentValue[1] == 4 || currentValue[1] == 7 || !currentValue[1]) {
                type.innerText = "American Express";
                if(currentValue.length != 15) cardNumber.style.removeProperty('border');
                else cardNumber.style.borderColor = "green";
            }
            else type.innerText = "";

        }
        else {

            type.innerText = "";
        }        


    });

});