let id_socio = localStorage.getItem("socioComercial_ID");
const idiomatemp_ = localStorage.getItem("idioma_SC");
const fileInputState = document.getElementById('fileInputState');
const inputFile = document.getElementById('fileInput');
const serverURL = 'http://localhost/socios_comerciales/';
const auxIdioma = localStorage.getItem("idioma");
const blockSectionElement = document.querySelector("#blockSection");
const blockSectionUI = new KTBlockUI(blockSectionElement, {
    overlayClass: "bg-primary bg-opacity-25",
    message: `
<span class="svg-icon svg-icon-primary svg-icon-4hx fa-spin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.6 7C12 7 11.6 6.6 11.6 6V3C11.6 2.4 12 2 12.6 2C13.2 2 13.6 2.4 13.6 3V6C13.6 6.6 13.2 7 12.6 7ZM10 7.59998C10.5 7.29998 10.6 6.69995 10.4 6.19995L9 3.80005C8.7 3.30005 8.10001 3.20002 7.60001 3.40002C7.10001 3.70002 7.00001 4.30005 7.20001 4.80005L8.60001 7.19995C8.80001 7.49995 9.1 7.69995 9.5 7.69995C9.7 7.69995 9.9 7.69998 10 7.59998ZM8 9.30005C8.3 8.80005 8.10001 8.20002 7.60001 7.90002L5.5 6.69995C5 6.39995 4.40001 6.59998 4.10001 7.09998C3.80001 7.59998 4 8.2 4.5 8.5L6.60001 9.69995C6.80001 9.79995 6.90001 9.80005 7.10001 9.80005C7.50001 9.80005 7.9 9.70005 8 9.30005ZM7.20001 12C7.20001 11.4 6.80001 11 6.20001 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H6.20001C6.70001 13 7.20001 12.6 7.20001 12Z" fill="black"/>
<path opacity="0.3" d="M17.4 5.5C17.4 6.1 17 6.5 16.4 6.5C15.8 6.5 15.4 6.1 15.4 5.5C15.4 4.9 15.8 4.5 16.4 4.5C17 4.5 17.4 5 17.4 5.5ZM5.80001 17.1L7.40001 16.1C7.90001 15.8 8.00001 15.2 7.80001 14.7C7.50001 14.2 6.90001 14.1 6.40001 14.3L4.80001 15.3C4.30001 15.6 4.20001 16.2 4.40001 16.7C4.60001 17 4.90001 17.2 5.30001 17.2C5.50001 17.3 5.60001 17.2 5.80001 17.1ZM8.40001 20.2C8.20001 20.2 8.10001 20.2 7.90001 20.1C7.40001 19.8 7.3 19.2 7.5 18.7L8.30001 17.3C8.60001 16.8 9.20002 16.7 9.70002 16.9C10.2 17.2 10.3 17.8 10.1 18.3L9.30001 19.7C9.10001 20 8.70001 20.2 8.40001 20.2ZM12.6 21.2C12 21.2 11.6 20.8 11.6 20.2V18.8C11.6 18.2 12 17.8 12.6 17.8C13.2 17.8 13.6 18.2 13.6 18.8V20.2C13.6 20.7 13.2 21.2 12.6 21.2ZM16.7 19.9C16.4 19.9 16 19.7 15.8 19.4L15.2 18.5C14.9 18 15.1 17.4 15.6 17.1C16.1 16.8 16.7 17 17 17.5L17.6 18.4C17.9 18.9 17.7 19.5 17.2 19.8C17 19.9 16.8 19.9 16.7 19.9ZM19.4 17C19.2 17 19.1 17 18.9 16.9L18.2 16.5C17.7 16.2 17.6 15.6 17.8 15.1C18.1 14.6 18.7 14.5 19.2 14.7L19.9 15.1C20.4 15.4 20.5 16 20.3 16.5C20.1 16.8 19.8 17 19.4 17ZM20.4 13H19.9C19.3 13 18.9 12.6 18.9 12C18.9 11.4 19.3 11 19.9 11H20.4C21 11 21.4 11.4 21.4 12C21.4 12.6 20.9 13 20.4 13ZM18.9 9.30005C18.6 9.30005 18.2 9.10005 18 8.80005C17.7 8.30005 17.9 7.70002 18.4 7.40002L18.6 7.30005C19.1 7.00005 19.7 7.19995 20 7.69995C20.3 8.19995 20.1 8.79998 19.6 9.09998L19.4 9.19995C19.3 9.19995 19.1 9.30005 18.9 9.30005Z" fill="black"/>
</svg></span>
`
});
getInfo();
blockSectionUI.block();

