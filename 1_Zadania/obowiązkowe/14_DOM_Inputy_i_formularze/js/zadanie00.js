document.addEventListener("DOMContentLoaded", function() {
    
    console.log("działa");
    
    var errorMsg = document.querySelector(".error-message");
    var form = document.querySelector("form");
    var email = document.getElementById("email");
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var agree = document.getElementById("agree");

    form.addEventListener('submit', function(evt) {


        email.setAttribute('name', email.value );
        name.setAttribute('name', name.value );
        surname.setAttribute('name', surname.value );
        pass1.setAttribute('name', pass1.value );
        pass2.setAttribute('name', pass2.value );
        // agree.setAttribute('name', agree.value );

        console.log(agree.value);
        errorMsg.innerText = "";
        if (email.value.indexOf('@') < 0) {
            
            errorMsg.innerText += "Email musi posiadać znak @\n";
            evt.preventDefault();

        } 

        if (name.value.length <= 6) {
            
            errorMsg.innerText += "Twoje imię jest za krótkie\n";
            evt.preventDefault();

        }         

        if (surname.value.length <= 6) {
            
            errorMsg.innerText += "Twoje nazwisko jest za krótkie\n";
            evt.preventDefault();

        } 

        if (pass1.value.length === 0 || pass1.value !== pass2.value ) {
          
            errorMsg.innerText += "Hasła nie są takie same lub puste\n";
            evt.preventDefault();

        } 

        if (agree.checked != true) {
            
            errorMsg.innerText += "Musisz zaakceptować warunki\n";
            evt.preventDefault();
            
        } 


    });
    

});