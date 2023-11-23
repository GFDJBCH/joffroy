currentLang = localStorage.getItem("language");
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

const currentURL = window.location.href;
const urlSearchParams = new URLSearchParams(new URL(currentURL).search);
const documentID = urlSearchParams.get("doc") ? urlSearchParams.get("doc") : null;

moment.locale(currentLang);

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
};

//#region FLUJO
const mdl_flow = new bootstrap.Modal(document.getElementById('mdl-flow'), {
    keyboard: false
});
const btn_modal_flow = document.getElementById("btn-modal-flow");
btn_modal_flow.addEventListener("click", (function (e) {
    mdl_flow.show();
}));

let currentFlow = null;
const flow_form = document.getElementById("flow-form");
const flow_action = flow_form.querySelector("#flow-action");
const flow_users = flow_form.querySelector("#flow-users");
const btn_flow_submit = document.getElementById("btn-flow-submit");

$(flow_action).select2({
    allowClear: true,
    placeholder: currentLang === "en" ? 'Select action' : 'Seleccionar acción'
});

$.ajax({
    type: 'post',
    dataType: "json",
    url: 'controller/mostrar_roles.php',
}).done(function (data) {
    $(flow_users).select2({
        data: data,
        multiple: true,
        allowClear: true,
        placeholder: currentLang === "en" ? 'Select users' : 'Seleccionar usuarios'
    });
});

const flowList = $("#flow-list").DataTable({
    info: true,
    searching: true,
    paging: false,
    columns: [
        {data: "documento", visible: false, searchable: false },
        {
            data: "flujo",
            title: currentLang === "en" ? 'Action' : 'Acción',
            visible: true,
            searchable: true,
            className: 'w-200px ps-4',
            render: function (data, type, row, meta) {
                return data;
            }
        },
        {
            data: "puesto",
            title: currentLang === "en" ? 'Users' : 'Usuarios',
            visible: true,
            searchable: true,
            className: 'ps-4',
            render: function (data, type, row, meta) {
                return data;
            }
        },
        {
            defaultContent: `<button type="button" class="eliminar btn btn-sm btn-light btn-active-light-danger btn-icon">
<span class="svg-icon svg-icon-muted m-0 svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"/>
<path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"/>
<path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"/>
</svg></span>


</button>
<button type="button" class="actualizar btn btn-sm btn-light btn-active-light-warning btn-icon">
<span class="svg-icon svg-icon-muted m-0 svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z" fill="black"/>
<path d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z" fill="black"/>
<path d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z" fill="black"/>
</svg></span>
</button>`,
            orderable: false,
            searchable: false,
            className: 'w-200px text-center py-2',
        }
    ]
});
$('#flow-list tbody').on('click', '.eliminar', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = flowList.row(row).data();
    let dataIndex = flowList.row(row).index();
    Swal.fire({
        text: "Desea eliminar este usuario?",
        icon: "warning",
        showCancelButton: !0,
        buttonsStyling: !1,
        confirmButtonText: "Si, dar de baja!",
        cancelButtonText: "Cancelar",
        customClass: {confirmButton: "btn btn-sm btn-danger", cancelButton: "btn btn-sm btn-active-light"}
    }).then((function (t) {
        if (t.isConfirmed) {
            flowList.row(dataIndex).remove().draw();
        }
    }));
});
$('#flow-list tbody').on('click', '.actualizar', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = flowList.row(row).data();
    let dataIndex = flowList.row(row).index();
    mdl_flow.show();
    currentFlow = dataIndex;
    $(flow_action).val(data.flujo).trigger("change");
    $(flow_users).val(data.puesto).trigger("change");
});

const flowValidator = FormValidation.formValidation(flow_form, {
    fields: {
        'flow-action': {validators: {notEmpty: {message: "La acción es requerida."}}},
        'flow-users': {validators: {notEmpty: {message: "Los usuarios son requeridos."}}}
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger,
        bootstrap: new FormValidation.plugins.Bootstrap5({
            rowSelector: ".fv-row",
            eleInvalidClass: "",
            eleValidClass: ""
        })
    }
});
btn_flow_submit.addEventListener("click", (function (e) {
    e.preventDefault();
    if (flowValidator) {
        flowValidator.validate().then(function (status) {
            if (status === 'Valid') {
                btn_flow_submit.setAttribute('data-kt-indicator', 'on');
                btn_flow_submit.disabled = true;
                setTimeout(function () {
                    btn_flow_submit.removeAttribute('data-kt-indicator');
                    btn_flow_submit.disabled = false;

                    const formData = new FormData(flow_form);
                    const accion = formData.get("flow-action");
                    const usuarios = Array.from(flow_users.selectedOptions, option => option.value);
                    const dataFlow = {
                        documento: documentID,
                        flujo: accion,
                        puesto: usuarios
                    };
                    if (currentFlow !== null) {
                        flowList.row(currentFlow).data( dataFlow ).draw();
                    } else{
                        flowList.row.add(dataFlow).draw();
                    }
                    mdl_flow.hide();
                }, 1000);
            }
        });
    }
}));

