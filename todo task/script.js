

var addBtn = document.getElementById("addBtn");
var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

var tasks = []; 

function addTask() {
  var taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push(taskText);
  displayTasks();
  taskInput.value = "";
}

function displayTasks() {
  taskList.innerHTML = "";

  for (var i = 0; i < tasks.length; i++) {
    var li = document.createElement("li");
    li.textContent = tasks[i];

    
    li.onclick = function () {
      this.classList.toggle("completed");
    };

    
    var btnContainer = document.createElement("div");
    btnContainer.className = "buttons";


    var editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";

    editBtn.onclick = (function(index) {
      return function() {
        var newTask = prompt("Edit your task:", tasks[index]);
        if (newTask !== null && newTask.trim() !== "") {
          tasks[index] = newTask.trim();
          displayTasks();
        }
      };
    })(i);

    
    var delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete";

    delBtn.onclick = (function(index) {
      return function() {
        tasks.splice(index, 1);
        displayTasks();
      };
    })(i);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(delBtn);

    li.appendChild(btnContainer);
    taskList.appendChild(li);
  }
}

addBtn.onclick = addTask;
