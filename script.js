document.getElementById('registroForm').addEventListener('submit', function(event){
    event.preventDefault();  // Evita que el formulario se envíe de la forma tradicional

    // Obtiene los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const cedula = document.getElementById('cedula').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    // Muestra los datos en el div resultado
    const resultado = `
        <h2>Datos Registrados</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellido:</strong> ${apellido}</p>
        <p><strong>Cédula:</strong> ${cedula}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;
    
    document.getElementById('resultado').innerHTML = resultado;
});