const blockDocumentElement = document.querySelector("#blockDocument");
const blockDocumentUI = new KTBlockUI(blockDocumentElement, {
    overlayClass: "bg-primary bg-opacity-25",
    message: `
<span class="svg-icon svg-icon-primary svg-icon-4hx fa-spin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.6 7C12 7 11.6 6.6 11.6 6V3C11.6 2.4 12 2 12.6 2C13.2 2 13.6 2.4 13.6 3V6C13.6 6.6 13.2 7 12.6 7ZM10 7.59998C10.5 7.29998 10.6 6.69995 10.4 6.19995L9 3.80005C8.7 3.30005 8.10001 3.20002 7.60001 3.40002C7.10001 3.70002 7.00001 4.30005 7.20001 4.80005L8.60001 7.19995C8.80001 7.49995 9.1 7.69995 9.5 7.69995C9.7 7.69995 9.9 7.69998 10 7.59998ZM8 9.30005C8.3 8.80005 8.10001 8.20002 7.60001 7.90002L5.5 6.69995C5 6.39995 4.40001 6.59998 4.10001 7.09998C3.80001 7.59998 4 8.2 4.5 8.5L6.60001 9.69995C6.80001 9.79995 6.90001 9.80005 7.10001 9.80005C7.50001 9.80005 7.9 9.70005 8 9.30005ZM7.20001 12C7.20001 11.4 6.80001 11 6.20001 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H6.20001C6.70001 13 7.20001 12.6 7.20001 12Z" fill="black"/>
<path opacity="0.3" d="M17.4 5.5C17.4 6.1 17 6.5 16.4 6.5C15.8 6.5 15.4 6.1 15.4 5.5C15.4 4.9 15.8 4.5 16.4 4.5C17 4.5 17.4 5 17.4 5.5ZM5.80001 17.1L7.40001 16.1C7.90001 15.8 8.00001 15.2 7.80001 14.7C7.50001 14.2 6.90001 14.1 6.40001 14.3L4.80001 15.3C4.30001 15.6 4.20001 16.2 4.40001 16.7C4.60001 17 4.90001 17.2 5.30001 17.2C5.50001 17.3 5.60001 17.2 5.80001 17.1ZM8.40001 20.2C8.20001 20.2 8.10001 20.2 7.90001 20.1C7.40001 19.8 7.3 19.2 7.5 18.7L8.30001 17.3C8.60001 16.8 9.20002 16.7 9.70002 16.9C10.2 17.2 10.3 17.8 10.1 18.3L9.30001 19.7C9.10001 20 8.70001 20.2 8.40001 20.2ZM12.6 21.2C12 21.2 11.6 20.8 11.6 20.2V18.8C11.6 18.2 12 17.8 12.6 17.8C13.2 17.8 13.6 18.2 13.6 18.8V20.2C13.6 20.7 13.2 21.2 12.6 21.2ZM16.7 19.9C16.4 19.9 16 19.7 15.8 19.4L15.2 18.5C14.9 18 15.1 17.4 15.6 17.1C16.1 16.8 16.7 17 17 17.5L17.6 18.4C17.9 18.9 17.7 19.5 17.2 19.8C17 19.9 16.8 19.9 16.7 19.9ZM19.4 17C19.2 17 19.1 17 18.9 16.9L18.2 16.5C17.7 16.2 17.6 15.6 17.8 15.1C18.1 14.6 18.7 14.5 19.2 14.7L19.9 15.1C20.4 15.4 20.5 16 20.3 16.5C20.1 16.8 19.8 17 19.4 17ZM20.4 13H19.9C19.3 13 18.9 12.6 18.9 12C18.9 11.4 19.3 11 19.9 11H20.4C21 11 21.4 11.4 21.4 12C21.4 12.6 20.9 13 20.4 13ZM18.9 9.30005C18.6 9.30005 18.2 9.10005 18 8.80005C17.7 8.30005 17.9 7.70002 18.4 7.40002L18.6 7.30005C19.1 7.00005 19.7 7.19995 20 7.69995C20.3 8.19995 20.1 8.79998 19.6 9.09998L19.4 9.19995C19.3 9.19995 19.1 9.30005 18.9 9.30005Z" fill="black"/>
</svg></span>
Subiendo archivo...
`
});

const frmSubirDoc = document.getElementById("frmSubirDoc");
const fechaEmision = frmSubirDoc.querySelector("#fechaEmision");
const fechaVence = frmSubirDoc.querySelector("#fechaVence");
const btnSubirDoc = document.getElementById("btnSubirDoc");

const fechaEmisionElement = flatpickr(fechaEmision, {
    dateFormat: "Y-m-d",
    allowInput: true,
    static: false,
    altInput: true,
    altFormat: 'j/n/Y',
    onChange: function (selectedDates, dateStr, instance) {
        calcularDiferenciaFechas();
    }
});
const fechaVenceElement = flatpickr(fechaVence, {
    dateFormat: "Y-m-d",
    allowInput: true,
    static: false,
    altInput: true,
    altFormat: 'j/n/Y',
    onChange: function (selectedDates, dateStr, instance) {
        calcularDiferenciaFechas();
    }
});
let subirValidator = FormValidation.formValidation(
    frmSubirDoc,
    {
        fields: {
            "fileInput": {validators: {notEmpty: {message: 'El documento es requerido.'}}},
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap5({
                rowSelector: '.fv-row',
                eleInvalidClass: '',
                eleValidClass: ''
            })
        }
    }
);
btnSubirDoc.addEventListener('click', function (e) {
    e.preventDefault();
    if (subirValidator) {
        subirValidator.validate().then(function (status) {
            if (status === 'Valid') {
                btnSubirDoc.setAttribute('data-kt-indicator', 'on');
                btnSubirDoc.disabled = true;
                setTimeout(function () {
                    btnSubirDoc.removeAttribute('data-kt-indicator');
                    btnSubirDoc.disabled = false;
                    subirDoc();
                }, 1100);
            }
        });
    }
});

function calcularDiferenciaFechas() {
    const fechaVence = fechaVenceElement.selectedDates[0];
    const resultadoElement = document.getElementById("resultado");

    if (fechaVence) {
        const hoy = new Date();
        const milisegundosPorDia = 1000 * 60 * 60 * 24;
        const diferenciaMs = fechaVence - hoy;
        const diasRestantes = Math.ceil(diferenciaMs / milisegundosPorDia);

        if (diasRestantes > 0) {
            resultadoElement.textContent = `${(language === 'en' ? 'Days remaining until expiration' : 'Días restantes para la expiración')}: ${diasRestantes}`;
        } else {
            resultadoElement.textContent = `${(language === 'en' ? 'The document has expired' : 'El documento ha expirado')}: ${diasRestantes}`;
        }
    } else {
        resultadoElement.textContent = "";
    }
}


const filtroHistorial = document.getElementById("filtroHistorial");
const mdlHistorial = new bootstrap.Modal(document.getElementById('mdl-historial'), {
    keyboard: false
});

