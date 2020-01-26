document.addEventListener("DOMContentLoaded", function () {

    console.log("działa");
    var team1 = document.getElementById("team1");
    var points1 = document.getElementById("points1");
    var team2 = document.getElementById("team2");
    var points2 = document.getElementById("points2");
    var table = document.querySelector("table");
    var form = document.querySelector("form");
    var button = document.querySelector("button");

    console.log(button, team1, team2, points1, points2, form);

    form.addEventListener('submit', function (evt) {

        team1.setAttribute('name', team1.value);
        points1.setAttribute('name', points1.value);
        team2.setAttribute('name', team2.value);
        points2.setAttribute('name', points2.value);
        //pass2.setAttribute('name', pass2.value );
        // agree.setAttribute('name', agree.value );
        if (validate() == true) {
            let newRow = table.insertRow(-1);
            console.log(table);
            var td1 = newRow.insertCell(0); //document.createElement("td").innerText = orderId.value;
            var td1Text = document.createTextNode(team1.value);
            td1.appendChild(td1Text);
            var td2 = newRow.insertCell(1);
            var td2Text = document.createTextNode(team2.value);
            //ment.createTextNode(item.value);
            td2.appendChild(td2Text);
            var td3 = newRow.insertCell(2);
            var td3Text = document.createTextNode(points1.value + " - " + points2.value);
            td3.appendChild(td3Text);

        }
        evt.preventDefault();
    });

    function validate() {

        validated = true;

        if (team1.value == team2.value) {

            validated = false;

        }

        if (points1.value < 0 || points2.value < 0) {
            validated = false;
            
        }

        return validated;

    }

});