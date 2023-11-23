let idSocio = localStorage.getItem("socioComercial_ID");
getInfo();
const hostURL = 'http://partners.joffroy.com/';
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

const blockSectionExtraElement = document.querySelector("#blockSectionExtra");
const blockSectionExtraUI = new KTBlockUI(blockSectionExtraElement, {
    overlayClass: "bg-primary bg-opacity-25",
    message: `
<span class="svg-icon svg-icon-primary svg-icon-4hx fa-spin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.6 7C12 7 11.6 6.6 11.6 6V3C11.6 2.4 12 2 12.6 2C13.2 2 13.6 2.4 13.6 3V6C13.6 6.6 13.2 7 12.6 7ZM10 7.59998C10.5 7.29998 10.6 6.69995 10.4 6.19995L9 3.80005C8.7 3.30005 8.10001 3.20002 7.60001 3.40002C7.10001 3.70002 7.00001 4.30005 7.20001 4.80005L8.60001 7.19995C8.80001 7.49995 9.1 7.69995 9.5 7.69995C9.7 7.69995 9.9 7.69998 10 7.59998ZM8 9.30005C8.3 8.80005 8.10001 8.20002 7.60001 7.90002L5.5 6.69995C5 6.39995 4.40001 6.59998 4.10001 7.09998C3.80001 7.59998 4 8.2 4.5 8.5L6.60001 9.69995C6.80001 9.79995 6.90001 9.80005 7.10001 9.80005C7.50001 9.80005 7.9 9.70005 8 9.30005ZM7.20001 12C7.20001 11.4 6.80001 11 6.20001 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H6.20001C6.70001 13 7.20001 12.6 7.20001 12Z" fill="black"/>
<path opacity="0.3" d="M17.4 5.5C17.4 6.1 17 6.5 16.4 6.5C15.8 6.5 15.4 6.1 15.4 5.5C15.4 4.9 15.8 4.5 16.4 4.5C17 4.5 17.4 5 17.4 5.5ZM5.80001 17.1L7.40001 16.1C7.90001 15.8 8.00001 15.2 7.80001 14.7C7.50001 14.2 6.90001 14.1 6.40001 14.3L4.80001 15.3C4.30001 15.6 4.20001 16.2 4.40001 16.7C4.60001 17 4.90001 17.2 5.30001 17.2C5.50001 17.3 5.60001 17.2 5.80001 17.1ZM8.40001 20.2C8.20001 20.2 8.10001 20.2 7.90001 20.1C7.40001 19.8 7.3 19.2 7.5 18.7L8.30001 17.3C8.60001 16.8 9.20002 16.7 9.70002 16.9C10.2 17.2 10.3 17.8 10.1 18.3L9.30001 19.7C9.10001 20 8.70001 20.2 8.40001 20.2ZM12.6 21.2C12 21.2 11.6 20.8 11.6 20.2V18.8C11.6 18.2 12 17.8 12.6 17.8C13.2 17.8 13.6 18.2 13.6 18.8V20.2C13.6 20.7 13.2 21.2 12.6 21.2ZM16.7 19.9C16.4 19.9 16 19.7 15.8 19.4L15.2 18.5C14.9 18 15.1 17.4 15.6 17.1C16.1 16.8 16.7 17 17 17.5L17.6 18.4C17.9 18.9 17.7 19.5 17.2 19.8C17 19.9 16.8 19.9 16.7 19.9ZM19.4 17C19.2 17 19.1 17 18.9 16.9L18.2 16.5C17.7 16.2 17.6 15.6 17.8 15.1C18.1 14.6 18.7 14.5 19.2 14.7L19.9 15.1C20.4 15.4 20.5 16 20.3 16.5C20.1 16.8 19.8 17 19.4 17ZM20.4 13H19.9C19.3 13 18.9 12.6 18.9 12C18.9 11.4 19.3 11 19.9 11H20.4C21 11 21.4 11.4 21.4 12C21.4 12.6 20.9 13 20.4 13ZM18.9 9.30005C18.6 9.30005 18.2 9.10005 18 8.80005C17.7 8.30005 17.9 7.70002 18.4 7.40002L18.6 7.30005C19.1 7.00005 19.7 7.19995 20 7.69995C20.3 8.19995 20.1 8.79998 19.6 9.09998L19.4 9.19995C19.3 9.19995 19.1 9.30005 18.9 9.30005Z" fill="black"/>
</svg></span>
`
});
blockSectionExtraUI.block();