const mdlFlowEl = document.getElementById('mdl-flow')
mdlFlowEl.addEventListener('hidden.bs.modal', function (event) {
    flow_form.reset();
    $(flow_action).trigger('change');
    $(flow_users).trigger('change');
    flowValidator.resetForm();
    currentFlow = null;
});
//#endregion

//#region DOCUMENTO
const frmNewDocument = document.getElementById("frmNewDocument");
const name_document = frmNewDocument.querySelector("#name_document");
const name_document_english = frmNewDocument.querySelector("#name_document_english");
const description_document = frmNewDocument.querySelector("#description_document");
const english_description_document = frmNewDocument.querySelector("#english_description_document");
const code_document = frmNewDocument.querySelector("#code_document");
const negocio_document = frmNewDocument.querySelector("#negocio_document");
const document_branch = frmNewDocument.querySelector("#document_branch");
const new_document_natural_check = frmNewDocument.querySelector("#new-document-natural-check");
const new_document_entity_check = frmNewDocument.querySelector("#new-document-entity-check");
const new_document_foreign_check = frmNewDocument.querySelector("#new-document-foreign-check");
const btnDeleteDocument = document.getElementById("btnDeleteDocument");
const btnNewDocument = document.getElementById("btnNewDocument");

const documentValidator = FormValidation.formValidation(frmNewDocument, {
    fields: {
        'name_document': {validators: {notEmpty: {message: "El nombre es requerido"}}},
        'name_document_english': {validators: {notEmpty: {message: "El nombre (ingles) es requerido"}}},
        'description_document': {validators: {notEmpty: {message: "La descripción es requerida."}}},
        'english_description_document': {validators: {notEmpty: {message: "La descripción (ingles) es requerida."}}},
        'code_document': {validators: {notEmpty: {message: "El código es requerido"}}}
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger,
        bootstrap: new FormValidation.plugins.Bootstrap5({
            rowSelector: ".fv-row",
            eleInvalidClass: "",
            eleValidClass: ""
        })
    }
});
btnDeleteDocument.addEventListener("click", (function (e) {
    e.preventDefault();
    btnDeleteDocument.setAttribute('data-kt-indicator', 'on');
    btnDeleteDocument.disabled = true;
    setTimeout(function () {
        btnDeleteDocument.removeAttribute('data-kt-indicator');
        btnDeleteDocument.disabled = false;
        Swal.fire({
            text: "Desea dar de baja el documento?",
            icon: "warning",
            showCancelButton: !0,
            buttonsStyling: !1,
            confirmButtonText: "Si, dar de baja!",
            cancelButtonText: "Cancelar",
            customClass: {confirmButton: "btn btn-sm btn-danger", cancelButton: "btn btn-sm btn-active-light"}
        }).then((function (t) {
            if (t.isConfirmed) {
                const data = new FormData();
                data.append("id", documentID);
                fetch('controller/eliminar-documento.php', {
                    method: "POST",
                    body: data
                })
                    .then(response => response.json())
                    .then(response => {
                        if (response.estado === 200) {
                            Swal.fire({
                                text: response.texto,
                                icon: "success",
                                buttonsStyling: !1,
                                allowOutsideClick: false,
                                confirmButtonText: "Regresar al listado",
                                customClass: {confirmButton: "btn btn-joffroy-primary btn-sm"}
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.location.href = "documentos.html";
                                }
                            })
                        } else {
                            Swal.fire({
                                text: response.texto,
                                icon: "error",
                                buttonsStyling: !1,
                                confirmButtonText: "Entiendo",
                                customClass: {confirmButton: "btn btn-primary"}
                            });
                        }
                    });
            }
        }))
    }, 1000);
}));
btnNewDocument.addEventListener("click", (function (e) {
    e.preventDefault();
    if (documentValidator) {
        documentValidator.validate().then(function (status) {
            if (status === 'Valid') {
                if (isDataTableEmpty(flowList)) {
                    toastr.error("Debe asignar al menos un usuario.");
                } else {
                    btnNewDocument.setAttribute('data-kt-indicator', 'on');
                    btnNewDocument.disabled = true;
                    setTimeout(function () {
                        btnNewDocument.removeAttribute('data-kt-indicator');
                        btnNewDocument.disabled = false;

                        const formData = new FormData(frmNewDocument);

                        const nombre = formData.get("name_document");
                        const nombre_ingles = formData.get("name_document_english");
                        const descripcion = formData.get("description_document");
                        const description_english = formData.get("english_description_document");
                        const codigo = formData.get("code_document");
                        const fisica = formData.has("new-document-natural-check");
                        const moral = formData.has("new-document-entity-check");
                        const extranjero = formData.has("new-document-foreign-check");

                        const unidadesNegocioValues = Array.from(negocio_document.selectedOptions, option => option.value);
                        const sucursalesValues = Array.from(document_branch.selectedOptions, option => option.value);
                        const datosFlow = flowList.rows().data().toArray();

                        const datos = new FormData();
                        datos.append("id", documentID);
                        datos.append("nombre", nombre);
                        datos.append("nombre_ingles", nombre_ingles);
                        datos.append("descripcion", descripcion);
                        datos.append("description_english", description_english);
                        datos.append("codigo", codigo);
                        datos.append("fisica", fisica);
                        datos.append("moral", moral);
                        datos.append("extranjero", extranjero);
                        datos.append("unidades_negocio", JSON.stringify(unidadesNegocioValues));
                        datos.append("sucursales", JSON.stringify(sucursalesValues));
                        datos.append("datosFlow", JSON.stringify(datosFlow));

                        fetch('controller/guardar-documento.php', {
                            method: "POST",
                            body: datos
                        })
                            .then(response => response.json())
                            .then(response => {
                                if (response.estado === 200) {
                                    Swal.fire({
                                        text: response.texto,
                                        icon: "success",
                                        buttonsStyling: !1,
                                        allowOutsideClick: false,
                                        showCancelButton: true,
                                        confirmButtonText: "Ir al listado",
                                        cancelButtonText: "Seguir editado",
                                        customClass: {confirmButton: "btn btn-sm btn-joffroy-primary", cancelButton: "btn btn-sm btn-light"}
                                    }).then((function (t) {
                                        if (t.isConfirmed) {
                                            window.location.href = "documentos.html";
                                        }
                                    }));
                                } else {
                                    Swal.fire({
                                        text: "Lo sentimos, parece que se han detectado algunos errores, inténtalo de nuevo.",
                                        icon: "error",
                                        buttonsStyling: !1,
                                        confirmButtonText: "Entiendo",
                                        customClass: {confirmButton: "btn btn-primary"}
                                    })
                                }
                            });

                    }, 1000);
                }
            }
        });
    }
}));
function isDataTableEmpty(dataTable) {
    return dataTable.data().count() === 0;
}
//#endregion

