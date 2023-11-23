let id_ = "";
let indicador = 0;
let indicador2 = 0;
let id_flujo = "";
let id_flujo_eliminar = "";
const document_form1 = document.getElementById("frmNewDocument");
const document_branch = document.getElementById("document_branch");

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
const provedoresValidation = FormValidation.formValidation(document_form1, {
    fields: {
        'name_document': {
            validators: {
                notEmpty: {
                    message: 'Is required'
                }
            }
        },
        'name_document_english': {
            validators: {
                notEmpty: {
                    message: 'Is required'
                }
            }
        },
        'code_document': {
            validators: {
                notEmpty: {
                    message: 'Is required'
                }
            }
        },
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger,
        bootstrap: new FormValidation.plugins.Bootstrap5({rowSelector: ".fv-row"})
    }
});

const negocioDocument = document.getElementById("negocio_document");
const newDocumentNaturalCheck = document.getElementById("new-document-natural-check");
const newDocumentNaturalDue = document.getElementById("new-document-natural-due");
const newDocumentNaturalNotification = document.getElementById("new-document-natural-notification");
const newDocumentEntityCheck = document.getElementById("new-document-entity-check");
const newDocumentEntityDue = document.getElementById("new-document-entity-due");
const newDocumentEntityNotification = document.getElementById("new-document-entity-notification");
const newDocumentForeignCheck = document.getElementById("new-document-foreign-check");
const newDocumentForeignDue = document.getElementById("new-document-foreign-due");
const newDocumentForeignNotification = document.getElementById("new-document-foreign-notification");
$(newDocumentNaturalDue).select2({
    placeholder: 'Select expiration period.',
    allowClear: true
});
$(newDocumentEntityDue).select2({
    placeholder: 'Select expiration period.',
    allowClear: true
});
$(newDocumentNaturalNotification).select2({
    placeholder: 'Select a notification period.',
    allowClear: true
});
$(newDocumentEntityNotification).select2({
    placeholder: 'Select a notification period.',
    allowClear: true
});
$(negocioDocument).select2({
    placeholder: 'Select a unit.',
    allowClear: true
});
$(newDocumentForeignDue).select2({
    placeholder: 'Select expiration period.',
    allowClear: true
});
$(newDocumentForeignNotification).select2({
    placeholder: 'Select a notification period.',
    allowClear: true
});

function CargarSelecTiempos() {
    $.ajax({
        url: 'controller/TraerTiempo.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: '',
            nombre: '',
            name: '',
            tiempo: ''
        },
        success: function (response) {
            $('#expiration_tiempo').empty();
            $('#notification_tiempo').empty();
            for (let i = 0; i < response.length; i++) {
                let id = response[i].id;
                let name = response[i].name;
                let option = $('<option>').val(id).text(name);
                $('#expiration_tiempo').append(option);
                $('#notification_tiempo').append(option.clone());
            }
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
        }
    });
}

CargarSelecTiempos();
getBranches();
traerDepartamentos();

