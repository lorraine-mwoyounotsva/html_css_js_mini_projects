const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task");
const columns = document.querySelectorAll(".column");

let taskIdCounter = 4; // starting from 4 since 3 tasks exist initially

// Add new task to "To Do" list
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = newTaskInput.value.trim();
  if (!taskText) return;

  const todoColumn = document.getElementById("todo-column");

  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.id = `task${taskIdCounter++}`;
  newTask.textContent = taskText;

  addDragEvents(newTask);

  todoColumn.appendChild(newTask);
  newTaskInput.value = "";
});

// Drag and Drop handlers
function addDragEvents(task) {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
}

const tasks = document.querySelectorAll(".task");
tasks.forEach(addDragEvents);

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  column.addEventListener("drop", dragDrop);
});

function dragStart(e) {
  e.dataTransfer.setData("text/plain", this.id);
  setTimeout(() => this.classList.add("hide"), 0);
}

function dragEnd(e) {
  this.classList.remove("hide");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("drag-over");
}

function dragLeave(e) {
  this.classList.remove("drag-over");
}

function dragDrop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const draggedTask = document.getElementById(id);
  this.appendChild(draggedTask);
  this.classList.remove("drag-over");
}

