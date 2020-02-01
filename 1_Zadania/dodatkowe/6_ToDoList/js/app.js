document.addEventListener('DOMContentLoaded', function () {

    console.log("Działa");

    var input = document.getElementById("taskInput");
    var addTaskButton = document.getElementById("addTaskButton");
    var taskList = document.getElementById("taskList");
    var priorityInput = document.getElementById("priorityInput");
    var taskListArr = Array.from(taskList.querySelectorAll("li"));  //.getElementsByTagName('li'));
    var removeFinishedTasksButton = document.getElementById("removeFinishedTasksButton");
    var counterNode = document.getElementById("counter");

    updateCount();

    addTaskButton.addEventListener("click", function () {

        let inputTxt = input.value;

        if (inputTxt != "" && inputTxt.length > 5 && inputTxt.length < 100) {

            var task = document.createElement("li");
            var delButton = document.createElement("button");
            var delText = document.createTextNode("Delete");
            var compButton = document.createElement("button");
            var compText = document.createTextNode("Complete");
            var h1 = document.createElement("h1");
            var h4 = document.createElement("h4");
            var taskText = document.createTextNode(input.value);
            var priorityText = document.createTextNode("p" + priorityInput.value);

            h1.appendChild(taskText);
            h4.appendChild(priorityText);
            task.appendChild(h1);
            task.appendChild(h4);
            compButton.appendChild(compText);
            delButton.appendChild(delText);
            task.appendChild(compButton);
            task.appendChild(delButton);
            taskListArr.push(task);

            //counterNode.innerText = taskListArr.length;
            input.value = "";
            priorityInput.value = "";

            updateList(taskListArr);

            compButton.addEventListener('click', function () {

                console.table(taskListArr);
                var color = this.parentNode.style.backgroundColor;
                console.log(color);
                if (color != "red") this.parentNode.style.backgroundColor = "red";
                else this.parentNode.style.backgroundColor = '';
                this.parentNode.classList.toggle("done");

                updateCount();


            }, false);

            delButton.addEventListener('click', function () {

                this.parentNode.parentNode.removeChild(this.parentNode);

                //counter.innerText = taskListArr.length;
                let tsk = this.querySelector("li");


                taskListArr.splice(taskListArr.indexOf(tsk), 1);
                updateCount();

            }, false);

        }


        updateCount();
    }, false);


    removeFinishedTasksButton.addEventListener("click", function () {

        var doneTasks = Array.from(taskList.getElementsByClassName("done"));

        //console.log(doneTasks);

        for (let i = 0; i < doneTasks.length; i++) {
            taskListArr.splice(taskListArr.indexOf(doneTasks[i]), 1);

            updateList(taskListArr);

        }

        updateList(taskListArr);

    }, false);

    function updateCount() {

        var doneTasks = Array.from(taskList.getElementsByClassName("done"));
        listItems = taskListArr.length - doneTasks.length;
        counterNode.innerText = `active tasks: ${listItems}`;

    }

    function updateList(taskListArray) {
        sortList(taskListArray);
        taskList.innerHTML = '';

        for (let i = 0; i < taskListArray.length; i++) {

            taskList.appendChild(taskListArray[i]);

        }

        updateCount();


    }

    function sortList(taskListArray) {

        //console.log(taskListArray[0].querySelector("h4").innerText);
        taskListArray.sort((a, b) => parseInt(b.querySelector("h4").innerText.substring(1)) - parseInt(a.querySelector("h4").innerText.substring(1)));
        //.forEach(li => ul.appendChild(li));



    }

}, false);




