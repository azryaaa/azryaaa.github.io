document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("startButton");
    const textContainer = document.getElementById("textContainer");

    startButton.addEventListener("click", () => {
        startAnimation();
        displayText();
    });

    function startAnimation() {
        const button = document.getElementById("startButton");
        button.style.animation = "fadeOut 0.5s ease-in-out forwards";

        setTimeout(() => {
            document.body.classList.remove("not-loaded");
        }, 1000);
    }

    function displayText() {
        // Show the text container and start the fade-in animation after 1 second
        setTimeout(() => {
            textContainer.style.display = "block";
            textContainer.style.opacity = 1; // Set opacity to 1 for fade-in
        }, 5000); // 1000 milliseconds (1 second)
    }
});
