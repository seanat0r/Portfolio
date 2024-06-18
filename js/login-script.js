document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        const rightUsername = '74273zr3zewqfbdfDRWAbfugw02?:dlfn2';
        const rightPassword = '73d7f7t27ggNHBN.fhuehiu!kmf34jdfJFBJW';

        console.log('Username:', username);
        console.log('Password:', password);

        if (rightPassword === password && rightUsername === username) {
            window.location.href ='../index.html';
        } else {
            alert('Wrong password OR username. Try again. \n\nFalsches Passwort ODER Benutzername. Bitte versuchen Sie es nocheinmal.');
            form.reset();
        }
    });
});