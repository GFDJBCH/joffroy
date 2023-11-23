let id_socio = localStorage.getItem("socioComercial_ID");
let idiomatemp_ = localStorage.getItem("idioma_SC");

getInfo();
const notificacionesElement = document.querySelector("#notificacionesSection");
const notificacionesUI = new KTBlockUI(notificacionesElement, {
    overlayClass: "bg-primary bg-opacity-25",
    message: `
<span class="svg-icon svg-icon-primary svg-icon-4hx fa-spin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.6 7C12 7 11.6 6.6 11.6 6V3C11.6 2.4 12 2 12.6 2C13.2 2 13.6 2.4 13.6 3V6C13.6 6.6 13.2 7 12.6 7ZM10 7.59998C10.5 7.29998 10.6 6.69995 10.4 6.19995L9 3.80005C8.7 3.30005 8.10001 3.20002 7.60001 3.40002C7.10001 3.70002 7.00001 4.30005 7.20001 4.80005L8.60001 7.19995C8.80001 7.49995 9.1 7.69995 9.5 7.69995C9.7 7.69995 9.9 7.69998 10 7.59998ZM8 9.30005C8.3 8.80005 8.10001 8.20002 7.60001 7.90002L5.5 6.69995C5 6.39995 4.40001 6.59998 4.10001 7.09998C3.80001 7.59998 4 8.2 4.5 8.5L6.60001 9.69995C6.80001 9.79995 6.90001 9.80005 7.10001 9.80005C7.50001 9.80005 7.9 9.70005 8 9.30005ZM7.20001 12C7.20001 11.4 6.80001 11 6.20001 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H6.20001C6.70001 13 7.20001 12.6 7.20001 12Z" fill="black"/>
<path opacity="0.3" d="M17.4 5.5C17.4 6.1 17 6.5 16.4 6.5C15.8 6.5 15.4 6.1 15.4 5.5C15.4 4.9 15.8 4.5 16.4 4.5C17 4.5 17.4 5 17.4 5.5ZM5.80001 17.1L7.40001 16.1C7.90001 15.8 8.00001 15.2 7.80001 14.7C7.50001 14.2 6.90001 14.1 6.40001 14.3L4.80001 15.3C4.30001 15.6 4.20001 16.2 4.40001 16.7C4.60001 17 4.90001 17.2 5.30001 17.2C5.50001 17.3 5.60001 17.2 5.80001 17.1ZM8.40001 20.2C8.20001 20.2 8.10001 20.2 7.90001 20.1C7.40001 19.8 7.3 19.2 7.5 18.7L8.30001 17.3C8.60001 16.8 9.20002 16.7 9.70002 16.9C10.2 17.2 10.3 17.8 10.1 18.3L9.30001 19.7C9.10001 20 8.70001 20.2 8.40001 20.2ZM12.6 21.2C12 21.2 11.6 20.8 11.6 20.2V18.8C11.6 18.2 12 17.8 12.6 17.8C13.2 17.8 13.6 18.2 13.6 18.8V20.2C13.6 20.7 13.2 21.2 12.6 21.2ZM16.7 19.9C16.4 19.9 16 19.7 15.8 19.4L15.2 18.5C14.9 18 15.1 17.4 15.6 17.1C16.1 16.8 16.7 17 17 17.5L17.6 18.4C17.9 18.9 17.7 19.5 17.2 19.8C17 19.9 16.8 19.9 16.7 19.9ZM19.4 17C19.2 17 19.1 17 18.9 16.9L18.2 16.5C17.7 16.2 17.6 15.6 17.8 15.1C18.1 14.6 18.7 14.5 19.2 14.7L19.9 15.1C20.4 15.4 20.5 16 20.3 16.5C20.1 16.8 19.8 17 19.4 17ZM20.4 13H19.9C19.3 13 18.9 12.6 18.9 12C18.9 11.4 19.3 11 19.9 11H20.4C21 11 21.4 11.4 21.4 12C21.4 12.6 20.9 13 20.4 13ZM18.9 9.30005C18.6 9.30005 18.2 9.10005 18 8.80005C17.7 8.30005 17.9 7.70002 18.4 7.40002L18.6 7.30005C19.1 7.00005 19.7 7.19995 20 7.69995C20.3 8.19995 20.1 8.79998 19.6 9.09998L19.4 9.19995C19.3 9.19995 19.1 9.30005 18.9 9.30005Z" fill="black"/>
</svg></span>
`
});
notificacionesUI.block();

