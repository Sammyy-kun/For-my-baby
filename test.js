document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        const password = document.getElementById('password').value.toLowerCase();
        const resultElement = document.getElementById('result');

        if (password === 'dianne' || password === 'Dianne') { 
            resultElement.textContent = 'Correct baby! This is my gift!';
            setTimeout(function() {
                window.location.href = 'test2.html';
            }, 3000); 
        } else {
            resultElement.textContent = 'Incorrect password. Please try again baby!';
        }

        const modalElement = document.getElementById('exampleModalCenter');
        const modal = new bootstrap.Modal(modalElement);
        modal.show();
    });
});

const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

function calculateDays() {
    const startDate = new Date('2018-09-23');
    const today = new Date();
    const timeDifference = today - startDate; 
    const daysTogether = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); 

    document.getElementById('days-counter').textContent = `${daysTogether} days`;
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
}

calculateDays();
updateClock();
setInterval(updateClock, 1000); 