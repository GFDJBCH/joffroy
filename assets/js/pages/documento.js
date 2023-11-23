currentLang = localStorage.getItem("language");
moment.locale(currentLang);

const dvRgDocumentos = document.getElementById('dvRgDocumentos');
let documentList = [];
function documentos() {

  let documentosBaja = document.getElementById("documentos_baja").checked;
  let personaFisica = document.getElementById("persona_fisica").checked;
  let personaMoral = document.getElementById("persona_moral").checked;
  let personaExtranjero = document.getElementById("persona_extranjero").checked;

  const data = new FormData();
  data.append("baja", documentosBaja);
  data.append("fisica", personaFisica);
  data.append("moral", personaMoral);
  data.append("extranjero", personaExtranjero);
  fetch('controller/buscar-documentos.php', {
    method: "POST",
    body: data
  })
      .then(response => response.json())
      .then(response => {
        documentList = response;
        cargar_html_documento(response)
      });
}

const input = document.getElementById('kt_filter_search');
input.addEventListener('input', (event) => {
  const textoIngresado = event.target.value;
  const valorBusqueda = textoIngresado.toLowerCase();
  const idiomatemp = localStorage.getItem("language");
  const resultados = documentList.filter((objeto) => {
    if (idiomatemp === "es") {
      return objeto.nombre.toLowerCase().includes(valorBusqueda);
    } else {
      return objeto.nombre_ingles.toLowerCase().includes(valorBusqueda);
    }
  });
  cargar_html_documento(resultados);
});

function cargar_html_documento(response) {
  const datosUno = response;
  let html = '';
  for (const item of response) {
    const id = item.id;
    const title = (currentLang === "en" ? item.nombre_ingles : item.nombre);
    let ribbon = '';
    let ribbon_color = '';
    if (item.fch_borrar) {
      ribbon = `
        <div class="ribbon ribbon-triangle ribbon-top-start border-danger rounded-top rounded-end-0">
          <div class="ribbon-icon mt-n5 ms-n6">
            <i class="bi bi-trash-fill fs-3 text-white"></i>
          </div>
        </div>
      `;
      ribbon_color = 'bg-light-danger';
    }
    html += `
    <div class="col-sm-12 col-md-4 mb-3 h-100">
          <div class="card card-custom card-stretch shadow-sm cursor-pointer ${ribbon_color}" onclick="actualizarDocumento(${item.id})">
            <div class="card-header card-header-tabs-line">
            ${ribbon}
              <div class="card-title">
                <span class="card-icon">
                    <i class="flaticon-list-2 text-primary font-size-h1"></i>
                </span>
                <h3 class="card-label">
                  <span class="text-primary" data-lang-key="documents-list-title">${title}</span><i
                  class="mr-2"></i>
                  <small class="d-block" data-lang-key="supplier-title-quantity">${(currentLang === "en" ? "Code" : "Código")}: ${item.codigo}</small>
                </h3>
              </div>
              <div class="card-toolbar">
                <img src="assets/media/svg/files/pdf.svg" alt="PDF" width="40" class="img-fluid">
              </div>
            </div>
            <div class="card-body">
              <p class="m-0 text-truncate"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              data-bs-trigger="hover"
              title="${(item.descripcion ? (currentLang === "en" ? item.description_english : item.descripcion) : (currentLang === "en" ? "No description" : "Sin descripción"))}">${(item.descripcion ? (currentLang === "en" ? item.description_english : item.descripcion) : (currentLang === "en" ? '<small class="text-muted">No description</small>' : '<small class="text-muted">Sin descripción</small>'))}</p>
            </div>
            <div class="card-footer py-3">
            
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <span class="fs-9 badge badge${(item.fisica ? '-primary': '-light')} badge-inline w-100 text-uppercase">${(currentLang === "en" ? "Physical p." : "P. Física")}</span>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <span class="fs-9 badge badge${(item.moral ? '-primary': '-light')} badge-inline w-100 text-uppercase">${(currentLang === "en" ? "Moral p." : "P. Moral")}</span>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <span class="fs-9 badge badge${(item.extranjero ? '-primary': '-light')} badge-inline w-100 text-uppercase">${(currentLang === "en" ? "Foreign p." : "P. Extranjero")}</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
    `;
  }
  document.getElementById("spnQty").textContent = response.length;
  document.getElementById('dvRgDocumentos').innerHTML = html;

  document.getElementById('kt_filter_search').placeholder = currentLang === "en" ? "Search..." : "Buscar...";
}
function actualizarDocumento(id) {
  location.href = 'documentos-new.html?doc='+ id;
}

function restablecerFiltro() {
  document.getElementById("documentos_baja").checked = false;
  document.getElementById("persona_fisica").checked = true;
  document.getElementById("persona_extranjero").checked = true;
  document.getElementById("persona_moral").checked = true;
  documentos();
}

getInfo();
function getInfo() {
  $.ajax({
    url: 'controller/get-info.php',
    type: 'POST',
    dataType: 'json',
    success: function (response) {
      if (!response.id) {
        window.location.href = "sing-in.html";
      } else {
        id_socio = response.id;
        document.getElementById('spnNombreU').innerText += response.name;
        document.getElementById('spnCorreoU').innerText += response.email;
        documentos();
      }
    }
  });
}