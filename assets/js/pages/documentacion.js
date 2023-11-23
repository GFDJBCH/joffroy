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
blockSectionUI.block();
const blockFrameElement = document.querySelector("#iframe_muestra_doc");
const blockFrameUI = new KTBlockUI(blockFrameElement, {
    overlayClass: "bg-primary bg-opacity-25",
    message: `
<span class="svg-icon svg-icon-primary svg-icon-4hx fa-spin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.6 7C12 7 11.6 6.6 11.6 6V3C11.6 2.4 12 2 12.6 2C13.2 2 13.6 2.4 13.6 3V6C13.6 6.6 13.2 7 12.6 7ZM10 7.59998C10.5 7.29998 10.6 6.69995 10.4 6.19995L9 3.80005C8.7 3.30005 8.10001 3.20002 7.60001 3.40002C7.10001 3.70002 7.00001 4.30005 7.20001 4.80005L8.60001 7.19995C8.80001 7.49995 9.1 7.69995 9.5 7.69995C9.7 7.69995 9.9 7.69998 10 7.59998ZM8 9.30005C8.3 8.80005 8.10001 8.20002 7.60001 7.90002L5.5 6.69995C5 6.39995 4.40001 6.59998 4.10001 7.09998C3.80001 7.59998 4 8.2 4.5 8.5L6.60001 9.69995C6.80001 9.79995 6.90001 9.80005 7.10001 9.80005C7.50001 9.80005 7.9 9.70005 8 9.30005ZM7.20001 12C7.20001 11.4 6.80001 11 6.20001 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H6.20001C6.70001 13 7.20001 12.6 7.20001 12Z" fill="black"/>
<path opacity="0.3" d="M17.4 5.5C17.4 6.1 17 6.5 16.4 6.5C15.8 6.5 15.4 6.1 15.4 5.5C15.4 4.9 15.8 4.5 16.4 4.5C17 4.5 17.4 5 17.4 5.5ZM5.80001 17.1L7.40001 16.1C7.90001 15.8 8.00001 15.2 7.80001 14.7C7.50001 14.2 6.90001 14.1 6.40001 14.3L4.80001 15.3C4.30001 15.6 4.20001 16.2 4.40001 16.7C4.60001 17 4.90001 17.2 5.30001 17.2C5.50001 17.3 5.60001 17.2 5.80001 17.1ZM8.40001 20.2C8.20001 20.2 8.10001 20.2 7.90001 20.1C7.40001 19.8 7.3 19.2 7.5 18.7L8.30001 17.3C8.60001 16.8 9.20002 16.7 9.70002 16.9C10.2 17.2 10.3 17.8 10.1 18.3L9.30001 19.7C9.10001 20 8.70001 20.2 8.40001 20.2ZM12.6 21.2C12 21.2 11.6 20.8 11.6 20.2V18.8C11.6 18.2 12 17.8 12.6 17.8C13.2 17.8 13.6 18.2 13.6 18.8V20.2C13.6 20.7 13.2 21.2 12.6 21.2ZM16.7 19.9C16.4 19.9 16 19.7 15.8 19.4L15.2 18.5C14.9 18 15.1 17.4 15.6 17.1C16.1 16.8 16.7 17 17 17.5L17.6 18.4C17.9 18.9 17.7 19.5 17.2 19.8C17 19.9 16.8 19.9 16.7 19.9ZM19.4 17C19.2 17 19.1 17 18.9 16.9L18.2 16.5C17.7 16.2 17.6 15.6 17.8 15.1C18.1 14.6 18.7 14.5 19.2 14.7L19.9 15.1C20.4 15.4 20.5 16 20.3 16.5C20.1 16.8 19.8 17 19.4 17ZM20.4 13H19.9C19.3 13 18.9 12.6 18.9 12C18.9 11.4 19.3 11 19.9 11H20.4C21 11 21.4 11.4 21.4 12C21.4 12.6 20.9 13 20.4 13ZM18.9 9.30005C18.6 9.30005 18.2 9.10005 18 8.80005C17.7 8.30005 17.9 7.70002 18.4 7.40002L18.6 7.30005C19.1 7.00005 19.7 7.19995 20 7.69995C20.3 8.19995 20.1 8.79998 19.6 9.09998L19.4 9.19995C19.3 9.19995 19.1 9.30005 18.9 9.30005Z" fill="black"/>
</svg></span>
`
});
blockFrameUI.block();

const mdlDocumento = new bootstrap.Modal(document.getElementById('mdl-documento'), {
    keyboard: false
});

let id_socio = localStorage.getItem("socioComercial_ID");

