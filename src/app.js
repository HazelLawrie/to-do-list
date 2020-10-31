// Selectors
let toDoInput = document.querySelector(`.to-do-input`);
let toDoButton = document.querySelector(`.to-do-button`);
let toDoList = document.querySelector(`.to-do-list`);

// Event Listeners
toDoButton.addEventListener(`click`, addToDo);
toDoList.addEventListener(`click`, deleteCheck);

// Functions
function addToDo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // To Do Div
    if (toDoInput.value != ``) {
    let toDoDiv = document.createElement(`div`);
    toDoDiv.classList.add(`to-do`);
    // Create Li
    let newToDo = document.createElement(`li`);
    newToDo.innerText = toDoInput.value;
    newToDo.classList.add(`to-do-item`);
    toDoDiv.appendChild(newToDo);
    // Completed Button
    let completedButton = document.createElement(`button`);
    completedButton.innerHTML = `<i class="fas fa-check"></i>`;
    completedButton.classList.add(`completed-button`);
    toDoDiv.appendChild(completedButton);
    // Trash Button
    let trashButton = document.createElement(`button`);
    trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
    trashButton.classList.add(`trash-button`);
    toDoDiv.appendChild(trashButton);
    // Append to lsit
    toDoList.appendChild(toDoDiv);
    // Clear Input value
    toDoInput.value = ``;
    } else {
        alert(`Please enter a task!`);
    }
}

function deleteCheck(e) {
    const item = e.target;
    
    // Delete to do
    if (item.classList[0] === `trash-button`) {
        const toDo = item.parentElement;
        //Animation
        toDo.classList.add(`fall`);
        toDo.addEventListener(`transitionend`, function() {
            toDo.remove();
        });
    }

    //Check Mark
    if (item.classList[0] === `completed-button`) {
        const toDo = item.parentElement;
        toDo.classList.toggle(`completed`);
    }
}

function filterToDo(e) {
    const todos = toDoList.childNodes;
    todos.forEach(function(toDo){
        switch(e.target.value){
            case "all":
                toDo.style.display = "flex";
            break;
            case "completed":
            if(toDo.classList.contains(`completed`)) {
                toDo.style.display = `flex`;
            } else {
                toDo.style.display = `none`;
            }
            break;
            case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
        }
    });
}