const infoTourCompleted = localStorage.getItem('infoTourCompleted');
if (!infoTourCompleted) {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shadow-md border border-4 border-joffroy-primary',
            scrollTo: true
        },
        scrollTo: true
    });
    const pasos = [
        {
            id: 'step-1',
            text: 'Aquí encontrarás la información fiscal esencial para el proveedor. Asegúrate de revisar los detalles de contacto y la dirección registrada.',
            attachTo: {
                element: '.step-1',
                on: 'bottom'
            },
            classes: 'text-danger',
            buttons: [
                {
                    text: 'Siguiente',
                    classes: 'btn btn-sm btn-joffroy-primary',
                    action: function () {
                        tour.next();
                    }
                }
            ]
        },
        {
            id: 'step-2',
            text: '¡Continuemos! En este paso, te mostraremos los detalles clave del negocio del proveedor. Esto incluye el tipo de empresa, sectores, empleados, así como su enfoque en el mercado objetivo.',
            attachTo: {
                element: '.step-2',
                on: 'bottom'
            },
            classes: 'text-danger',
            buttons: [
                {
                    text: 'Anterior',
                    classes: 'btn btn-sm btn-light',
                    action: function () {
                        tour.back();
                        mostrarTab('kt_tab_pane_7')
                    }
                },
                {
                    text: 'Completo',
                    classes: 'btn btn-sm btn-joffroy-primary',
                    action: tour.complete
                }
            ],
            when: {
                show: function () {
                    const elemento = document.getElementById("tab_2");
                    elemento.scrollIntoView();
                }
            }
        },
    ]
    tour.addSteps(pasos);
    tour.start();
    tour.on('complete', () => {
        localStorage.setItem('infoTourCompleted', 'true');
    });
}

function mostrarTab(tabName) {
    let someTabTriggerEl = document.querySelector('a[href="#' + tabName + '"]');
    if (someTabTriggerEl) {
        let tab = new bootstrap.Tab(someTabTriggerEl);
        tab.show();
    }
}

const tabEl = document.querySelector('a[data-bs-toggle="tab"]')
tabEl.addEventListener('shown.bs.tab', function (event) {
    window.scrollTo(0, 0);
})

function cargarDatos(socio) {
    idSocio = socio;
    $.ajax({
        url: 'controller/traerUnSocio.php',
        type: 'POST',
        data: {id: idSocio},
        dataType: 'json',
        success: function (data) {
            if (data.length > 0) {
                id_socio = data[0].id;
                $("#inp-razonsocial").val(data[0].nbr_negocio);
                $("#inp-rz-nombre").val(data[0].prs_nombre);
                $("#inp-rz-apellido").val(data[0].prs_apellidos);

                $("#regimen_cpt").val(data[0].rgm_capital);
                $("#comercial_name").val(data[0].nbr_comercial);
                $("#email").val(data[0].correo);
                $("#telefono").val(data[0].telefono);
                $("#calle").val(data[0].calle);
                $("#numero_int").val(data[0].nmr_interno);
                $("#numero_ext").val(data[0].nmr_externo);
                $("#zip_code").val(data[0].cdg_postal);
                $("#colonia").val(data[0].colonia);
                $("#slc-country-02").val(data[0].pais).trigger('change');
                $("#estado").val(data[0].estado);
                $("#ciudad").val(data[0].ciudad);
                $("#slc-typprovider-02").val(data[0].tp_proveedor).trigger('change');
                $("#identificador_fsc").val(data[0].tax_id);

                if (data[0].actividad !== null && data[0].actividad.length > 0) {
                    selectCheckboxesByName('extra-info-actividad', data[0].actividad);
                }
                if (data[0].tipoEmpresa !== null && data[0].tipoEmpresa.length > 0) {
                    selectCheckboxesByName('extra-info-tipo', data[0].tipoEmpresa);
                }
                extra_info_telefono.value = (data[0].telefonoPublico === null ? '' : data[0].telefonoPublico);
                if (data[0].pagina !== null && data[0].pagina !== '') {
                    extra_info_web.value = data[0].pagina;
                } else {
                    extra_info_web.value = '';
                }
                if (data[0].sectorEmpresa !== null && data[0].sectorEmpresa.length > 0) {
                    selectCheckboxesByName('check-info-sector', data[0].sectorEmpresa);
                }
                if (data[0].sectorCliente !== null && data[0].sectorCliente.length > 0) {
                    selectCheckboxesByName('check-cliente-sector', data[0].sectorCliente);
                }
                extra_info_operaciones.value = data[0].operaciones;
                if (data[0].capacidad !== null && data[0].capacidad.length > 0) {
                    selectCheckboxesByName('extra-info-capacidad', data[0].capacidad);
                }
                extra_info_empleados.value = (data[0].numero === null ? '' : data[0].numero);
                if (data[0].idioma !== null && data[0].idioma.length > 0) {
                    selectCheckboxesByName('extra-info-idioma', data[0].idioma);
                }
                getDocuments(data[0].tp_proveedor);
            }
            blockSectionUI.release();
            blockSectionExtraUI.release();
        },
        error: function (xhr, status, error) {
            console.log('Error en la petición Ajax:', error);
        }
    });
}

