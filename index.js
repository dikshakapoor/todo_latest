// selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//eventListener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


//helper functions
function addTodo (event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"><i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"><i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to list 
    todoList.appendChild(todoDiv);
    todoInput.value = "";

}

function deleteCheck (event){
const item = event.target;
if (item.classList[0]==='trash-btn'){
    const todoParentElement = item.parentElement;
    todoParentElement.classList.add("fall");
    todoParentElement.addEventListener("transitioned", function() {
        todoParentElement.remove();
    })

}
if (item.classList[0]==='complete-btn'){
    debugger;
    const todoParentElement = item.parentElement;
    todoParentElement.classList.toggle('completed');
}
}