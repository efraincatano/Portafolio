const userInput = document.querySelector(".userInput input");
const filters = document.querySelectorAll(".filters span");
const clearAll = document.querySelector(".clearAll");
const taskList = document.querySelector("#taskList");


let todos = JSON.parse(localStorage.getItem("todoList"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.all").classList.remove("all");
        btn.classList.add("all");
        showTodo(btn.id);
    });
});

function showTodo(filter) {
    let li = "";
    if(todos) {
        todos.forEach((todo, id) => {
            let completed = todo.status == "completed" ? "checked" : "";
            if(filter == todo.status || filter == "all") {
                li += `<li id="task" class="list-group-item">
                            <label for="${id}">
                                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${completed}>
                                <p class="${completed}">${todo.name}</p>
                            </label>
                            <div class="deleteBtn">
                                <button type="button" onclick='deleteTask(${id}, "${filter}")'>Delete</button>
                            </div>
                        </li>`;
            }
        });
    }
    taskList.innerHTML = li || `<span>You don't have any task here</span>`;
    let checkTask = taskList.querySelectorAll("#task");
}
showTodo("all");

function updateStatus(selectedTask) {
    let taskName = selectedTask.parentElement.lastElementChild;
    if(selectedTask.checked) {
        taskName.classList.add("checked");
        todos[selectedTask.id].status = "completed";
    } else {
        taskName.classList.remove("checked");
        todos[selectedTask.id].status = "active";
    }
    localStorage.setItem("todoList", JSON.stringify(todos))
}

clearAll.addEventListener("click", () => {
    todos.splice(0, todos.length);
    localStorage.setItem("todoList", JSON.stringify(todos));
    showTodo()
});


function deleteTask(deleteId, filter) {
    todos.splice(deleteId, 1);
    localStorage.setItem("todoList", JSON.stringify(todos));
    showTodo(filter);
}

userInput.addEventListener("keyup", e => {
    let userTask = userInput.value;
    if (e.key == "Enter" && !userTask == "") {
        if (!todos){
            todos = [];
        }
        let todosInfo = { name: userTask, status: "active" };
        todos.push(todosInfo);
        userInput.value = "";
        localStorage.setItem("todoList", JSON.stringify(todos))
        showTodo("all");

    }
});
