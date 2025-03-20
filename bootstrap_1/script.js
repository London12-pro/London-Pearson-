document.addEventListener("DOMContentLoaded", function () {
    let isUserLoggedIn = false;

    let messageElement = document.createElement("p");
    messageElement.classList.add("welcome-message");

    if (isUserLoggedIn) {
        messageElement.textContent = "Welcome back, enjoy shopping!";
    } else {
        messageElement.textContent = "Please log in to start shopping.";
    }

    document.body.appendChild(messageElement);
});
