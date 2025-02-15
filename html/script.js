window.addEventListener("message", function(event) {
    if (event.data.action === "showNotification") {
        let notif = document.getElementById("notification");
        let progressBar = document.getElementById("progress-bar");

        notif.style.display = "block";
        notif.querySelector("#notif-title").innerText = event.data.title;
        notif.querySelector("#notif-message").innerText = event.data.message;

        let length = event.data.length || 5000;
        let interval = 10; // Update every 10ms
        let step = (100 / (length / interval)); // Step size
        let width = 100;

        progressBar.style.width = "100%";

        let timer = setInterval(() => {
            if (width <= 0) {
                clearInterval(timer);
                notif.style.display = "none";
                progressBar.style.width = "100%"; // Reset for next notification
            } else {
                width -= step;
                progressBar.style.width = width + "%"; 
                progressBar.style.right = "0"; // Keep anchored to the right
            }
        }, interval);
    }
});