const hth = {
    nombre: (language === 'en' ? "Document name" : "Nombre del documento"),
    usuario: (language === 'en' ? "User name" : "Usuario"),
    estado: (language === 'en' ? "Status" : "Estado"),
    fecha: (language === 'en' ? "Registration date" : "Fecha de registro"),
    comentarios: (language === 'en' ? "Comments" : "Comentarios")
}
const historialTable = $("#historial-table").DataTable({
    info: true,
    searching: true,
    paging: false,
    order: [[10, 'desc']],
    columns: [
        {data: "conteo", title: "#", visible: true, searchable: true, className: 'min-w-80px'},
        {data: "id", visible: false, searchable: false},
        {data: "socio", visible: false, searchable: false},
        {data: "documento", visible: false, searchable: false},
        {
            data: "nombre",
            title: hth.nombre,
            visible: true,
            searchable: true,
            className: 'min-w-300px',
            render: function (data, type, row, meta) {
                let auxData = data;
                if (auxIdioma === 'en') {
                    auxData = row.nombre_ingles;
                }
                if (data.trim() === '') {
                    auxData = `<small class="text-muted fst-italic">Sin comentarios registrados</small>`;
                }
                return auxData;
            }
        },
        {data: "nombre_ingles", visible: false, searchable: true},
        {data: "usuario", visible: false, searchable: true},
        {
            data: "usuario_nombre",
            title: hth.usuario,
            visible: true,
            searchable: true,
            className: 'min-w-300px',
            render: function (data, type) {
                let auxData = data;
                if (!data) {
                    auxData = `<small class="text-muted fst-italic">${(auxIdioma === 'es' ? 'Sistema' : 'System')}</small>`;
                }
                return auxData;
            }
        },
        {data: "url", visible: false, searchable: false},
        {
            data: "estado", title: hth.estado, visible: true, searchable: true, render: function (data, type) {
                let auxData = '';
                switch (data) {
                    case "Revisión":
                        auxData = `<small class="badge fs-6 fw-normal badge-primary">${idiomatemp_ === 'en' ? 'Under review' : 'Revisión'}</small>`
                        break;
                    case "Aceptado":
                        auxData = `<small class="badge fs-6 fw-normal badge-success">${idiomatemp_ === 'en' ? 'Accepted' : 'Aceptado'}</small>`
                        break;
                    case "Rechazado":
                        auxData = `<small class="badge fs-6 fw-normal badge-danger">${idiomatemp_ === 'en' ? 'Declined' : 'Rechazado'}</small>`
                        break;
                    case "Pendiente":
                        auxData = `<small class="badge fs-6 fw-normal badge-light">${idiomatemp_ === 'en' ? 'Pending' : 'Pendiente'}</small>`
                        break;
                    default:
                        auxData = `<small class="badge fs-6 fw-normal badge-light">${idiomatemp_ === 'en' ? 'Without description' : 'Sin descripción'}</small>`
                        break;
                }

                return auxData;
            }, className: 'min-w-100px'
        },
        {data: "created_at", title: hth.fecha, visible: true, searchable: true, className: 'min-w-175px'},
        {
            data: "comentario",
            title: hth.comentarios,
            visible: true,
            searchable: true,
            className: 'min-w-300px',
            render: function (data, type) {
                let auxData = data;
                if (!data) {
                    auxData = `<small class="text-muted fst-italic">Sin comentarios registrados</small>`;
                }
                return auxData;
            }
        },
        /*{data: "IdDocumento", visible: false, searchable: false},
        {data: "codigo", title: "Code", visible: true, searchable: true, className: 'min-w-100px'},
        {data: "nombre", title: "Nombre del documento", visible: false, searchable: false},
        {data: "nombre_ingles", title: "Document name", visible: true, searchable: true, className: 'min-w-200px'},
        {data: "descripcion", title: "Description", visible: true, searchable: true, className: 'min-w-300px'},
        {data: "url", visible: false, searchable: false},
        {
            data: "estado", title: "Status", visible: true, searchable: true, render: function (data, type) {
                let auxData = '';
                switch (data) {
                    case "revision":
                        auxData = `<small class="badge badge-primary">${idiomatemp_ === 'en' ? 'Under review' : 'Revisión'}</small>`
                        break;
                    case "Accept":
                        auxData = `<small class="badge badge-success">${idiomatemp_ === 'en' ? 'Accepted' : 'Aceptado'}</small>`
                        break;
                    case "Decline":
                        auxData = `<small class="badge badge-danger">${idiomatemp_ === 'en' ? 'Declined' : 'Rechazado'}</small>`
                        break;
                    default:
                        auxData = `<small class="badge badge-light">${idiomatemp_ === 'en' ? 'Without description' : 'Sin descripción'}</small>`
                        break;
                }

                return auxData;
            }, className: 'min-w-100px'
        },
        {data: "fechaDeSubida", title: "Registration date", visible: true, searchable: true, className: 'min-w-175px'},
        {
            data: "comentario",
            title: "Comments",
            visible: true,
            searchable: true,
            className: 'min-w-300px',
            render: function (data, type) {
                let auxData = data;
                if (!data) {
                    auxData = `<small class="text-muted fst-italic">Sin comentarios registrados</small>`;
                }
                return auxData;
            }
        },*/
        {
            defaultContent: `<button type="button" class="informacion btn btn-sm btn-joffroy-primary btn-icon"><i class="bi bi-search text-white"></i></span>
</button>`,
            orderable: false,
            searchable: false,
        }
    ]
});
$('#historial-table tbody').on('click', '.informacion', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = historialTable.row(row).data();
    let dataIndex = historialTable.row(row).index();
    verDocumentoBitacorra(data.url)
});
let pendientesFiltroEstado = document.getElementById('pendientes-filtro-estado');
const placeHolderEstado = (idiomatemp_ === 'en' ? 'Search by state' : 'Buscar por estado');
$(pendientesFiltroEstado).change((e) => {
    if (e.target.value === 'all') {
        historialTable.column(9).search('').draw();
    } else {
        historialTable.column(9).search(e.target.value).draw();
    }
});
$(filtroHistorial).keyup(function () {
    historialTable.search(this.value).draw();
})
const mdlBitacora = new bootstrap.Modal(document.getElementById('mdl-bitacora'), {
    keyboard: false
});
const arrDocu_ = [];
let estado_arrDoc_ = "todos";
let _indicador_doc;
let _id_doc;
let _id_registro;
let file = "";
inputFile.addEventListener('change', function () {
    const iframe_no_doc = document.getElementById('iframe_no_doc');
    file = inputFile.files[0];
    if (file && file.type === 'application/pdf') {
        const fileURL = URL.createObjectURL(file);
        const iframe = document.getElementById('iframe_muestra_doc');
        iframe.src = fileURL;
        iframe_no_doc.style.display = 'none';
        iframe.style.display = 'block';
    } else {
        file = "";
    }
});

