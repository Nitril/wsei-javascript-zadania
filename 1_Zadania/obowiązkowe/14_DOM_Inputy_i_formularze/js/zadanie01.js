document.addEventListener("DOMContentLoaded", function () {

    var invoice = document.getElementById("invoice");
    var invoiceData = document.getElementById("invoiceData");
    invoiceData.style.visibility = "hidden";

    invoice.addEventListener('click', function () {
        if (invoice.checked == true) invoiceData.style.visibility = "visible";
        else invoiceData.style.visibility = "hidden";


    })




});