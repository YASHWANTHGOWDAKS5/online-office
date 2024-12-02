document.addEventListener("DOMContentLoaded", () => {
    // Feature data
    const features = {
        taskManager: {
            title: "Task Manager",
            description: "Manage tasks, set deadlines, and track progress. Assign tasks to team members for better collaboration.",
        },
        liveChat: {
            title: "Live Chat",
            description: "Chat with your team in real-time. Keep everyone updated and resolve issues instantly.",
        },
        fileSharing: {
            title: "File Sharing",
            description: "Upload and share project files securely. Access shared files from any device.",
        },
        sharedCalendar: {
            title: "Shared Calendar",
            description: "Stay on top of your schedule with shared calendars. Keep track of meetings, deadlines, and events.",
        },
    };

    // Modal elements
    const modal = document.getElementById("featureModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const closeModal = document.getElementById("closeModal");

    // Event listeners for features
    document.querySelectorAll(".feature").forEach(feature => {
        feature.addEventListener("click", () => {
            const featureId = feature.id;
            if (features[featureId]) {
                modalTitle.textContent = features[featureId].title;
                modalDescription.textContent = features[featureId].description;
                modal.style.display = "flex";
            }
        });
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
