const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => li.remove());
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