const documentsElement = document.querySelector("#documentsSection");
const documentsUI = new KTBlockUI(documentsElement, {
    overlayClass: "bg-primary bg-opacity-25",
    message: `
<span class="svg-icon svg-icon-primary svg-icon-4hx fa-spin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.6 7C12 7 11.6 6.6 11.6 6V3C11.6 2.4 12 2 12.6 2C13.2 2 13.6 2.4 13.6 3V6C13.6 6.6 13.2 7 12.6 7ZM10 7.59998C10.5 7.29998 10.6 6.69995 10.4 6.19995L9 3.80005C8.7 3.30005 8.10001 3.20002 7.60001 3.40002C7.10001 3.70002 7.00001 4.30005 7.20001 4.80005L8.60001 7.19995C8.80001 7.49995 9.1 7.69995 9.5 7.69995C9.7 7.69995 9.9 7.69998 10 7.59998ZM8 9.30005C8.3 8.80005 8.10001 8.20002 7.60001 7.90002L5.5 6.69995C5 6.39995 4.40001 6.59998 4.10001 7.09998C3.80001 7.59998 4 8.2 4.5 8.5L6.60001 9.69995C6.80001 9.79995 6.90001 9.80005 7.10001 9.80005C7.50001 9.80005 7.9 9.70005 8 9.30005ZM7.20001 12C7.20001 11.4 6.80001 11 6.20001 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H6.20001C6.70001 13 7.20001 12.6 7.20001 12Z" fill="black"/>
<path opacity="0.3" d="M17.4 5.5C17.4 6.1 17 6.5 16.4 6.5C15.8 6.5 15.4 6.1 15.4 5.5C15.4 4.9 15.8 4.5 16.4 4.5C17 4.5 17.4 5 17.4 5.5ZM5.80001 17.1L7.40001 16.1C7.90001 15.8 8.00001 15.2 7.80001 14.7C7.50001 14.2 6.90001 14.1 6.40001 14.3L4.80001 15.3C4.30001 15.6 4.20001 16.2 4.40001 16.7C4.60001 17 4.90001 17.2 5.30001 17.2C5.50001 17.3 5.60001 17.2 5.80001 17.1ZM8.40001 20.2C8.20001 20.2 8.10001 20.2 7.90001 20.1C7.40001 19.8 7.3 19.2 7.5 18.7L8.30001 17.3C8.60001 16.8 9.20002 16.7 9.70002 16.9C10.2 17.2 10.3 17.8 10.1 18.3L9.30001 19.7C9.10001 20 8.70001 20.2 8.40001 20.2ZM12.6 21.2C12 21.2 11.6 20.8 11.6 20.2V18.8C11.6 18.2 12 17.8 12.6 17.8C13.2 17.8 13.6 18.2 13.6 18.8V20.2C13.6 20.7 13.2 21.2 12.6 21.2ZM16.7 19.9C16.4 19.9 16 19.7 15.8 19.4L15.2 18.5C14.9 18 15.1 17.4 15.6 17.1C16.1 16.8 16.7 17 17 17.5L17.6 18.4C17.9 18.9 17.7 19.5 17.2 19.8C17 19.9 16.8 19.9 16.7 19.9ZM19.4 17C19.2 17 19.1 17 18.9 16.9L18.2 16.5C17.7 16.2 17.6 15.6 17.8 15.1C18.1 14.6 18.7 14.5 19.2 14.7L19.9 15.1C20.4 15.4 20.5 16 20.3 16.5C20.1 16.8 19.8 17 19.4 17ZM20.4 13H19.9C19.3 13 18.9 12.6 18.9 12C18.9 11.4 19.3 11 19.9 11H20.4C21 11 21.4 11.4 21.4 12C21.4 12.6 20.9 13 20.4 13ZM18.9 9.30005C18.6 9.30005 18.2 9.10005 18 8.80005C17.7 8.30005 17.9 7.70002 18.4 7.40002L18.6 7.30005C19.1 7.00005 19.7 7.19995 20 7.69995C20.3 8.19995 20.1 8.79998 19.6 9.09998L19.4 9.19995C19.3 9.19995 19.1 9.30005 18.9 9.30005Z" fill="black"/>
</svg></span>
`
});
documentsUI.block();

