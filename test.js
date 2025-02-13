document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault();
        const password = document.getElementById('password').value.toLowerCase();
        const resultElement = document.getElementById('result');

        if (password === 'dianne') { 
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