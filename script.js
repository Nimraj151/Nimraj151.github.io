// Example: Add a greeting based on the time of day
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good morning!';
    } else if (hours < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    const header = document.querySelector('header');
    const greetingElement = document.createElement('p');
    greetingElement.textContent = greeting;
    header.appendChild(greetingElement);
});