const generalElement = document.querySelector("#generalSection");
const generalUI = new KTBlockUI(generalElement, {
    overlayClass: "bg-primary bg-opacity-25",
    message: `
<span class="svg-icon svg-icon-primary svg-icon-4hx fa-spin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.6 7C12 7 11.6 6.6 11.6 6V3C11.6 2.4 12 2 12.6 2C13.2 2 13.6 2.4 13.6 3V6C13.6 6.6 13.2 7 12.6 7ZM10 7.59998C10.5 7.29998 10.6 6.69995 10.4 6.19995L9 3.80005C8.7 3.30005 8.10001 3.20002 7.60001 3.40002C7.10001 3.70002 7.00001 4.30005 7.20001 4.80005L8.60001 7.19995C8.80001 7.49995 9.1 7.69995 9.5 7.69995C9.7 7.69995 9.9 7.69998 10 7.59998ZM8 9.30005C8.3 8.80005 8.10001 8.20002 7.60001 7.90002L5.5 6.69995C5 6.39995 4.40001 6.59998 4.10001 7.09998C3.80001 7.59998 4 8.2 4.5 8.5L6.60001 9.69995C6.80001 9.79995 6.90001 9.80005 7.10001 9.80005C7.50001 9.80005 7.9 9.70005 8 9.30005ZM7.20001 12C7.20001 11.4 6.80001 11 6.20001 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H6.20001C6.70001 13 7.20001 12.6 7.20001 12Z" fill="black"/>
<path opacity="0.3" d="M17.4 5.5C17.4 6.1 17 6.5 16.4 6.5C15.8 6.5 15.4 6.1 15.4 5.5C15.4 4.9 15.8 4.5 16.4 4.5C17 4.5 17.4 5 17.4 5.5ZM5.80001 17.1L7.40001 16.1C7.90001 15.8 8.00001 15.2 7.80001 14.7C7.50001 14.2 6.90001 14.1 6.40001 14.3L4.80001 15.3C4.30001 15.6 4.20001 16.2 4.40001 16.7C4.60001 17 4.90001 17.2 5.30001 17.2C5.50001 17.3 5.60001 17.2 5.80001 17.1ZM8.40001 20.2C8.20001 20.2 8.10001 20.2 7.90001 20.1C7.40001 19.8 7.3 19.2 7.5 18.7L8.30001 17.3C8.60001 16.8 9.20002 16.7 9.70002 16.9C10.2 17.2 10.3 17.8 10.1 18.3L9.30001 19.7C9.10001 20 8.70001 20.2 8.40001 20.2ZM12.6 21.2C12 21.2 11.6 20.8 11.6 20.2V18.8C11.6 18.2 12 17.8 12.6 17.8C13.2 17.8 13.6 18.2 13.6 18.8V20.2C13.6 20.7 13.2 21.2 12.6 21.2ZM16.7 19.9C16.4 19.9 16 19.7 15.8 19.4L15.2 18.5C14.9 18 15.1 17.4 15.6 17.1C16.1 16.8 16.7 17 17 17.5L17.6 18.4C17.9 18.9 17.7 19.5 17.2 19.8C17 19.9 16.8 19.9 16.7 19.9ZM19.4 17C19.2 17 19.1 17 18.9 16.9L18.2 16.5C17.7 16.2 17.6 15.6 17.8 15.1C18.1 14.6 18.7 14.5 19.2 14.7L19.9 15.1C20.4 15.4 20.5 16 20.3 16.5C20.1 16.8 19.8 17 19.4 17ZM20.4 13H19.9C19.3 13 18.9 12.6 18.9 12C18.9 11.4 19.3 11 19.9 11H20.4C21 11 21.4 11.4 21.4 12C21.4 12.6 20.9 13 20.4 13ZM18.9 9.30005C18.6 9.30005 18.2 9.10005 18 8.80005C17.7 8.30005 17.9 7.70002 18.4 7.40002L18.6 7.30005C19.1 7.00005 19.7 7.19995 20 7.69995C20.3 8.19995 20.1 8.79998 19.6 9.09998L19.4 9.19995C19.3 9.19995 19.1 9.30005 18.9 9.30005Z" fill="black"/>
</svg></span>
`
});
generalUI.block();
const dashTourCompleted = localStorage.getItem('dashTourCompleted');
if (!dashTourCompleted) {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md border border-4 border-joffroy-primary',
            scrollTo: true
        }
    });
    const pasos = [
        {
            id: 'step-1',
            text: 'Resumen de la información clave sobre el proveedor, como su nombre, ubicación y detalles de contacto.',
            attachTo: {
                element: '.step-1',
                on: 'bottom'
            },
            classes: 'text-danger',
            buttons: [
                {
                    text: 'Siguiente',
                    classes: 'btn btn-sm btn-joffroy-primary',
                    action: tour.next
                }
            ]
        },
        {
            id: 'step-2',
            text: 'Aquí se muestran los documentos que el proveedor ha subido a lo largo del tiempo. Esto proporciona una visión cronológica de las acciones y contribuciones del proveedor, lo que puede ser útil para seguir su evolución y contribución al sistema.',
            attachTo: {
                element: '.step-2',
                on: 'bottom'
            },
            classes: 'text-danger',
            buttons: [
                {
                    text: 'Anterior',
                    classes: 'btn btn-sm btn-light',
                    action: tour.back
                },
                {
                    text: 'Siguiente',
                    classes: 'btn btn-sm btn-joffroy-primary',
                    action: tour.next
                },
            ]
        },
        {
            id: 'step-3',
            text: 'Esta tabla muestra los documentos que el proveedor ha subido. Cada entrada de la tabla proporciona información más detallada sobre cada documento, como el nombre del archivo, la fecha de carga y otros detalles relevantes.',
            attachTo: {
                element: '.step-3',
                on: 'bottom'
            },
            classes: 'text-danger',
            buttons: [
                {
                    text: 'Anterior',
                    classes: 'btn btn-sm btn-light',
                    action: tour.back
                },
                {
                    text: 'Completo',
                    classes: 'btn btn-sm btn-joffroy-primary',
                    action: tour.complete
                }
            ]
        },
    ]
    tour.addSteps(pasos);
    tour.start();
    tour.on('complete', () => {
        localStorage.setItem('dashTourCompleted', 'true');
    });
}