let _indicador_doc;
let _id_doc;
let idiomatemp_ = localStorage.getItem("idioma_SC");
const registrarEstadoDeDocumento = (estado_) => {
    const documento = id_documento;
    const usuario = id_socio;
    const comentario = $('#comentario_document').val();
    const estado = estado_;
    const id = id_;
    let auxEstado = (idiomatemp_ === 'en' ? 'DECLINED' : 'RECHAZADO' );
    let auxColor = 'btn-danger';
    if (estado_ !== 'Decline') {
        auxEstado = (idiomatemp_ === 'en' ? 'ACCEPTED' : 'ACEPTADO' );
        auxColor = 'btn-joffroy-primary';
    }

    if (estado_ === 'Decline' && $('#comentario_document').val().trim() === '') {
        Swal.fire({
            text: (idiomatemp_ === 'en' ? 'Please include the reason for document rejection' : 'Debe agregar el motivo del rechazo del documento' ),
            icon: "error",
            showCancelButton: false,
            buttonsStyling: false,
            confirmButtonText: (idiomatemp_ === 'en' ? 'Understood' : 'Entendido' ),
            customClass: {confirmButton: "btn btn-sm btn-danger"}
        })
    } else {
        const auxMensaje = `${(idiomatemp_ === 'en' ? `The document will be marked as ${auxEstado}` : `El documento se marcará como ${auxEstado}` )}`;
        const lang_swal = {
            title: (idiomatemp_ === 'en' ? 'Are you sure?' : 'Esta seguro?' ),
            text: auxMensaje,
            confirmButtonText: (idiomatemp_ === 'en' ? 'OK' : 'Entendido' ),
            cancelButtonText: (idiomatemp_ === 'en' ? 'Cancel' : 'Cancelar' ),
        };
        Swal.fire({
            title: lang_swal.title,
            text: lang_swal.text,
            icon: "question",
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: lang_swal.confirmButtonText,
            cancelButtonText: lang_swal.cancelButtonText,
            customClass: {confirmButton: `btn btn-sm ${auxColor}`, cancelButton: "btn btn-sm btn-light"}
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    url: 'controller/insertar_dcm_flujo.php',
                    method: 'POST',
                    data: {
                        documento,
                        usuario,
                        comentario,
                        estado,
                        id
                    },
                    success: (response) => {
                        console.log("response estado", response);
                        if (response) {
                            $('#comentario_document').val("");
                            mdlDocumento.hide();
                        }
                        getDocumentsPartners();
                    },
                    error: (xhr, status, error) => {
                        console.error(error);
                    }
                });
            }
        })
    }
};
const cargarTabla_filtro = () => {
    const id = $("#provider_mostrar").val();
    const pais = document.getElementById("check_mexican").checked;
    const extenjero = document.getElementById("check_foreign").checked;
    const activo = document.getElementById("check_activo").checked;

    const data = {};

    if (id !== "") {
        data.id = id;
    }
    if (!pais) {
        data.pais = pais;
    }
    if (!extenjero) {
        data.extenjero = extenjero;
    }
    if (!activo) {
        data.activo = 0;
    }

    $.ajax({
        url: 'controller/traerDocumentosEnRevision_filtro.php',
        type: 'POST',
        data: data,
        dataType: 'json',
        success: function(data) {
            const tbody = $('#cargarTabla');
            tbody.html("");
            let valorTotal = 0;
            $.each(data, function(index, item) {
                valorTotal++;
                const tr = $('<tr></tr>');
                const tds = [
                    `<td><div class="d-flex align-items-center"><div class="symbol symbol-45px me-5"><img src="assets/media/avatars/blank.png" alt="" /></div><div class="d-flex justify-content-start flex-column"><a href="proveedores-docu.html?identificador=${item.id}" class="text-dark fw-bolder text-hover-primary fs-6">${item.nbr_comercial}</a><span class="text-muted fw-bold text-muted d-block fs-7"> </span></div></div></td>`,
                    `<td><span class="text-dark fw-bolder text-hover-primary d-block fs-6">${(idiomatemp_ === "en") ? item.documento_ingles : item.documento}</span><span class="text-muted fw-bold text-muted d-block fs-7"> </span></td>`,
                    `<td><span class="text-dark fw-bolder text-hover-primary d-block fs-6"><i class="bi bi-calendar-event me-2 text-black"></i>${item.fch_creacion}</span></td>`,
                    `<td><div class="d-flex justify-content-end flex-shrink-0"><a class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"/><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"/></svg></span></a></div></td>`
                ];

                tr.append(tds.join(""));
                tbody.append(tr);
            });

            const spanElement = document.getElementById("spnQty");
            spanElement.textContent = valorTotal;
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}
const traerProvedores = () => {
    $.ajax({
        url: 'controller/traerDocumentosEnRevision.php',
        type: 'GET',
        dataType: 'json',
        success: (response) => {
            if (response.length > 0) {
                const select = $('#provider_mostrar');
                select.empty();
                select.append($('<option>', { value: '', text: '' }));
                for (const item of response) {
                    const option = $('<option>', { value: item.id, text: item.nbr_comercial });
                    select.append(option);
                }
            }
        },
        error: (xhr, status, error) => {
            console.log(error);
        }
    });
}
function cargarTabla() {
    const tbody = $('#cargarTabla');
    tbody.empty();
    let valorTotal = 0;
    $.ajax({
        url: 'controller/traerDocumentosEnRevision.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            if (data.length > 0) {
                $.each(data, function(index, item) {
                    valorTotal++;
                    const div1 = $('<div class="d-flex align-items-center"></div>');
                    const div2 = $('<div class="symbol symbol-45px me-5"></div>').append('<img src="assets/media/avatars/blank.png" alt="" />');
                    const div3 = $('<div class="d-flex justify-content-start flex-column"></div>').append(
                        '<a href="proveedores-docu.html?identificador=' + item.id + '" class="text-dark fw-bolder text-hover-primary fs-6">' + item.nbr_comercial + '</a>',
                        '<span class="text-muted fw-bold text-muted d-block fs-7"> </span>',
                        '<span class="text-dark fw-bolder text-hover-primary d-block fs-6">' + (idiomatemp_ === 'en' ? item.documento_ingles : item.documento) + '</span>',
                        '<span class="text-muted fw-bold text-muted d-block fs-7"> </span>'
                    );
                    const td1 = $('<td></td>').append(div1.append(div2).append(div3));
                    const td2 = $('<td></td>').append('<span class="text-dark fw-bolder text-hover-primary d-block fs-6">' + (idiomatemp_ === "en" ? item.documento_ingles : item.documento) + '</span>', '<span class="text-muted fw-bold text-muted d-block fs-7"> </span>');
                    const td3 = $('<td></td>').append('<span class="text-dark fw-bolder text-hover-primary d-block fs-6">' + item.fch_creacion + '</span>');
                    const a2 = $('<a class="btn btn-icon btn-joffroy-primary btn-sm me-1"></a>').on('click', function() {
                        const url = item.url.substring(3);
                        const company = item.nbr_comercial;
                        const nombre = (idiomatemp_ === "en" ? item.documento_ingles : item.documento);
                        const id_De_documento = item.id_documento;
                        const id__ = item.id_flujo;
                        MostrarDocumento(url, company, nombre, id_De_documento, id__);
                    });
                    const td4 = $('<td></td>').append(
                        $('<div class="d-flex justify-content-end flex-shrink-0"></div>').append(
                            a2.append('<span class="svg-icon svg-icon-3 svg-icon-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"/><path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"/></svg></span>')
                        )
                    );
                    const tr = $('<tr></tr>').append(td1, td2, td3, td4);
                    tbody.append(tr);
                });
                $('#spnQty').text(valorTotal);
            }
            blockSectionUI.release();
        },
        error: function(xhr, status, error) {
            console.error(error);
        }
    });
}
const lblFechaEmision = document.getElementById('lblFechaEmision');
const lblFechaVigencia = document.getElementById('lblFechaVigencia');
function MostrarDocumento(url, company, nombre, id_De_documento, id__, _socio = null) {
    const iframe = document.getElementById('iframe_muestra_doc');
    id_documento = id_De_documento;
    id_ = id__;
    id_socio = _socio;
    url = url.substring(3);

    blockFrameUI.block();
    iframe.onload = function() {
        blockFrameUI.release();
    };

    iframe.src = url;
    document.getElementById('titulo_documento_company_modal').textContent = (language === 'en' ? "Company: " : "Compañía: ") + company;
    document.getElementById('titulo_documento_modal').textContent = nombre;
    mdlDocumento.show();
}
function restablecerFiltro() {
    $("#provider_mostrar").val("");
    document.getElementById("check_mexican").checked = true;
    document.getElementById("check_foreign").checked = true;
    document.getElementById("check_activo").checked = true;
    cargarTabla_filtro();
}

traerProvedores();
let pendientesFiltroFecha = document.getElementById('pendientes-filtro-fecha');
let pendientesFiltroEstado = document.getElementById('pendientes-filtro-estado');
let pendientesFiltroNombre = document.getElementById('pendientes-filtro-nombre');
$(pendientesFiltroFecha).daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
    }, function(start, end, label) {
        let getFecha = moment(start).format("YYYY-MM-DD");
        pendientesTable.search( getFecha ).draw();
    }
);
$(pendientesFiltroNombre).on( 'keyup', function () {
    pendientesTable.search( this.value ).draw();
} );
const placeHolderEstado = (language === 'en' ? 'Search by supplier' : 'Buscar por proveedor' );
$(pendientesFiltroEstado).change((e) => {
    pendientesTable.column(2).search( e.target.value ).draw();
});

