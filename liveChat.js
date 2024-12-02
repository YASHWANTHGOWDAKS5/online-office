const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatWindow = document.getElementById("chatWindow");

chatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const message = chatInput.value.trim();
    if (message) {
        const p = document.createElement("p");
        p.textContent = message;
        chatWindow.appendChild(p);
        chatInput.value = "";
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});
