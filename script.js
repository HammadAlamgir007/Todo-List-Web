// Select DOM elements
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const taskCounter = document.getElementById("task-counter");

let totalTasks = 0;
let remainingTasks = 0;

// Update task counter
taskCounterUpdate = () => {
    taskCounter.textContent = `Total Tasks: ${totalTasks} | Remaining Tasks: ${remainingTasks}`;
};

// Add new task function
addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create task elements
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", markAsCompleted);

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", deleteTask);

    // Append elements to list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Append list item to task list
    taskList.appendChild(listItem);

    // Update counters
    totalTasks++;
    remainingTasks++;
    taskCounterUpdate();

    // Clear input field
    taskInput.value = "";
};

// Mark task as completed
markAsCompleted = (event) => {
    const listItem = event.target.parentElement;

    if (event.target.checked) {
        listItem.classList.add("completed");
        remainingTasks--;
    } else {
        listItem.classList.remove("completed");
        remainingTasks++;
    }
    taskCounterUpdate();
};

// Delete task
deleteTask = (event) => {
    const listItem = event.target.parentElement;
    if (!listItem.querySelector("input").checked) {
        remainingTasks--;
    }
    totalTasks--;
    taskList.removeChild(listItem);
    taskCounterUpdate();
};

// Add event listener to "Add" button
addButton.addEventListener("click", addTask);
