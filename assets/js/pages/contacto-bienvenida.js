const url = new URL(window.location.href);
const currentEmail = url.searchParams.get('email');
if (!currentEmail) {
    window.location.href = 'sing-in.html';
} else {
    validarCorreo(currentEmail);
}
function validarCorreo(correo) {
    $.ajax({
        type: 'POST',
        url: 'controller/confirmar-contacto.php',
        data: { correo: correo },
        dataType: 'json',
        success: function(response) {
            if (response === 1) {
                document.getElementById("mensaje").innerHTML = `
                    <h1 class="text-success">Cuenta confirmada correctamente.</h1>
                    <h1 class="text-white">Ya puede cerrar esta página</h1>
                `;
            } else if (response === 2) {
                document.getElementById("mensaje").innerHTML = `
                    <h1 class="text-warning">La cuenta ya ha sido confirmada</h1>
                    <h1 class="text-white">Ya puede cerrar esta página</h1>
                `;
            } else {
                document.getElementById("mensaje").innerHTML = `
                    <h1 class="text-danger">Lo sentimos, pero la cuenta que ingresó no existe en nuestros registros.</h1>
                `;
            }
        }
    });
}