function guardar() {
    provedoresValidation
    if (provedoresValidation) {
        provedoresValidation.validate().then(function (status) {
            let dato_configuracion = 1;
            let dato = 0;
            const table = document.getElementById('tbl-flujos');
            if (table.rows.length > 0) {
                dato = 1;
            }
            if (status === 'Valid' && dato !== 0 && dato_configuracion !== 0) {
                const nombre = $('#name_document').val();
                const nombre_ingles = $('#name_document_english').val();
                const descripcion = $('#description_document').val();
                const descripcion_ingles = $('#english_description_document').val();
                const codigo = $('#code_document').val();
                const negocio = $('#negocio_document').val();
                const sucursal = $('#document_branch').val();
                let url = "";

                if (id_ === "") {
                    url = 'controller/insertar_documento.php'; // Ruta al archivo insertar_documento.php
                } else {
                    url = 'controller/update_documento.php';
                    $.ajax({
                        url: 'controller/quitar_documento_settings.php',
                        type: 'POST',
                        async: false,
                        dataType: 'json',
                        data: {
                            documento: id_
                        },
                        success: function (response) {
                            // console.log(response);
                        },
                        error: function (xhr, status, error) {
                            console.log(error);
                        }
                    });
                }
                $.ajax({
                    url: url,
                    method: 'POST',
                    async: false,
                    data: {
                        id: id_,
                        nombre: nombre,
                        documento_ingles: nombre_ingles,
                        descripcion: descripcion,
                        description_english: descripcion_ingles,
                        codigo: codigo,
                        sucursal: sucursal,
                        negocio: negocio,
                        fisica: (newDocumentNaturalCheck.checked ? '1' : '0'),
                        moral: (newDocumentEntityCheck.checked ? '1' : '0'),
                        extranjero: (newDocumentForeignCheck.checked ? '1' : '0'),
                    },
                    success: function (response) {
                        const respuesta = JSON.parse(response);
                        if (respuesta.status) {
                            if (id_ === "") {
                                Guardar_dcm_flujo(respuesta.id);
                            } else {
                                Guardar_dcm_flujo(id_);
                            }
                        } else {
                            Swal.fire({
                                title: respuesta.mensaje,
                                showCancelButton: false,
                                confirmButtonText: 'Entendido',
                            });
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error(xhr.responseText);
                    }
                });
            } else {
                if (dato === 1 && dato_configuracion === 1) {
                    toastr.error("Enter the requested information", "Error");
                } else if (dato === 0) {
                    toastr.error("Enter the document flow", "Error");
                } else {
                    toastr.error("Enter the document settings", "Error");
                }
            }
        });
    }
}

function guardar_settings(id) {
    let documento = id;
    let tbody = document.getElementById('tbl-configuracion');
    let filas = tbody.getElementsByTagName('tr');
    for (let i = 0; i < filas.length; i++) {
        let fila = filas[i];
        let celdas = fila.getElementsByTagName('td');
        let celda2 = celdas[1].textContent;
        let celda3 = celdas[2].textContent;
        let celda4 = celdas[3].textContent;
        let celda6 = celdas[5].textContent;
        let celda7 = celdas[6].textContent;
        let tipo_prs = celda2;
        let expiracion = celda3;
        let expiracion_cnt = celda4;
        let notificacion = celda6;
        let notificacion_cnt = celda7;
        if (tipo_prs == "Physical person" || tipo_prs == " Physical person") {
            tipo_prs = 1;
        } else {
            tipo_prs = 2;
        }

        let data = {
            documento: documento,
            tipo_prs: tipo_prs,
            expiracion: expiracion,
            expiracion_cnt: expiracion_cnt,
            notificacion: notificacion,
            notificacion_cnt: notificacion_cnt
        };
        $.ajax({
            url: 'controller/insertar_documento_settings.php',
            method: 'POST',
            async: false,
            data: data,
            success: function (response) {
                // console.log(response);
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        });
    }

    Guardar_dcm_flujo(documento);
}

function nuevaConfiguracion() {
    myModal2.hide();
    if (id_flujo === "") {
        if (indicador == 0) {
            document.getElementById("tbl-configuracion").innerHTML = "";
            indicador = 1;
        }
        let table_ = document.getElementById('tbl-configuracion');
        let rowCount = table_.rows.length;
        let Type_of_person = $('#tipo_prs_document_settings').val();
        let Expiration_id_ocultar = $('#expiration_tiempo').val();
        let Expiration = $('#calculated_expiration').val();
        let QTY = $('#total_expiration').val();
        let Notification_id_ocultar = $('#notification_tiempo').val();
        let Notification = $('#calculated_notification').val();
        let QTY_2 = $('#total_notification').val();
        document.getElementById("tbl-configuracion").innerHTML += '<tr  data-position="' + rowCount + '" ><td class="text-center">' + (rowCount + 1) + '</td><td> ' + Type_of_person + '</td><td style="display: none;">' + Expiration_id_ocultar + '</td><td>' + Expiration + '</td><td>' + QTY + '</td><td style="display: none;" >' + Notification_id_ocultar + '</td><td>' + Notification + '</td><td>' + QTY_2 + '</td>' +
            '<td><div class="d-flex justify-content-end flex-shrink-0"><a onclick="abirModalConfiguraciones(' + "'" + rowCount + "'" + "," + "'" + Type_of_person + "'" + "," + "'" + Expiration_id_ocultar + "'" + "," + "'" + Expiration + "'" + "," + "'" + QTY + "'" + "," + "'" + Notification_id_ocultar + "'" + "," + "'" + Notification + "'" + "," + "'" + QTY_2 + "'" + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path><path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path></svg></span></a>' +
            '<a onclick="quitarConfiguracion(' + "'" + rowCount + "'" + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path></svg></span></a></div></td></tr>';
    } else {
        let table_ = document.getElementById('tbl-configuracion');
        let rowCount = table_.rows.length;
        let Type_of_person = $('#tipo_prs_document_settings').val();
        let Expiration_id_ocultar = $('#expiration_tiempo').val();
        let Expiration = $('#calculated_expiration').val();
        let QTY = $('#total_expiration').val();
        let Notification_id_ocultar = $('#notification_tiempo').val();
        let Notification = $('#calculated_notification').val();
        let QTY_2 = $('#total_notification').val();

        let positionToModify = id_flujo;
        let trToModify = document.querySelector('#tbl-configuracion tr[data-position="' + positionToModify + '"]');
        if (trToModify) {
            trToModify.innerHTML = '<tr  data-position="' + positionToModify + '" ><td class="text-center">' + (parseInt(positionToModify) + 1) + '</td><td> ' + Type_of_person + '</td><td style="display: none;">' + Expiration_id_ocultar + '</td><td>' + Expiration + '</td><td>' + QTY + '</td><td style="display: none;" >' + Notification_id_ocultar + '</td><td>' + Notification + '</td><td>' + QTY_2 + '</td>' +
                '<td><div class="d-flex justify-content-end flex-shrink-0"><a onclick="abirModalConfiguraciones(' + "'" + rowCount + "'" + "," + "'" + Type_of_person + "'" + "," + "'" + Expiration_id_ocultar + "'" + "," + "'" + Expiration + "'" + "," + "'" + QTY + "'" + "," + "'" + Notification_id_ocultar + "'" + "," + "'" + Notification + "'" + "," + "'" + QTY_2 + "'" + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path><path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path></svg></span></a>' +
                '<a onclick="quitarConfiguracion(' + "'" + positionToModify + "'" + ')"  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path></svg></span></a></div></td></tr>';

        } else {
            console.log('No se encontró el <tr> con la posición especificada.');
        }
    }
    $('#tipo_prs_document_settings').val(null).trigger('change');
    $('#expiration_tiempo').val(1).trigger('change');
    $('#calculated_expiration').val("");
    $('#total_expiration').val("");
    $('#notification_tiempo').val(1).trigger('change');
    $('#calculated_notification').val("");
    $('#total_notification').val("");
}

function calculoDeTotalPorFechas(indicador) {
    switch (indicador) {
        case 1:
            if ($('#calculated_expiration').val() != "") {
                valor = sacarTipoTiempoValor($('#expiration_tiempo').val());
                tiempo = $('#calculated_expiration').val();
                resultado = parseInt(valor) * parseInt(tiempo);
                $('#total_expiration').val(resultado);
            }
            break;
        case 2:
            if ($('#calculated_notification').val() != "") {
                valor = sacarTipoTiempoValor($('#notification_tiempo').val());
                tiempo = $('#calculated_notification').val();
                resultado = parseInt(valor) * parseInt(tiempo);
                $('#total_notification').val(resultado);
            }
            break;
        default:
            break;
    }
}

function sacarTipoTiempoValor(IND) {
    let valor;
    switch (IND) {
        case "1":
            valor = 365;
            break;
        case "2":
            valor = 181;
            break;
        case "3":
            valor = 120;
            break;
        case "4":
            valor = 60;
            break;
        case "5":
            valor = 30;
            break;
        case "6":
            valor = 14;
            break;
        default:
            break;

    }
    return valor;
}

function nuevoFlujo() {
    myModal.hide();
    if (id_flujo == "") {
        if (indicador2 == 0) {
            document.getElementById("tbl-flujos").innerHTML = "";
            indicador2 = 1;
        }
        let Position_involved = $('#flujo').val();
        let puesto = $('#puesto').val();

        let table_ = document.getElementById('tbl-flujos');
        let rowCount = table_.rows.length;
        document.getElementById("tbl-flujos").innerHTML += '<tr data-position="' + rowCount + '" ><td class="text-center">' + (rowCount + 1) + '</td><td>' + Position_involved + '</td><td>' + puesto + '</td>' +
            '<td><div class="d-flex justify-content-end flex-shrink-0"><a  onclick="abirModal(' + "'" + rowCount + "'" + ', ' + "'" + Position_involved + "'" + ', ' + "'" + puesto + "'" + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path><path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path></svg></span></a>' +
            '<a onclick="quitarFlujo(' + "'" + rowCount + "'" + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path></svg></span></a></div></td></tr>';
    } else {
        let Position_involved = $('#flujo').val();
        let puesto = $('#puesto').val();
        let positionToModify = id_flujo;
        let trToModify = document.querySelector('#tbl-flujos tr[data-position="' + positionToModify + '"]');

        if (trToModify) {
            trToModify.innerHTML = '<td class="text-center">' + (parseInt(positionToModify) + 1) + '</td><td>' + Position_involved + '</td><td>' + puesto + '</td>' +
                '<td><div class="d-flex justify-content-end flex-shrink-0"><a onclick="abirModal(' + "'" + positionToModify + "'" + ', ' + "'" + Position_involved + "'" + ', ' + "'" + puesto + "'" + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path><path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path></svg></span></a>' +
                '<a onclick="quitarFlujo(' + "'" + positionToModify + "'" + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path></svg></span></a></div></td>';
        } else {
            console.log('No se encontró el <tr> con la posición especificada.');
        }
    }
    $('#flujo').val([]).trigger('change');
    $('#puesto').val([]).trigger('change');
    id_flujo = "";
    id_flujo_eliminar = "";
}

function Guardar_dcm_flujo(id) {
    let table = document.getElementById('tbl-flujos');
    let rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        let row = rows[i];
        let cells = row.getElementsByTagName('td');
        let columna1 = cells[0].textContent;
        let columna2 = cells[1].textContent;
        let columna3 = cells[2].textContent;
        let flujo = columna2;
        let puesto = columna3;
        let data = {
            id: id,
            nombre: "nombre",
            descripcion: "descripcion",
            codigo: "codigo",
            provider_type: "provider_type",
            unidades_ngc: "unidades_ngc",
            fecha_crg: "fecha_crg",
            fecha_acp: "fecha_acp",
            estado: "estado",
            tipo_prv: "tipo_prv",
            expiracion_frc: "expiracion_frc",
            expiracion_clc: "expiracion_clc",
            notificacion_frc: "notificacion_frc",
            notificacion_clc: "notificacion_clc",
            flujo: flujo,
            puesto: puesto
        };
        $.ajax({
            url: 'controller/insertar_documento_flujo.php',
            type: 'POST',
            async: false,
            data: data,
            success: function (response) {
                // console.log(response);
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    }
    Swal.fire({
        title: 'Documento actualizado correctamente',
        text: 'Quiere regresar al listado de documentos?',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: `No`,
        buttonsStyling: false,
        customClass: {confirmButton: "btn btn-sm btn-primary", cancelButton: "btn btn-sm btn-active-light"}
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = 'documentos.html';
        }
    })
}

function CargarInformacion(id) {
    $.ajax({
        url: 'controller/mostrar_Doc_Uno.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (response) {
            id_ = response[0].id;
            $('#name_document').val(response[0].nombre);
            $('#name_document_english').val(response[0].nombre_ingles);
            $('#description_document').val(response[0].descripcion);
            $('#english_description_document').val(response[0].description_english);
            $('#code_document').val(response[0].codigo);
            newDocumentNaturalCheck.checked = response[0].fisica;
            newDocumentEntityCheck.checked = response[0].moral;
            newDocumentForeignCheck.checked = response[0].extranjero;
            if (response[0].negocio) {
                let arrayDeNegocio = response[0].negocio.split(',').map(function (item) {
                    return item.trim();
                });
                for (let index = 0; index < arrayDeNegocio.length; index++) {
                    const idSucursalSeleccionada = arrayDeNegocio[index];
                    $('#negocio_document option[value="' + idSucursalSeleccionada + '"]').prop('selected', true);
                }
                $('#negocio_document').trigger('change');
            }
            blockSectionUI.release();
        },
        error: function (xhr, status, error) {
            console.log("RESPONSE", error);
        }
    });
    $.ajax({
        url: 'controller/mostrar_Doc_Uno_sucursales.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (response) {
            for (let index = 0; index < response.length; index++) {
                const element = response[index];
                let idSucursalSeleccionada = element.id_sucursal;
                $('#document_branch option[value="' + idSucursalSeleccionada + '"]').prop('selected', true);
                $('#document_branch').select2();
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
    $.ajax({
        url: 'controller/mostrar_Doc_Uno_settings.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (response) {
            for (let index = 0; index < response.length; index++) {
                const element = response[index];
                valor = sacarTipoTiempoValor(element.notificacion);
                tiempo = element.notificacion_cnt;
                resultado = parseInt(valor) * parseInt(tiempo);
                let QTY = resultado;
                valor = sacarTipoTiempoValor(element.notificacion);
                tiempo = element.notificacion_cnt;
                resultado = parseInt(valor) * parseInt(tiempo);
                let QTY_2 = resultado;
                if (index === 0) {
                    document.getElementById("tbl-configuracion").innerHTML = "";
                    indicador += 1
                }
                let Type_of_person;
                let Expiration_id_ocultar = element.expiracion;
                let Expiration = element.expiracion_cnt;
                let Notification_id_ocultar = element.notificacion;
                let Notification = element.notificacion_cnt;
                tipo_prs = element.tipo_prs;
                if (tipo_prs === 1) {
                    tipo_prs = "Physical person";
                    Type_of_person = "Physical person";
                } else if (tipo_prs === 2) {
                    tipo_prs = "Moral person";
                    Type_of_person = "Moral person";
                } else {
                    tipo_prs = tipo_prs;
                }
                document.getElementById("tbl-configuracion").innerHTML += '<tr data-position="' + index + '"><td class="text-center">' + (index + 1) + '</td><td> ' + tipo_prs + '</td><td style="display: none;">' + element.expiracion + '</td><td>' + element.expiracion_cnt + '</td><td>' + QTY + '</td><td style="display: none;" >' + element.notificacion + '</td><td>' + element.notificacion_cnt + '</td><td>' + QTY_2 + '</td>' +
                    '<td><div class="d-flex justify-content-end flex-shrink-0"><a onclick="abirModalConfiguraciones(' + "'" + index + "'" + "," + "'" + Type_of_person + "'" + "," + "'" + Expiration_id_ocultar + "'" + "," + "'" + Expiration + "'" + "," + "'" + QTY + "'" + "," + "'" + Notification_id_ocultar + "'" + "," + "'" + Notification + "'" + "," + "'" + QTY_2 + "'" + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path><path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path></svg></span></a>' +
                    '<a onclick="quitarConfiguracion(' + "'" + index + "'" + ')"  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path></svg></span></a></div></td></tr>';
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
    $.ajax({
        url: 'controller/mostrar_Doc_Uno__flujo.php',
        type: 'POST',
        dataType: 'json',
        data: {
            id: id
        },
        success: function (response) {
            for (let index = 0; index < response.length; index++) {
                const element = response[index];

                if (indicador2 === 0) {
                    document.getElementById("tbl-flujos").innerHTML = "";
                    indicador2 = 1;
                }
                let Position_involved = element.flujo;
                let puesto = element.puesto;
                let table_ = document.getElementById('tbl-flujos');
                let rowCount = table_.rows.length;
                document.getElementById("tbl-flujos").innerHTML += '<tr data-position="' + rowCount + '" ><td class="text-center">' + (rowCount + 1) + '</td><td>' + Position_involved + '</td><td>' + puesto + '</td>' +
                    '<td><div class="d-flex justify-content-end flex-shrink-0"><a href="#"  onclick="abirModal(' + "'" + rowCount + "'" + ', ' + "'" + Position_involved + "'" + ', ' + "'" + puesto + "'" + ')"  class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black"></path><path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black"></path></svg></span></a>' +
                    '<a onclick="quitarFlujo(' + "'" + rowCount + "'" + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path></svg></span></a></div></td></tr>';
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function obtenerGet() {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.search);
    let parametro = params.get('doc');
    document.getElementById("btn_borrar").style.display = "none";
    if (parametro != null) {
        CargarInformacion(parametro);
        if (parametro !== "40") {
            document.getElementById("btn_borrar").style.display = "block";
        }
    } else {
        blockSectionUI.release();
    }
}

obtenerGet();
function abirModal(numeroDeFila, flujo, puesto) {
    const puestos = puesto.split(',');
    $('#flujo').val(flujo).trigger('change');
    $('#puesto').val(puestos).trigger('change');
    id_flujo = numeroDeFila;
    let modal = document.getElementById('kt_modal_invite_friends');
    $(modal).modal('show');
}
function abirModalConfiguraciones(numeroDeFila, tipo_prs_document_settings, expiration_tiempo, calculated_expiration, total_expiration, notification_tiempo, calculated_notification, total_notification) {

    $('#tipo_prs_document_settings').val(tipo_prs_document_settings).trigger('change');
    $('#expiration_tiempo').val(expiration_tiempo).trigger('change');
    $('#calculated_expiration').val(calculated_expiration);
    $('#total_expiration').val(total_expiration);
    $('#notification_tiempo').val(notification_tiempo).trigger('change');
    $('#calculated_notification').val(calculated_notification);
    $('#total_notification').val(total_notification);

    id_flujo = numeroDeFila;
    let modal = document.getElementById('mdlDSettings');
    $(modal).modal('show');
}
function quitarConfiguracion(numeroDeFila) {
    let trToModify = document.querySelector('#tbl-configuracion tr[data-position="' + numeroDeFila + '"]');
    if (trToModify) {
        trToModify.remove();
    }
}
function quitarFlujo(numeroDeFila) {
    let trToModify = document.querySelector('#tbl-flujos tr[data-position="' + numeroDeFila + '"]');
    if (trToModify) {
        trToModify.remove();
    }
}
function borrar() {
    Swal.fire({
        title: 'Esta seguro de que quieres dar de baja este documento?',
        showCancelButton: true,
        confirmButtonText: 'Si, Baja',
        cancelButtonText: `No, Cancelar`,
        buttonsStyling: false,
        customClass: {confirmButton: "btn btn-sm btn-danger", cancelButton: "btn btn-sm btn-active-light"}
    }).then((result) => {
        if (result.isConfirmed) {
            let documentoId = id_;
            $.ajax({
                url: 'controller/Borrar_documento.php',
                method: 'POST',
                data: {id: documentoId},
                dataType: 'text',
                success: function (response) {
                    location.href = 'documentos.html';
                },
                error: function (xhr, status, error) {
                    console.error(error);
                }
            });
        }
    })

}
function traerDepartamentos() {
    $.ajax({
        url: 'controller/traerDepartamentos.php',
        method: 'POST',
        async: false,
        dataType: 'json',
        success: function (response) {
            let selectElement = document.getElementById("negocio_document");
            selectElement.innerHTML = "";
            let defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.text = 'Select the line of bussiness'; // Texto por defecto
            defaultOption.selected = true; // Establecer como seleccionada
            selectElement.appendChild(defaultOption);
            let opciones = selectElement.options;
            for (let i = 0; i < opciones.length; i++) {
                opciones[i].selected = false;
            }
            $('#negocio_document').trigger('change');
            for (let i = 0; i < response.length; i++) {
                let depa = response[i];
                let option = document.createElement('option');
                option.value = depa.Id;
                option.text = depa.Nombre;
                selectElement.appendChild(option);
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}
function getBranches() {
    $.ajax({
        url: 'controller/getBranch.php',
        method: 'POST',
        async: false,
        dataType: 'json',
        success: function (response) {
            console.log("ENTRE AQUI");
            $(document_branch).select2({
                placeholder: 'Select branch',
                allowClear: true,
                data: response
            });
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}
function traerRoles() {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'controller/mostrar_roles.php',
    }).done(function (data) {
        $('#puesto').select2({
            data: data,
            allowClear: true,
            placeholder: "Select the type of intervention"
        });
    });
}
traerRoles();
