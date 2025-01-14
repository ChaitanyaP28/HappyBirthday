// Function to get query parameter by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Dynamically update the name from the URL parameter
document.addEventListener("DOMContentLoaded", () => {
    const name = getQueryParam('name');
    if (name) {
        document.getElementById('name').textContent = name; // Set the name in the headline
    } else {
        document.getElementById('name').textContent = 'Friend'; // Default to 'Friend' if no name is provided
    }

    // Generate stars dynamically
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100;

    // Create static stars
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('span');
        const size = Math.random() * 2 + 1; // Random size
        const x = Math.random() * 100; // Random position
        const y = Math.random() * 100;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;

        starsContainer.appendChild(star);
    }

    createShootingStars(); // Initialize shooting stars
});

// Function to create sporadic shooting stars with tails
function createShootingStars() {
    const starsContainer = document.querySelector('.stars');
    
    // Function to create a single shooting star
    function createShootingStar() {
        const star = document.createElement('div');
        star.classList.add('shooting-star');

        // Create tail div for the shooting star
        const tail = document.createElement('div');
        tail.classList.add('tail');
        star.appendChild(tail);

        // Set random starting position
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;

        // Append to the stars container
        starsContainer.appendChild(star);

        // Remove the star and tail after animation
        setTimeout(() => {
            star.remove();
        }, 1500); // Match the animation duration
    }

    // Function to create a random number of shooting stars between 1 and 5
    function createRandomShootingStars() {
        const numberOfStarsOnScreen = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
        for (let i = 0; i < numberOfStarsOnScreen; i++) {
            createShootingStar(); // Create the stars
        }
    }

    // Create an initial shooting star when the page loads
    createRandomShootingStars();

    // Create a shooting star at random intervals
    setInterval(() => {
        createRandomShootingStars(); // Continue creating shooting stars
    }, Math.random() * 3000 + 2000); // Random interval between 2 to 5 seconds
}

// Reveal the surprise
function revealMessage() {
    const surprise = document.querySelector('.surprise');
    surprise.classList.remove('hidden');
}