function subirDoc() {
    blockDocumentUI.block();
    const fileInput = document.getElementById('fileInput');
    if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('id', id_socio);
        formData.append('indicador', "");
        formData.append('id_documento', _id_doc);
        formData.append('emision', fechaEmision.value);
        formData.append('vence', fechaVence.value);
        formData.append('archivo', fileInput.files[0]);
        fetch('controller/subirSociosDocu.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'success') {
                    Swal.fire({
                        text: data.message,
                        icon: "success",
                        buttonsStyling: !1,
                        allowOutsideClick: false,
                        confirmButtonText: "Entendido",
                        customClass: {confirmButton: "btn btn-joffroy-primary btn-sm"}
                    }).then((result) => {
                        if (result.isConfirmed) {
                            getDocumentos();
                            $('#mdl-documento-03').modal('hide');
                        }
                    })
                } else {
                    Swal.fire({
                        text: data.message,
                        icon: "error",
                        buttonsStyling: !1,
                        allowOutsideClick: false,
                        confirmButtonText: "Entendido",
                        customClass: {confirmButton: "btn btn-joffroy-primary btn-sm"}
                    });
                }
                blockDocumentUI.release();
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });

    } else {
        console.log('Selecciona un archivo primero.');
    }
}

function getDocumentos() {
    const documentos = document.getElementById('MotrarDocumentos');
    const lang = idiomatemp_;
    $.ajax({
        url: 'controller/getDocumentos.php',
        method: 'POST',
        data: {id: id_socio},
        dataType: 'json',
        success: function (response) {

            $.ajax({
                url: 'controller/traerUnSocio.php',
                type: 'POST',
                data: {id: id_socio},
                dataType: 'json',
                success: function (data) {
                    if (data.length > 0) {
                        const tipoProveedor = data[0].tp_proveedor;

                        let htmlDocumento = '';
                        document.getElementById('spnRecords').innerHTML = response.documentos.length;
                        response.documentos.forEach(documento => {
                            if (tipoProveedor === "1" && documento.fisica === "1") {
                                response.socioDocumentos.sort((a, b) => new Date(b.fch_creacion) - new Date(a.fch_creacion));
                                let objetoEncontrado = response.socioDocumentos.find(socioDocumento => socioDocumento.documento === documento.id);
                                let fecha, estado, color, iconColor, fileButton, extraButtons, docURL;
                                if (objetoEncontrado !== undefined) {
                                    fecha = objetoEncontrado.fch_creacion;
                                    switch (objetoEncontrado.estado) {
                                        case 'revision':
                                            estado = (language === 'en' ? 'Under review' : 'Revisión');
                                            color = 'primary';
                                            iconColor = 1;
                                            fileButton = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="modalArchivo(${documento.id}, '${(language === 'en' ? documento.nombre_ingles : documento.nombre)}', '${estado}', ${documento.id})"><i class="bi bi-eye-fill text-white"></i> ${language === 'en' ? 'File' : 'Archivo'}</button>`;
                                            extraButtons = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="getTimeLine(${objetoEncontrado.documento}, ${objetoEncontrado.socio}, mdlHistorial)"><i class="bi bi-clock-history text-white"></i> ${(language === 'en' ? 'Activity' : 'Actividad')}</button>`;
                                            break;
                                        case 'Accept':
                                            estado = (language === 'en' ? 'Accepted' : 'Aceptado');
                                            color = 'success';
                                            fileButton = '';
                                            iconColor = 1;
                                            extraButtons = `<button type="button" class="btn btn-sm btn-${color} w-120px" onclick="getTimeLine(${objetoEncontrado.documento}, ${objetoEncontrado.socio}, mdlHistorial)"><i class="bi bi-clock-history text-white"></i> ${(language === 'en' ? 'Activity' : 'Actividad')}</button>`;
                                            break;
                                        case 'Decline':
                                            estado = (language === 'en' ? 'Declined' : 'Rechazado');
                                            color = 'danger';
                                            iconColor = 1;
                                            extraButtons = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="getTimeLine(${objetoEncontrado.documento}, ${objetoEncontrado.socio}, mdlHistorial)"><i class="bi bi-clock-history text-white"></i> ${(language === 'en' ? 'Activity' : 'Actividad')}</button>`;
                                            fileButton = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="modalArchivo(${documento.id}, '${(language === 'en' ? documento.nombre_ingles : documento.nombre)}', '${estado}', ${documento.id})"><i class="bi bi-upload"></i> ${(language === 'en' ? 'File' : 'Archivo')}</button>`;
                                            break;
                                        default:
                                            color = 'light';
                                            iconColor = 100;
                                            extraButtons = '';
                                            fileButton = '';
                                            break;
                                    }
                                    docURL = objetoEncontrado.url;
                                } else {
                                    color = 'light';
                                    iconColor = 100;
                                    fecha = (language === 'en' ? 'Unassigned' : 'Sin asignar');
                                    estado = (language === 'en' ? 'Pending' : 'Pendiente');
                                    docURL = '';
                                    extraButtons = '';
                                    fileButton = `<button type="button" class="btn btn-${color} w-125px" onclick="modalArchivo(${documento.id}, '${(language === 'en' ? documento.nombre_ingles : documento.nombre)}', '${estado}', ${documento.id})"><i class="bi bi-upload"></i> ${(language === 'en' ? 'File' : 'Archivo')}</button>`;
                                }
                                htmlDocumento += `
                    <section id="rgs-${documento.id}" class="border border-dashed border-${color} bg-light-${color} p-8 mb-3 documento-elemento" data-filtro="${estado}">
                        <div class="row">
                            <div class="col-sm-12 col-md-1 d-flex justify-content-center align-items-center">
                                <img src="assets/media/svg/files/pdf.svg" alt="image" class="img-fluid" style="filter: grayscale(${iconColor}%)">
                            </div>
                            <div class="col-sm-12 col-md-7">
                                <div>
                                    <h1><span class="documento-nombre">${(language === 'en' ? documento.nombre_ingles : documento.nombre)}</span> <small class="fs-7 fw-normal text-muted">${documento.codigo}</small></h1>
                                    <p>${(language === 'en' ? documento.description_english : documento.descripcion)}</p>
                                </div>
                                <div class="row gap-3">
                                    <div class="col-sm-12 col-md-4 rounded-1 ps-5 py-1 border border-${color} border-1 bg-light-${color} shadow-xs">
                                        <p class="m-0 fs-3 documento-fecha">${fecha}</p>
                                        <p class="m-0 fw-normal text-muted">${(language === 'en' ? "Registration date" : "Fecha de registro")}</p>
                                    </div>
                                    <div class="col-sm-12 col-md-4 rounded-1 ps-5 py-1 border border-${color} border-1 bg-light-${color} shadow-xs">
                                        <p class="m-0 fs-3">${estado}</p>
                                        <p class="m-0 fw-normal text-muted">${(language === 'en' ? 'Status' : 'Estado')}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex justify-content-start align-items-center">
                                <div>
                                    ${extraButtons + fileButton}
                                </div>
                            </div>
                        </div>
                    </section>
                `;
                            } else if (tipoProveedor === "2" && documento.moral === "1") {
                                response.socioDocumentos.sort((a, b) => new Date(b.fch_creacion) - new Date(a.fch_creacion));
                                let objetoEncontrado = response.socioDocumentos.find(socioDocumento => socioDocumento.documento === documento.id);
                                let fecha, estado, color, iconColor, fileButton, extraButtons, docURL;
                                if (objetoEncontrado !== undefined) {
                                    fecha = objetoEncontrado.fch_creacion;
                                    switch (objetoEncontrado.estado) {
                                        case 'revision':
                                            estado = (language === 'en' ? 'Under review' : 'Revisión');
                                            color = 'primary';
                                            iconColor = 1;
                                            fileButton = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="modalArchivo(${documento.id}, '${(language === 'en' ? documento.nombre_ingles : documento.nombre)}', '${estado}', ${documento.id})"><i class="bi bi-eye-fill text-white"></i> ${(language === 'en' ? 'File' : 'Archivo')}</button>`;
                                            extraButtons = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="getTimeLine(${objetoEncontrado.documento}, ${objetoEncontrado.socio}, mdlHistorial)"><i class="bi bi-clock-history text-white"></i> ${(language === 'en' ? 'Activity' : 'Actividad')}</button>`;
                                            break;
                                        case 'Accept':
                                            estado = (language === 'en' ? 'Accepted' : 'Aceptado');
                                            color = 'success';
                                            iconColor = 1;
                                            fileButton = '';
                                            extraButtons = `<button type="button" class="btn btn-sm btn-${color} w-120px" onclick="getTimeLine(${objetoEncontrado.documento}, ${objetoEncontrado.socio}, mdlHistorial)"><i class="bi bi-clock-history text-white"></i> ${(language === 'en' ? 'Activity' : 'Actividad')}</button>`;
                                            break;
                                        case 'Decline':
                                            estado = (language === 'en' ? 'Declined' : 'Rechazado');
                                            color = 'danger';
                                            iconColor = 1;
                                            extraButtons = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="getTimeLine(${objetoEncontrado.documento}, ${objetoEncontrado.socio}, mdlHistorial)"><i class="bi bi-clock-history text-white"></i> ${(language === 'en' ? 'Activity' : 'Actividad')}</button>`;
                                            fileButton = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="modalArchivo(${documento.id}, '${(language === 'en' ? documento.nombre_ingles : documento.nombre)}', '${estado}', ${documento.id})"><i class="bi bi-upload"></i> ${(language === 'en' ? 'File' : 'Archivo')}</button>`;
                                            break;
                                        default:
                                            color = 'light';
                                            iconColor = 100;
                                            extraButtons = '';
                                            fileButton = '';
                                            break;
                                    }
                                    docURL = objetoEncontrado.url;
                                } else {
                                    color = 'light';
                                    iconColor = 100;
                                    fecha = (language === 'en' ? "Unassigned" : "Sin asignar");
                                    estado = (language === 'en' ? "Pending" : "Pendiente");
                                    docURL = '';
                                    extraButtons = '';
                                    fileButton = `<button type="button" class="btn btn-${color} w-125px" onclick="modalArchivo(${documento.id}, '${(language === 'en' ? documento.nombre_ingles : documento.nombre)}', '${estado}', ${documento.id})"><i class="bi bi-upload"></i> ${(language === 'en' ? 'File' : 'Archivo')}</button>`;
                                }
                                htmlDocumento += `
                    <section id="rgs-${documento.id}" class="border border-dashed border-${color} bg-light-${color} p-8 mb-3 documento-elemento" data-filtro="${estado}">
                        <div class="row">
                            <div class="col-sm-12 col-md-1 d-flex justify-content-center align-items-center">
                                <img src="assets/media/svg/files/pdf.svg" alt="image" class="img-fluid" style="filter: grayscale(${iconColor}%)">
                            </div>
                            <div class="col-sm-12 col-md-7">
                                <div>
                                    <h1><span class="documento-nombre">${(language === 'en' ? documento.nombre_ingles : documento.nombre)}</span> <small class="fs-7 fw-normal text-muted">${documento.codigo}</small></h1>
                                    <p>${(language === 'en' ? documento.description_english : documento.descripcion)}</p>
                                </div>
                                <div class="row gap-3">
                                    <div class="col-sm-12 col-md-4 rounded-1 ps-5 py-1 border border-${color} border-1 bg-light-${color} shadow-xs">
                                        <p class="m-0 fs-3 documento-fecha">${fecha}</p>
                                        <p class="m-0 fw-normal text-muted">${(language === 'en' ? "Registration date" : "Fecha de registro")}</p>
                                    </div>
                                    <div class="col-sm-12 col-md-4 rounded-1 ps-5 py-1 border border-${color} border-1 bg-light-${color} shadow-xs">
                                        <p class="m-0 fs-3">${estado}</p>
                                        <p class="m-0 fw-normal text-muted">${(language === 'en' ? "Status" : "Estado")}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex justify-content-start align-items-center">
                                <div>
                                    ${extraButtons + fileButton}
                                </div>
                            </div>
                        </div>
                    </section>
                `;
                            } else if (tipoProveedor === "3" && documento.extranjero === "1") {
                                response.socioDocumentos.sort((a, b) => new Date(b.fch_creacion) - new Date(a.fch_creacion));
                                let objetoEncontrado = response.socioDocumentos.find(socioDocumento => socioDocumento.documento === documento.id);
                                let fecha, estado, color, iconColor, fileButton, extraButtons, docURL;
                                if (objetoEncontrado !== undefined) {
                                    fecha = objetoEncontrado.fch_creacion;
                                    switch (objetoEncontrado.estado) {
                                        case 'revision':
                                            estado = (language === 'en' ? "Under review" : "Revisión");
                                            color = 'primary';
                                            iconColor = 1;
                                            fileButton = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="modalArchivo(${documento.id}, '${(language === 'en' ? documento.nombre_ingles : documento.nombre)}', '${estado}', ${documento.id})"><i class="bi bi-eye-fill text-white"></i> ${(language === 'en' ? 'File' : 'Archivo')}</button>`;
                                            extraButtons = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="getTimeLine(${objetoEncontrado.documento}, ${objetoEncontrado.socio}, mdlHistorial)"><i class="bi bi-clock-history text-white"></i> ${(language === 'en' ? "Activity" : "Actividad")}</button>`;
                                            break;
                                        case 'Accept':
                                            estado = (language === 'en' ? "Accepted" : "Aceptado");
                                            color = 'success';
                                            iconColor = 1;
                                            fileButton = '';
                                            extraButtons = `<button type="button" class="btn btn-sm btn-${color} w-120px" onclick="getTimeLine(${objetoEncontrado.documento}, ${objetoEncontrado.socio}, mdlHistorial)"><i class="bi bi-clock-history text-white"></i> ${(language === 'en' ? "Activity" : "Actividad")}</button>`;
                                            break;
                                        case 'Decline':
                                            estado = (language === 'en' ? "Declined" : "Rechazado");
                                            color = 'danger';
                                            iconColor = 1;
                                            extraButtons = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="getTimeLine(${objetoEncontrado.documento}, ${objetoEncontrado.socio}, mdlHistorial)"><i class="bi bi-clock-history text-white"></i> ${(language === 'en' ? "Activity" : "Actividad")}</button>`;
                                            fileButton = `<button type="button" class="btn btn-sm btn-${color} w-120px me-2" onclick="modalArchivo(${documento.id}, '${(language === 'en' ? documento.nombre_ingles : documento.nombre)}', '${estado}', ${documento.id})"><i class="bi bi-upload"></i> ${(language === 'en' ? "File" : "Archivo")}</button>`;
                                            break;
                                        default:
                                            color = 'light';
                                            iconColor = 100;
                                            extraButtons = '';
                                            fileButton = '';
                                            break;
                                    }
                                    docURL = objetoEncontrado.url;
                                } else {
                                    color = 'light';
                                    iconColor = 100;
                                    fecha = (language === 'en' ? 'Unassigned' : 'Sin asignar');
                                    estado = (language === 'en' ? 'Pending' : 'Pendiente');
                                    docURL = '';
                                    extraButtons = '';
                                    fileButton = `<button type="button" class="btn btn-${color} w-125px" onclick="modalArchivo(${documento.id}, '${(language === 'en' ? documento.nombre_ingles : documento.nombre)}', '${estado}', ${documento.id})"><i class="bi bi-upload"></i> ${(language === 'en' ? 'File' : 'Archivo')}</button>`;
                                }
                                htmlDocumento += `
                    <section id="rgs-${documento.id}" class="border border-dashed border-${color} bg-light-${color} p-8 mb-3 documento-elemento" data-filtro="${estado}">
                        <div class="row">
                            <div class="col-sm-12 col-md-1 d-flex justify-content-center align-items-center">
                                <img src="assets/media/svg/files/pdf.svg" alt="image" class="img-fluid" style="filter: grayscale(${iconColor}%)">
                            </div>
                            <div class="col-sm-12 col-md-7">
                                <div>
                                    <h1><span class="documento-nombre">${(language === 'en' ? documento.nombre_ingles : documento.nombre)}</span> <small class="fs-7 fw-normal text-muted">${documento.codigo}</small></h1>
                                    <p>${(language === 'en' ? documento.description_english : documento.descripcion)}</p>
                                </div>
                                <div class="row gap-3">
                                    <div class="col-sm-12 col-md-4 rounded-1 ps-5 py-1 border border-${color} border-1 bg-light-${color} shadow-xs">
                                        <p class="m-0 fs-3 documento-fecha">${fecha}</p>
                                        <p class="m-0 fw-normal text-muted">${(language === 'en' ? 'Registration date' : 'Fecha de registro')}</p>
                                    </div>
                                    <div class="col-sm-12 col-md-4 rounded-1 ps-5 py-1 border border-${color} border-1 bg-light-${color} shadow-xs">
                                        <p class="m-0 fs-3">${estado}</p>
                                        <p class="m-0 fw-normal text-muted">${(language === 'en' ? 'Status' : 'Estado')}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex justify-content-start align-items-center">
                                <div>
                                    ${extraButtons + fileButton}
                                </div>
                            </div>
                        </div>
                    </section>
                `;
                            }
                        });
                        documentos.innerHTML = htmlDocumento;
                        blockSectionUI.release();

                    }
                }
            });

        }
    });
}

function getTimeLine(documento, socio, mdl) {
    $.ajax({
        url: 'controller/traerDocumentoHistorial_Bitacora.php',
        method: 'POST',
        data: {
            id: documento,
            socio
        },
        dataType: 'json',
        success: function (response) {
            historialTable.clear().draw();
            if (response.length > 0) {
                let nombresUnicos = [];
                response.forEach(function (item) {
                    let nombreEstado = item.estado;
                    let auxEstado = '';
                    switch (nombreEstado) {
                        case "Revisión":
                            auxEstado = `${idiomatemp_ === 'en' ? 'Under review' : 'Revisión'}`
                            break;
                        case "Aceptado":
                            auxEstado = `${idiomatemp_ === 'en' ? 'Accepted' : 'Aceptado'}`
                            break;
                        case "Rechazado":
                            auxEstado = `${idiomatemp_ === 'en' ? 'Declined' : 'Rechazado'}`
                            break;
                        case "Pendiente":
                            auxEstado = `${idiomatemp_ === 'en' ? 'Pending' : 'Pendiente'}`
                            break;
                        default:
                            auxEstado = `${idiomatemp_ === 'en' ? 'Without description' : 'Sin descripción'}`
                            break;
                    }
                    if (nombresUnicos.indexOf(auxEstado) === -1) {
                        nombresUnicos.push(auxEstado);
                    }
                });
                $(pendientesFiltroEstado).select2({
                    placeholder: placeHolderEstado,
                    allowClear: true,
                    data: nombresUnicos
                });
                mdl.show();
                historialTable.rows.add(response).draw();
                const mdlBitacoraTimeline = document.getElementById('mdl-bitacora-timeline');
                let html = '';
                response.forEach(documento => {
                    let mensaje, bandera, color, icono;
                    switch (documento.estado) {
                        case "revision":
                            color = 'primary';
                            mensaje = idiomatemp_ === 'en' ? 'Document under review' : 'Documento se encuentra en fase de revisión';
                            bandera = `<small class="badge badge-primary">${idiomatemp_ === 'en' ? 'Under review' : 'Revisión'}</small>`;
                            icono = `
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="black"/>
<path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="black"/>
</svg>
                           `;
                            break;
                        case "Accept":
                            color = 'success';
                            mensaje = idiomatemp_ === 'en' ? 'The document was reviewed and accepted.' : 'El documento fue revisado y aceptado.';
                            bandera = `<small class="badge badge-success">${idiomatemp_ === 'en' ? 'Accepted' : 'Aceptado'}</small>`;
                            icono = `
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.5" d="M12.8956 13.4982L10.7949 11.2651C10.2697 10.7068 9.38251 10.7068 8.85731 11.2651C8.37559 11.7772 8.37559 12.5757 8.85731 13.0878L12.7499 17.2257C13.1448 17.6455 13.8118 17.6455 14.2066 17.2257L21.1427 9.85252C21.6244 9.34044 21.6244 8.54191 21.1427 8.02984C20.6175 7.47154 19.7303 7.47154 19.2051 8.02984L14.061 13.4982C13.7451 13.834 13.2115 13.834 12.8956 13.4982Z" fill="black"/>
<path d="M7.89557 13.4982L5.79487 11.2651C5.26967 10.7068 4.38251 10.7068 3.85731 11.2651C3.37559 11.7772 3.37559 12.5757 3.85731 13.0878L7.74989 17.2257C8.14476 17.6455 8.81176 17.6455 9.20663 17.2257L16.1427 9.85252C16.6244 9.34044 16.6244 8.54191 16.1427 8.02984C15.6175 7.47154 14.7303 7.47154 14.2051 8.02984L9.06096 13.4982C8.74506 13.834 8.21146 13.834 7.89557 13.4982Z" fill="black"/>
</svg>
                           `;
                            break;
                        case "Decline":
                            color = 'danger';
                            mensaje = idiomatemp_ === 'en' ? 'The document was rejected' : 'El documento due rechazado';
                            bandera = `<small class="badge badge-danger">${idiomatemp_ === 'en' ? 'Declined' : 'Rechazado'}</small>`;
                            icono = `
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"/>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"/>
</svg>
                           `;
                            break;
                        default:
                            color = 'light';
                            bandera = `<small class="badge badge-light">${idiomatemp_ === 'en' ? 'Without description' : 'Sin descripción'}</small>`;
                            icono = `
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                               <path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="black" />
                               <path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="black" />
                           </svg>
                           `;
                            break;
                    }
                    html += `
                    <div class="timeline-item">
                        <div class="timeline-line w-40px"></div>
                        <div class="timeline-icon symbol symbol-circle symbol-40px me-4 bg-light-${color}">
                            <div class="symbol-label bg-light">
                                <span class="svg-icon svg-icon-2 svg-icon-${color}">
                                    ${icono}
                                </span>
                            </div>
                        </div>
                        <div class="timeline-content mb-10 mt-n1">
                            <div class="pe-3 mb-5">
                                <div class="fs-5 fw-bold mb-2 text-${color}">${mensaje}</div>
                                <div class="d-flex align-items-center mt-1 fs-6">
                                    <div class="text-muted me-2 fs-7">Added at ${documento.fechaDeSubida}</div>
                                </div>
                            </div>
                            <div class="overflow-auto pb-5">
                                <div class="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                    <div class="min-w-100px pe-2">
                                        <img src="assets/media/svg/files/pdf.svg" alt="image" class="img-fluid cursor-pointer" width="40" onclick="verDocumentoBitacorra('${documento.url}')">
                                    </div>
                                    <div class="w-375px min-w-200px pe-2">
                                        <p class="m-0 fw-bolder fs-5">${(idiomatemp_ === 'en' ? 'Document Code' : 'Código del documento')}</p>
                                        <p class="m-0">${documento.codigo}</p>
                                    </div>
                                    <div class="w-375px min-w-200px pe-2">
                                        <p class="m-0 fw-bolder fs-5">${(idiomatemp_ === 'en' ? 'Document Name' : 'Nombre del documento')}</p>
                                        <p class="m-0">${(idiomatemp_ === 'en' ? documento.nombre_ingles : documento.nombre)}</p>
                                    </div>                                    
                                    <div class="min-w-175px pe-2">
                                        <p class="m-0 fw-bolder fs-5">${(idiomatemp_ === 'en' ? 'Comments' : 'Comentarios')}</p>
                                        <p class="m-0">${(documento.comentario === '' ? `<small class="text-muted fst-italic">Sin comentarios registrados</small>` : documento.comentario)}</p>
                                    </div>
                                    <div class="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2"></div>
                                    <div class="min-w-125px pe-2">
                                        ${bandera}
                                    </div>
                                    <button class="btn btn-sm btn-light btn-active-light-primary" onclick="verDocumentoBitacorra('${documento.url}')">${(idiomatemp_ === 'en' ? 'View document' : 'Ver documento')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                   `;
                });
                mdlBitacoraTimeline.innerHTML = html;
            }
        }
    });
}

function modalArchivo(idDocumento, titulo, estado, reg) {
    _id_doc = idDocumento;
    _id_registro = reg;
    const tituloDocumento = document.getElementById('titulo_documento_modal');
    const estadoDocumento = document.getElementById('estado_documento_modal');
    tituloDocumento.innerHTML = titulo;
    $('#mdl-documento-03').modal('show');
    $.ajax({
        url: 'controller/get-current-document.php',
        method: 'POST',
        data: {
            socio: id_socio,
            documento: _id_doc
        },
        dataType: 'json',
        success: function (response) {
            let estadoNombre, color;
            if (response.length > 0) {
                const registro = response[0];
                fechaEmisionElement.setDate(registro.emision);
                fechaVenceElement.setDate(registro.vigencia);
                switch (registro.estado) {
                    case 'Decline':
                        estadoNombre = (language === 'en' ? 'Rejected document' : 'Documento rechazado');
                        fileInputState.style.display = 'block';
                        color = '#F1416C';
                        break;
                    case 'Accept':
                        estadoNombre = (language === 'en' ? 'Accepted document' : 'Documento aceptado');
                        fileInputState.style.display = 'none';
                        color = '#20c997';
                        break;
                    case 'revision':
                    case 'Pending':
                        estadoNombre = (language === 'en' ? 'Document under review' : 'Documento en revisión');
                        fileInputState.style.display = 'block';
                        color = '#1A2BC2';
                        break;
                }
                estadoDocumento.innerHTML = estadoNombre;
                estadoDocumento.style.color = color;

                const iframe_no_doc = document.getElementById('iframe_no_doc');
                const iframe = document.getElementById('iframe_muestra_doc');
                iframe_no_doc.style.display = 'none';
                iframe.style.display = 'block';
                const cadena = registro.url;
                iframe.src = cadena.replace(/\.\.\//g, "");
            } else {
                estadoDocumento.innerHTML = (language === 'en' ? 'Document pending' : 'Documento pendiente');
                estadoDocumento.style.color = "#3f4254";
            }
        }
    });
}

function verDocumentoBitacorra(url) {
    if (url) {
        const iframe = document.getElementById('MostrarPdg_historial');
        iframe.src = url.substring(3);
        $('#mdl-documento-04').modal('show');
    } else {
        Swal.fire({
            text: (language === 'en' ? "Cannot access file path." : "Ruta no encontrada."),
            icon: "warning",
            showCancelButton: 0,
            buttonsStyling: !1,
            confirmButtonText: (language === 'en' ? "Understood" : "Entendido"),
            customClass: {confirmButton: "btn btn-joffroy-primary"}
        });
    }

}

const sltEstados_ = document.getElementById('sltEstados');
const input_buscarCampos = document.getElementById('buscarCampos');
const buscarCamposFecha = document.getElementById('buscarCamposFecha');
const buscarCamposFechaInstancia = flatpickr(buscarCamposFecha, {
    dateFormat: "Y-m-d",
    allowInput: true,
    static: false,
    altInput: true,
    altFormat: 'j/n/Y',
    onChange: function (selectedDates, dateStr, instance) {
        fechaFiltrado = dateStr.trim().toLowerCase();
        aplicarFiltros();
    }
});
let estadoFiltrado = 'todos';
let nombreFiltrado = '';
let fechaFiltrado = '';
sltEstados_.addEventListener('change', function () {
    switch (this.value) {
        case '1':
            estadoFiltrado = 'todos';
            break;
        case '2':
            estadoFiltrado = ((idiomatemp_ === "en") ? 'Accepted' : 'Aceptado');
            break;
        case '3':
            estadoFiltrado = ((idiomatemp_ === "en") ? 'Pending' : 'Pendiente');
            break;
        case '4':
            estadoFiltrado = ((idiomatemp_ === "en") ? 'Under review' : 'Revisión');
            break;
        case '5':
            estadoFiltrado = ((idiomatemp_ === "en") ? 'Declined' : 'Rechazado');
            break;
    }
    aplicarFiltros();
});
input_buscarCampos.addEventListener('input', function () {
    nombreFiltrado = this.value.trim().toLowerCase();
    aplicarFiltros();
});

function aplicarFiltros() {
    const documentos = document.getElementById('MotrarDocumentos');
    const cards = documentos.getElementsByClassName('documento-elemento');

    for (const card of cards) {
        const nombreSpan = card.querySelector('.documento-nombre');
        const nombre = nombreSpan.textContent.toLowerCase();
        const cardEstado = card.getAttribute('data-filtro');
        const fechaSpan = card.querySelector('.documento-fecha');
        const fechaTexto = fechaSpan.textContent.trim();
        const fechaCard = flatpickr.parseDate(fechaTexto, "j/n/Y");
        const cumpleFiltroEstado = estadoFiltrado === 'todos' || cardEstado === estadoFiltrado;
        const cumpleFiltroNombre = nombre.includes(nombreFiltrado);
        const cumpleFiltroFecha = fechaTexto.includes(fechaFiltrado);

        if (cumpleFiltroEstado && cumpleFiltroNombre && cumpleFiltroFecha) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}

const mdlDocumentoElement = document.getElementById('mdl-documento-03')
mdlDocumentoElement.addEventListener('hide.bs.modal', function (event) {
    frmSubirDoc.reset();
    const iframe_no_doc = document.getElementById('iframe_no_doc');
    const iframe = document.getElementById('iframe_muestra_doc');
    iframe.src = "";
    iframe_no_doc.style.display = 'block';
    iframe.style.display = 'none';
});

function getInfo() {
    $.ajax({
        url: 'controller/get-info.php',
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            if (!response.id) {
                window.location.href = "sing-in.html";
            } else {
                id_socio = response.partner;
                document.getElementById('spnNombreU').innerText += response.name;
                document.getElementById('spnCorreoU').innerText += response.email;
                getDocumentos();
            }
        }
    });

    document.getElementById("buscarCamposFecha").placeholder = (language === 'en' ? 'Search by date' : 'Buscar por fecha');
    document.getElementById("buscarCampos").placeholder = (language === 'en' ? 'Search...' : 'Buscar...');
    document.getElementById("fechaEmision").placeholder = (language === 'en' ? 'Issue date' : 'Fecha de emisión');
    document.getElementById("fechaVence").placeholder = (language === 'en' ? 'Expiration date' : 'Fecha de vencimiento');
}