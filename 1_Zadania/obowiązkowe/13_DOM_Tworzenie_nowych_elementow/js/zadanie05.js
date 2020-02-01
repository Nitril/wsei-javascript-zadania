document.addEventListener("DOMContentLoaded", function () {

    var lista1 = document.getElementById("list1");
    var lista2 = document.getElementById("list2");
    var buttons = document.getElementsByClassName("moveBtn");

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener("click", function () {
            var li = this.parentElement;

            console.log(li.parentElement.id);

            if (li.parentElement.id == "list1") {
                lista2.appendChild(li);

            }
            else lista1.appendChild(li);;

        });

    }

});