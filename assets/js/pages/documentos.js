function cargarDcumento(valorNegocioId) {
    $.ajax({
        url: 'controller/mostrar_Doc.php',
        type: 'POST',
        data: {
            negocioId: valorNegocioId
        },
        dataType: 'json',
        success: function (response) {
            let datosUno = response;
            let html = '';
            for (let i = 0; i < datosUno.length; i++) {
                let id = datosUno[i].id;
                let nombre = datosUno[i].nombre;
                let descripcion = datosUno[i].descripcion;
                let item = datosUno[i];
                let title = item.nombre;
                let description;
                if (item.unidad_ngc === 1) {
                    description = "Store"
                } else {
                    description = "Aduana MX";
                }
                html += '<div class="col-md-6 col-lg-4 col-xl-3">';
                html += '  <div class="card h-100">';
                html += '    <div class="card-body d-flex justify-content-center text-center flex-column p-8">';
                html += '      <a href="#" class="text-gray-800 text-hover-primary d-flex flex-column" onclick="actualizarDocumento(' + item.id + ')">';
                html += '        <div class="symbol symbol-60px mb-5">';
                html += '          <img src="assets/media/svg/files/pdf.svg" alt="">';
                html += '        </div>';
                html += '        <div class="fs-5 fw-bolder mb-2">' + title + '</div>';
                html += '      </a>';
                html += '      <div class="fs-7 fw-bold text-gray-400">' + description + '</div>';
                html += '    </div>';
                html += '  </div>';
                html += '</div>';
            }
            let total = datosUno.length;
            document.getElementById("spnQty").innerHTML = total;
            let container = document.getElementById('dvRgDocumentos');
            container.innerHTML = html;
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}
cargarDcumento("0");
function actualizarDocumento(id) {
    location.href = 'documentos-new.html?doc=' + id;
}