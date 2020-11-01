function addFunction() {
    // adding item
    var todoText = document.getElementById("item").value;
    document.getElementById("item").value = '';

    // create the div and apply css to it
    var outerDivOfTodoText = document.createElement("div");
    outerDivOfTodoText.className = outerDivOfTodoText.className + 'outer-div-todo';
    outerDivOfTodoText.style.cssText = 'margin: 5px; padding: 10px; background-color: #ffffff; line-height: 1.9; box-shadow: 0 0 5px #343a40';

    // create the todoText element and append it to outer div
    var toDoTextNode = document.createTextNode(todoText);
    outerDivOfTodoText.appendChild(toDoTextNode);

    // create dlt button and apply css to it
    var deleteButton = document.createElement("button");
    deleteButton.className = 'btn btn-sm btn-danger float-right mb-2 delete';
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
    deleteButton.addEventListener('click', onClickDeleteTask);

    // create node of delete item
    // var outerDivOfDeletedItem = document.createElement(deletedItem);

    // create complete button and apply css to it
    var completeButton = document.createElement("button");
    completeButton.className = 'btn btn-sm btn-success float-right mb-2 mr-2 complete';
    completeButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> Complete';
    completeButton.addEventListener('click', onClickCompleteTask);


    // append delete button to outer div
    outerDivOfTodoText.appendChild(deleteButton);

    // append complete button to outer div
    outerDivOfTodoText.appendChild(completeButton);

    

    // append to result div
    document.getElementById("result").appendChild(outerDivOfTodoText);   

    // append in complete task list
    // document.getElementById("complete").appendChild(completeTask);

    
}

function onClickCompleteTask(event) {
    var closestDiv = this.closest('.outer-div-todo');
    // move item to the complete list 
    var cloneDiv = closestDiv.cloneNode(true);
    cloneDiv.className = 'bg-warning';
    cloneDiv.classList.remove('outer-div-todo');
    cloneDiv.className = cloneDiv.className + ' outer-div-complete d-none temp-div-class';
    document.getElementById("complete").appendChild(cloneDiv);

    var outers = document.querySelectorAll('.temp-div-class');
    for(var i=0; i < outers.length; i++) {
        var elements_in_outer = outers[i].querySelectorAll(".delete, .complete");

        for(var j=0; j < elements_in_outer.length; j++) {
            elements_in_outer[j].remove();
        }
    }

    cloneDiv.classList.remove('temp-div-class');
    cloneDiv.classList.remove('d-none');

    // add back to todo list button
    var backButton = document.createElement("button");
    backButton.className = 'btn btn-sm btn-primary float-right mb-2 mr-2 back';
    backButton.innerHTML = '<i class="fa fa-undo" aria-hidden="true"></i> Back TODO';
    backButton.addEventListener('click', onlClickBack);

    // append back button to outer div
    cloneDiv.appendChild(backButton);
    
    this.closest('.outer-div-todo').remove();
}

function onClickDeleteTask() {
    this.closest('.outer-div-todo').remove();
}

function onlClickBack() {
    var closestDivBack = this.closest('.outer-div-complete');
    var cloneDivBack = closestDivBack.cloneNode(true);
    cloneDivBack.classList.remove('bg-warning');
    

    cloneDivBack.classList.remove('outer-div-complete');
    cloneDivBack.className = cloneDivBack.className + 'outer-div-back d-none back-div-class';
    document.getElementById('result').appendChild(cloneDivBack);

    // deleting the back todo button
    var outers = document.querySelectorAll('.back-div-class');
    for(var i=0; i<outers.length;i++) {
        var elements_in_outer = outers[i].querySelectorAll(".back");
        for(var j=0; j<elements_in_outer.length; j++) {
            elements_in_outer[j].remove();
        }
    }

    // create dlt button and apply css to it
    var deleteButton = document.createElement("button");
    deleteButton.className = 'btn btn-sm btn-danger float-right mb-2 delete';
    deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i> Delete';
    deleteButton.addEventListener('click', onClickDeleteTask);

    // append delete button to outer div
    cloneDivBack.appendChild(deleteButton);

    // back to todo list item delete
    function onClickDeleteTask() {
        this.closest('.outer-div-back').remove();
    } 

    // create complete button and apply css to it
    var completeButton = document.createElement("button");
    completeButton.className = 'btn btn-sm btn-success float-right mb-2 mr-2 complete';
    completeButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i> Complete';
    completeButton.addEventListener('click', onClickCompleteTask);

    // append complete button to outer div
    cloneDivBack.appendChild(completeButton);

    // complete back to todo list item
    function onClickCompleteTask() {
        var closestDiv = this.closest('.outer-div-back');
    // move item to the complete list 
    var cloneDiv = closestDiv.cloneNode(true);
    cloneDiv.className = 'bg-warning';
    cloneDiv.classList.remove('outer-div-back');
    cloneDiv.className = cloneDiv.className + ' outer-div-complete d-none temp-div-class';
    document.getElementById("complete").appendChild(cloneDiv);

    var outers = document.querySelectorAll('.temp-div-class');
    for(var i=0; i < outers.length; i++) {
        var elements_in_outer = outers[i].querySelectorAll(".delete, .complete");

        for(var j=0; j < elements_in_outer.length; j++) {
            elements_in_outer[j].remove();
        }
    }

    cloneDiv.classList.remove('temp-div-class');
    cloneDiv.classList.remove('d-none');

    // add back to todo list button
    var backButton = document.createElement("button");
    backButton.className = 'btn btn-sm btn-primary float-right mb-2 mr-2 back';
    backButton.innerHTML = '<i class="fa fa-undo" aria-hidden="true"></i> Back TODO';
    backButton.addEventListener('click', onlClickBack);

    // append back button to outer div
    cloneDiv.appendChild(backButton);
    
    this.closest('.outer-div-back').remove();
    }

    cloneDivBack.classList.remove('back-div-class');
    cloneDivBack.classList.remove('d-none');

    this.closest('.outer-div-complete').remove();
}
