document.addEventListener("DOMContentLoaded", function () {

    console.log("dziala");
    var images = document.querySelectorAll("[alt]");
    var choiceList = document.getElementsByClassName("form-control")[0];
    console.log(choiceList.length);
    validateSelections();

    for (let i = 0; i < choiceList.length; i++) {

        choiceList.addEventListener('change', function (e) {

            validateSelections();

        });

    }


    function validateSelections() {

        var selected = document.querySelector("select").value;

        if (selected == 'Windows') {

            document.querySelector("[alt='Windows']").style.display = "block";
            document.querySelector("[alt='Ubuntu']").style.display = "none";
            document.querySelector("[alt='Apple']").style.display = "none";

        }
        else if (selected == 'Ubuntu') {

            document.querySelector("[alt='Ubuntu']").style.display = "block";
            document.querySelector("[alt='Windows']").style.display = "none";
            document.querySelector("[alt='Apple']").style.display = "none";

        }
        else if (selected = 'Os X') {

            document.querySelector("[alt='Ubuntu']").style.display = "none";
            document.querySelector("[alt='Windows']").style.display = "none";
            document.querySelector("[alt='Apple']").style.display = "block";
        }


    }



});