const lbl_nombre_proveedor = document.querySelector("#lbl_nombre_proveedor");
const lbl_nombre_fiscal = document.querySelector("#lbl_nombre_fiscal");
const lbl_proveedor_direccion = document.querySelector("#lbl_proveedor_direccion");
const lbl_fecha_registro = document.querySelector("#lbl_fecha_registro");
const areasSelect = document.querySelector("#areas");
const proveedorProgress = document.querySelector("#proveedor-progress");

const documentosTable = $("#documentos-table").DataTable({
    info: true,
    searching: true,
    paging: false,
    order: [[4, 'desc']],
    columns: [
        {data: "id", title: "id", visible: false, searchable: false, className: 'min-w-100px'},
        {
            data: "documento_nombre",
            title: (language === 'en' ? "Document" : "Documento"),
            visible: true,
            searchable: true,
            className: 'min-w-100px'
        },
        {
            data: "estado",
            title: (language === 'en' ? "Status" : "Estado"),
            visible: true,
            searchable: true,
            render: function (data, type) {
                let auxData = '';
                switch (data) {
                    case "revision":
                        auxData = `<small class="badge badge-primary w-100px">${(language === 'en' ? "Under review" : "Revisión")}</small>`
                        break;
                    case "Accept":
                        auxData = `<small class="badge badge-success w-100px">${(language === 'en' ? "Accepted" : "Aceptado")}</small>`
                        break;
                    case "Decline":
                        auxData = `<small class="badge badge-danger w-100px">${(language === 'en' ? "Declined" : "Rechazado")}</small>`
                        break;
                    default:
                        auxData = `<small class="badge badge-light w-100px">${(language === 'en' ? "Without description" : "Sin descripción")}</small>`
                        break;
                }

                return auxData;
            },
            className: 'min-w-100px'
        },
        {
            data: "vigencia",
            title: (language === 'en' ? "Expire" : "Expirar"),
            visible: true,
            searchable: true,
            render: function (data, type) {
                let auxData = (language === 'en' ? "No date" : "Sin fecha");
                if (data) {
                    auxData = moment(data).endOf('day').fromNow();
                }
                return auxData;
            },
            className: 'min-w-100px'
        },
        {
            data: "fch_creacion",
            title: (language === 'en' ? "R. date" : "Fecha c."),
            visible: true,
            searchable: true,
            className: 'min-w-100px'
        },
    ]
});
let estados_documentos_ = [];

