document.addEventListener("DOMContentLoaded", function() {
    
    var button = document.querySelector(".button");
    var table = document.querySelector(".menu");
    
    button.addEventListener('click', function() {
        
        var currentRows = table.getElementsByTagName("li").length;
        var liElement = document.createElement("li");
        liElement.innerText = `Element ${currentRows+1} w chwili dodania było ${currentRows} elementów`;
        table.appendChild(liElement);
        
    });    


});