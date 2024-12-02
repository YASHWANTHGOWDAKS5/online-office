const eventForm = document.getElementById("eventForm");
const eventName = document.getElementById("eventName");
const eventDate = document.getElementById("eventDate");
const eventList = document.getElementById("eventList");

eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = eventName.value.trim();
    const date = eventDate.value;
    if (name && date) {
        const li = document.createElement("li");
        li.textContent = `${name} - ${date}`;
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener("click", () => li.remove());
        li.appendChild(deleteBtn);
        eventList.appendChild(li);
        eventName.value = "";
        eventDate.value = "";
    }
});