function cargarDatos() {
    $.ajax({
        url: 'controller/traerUnSocio.php',
        type: 'POST',
        data: {id: id_socio},
        dataType: 'json',
        success: function (data) {
            if (data.length > 0) {
                const personaTitulo = (data[0].tp_proveedor === "2") ? data[0].nbr_negocio : `${data[0].prs_nombre} ${data[0].prs_apellidos}`;

                const {
                    id, nbr_negocio, prs_nombre, prs_apellidos, rgm_capital, nbr_comercial, correo, telefono, tax_id,
                    calle, nmr_interno, nmr_externo, cdg_postal, colonia, fch_creacion, activo, porcentaje
                } = data[0];
                let auxInterno = '';
                if (nmr_interno === 'SIN NUMERO' && nmr_interno === 'SIN NÚMERO') {
                    auxInterno = '';
                } else {
                    auxInterno = ` Int. ${nmr_interno}`;
                }
                lbl_nombre_proveedor.innerHTML = `${prs_nombre} ${prs_apellidos} ${activo === '1' ? '<i class="bi bi-person-check text-success fs-2"></i>' : ''}`;
                lbl_nombre_proveedor.innerHTML = `${(prs_nombre === '' ? nbr_negocio : (prs_nombre + " " + prs_apellidos))} ${(activo === '1' ? '<i class="bi bi-person-check text-success fs-2"></i>' : '')}`;
                lbl_nombre_fiscal.innerHTML = `<strong>${tax_id}</strong>/${(nbr_negocio === '' ? nbr_comercial : nbr_negocio)}`;
                lbl_proveedor_direccion.innerHTML = `${calle} ${nmr_externo} ${auxInterno}, ${colonia} ${cdg_postal}`;
                lbl_fecha_registro.innerHTML = fch_creacion;
                proveedorProgress.setAttribute('aria-valuenow', porcentaje.toFixed(2));
                proveedorProgress.style.width = porcentaje.toFixed(2) + '%';
                proveedorProgress.textContent = porcentaje.toFixed(2) + '%';
                generalUI.release();
                getDocuments(data[0].tp_proveedor);
            }
        },
        error: function (xhr, status, error) {
            console.error('Error en la petición Ajax:', error);
        }
    });
}