const pendientesTable = $("#pendientes-table").DataTable({
    info: true,
    searching: true,
    paging: false,
    order: [[ 11, 'desc' ]],
    columns: [
        {data: "id", title: "id", visible: false, searchable: false, className: 'min-w-100px'},
        {data: "socio", title: (language === 'en' ? "Name" : "Nombre"), visible: true, searchable: false, className: 'min-w-300px', render: function (data, type, row, meta) {
                let auxData = '';
                let auxRazon = '';
                if (row.socio_negocio !== null) {
                    auxRazon = row.socio_negocio;
                } else {
                    auxRazon = row.socio_comercial;
                }

                return `<p class="m-0 fw-bolder">${row.socio_nombre}</p><p class="m-0">(<strong>${row.socio_tax_id}</strong>) ${auxRazon}</p>`;
            }},
        {data: "socio_nombre", visible: false, searchable: true, className: 'min-w-300px'},
        {data: "socio_tax_id", visible: false, searchable: true },
        {data: "socio_negocio", visible: false, searchable: true },
        {data: "socio_comercial", visible: false, searchable: true },
        {data: "documento", title: (language === 'en' ? "Document" : "Documento"), visible: true, searchable: false, className: 'min-w-300px', render: function (data, type, row, meta) {
                return `<p class="m-0 fw-bolder">${row.documento_nombre}</p><p class="m-0">#${row.documento_codigo}</p>`;
            }},
        {data: "documento_codigo", visible: false, searchable: true },
        {data: "documento_nombre", visible: false, searchable: true },
        {data: "nombre", visible: false, searchable: false },
        {data: "url", visible: false, searchable: false },
        {data: "fch_creacion", title: (language === 'en' ? "Registration date" : "Fecha de registro"), visible: true, searchable: true, className: 'min-w-100px'},
        {
            data: "estado", title: (language === 'en' ? "Status" : "Estado"), visible: true, searchable: true, render: function (data, type) {
                let auxData = '';
                switch (data) {
                    case "revision":
                        auxData = `<small class="badge badge-primary">${language === 'en' ? 'Under review' : 'Revisión'}</small>`
                        break;
                    case "Accept":
                        auxData = `<small class="badge badge-success">${language === 'en' ? 'Accepted' : 'Aceptado'}</small>`
                        break;
                    case "Decline":
                        auxData = `<small class="badge badge-danger">${language === 'en' ? 'Declined' : 'Rechazado'}</small>`
                        break;
                    default:
                        auxData = `<small class="badge badge-light">${language === 'en' ? 'Without description' : 'Sin descripción'}</small>`
                        break;
                }

                return auxData;
            }, className: 'min-w-100px'
        },
        {
            defaultContent: `<button type="button" class="informacion btn btn-sm btn-joffroy-primary btn-icon">
<span class="svg-icon svg-icon-white m-0 svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z" fill="black"/>
<path opacity="0.3" d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z" fill="black"/>
</svg></span>
</button>`,
            orderable: false,
            searchable: false,
        },
    ]
});
$('#pendientes-table tbody').on('click', '.informacion', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = pendientesTable.row(row).data();
    let dataIndex = pendientesTable.row(row).index();
    lblFechaEmision.innerText = data.emision;
    lblFechaVigencia.innerText = data.vigencia;
    MostrarDocumento(data.url, (data.socio_negocio ? data.socio_negocio : data.socio_comercial), data.documento_nombre, data.documento, data.id, data.socio)
});

getDocumentsPartners();
function getDocumentsPartners() {
    $.ajax({
        url: 'controller/getDocumentosSociosPendientes.php',
        type: 'POST',
        dataType: 'json',
        success: function(data) {
            const spanElement = document.getElementById("spnQty");
            spanElement.textContent = data.length;

            var nombresUnicos = [];
            data.forEach(function(item) {
                var nombreSocio = item.socio_nombre;

                if (nombresUnicos.indexOf(nombreSocio) === -1) {
                    nombresUnicos.push(nombreSocio);
                }
            });
            $(pendientesFiltroEstado).select2({
                placeholder: placeHolderEstado,
                allowClear: true,
                data: nombresUnicos
            });

            pendientesTable.clear().draw();
            pendientesTable.rows.add(data).draw();
            blockSectionUI.release();
        }
    });

    document.getElementById('pendientes-filtro-nombre').placeholder = language === 'en' ? "Search..." : "Buscar...";
    document.getElementById('comentario_document').placeholder = language === 'en' ? "Enter a comment" : "Ingrese un comentario";
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
                traerProvedores();
                getDocumentsPartners();
            }
        }
    });
}