function fetchData(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: 'post',
            dataType: "json",
            url: url,
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        });
    });
}

const promise1 = fetchData('controller/traerDepartamentos.php');
const promise2 = fetchData('controller/getBranch.php');

function cargarInformacion() {
    if (documentID !== null) {
        blockSectionUI.block();
        const data = new FormData();
        data.append("id", documentID);
        fetch('controller/buscar-documento.php', {
            method: "POST",
            body: data
        })
            .then(response => response.json())
            .then(response => {

                name_document.value = response.nombre;
                name_document_english.value = response.nombre_ingles;
                description_document.value = response.descripcion;
                english_description_document.value = response.description_english;
                code_document.value = response.codigo;
                new_document_natural_check.checked = response.fisica;
                new_document_entity_check.checked = response.moral;
                new_document_foreign_check.checked = response.extranjero;
                $(negocio_document).val(response.negocios).trigger("change");
                $(document_branch).val(response.sucursales).trigger("change");
                if (response.flujos) {
                    flowList.rows.add(response.flujos).draw();
                }
                if (response.fch_borrar) {
                    btn_modal_flow.style.display = 'none';
                    btnDeleteDocument.style.display = 'none';
                    btnNewDocument.style.display = 'none';
                } else {
                    btn_modal_flow.style.display = 'inline';
                    btnDeleteDocument.style.display = 'inline';
                    btnNewDocument.style.display = 'inline';
                }

                if (documentID === '40') {
                    btnDeleteDocument.style.display = 'none';
                }

                blockSectionUI.release();
            });
    } else {
        btn_modal_flow.style.display = 'inline';
        btnDeleteDocument.style.display = 'none';
        btnNewDocument.style.display = 'inline';
    }
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
                Promise.all([promise1, promise2])
                    .then(([dataDepartamentos, dataBranches]) => {
                        const newDataUnits = dataDepartamentos.map(objeto => {
                            return { ...objeto, text: objeto.Nombre, id: objeto.Id };
                        });

                        $(negocio_document).select2({
                            data: newDataUnits,
                            multiple: true,
                            allowClear: true,
                            placeholder: currentLang === "en" ? 'Select business units' : 'Seleccionar unidades de negocio'
                        });

                        $(document_branch).select2({
                            data: dataBranches,
                            multiple: true,
                            allowClear: true,
                            placeholder: currentLang === "en" ? 'Select branches' : 'Seleccionar sucursales'
                        });
                        cargarInformacion();
                    })
                    .catch(error => {
                        console.error("Error al cargar datos:", error);
                    });
            }
        }
    });
}