function porcentajeDeArchivos() {

    $.ajax({
        url: 'controller/traerPorcentaDocumentoSocio.php',
        method: 'POST',
        data: {
            id: id_socio
        },
        dataType: 'json',
        success: function (response) {
            $("#mostrarPorcentajeNumero").html(response + "%");
            let barraDeProgreso = document.getElementById("barraDeProgreso");
            barraDeProgreso.style.width = response + "%";
            barraDeProgreso.setAttribute("aria-valuenow", response);
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });


}

function traerNotificacionesEstadoDeRecibiento() {
    let usuario = id_socio;
    $.ajax({
        url: 'controller/traer_notificaciones_docuemnto_socio.php',
        type: 'POST',
        data: {
            usuario: usuario
        },
        dataType: 'json',
        success: function (response) {
            $('#cargarNotificaciones').empty();
            if (response.length > 0) {
                for (let i = 0; i < response.length; i++) {
                    let notificacion = response[i];
                    if (estados_documentos_[i] != notificacion.estado) {

                        notificacion.estado = 'Expired';
                    }
                    let estadoClass = obtenerClaseEstado(notificacion.estado);
                    let estadoColorDeIcono = obtenerColorDeIconoEstado(notificacion.estado);
                    let estadoIconoEstado = obtenerIconoEstado(notificacion.estado);
                    let html = `<div class="d-flex align-items-center ${estadoClass} rounded p-5 mb-7">
                          <span class="svg-icon ${estadoColorDeIcono} me-5">
                            <i class="bi ${estadoIconoEstado}"></i>
                          </span>
                          <div class="flex-grow-1 me-2">
                            <p class="fw-bolder text-gray-800 fs-6">${(language === 'en' ? notificacion.nombreInglesDocumento : notificacion.nombreDocumento)}</p>
                            <span class="text-muted fw-bold d-block fs-9">${notificacion.fch_creacion}</span>
                          </div>
                        </div>`;
                    $('#cargarNotificaciones').append(html);
                }
            } else {
                let html = `<div class="w-100 text-center rounded p-5 mb-7">
                <p class="fw-bolder text-gray-800 fs-6">${(language === 'en' ? 'No registered activities' : 'Sin actividades registradas')}</p>
                </div>`;
                $('#cargarNotificaciones').append(html);
            }
            notificacionesUI.release();
        }
    });
}

function obtenerClaseEstado(estado) {
    let clases = {
        'estado1': 'bg-light-warning',
        'Accept': 'bg-light-success',
        'Decline': 'bg-light-danger',
        'Expired': 'bg-light-danger',
        'revision': 'bg-light-info'
    };

    return clases[estado] || '';
}

function obtenerColorDeIconoEstado(estado) {
    let clases = {
        'estado1': 'svg-icon-warning',
        'Accept': 'svg-icon-success',
        'Decline': 'svg-icon-danger',
        'Expired': 'svg-icon-danger',
        'revision': 'svg-icon-info'
    };
    return clases[estado] || '';
}

function obtenerIconoEstado(estado) {
    let clases = {
        'estado': 'bi-calendar-event fn-20px text-warning',
        'Accept': 'bi-file-earmark-text fn-20px text-success',
        'Decline': 'bi-file-earmark-post fn-20px text-danger',
        'Expired': 'bi-file-earmark-post fn-20px text-danger',
        'revision': 'bi-file-earmark-post fn-20px text-info'
    };
    return clases[estado] || '';
}

function traerNotificacionesEstadoDeRecibiento_tabla() {
    $.ajax({
        url: 'controller/getExpiracion.php',
        type: 'POST',
        data: {
            id: id_socio
        },
        dataType: 'json',
        success: function (response) {
            if (response.length > 0) {
                documentosTable.rows.add(response).draw(false);
            }
            documentsUI.release();
        }
    });
}

function getDocuments(tipoProveedor) {
    $.ajax({
        url: 'controller/obtener-documentos.php',
        type: 'POST',
        data: {
            id: id_socio
        },
        dataType: 'json',
        success: function (response) {
            let contador = 0;
            response.forEach(documento => {
                if (tipoProveedor === "1" && documento.fisica === true) {
                    contador++;
                } else if (tipoProveedor === "2" && documento.moral === true) {
                    contador++;
                }
            });
            document.getElementById('count-documents').innerHTML = `<span class="position-absolute top-0 start-100 translate-middle badge badge-circle badge-danger text-white">${contador}</span>`;
        }
    });
}

function generarHTML(datos) {
    let html = '';

    datos.forEach(function (dato) {
        let nombreDocumento = (language === 'en' ? dato.nombreInglesDocumento : dato.nombreDocumento);
        let estadoDocumento = dato.estado;
        let tiempoDocumento = dato.Expiracion_dias;
        let fecha_simple = obtenerFecha(dato.fecha);
        let fecha_dias_que_han_pasado = calcularDiasPasados(fecha_simple);
        let diasTotales = dato.expiracion_cnt * dato.Expiracion_dias;
        diasTotales -= fecha_dias_que_han_pasado;
        tiempoDocumento = convertirDias(diasTotales);
        if (tiempoDocumento === "") {
            estadoDocumento = (language === 'en' ? 'Expired' : 'Vencido');
            tiempoDocumento = (language === 'en' ? 'Expired' : 'Vencido');
        }
        estados_documentos_.push(estadoDocumento);
        let botonHTML = '<a href="socios-docu.html" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">';
        botonHTML += '<span class="svg-icon svg-icon-3">';
        botonHTML += '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">';
        botonHTML += '<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black" />';
        botonHTML += '<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black" />';
        botonHTML += '</svg>';
        botonHTML += '</span>';
        botonHTML += '</a>';

        html += '<tr>';
        html += '<td>';
        html += '<a href="#" class="text-dark fw-bolder text-hover-primary d-block fs-6">' + nombreDocumento + '</a>';
        html += '</td>';
        html += '<td class="text-center">';
        html += estadoDocumento;
        html += '</td>';
        html += '<td class="text-center">';
        html += tiempoDocumento + '';
        html += '</td>';
        html += '<td>';
        html += '<div class="d-flex justify-content-end flex-shrink-0">';
        html += botonHTML;
        html += '</div>';
        html += '</td>';
        html += '</tr>';
    });

    traerNotificacionesEstadoDeRecibiento();

    return html;
}

function obtenerFecha(fechaConHora) {
    let fecha = new Date(fechaConHora);
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    return anio + '/' + mes + '/' + dia;
}

function convertirDias(dias) {
    let anios = Math.floor(dias / 365);
    let meses = Math.floor((dias % 365) / 30);
    let diasRestantes = dias % 30;
    let resultado = "";
    if (anios > 0) {
        resultado += anios + " " + (language === 'en' ? 'year' : 'año');
        if (anios > 1) {
            resultado += "s";
        }
        resultado += " ";
    }

    if (meses > 0) {
        resultado += meses + " " + (language === 'en' ? 'month' : 'mes');
        if (meses > 1) {
            resultado += "es";
        }
        resultado += " ";
    }

    if (diasRestantes > 0) {
        resultado += diasRestantes + " " + (language === 'en' ? 'day' : 'día');
        if (diasRestantes > 1) {
            resultado += "s";
        }
        resultado += " ";
    }

    return resultado.trim();
}

function calcularDiasPasados(fecha) {
    let fechaManual = new Date(fecha);
    let fechaActual = new Date();
    let diferencia = fechaActual - fechaManual;
    return Math.floor(diferencia / (1000 * 60 * 60 * 24));
}

function obtenerFecha_diseno(fechaConHora) {
    let fecha = new Date(fechaConHora);
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    return mes + '/' + dia + '/' + anio;
}

function encontrarFechaMasAlta(arr) {
    let fechaMasAlta = null;
    arr.forEach(function (objeto) {
        let fecha = new Date(objeto.fecha);

        if (fechaMasAlta === null || fecha > fechaMasAlta) {
            fechaMasAlta = fecha;
        }
    });
    let mes = fechaMasAlta.getMonth() + 1;
    let dia = fechaMasAlta.getDate();
    let year = fechaMasAlta.getFullYear();
    return mes + "/" + dia + "/" + year;
}

function sumarDias(fecha, dias) {
    let fechaInicial = new Date(fecha);
    let fechaFinal = new Date(fechaInicial.getTime() + dias * 24 * 60 * 60 * 1000);
    let dia = fechaFinal.getDate();
    let mes = fechaFinal.getMonth() + 1;
    let year = fechaFinal.getFullYear();
    return mes + "/" + dia + "/" + year;
}

function buscarFechaMasPequena_notificacion(arrayObjetos) {
    let firstDate = null;
    arrayObjetos.forEach(function (objeto) {
        let fecha = objeto.fecha;
        let notificacionCnt = objeto.notificacion_cnt * objeto.Notification_dias;
        let fechaResultante = sumarDias(fecha, notificacionCnt);
        if (firstDate === null || fechaResultante < firstDate) {
            firstDate = fechaResultante;
        }
    });
    return firstDate;
}

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
                cargarDatos();
                traerNotificacionesEstadoDeRecibiento();
                traerNotificacionesEstadoDeRecibiento_tabla();
            }
        }
    });
}