function actulizar() {
    let id = id_socio;
    let nbrNegocio = $('#inp-razonsocial').val();
    let prsNombre = $('#inp-rz-nombre').val();
    let prsApellidos = $('#inp-rz-apellido').val();
    let compania = "";
    let rgmCapital = $('#regimen_cpt').val();
    let nbrComercial = $('#comercial_name').val();
    let correo = $('#email').val();
    let telefono = $('#telefono').val();
    let calle = $('#calle').val();
    let nmrInterno = $('#numero_int').val();
    let nmrExterno = $('#numero_ext').val();
    let cdgPostal = $('#zip_code').val();
    let colonia = $('#colonia').val();
    let pais = $('#slc-country-02').val();
    let estado = $('#estado').val();
    let ciudad = $('#ciudad').val();
    let tpProveedor = $('#slc-typprovider-02').val();
    let taxId = $('#identificador_fsc').val();
    $.ajax({
        url: 'controller/updateSocios.php',
        type: 'POST', dataType: 'json',
        data: {
            id: id,
            nbrNegocio: nbrNegocio,
            prsNombre: prsNombre,
            prsApellidos: prsApellidos,
            compania: compania,
            rgmCapital: rgmCapital,
            nbrComercial: nbrComercial,
            correo: correo,
            telefono: telefono,
            calle: calle,
            nmrInterno: nmrInterno,
            nmrExterno: nmrExterno,
            cdgPostal: cdgPostal,
            colonia: colonia,
            pais: pais,
            estado: estado,
            ciudad: ciudad,
            tpProveedor: tpProveedor,
            taxId: taxId,
            lnaNegocio: ""
        },
        success: function (response) {
            if (response.estado === 200) {
                toastr.success(response.texto);
                Swal.fire({
                    title: 'response.texto',
                    text: 'Quiere regresar al dashboard?',
                    showCancelButton: true,
                    confirmButtonText: 'Si',
                    cancelButtonText: `No`,
                    buttonsStyling: false,
                    customClass: {confirmButton: "btn btn-sm btn-primary", cancelButton: "btn btn-sm btn-active-light"}
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = `${hostURL}socios-dash.html`;
                    }
                });
            } else {
                toastr.error(response.texto);
            }
        },
        error: function (xhr, status, error) {
            console.log(xhr.responseText);
        }
    });

}

function obtenerPaises() {
    $.ajax({
        url: 'controller/traerPaises.php',
        method: 'POST',
        dataType: 'json',
        success: function (response) {
            let paises = response;
            const selectElement = document.getElementById('slc-country-02');
            selectElement.innerHTML = "";

            const defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.text = 'Seleccionar país';
            defaultOption.selected = true;
            selectElement.appendChild(defaultOption);

            for (let i = 0; i < paises.length; i++) {
                let pais = paises[i];
                const option = document.createElement('option');
                option.value = pais.Id;
                option.text = pais.Codigo + " - " + pais.Nombre;
                selectElement.appendChild(option);
            }

        }
    });
}

function traerDepartamentos() {
    $.ajax({
        url: 'controller/traerDepartamentos.php',
        method: 'POST',
        dataType: 'json',
        success: function (response) {
            obtenerPaises();
        }
    });
}

traerDepartamentos();

const frmExtraInfo = document.getElementById('frmExtraInfo');
const extra_info_correo = frmExtraInfo.querySelector('#extra-info-correo');
const extra_info_telefono = frmExtraInfo.querySelector('#extra-info-telefono');
const extra_info_web = frmExtraInfo.querySelector('#extra-info-web');
const extra_info_web_link = frmExtraInfo.querySelector('#extra-info-web-link');
const extra_info_operaciones = frmExtraInfo.querySelector('#extra-info-operaciones');
const extra_info_empleados = frmExtraInfo.querySelector('#extra-info-empleados');

