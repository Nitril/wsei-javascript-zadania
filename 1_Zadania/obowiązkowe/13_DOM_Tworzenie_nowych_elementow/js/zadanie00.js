document.addEventListener("DOMContentLoaded", function() {


    var buttons = document.getElementsByClassName('deleteBtn');
    var table=  document.getElementById("orders");

    for (let i = 0; i < buttons.length; i++) {
        
        buttons[i].addEventListener("click", function() {
            var listElement = this.parentElement.parentElement.rowIndex;
            table.deleteRow(listElement);
            console.log(listElement);   
            //table.deleteRow(this); //.classList.add("hidden");

        });
              
    }

});