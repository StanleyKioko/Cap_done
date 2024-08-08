// particles.js
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.querySelector('.particles');

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particlesContainer.appendChild(particle);

        const size = Math.random() * 10 + 5; // Random size between 5px and 15px
        const duration = Math.random() * 2 + 3; // Random duration between 3s and 5s
        const left = Math.random() * 100; // Random position within the container width
        const top = Math.random() * 100; // Random position within the container height

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}%`;
        particle.style.top = `${top}%`;
        particle.style.animation = `move ${duration}s linear infinite`;

        setTimeout(() => {
            particle.remove();
        }, duration * 1000); // Remove particle after its animation ends
    }

    function generateParticles() {
        setInterval(createParticle, 100); // Create a new particle every 100ms
    }

    generateParticles();
});