const extraInfoValidator = FormValidation.formValidation(
    frmExtraInfo,
    {
        fields: {
            'extra-info-actividad': {
                validators: {
                    notEmpty: {
                        message: 'Actividad en otras entidades es requerido'
                    }
                }
            },
            'extra-info-tipo': {
                validators: {
                    notEmpty: {
                        message: 'Tipo de empresa es requerido'
                    }
                }
            },
            'check-info-sector': {
                validators: {
                    notEmpty: {
                        message: 'El sector es requerido'
                    }
                }
            },
            'check-cliente-sector': {
                validators: {
                    notEmpty: {
                        message: 'El sector es requerido'
                    }
                }
            },
            'extra-info-operaciones': {
                validators: {
                    notEmpty: {
                        message: 'Año de inicio es requerido'
                    }
                }
            },
            'extra-info-capacidad': {
                validators: {
                    notEmpty: {
                        message: 'Capacidad de producción es requerido'
                    }
                }
            },
            'extra-info-empleados': {
                validators: {
                    notEmpty: {
                        message: 'Número de empleados es requerido'
                    }
                }
            },
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

const extraInfoSubmit = document.getElementById('extraInfoSubmit');
extraInfoSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    if (extraInfoValidator) {
        extraInfoValidator.validate().then(function (status) {
            if (status === 'Valid') {
                extraInfoSubmit.setAttribute('data-kt-indicator', 'on');
                extraInfoSubmit.disabled = true;

                setTimeout(function () {
                    extraInfoSubmit.removeAttribute('data-kt-indicator');
                    extraInfoSubmit.disabled = false;

                    $.ajax({
                        url: 'controller/updateSociosExtra.php',
                        type: 'POST', dataType: 'json',
                        data: {
                            socio: id_socio,
                            actividad: JSON.stringify(findCheckedCheckboxes('extra-info-actividad')),
                            tipoEmpresa: JSON.stringify(findCheckedCheckboxes('extra-info-tipo')),
                            sectorEmpresa: JSON.stringify(findCheckedCheckboxes('check-info-sector')),
                            correo: null,
                            telefono: extra_info_telefono.value,
                            pagina: extra_info_web.value,
                            sectorCliente: JSON.stringify(findCheckedCheckboxes('check-cliente-sector')),
                            operaciones: extra_info_operaciones.value,
                            capacidad: JSON.stringify(findCheckedCheckboxes('extra-info-capacidad')),
                            numero: extra_info_empleados.value,
                            idioma: JSON.stringify(findCheckedCheckboxes('extra-info-idioma')),
                        },
                        success: function (response) {
                            if (response.estado === 200) {
                                toastr.success(response.texto);
                            } else {
                                toastr.error(response.texto);
                            }
                        },
                        error: function (xhr, status, error) {
                            console.log(xhr.responseText);
                        }
                    });
                }, 2000);
            }
        });
    }
});

function findSelection(field) {
    let test = document.getElementsByName(field);
    let sizes = test.length;
    for (let i = 0; i < sizes; i++) {
        if (test[i].checked === true) {
            return test[i].value;
        }
    }
}

function findCheckedCheckboxes(field) {
    let checkboxes = document.querySelectorAll('input[name="' + field + '"]:checked');
    let checkedValues = [];

    checkboxes.forEach((checkbox) => {
        checkedValues.push(checkbox.value);
    });

    return checkedValues;
}

function selectCheckboxesByName(name, valuesToSelect) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    checkboxes.forEach(checkbox => {
        checkbox.checked = valuesToSelect.includes(checkbox.value);
    });
}

function getDocuments(tipoProveedor) {
    $.ajax({
        url: 'controller/obtener-documentos.php',
        type: 'POST',
        data: {
            id: idSocio
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
                cargarDatos(id_socio);
                traerDepartamentos();
            }
        }
    });

    document.getElementById("inp-rz-nombre").placeholder = (language === "en" ? "Enter the name" : "Ingrese el nombre");
    document.getElementById("inp-rz-apellido").placeholder = (language === "en" ? "Enter last names" : "Ingrese los apellidos");
    document.getElementById("inp-razonsocial").placeholder = (language === "en" ? "Enter the business name" : "Ingrese el nombre de la empresa");
    document.getElementById("regimen_cpt").placeholder = (language === "en" ? "Enter the capital regime" : "Ingrese el régimen de capital");
    document.getElementById("comercial_name").placeholder = (language === "en" ? "Enter business name" : "Ingrese el nombre de la empresa");
    document.getElementById("email").placeholder = (language === "en" ? "Enter email" : "Ingrese el correo electrónico");
    document.getElementById("telefono").placeholder = (language === "en" ? "Enter the phone number" : "Ingrese el número de teléfono");
    document.getElementById("calle").placeholder = (language === "en" ? "Enter the street name" : "Ingrese el nombre de la calle");
    document.getElementById("numero_int").placeholder = (language === "en" ? "Enter the internal number" : "Ingrese el número interno");
    document.getElementById("numero_ext").placeholder = (language === "en" ? "Enter the external number" : "Ingrese el número externo");
    document.getElementById("zip_code").placeholder = (language === "en" ? "Enter zip code" : "Ingrese el código postal");
    document.getElementById("colonia").placeholder = (language === "en" ? "Enter the name of the colony" : "Ingrese el nombre de la colonia");
    document.getElementById("estado").placeholder = (language === "en" ? "Enter the state" : "Ingrese el estado");
    document.getElementById("ciudad").placeholder = (language === "en" ? "Enter the city" : "Ingrese la ciudad");
    document.getElementById("identificador_fsc").placeholder = (language === "en" ? "Enter the tax ID" : "Ingrese el número de identificación fiscal");
}