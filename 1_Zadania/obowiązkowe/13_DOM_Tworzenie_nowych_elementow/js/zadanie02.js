document.addEventListener("DOMContentLoaded", function () {

    var button = document.getElementById("addBtn");
    var orders = document.getElementById("orders");
    var orderId = document.getElementById("orderId");
    var item = document.getElementById("item");
    var quantity = document.getElementById("quantity");

    button.addEventListener('click', function () {
        console.log(orders);
        //var tr = document.createElement("tr");
        let newRow = orders.insertRow(-1);

        var td1 = newRow.insertCell(0); //document.createElement("td").innerText = orderId.value;
        var td1Text = document.createTextNode(orderId.value);
        td1.appendChild(td1Text);
        var td2 = newRow.insertCell(1);
        var td2Text = document.createTextNode(item.value);
        td2.appendChild(td2Text);
        var td3 = newRow.insertCell(2);
        var td3Text = document.createTextNode(quantity.value);
        td3.appendChild(td3Text);


    });

});

