const fileForm = document.getElementById("fileForm");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");

fileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const file = fileInput.files[0];
    if (file) {
        const li = document.createElement("li");
        li.textContent = file.name;
        fileList.appendChild(li);
        fileInput.value = "";
    }
});
