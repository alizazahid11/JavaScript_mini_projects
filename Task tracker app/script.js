const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
    taskList.innerHTML += `<li>${taskInput.value}</li>`;
    taskInput.value = "";
});

taskList.addEventListener("click", event => {
    event.target.classList.toggle("completed");
});
