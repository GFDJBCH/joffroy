let isForeign = false;
let partner_data = [];
const urlP = new URL(window.location.href);
const current_socio = new URLSearchParams(urlP.search).get('identificador');

const hostURL = 'https://muestra-clientes.acromntec.com/joffroy-apps/socios-comerciales/';
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

const lbl_nombre_proveedor = document.querySelector("#lbl_nombre_proveedor");
const lbl_nombre_fiscal = document.querySelector("#lbl_nombre_fiscal");
const lbl_proveedor_direccion = document.querySelector("#lbl_proveedor_direccion");
const lbl_fecha_registro = document.querySelector("#lbl_fecha_registro");
const areasSelect = document.querySelector("#areas");
const proveedorProgress = document.querySelector("#proveedor-progress");

const blockSectionInfoElement = document.querySelector("#blockSectionInfo");
const blockSectionInfoUI = new KTBlockUI(blockSectionInfoElement, {
    overlayClass: "bg-primary bg-opacity-25",
    message: `
<span class="svg-icon svg-icon-primary svg-icon-4hx fa-spin"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M12.6 7C12 7 11.6 6.6 11.6 6V3C11.6 2.4 12 2 12.6 2C13.2 2 13.6 2.4 13.6 3V6C13.6 6.6 13.2 7 12.6 7ZM10 7.59998C10.5 7.29998 10.6 6.69995 10.4 6.19995L9 3.80005C8.7 3.30005 8.10001 3.20002 7.60001 3.40002C7.10001 3.70002 7.00001 4.30005 7.20001 4.80005L8.60001 7.19995C8.80001 7.49995 9.1 7.69995 9.5 7.69995C9.7 7.69995 9.9 7.69998 10 7.59998ZM8 9.30005C8.3 8.80005 8.10001 8.20002 7.60001 7.90002L5.5 6.69995C5 6.39995 4.40001 6.59998 4.10001 7.09998C3.80001 7.59998 4 8.2 4.5 8.5L6.60001 9.69995C6.80001 9.79995 6.90001 9.80005 7.10001 9.80005C7.50001 9.80005 7.9 9.70005 8 9.30005ZM7.20001 12C7.20001 11.4 6.80001 11 6.20001 11H4C3.4 11 3 11.4 3 12C3 12.6 3.4 13 4 13H6.20001C6.70001 13 7.20001 12.6 7.20001 12Z" fill="black"/>
<path opacity="0.3" d="M17.4 5.5C17.4 6.1 17 6.5 16.4 6.5C15.8 6.5 15.4 6.1 15.4 5.5C15.4 4.9 15.8 4.5 16.4 4.5C17 4.5 17.4 5 17.4 5.5ZM5.80001 17.1L7.40001 16.1C7.90001 15.8 8.00001 15.2 7.80001 14.7C7.50001 14.2 6.90001 14.1 6.40001 14.3L4.80001 15.3C4.30001 15.6 4.20001 16.2 4.40001 16.7C4.60001 17 4.90001 17.2 5.30001 17.2C5.50001 17.3 5.60001 17.2 5.80001 17.1ZM8.40001 20.2C8.20001 20.2 8.10001 20.2 7.90001 20.1C7.40001 19.8 7.3 19.2 7.5 18.7L8.30001 17.3C8.60001 16.8 9.20002 16.7 9.70002 16.9C10.2 17.2 10.3 17.8 10.1 18.3L9.30001 19.7C9.10001 20 8.70001 20.2 8.40001 20.2ZM12.6 21.2C12 21.2 11.6 20.8 11.6 20.2V18.8C11.6 18.2 12 17.8 12.6 17.8C13.2 17.8 13.6 18.2 13.6 18.8V20.2C13.6 20.7 13.2 21.2 12.6 21.2ZM16.7 19.9C16.4 19.9 16 19.7 15.8 19.4L15.2 18.5C14.9 18 15.1 17.4 15.6 17.1C16.1 16.8 16.7 17 17 17.5L17.6 18.4C17.9 18.9 17.7 19.5 17.2 19.8C17 19.9 16.8 19.9 16.7 19.9ZM19.4 17C19.2 17 19.1 17 18.9 16.9L18.2 16.5C17.7 16.2 17.6 15.6 17.8 15.1C18.1 14.6 18.7 14.5 19.2 14.7L19.9 15.1C20.4 15.4 20.5 16 20.3 16.5C20.1 16.8 19.8 17 19.4 17ZM20.4 13H19.9C19.3 13 18.9 12.6 18.9 12C18.9 11.4 19.3 11 19.9 11H20.4C21 11 21.4 11.4 21.4 12C21.4 12.6 20.9 13 20.4 13ZM18.9 9.30005C18.6 9.30005 18.2 9.10005 18 8.80005C17.7 8.30005 17.9 7.70002 18.4 7.40002L18.6 7.30005C19.1 7.00005 19.7 7.19995 20 7.69995C20.3 8.19995 20.1 8.79998 19.6 9.09998L19.4 9.19995C19.3 9.19995 19.1 9.30005 18.9 9.30005Z" fill="black"/>
</svg></span>
`
});
blockSectionInfoUI.block();
blockSectionUI.block();

let id_socio;
let paisesAlmacenar = [];
let indicadorDeInicioDePagina = 0;
let selectSucursales = document.getElementById("sucursales");
let area_id_almacenamiento = "";

$(selectSucursales).select2();

function obtenerAreas(sucursal, areas) {
    $.ajax({
        url: 'controller/mostrar_areas.php',
        type: 'POST',
        dataType: 'json',
        data: {
            idSucursal: sucursal
        },
        success: function (response) {
            if (response.length > 0) {
                const areasSelect = $('#areas');
                response.forEach(area => {
                    const option = $(`<option value="${area.Id}">(${area.Codigo}) - ${area.Descripcion}</option>`);
                    areasSelect.append(option);
                });
            }
        }
    });
}

function cargarDatos() {
    if (!current_socio) {
        location.href = 'proveedores.html';
        return;
    }

    $.ajax({
        url: 'controller/traerUnSocio.php',
        type: 'POST',
        data: {id: current_socio},
        dataType: 'json',
        success: function (data) {
            if (data.length > 0) {
                const {
                    id, nbr_negocio, prs_nombre, prs_apellidos, rgm_capital, nbr_comercial, correo, telefono,
                    calle, nmr_interno, nmr_externo, cdg_postal, colonia, pais, estado, ciudad, tp_proveedor, tax_id,
                    lna_negocio, confianza, tipo_operacion, nacionalidad, dias_de_credito, limite_de_credito,
                    areas, sucursales, justificacion, iso, seguridad, fch_creacion, activo, porcentaje
                } = data[0];
                partner_data = data[0];
                isForeign = parseInt(partner_data.tp_proveedor) === 3;
                id_socio = id;
                $("#inp-razonsocial").val(nbr_negocio);
                $("#inp-rz-nombre").val(prs_nombre);
                $("#inp-rz-apellido").val(prs_apellidos);
                $("#regimen_cpt").val(rgm_capital);
                $("#comercial_name").val(nbr_comercial);
                $("#email").val(correo);
                $("#telefono").val(telefono);
                $("#calle").val(calle);
                $("#numero_int").val(nmr_interno);
                $("#numero_ext").val(nmr_externo);
                $("#zip_code").val(cdg_postal);
                $("#colonia").val(colonia);
                $("#slc-country-02").val(pais).trigger('change');
                $("#estado").val(estado);
                $("#ciudad").val(ciudad);
                $("#slc-typprovider-02").val(tp_proveedor).trigger('change');
                $("#identificador_fsc").val(tax_id);
                $("#linea_ngc").val(lna_negocio).trigger('change');
                $('#confianza').val(confianza).trigger('change');
                $('#tipo_de_operacion').val(tipo_operacion).trigger('change');
                $('#nacionalidad').val(nacionalidad).trigger('change');
                $('#dias_de_credito').val(dias_de_credito);
                $('#limite_de_credito').val(limite_de_credito);
                area_id_almacenamiento = areas ? areas.split(",") : [];

                let auxInterno = '';
                if (nmr_interno === 'SIN NUMERO' && nmr_interno === 'SIN NÚMERO') {
                    auxInterno = '';
                } else {
                    auxInterno = ` Int. ${nmr_interno}`;
                }
                let areasArr;
                lbl_nombre_proveedor.innerHTML = `${prs_nombre} ${prs_apellidos} ${activo === '1' ? '<i class="bi bi-person-check text-success"></i>' : ''}`;
                lbl_nombre_fiscal.innerHTML = `<strong>${tax_id}</strong>/${(nbr_negocio === '' ? nbr_comercial : nbr_negocio)}`;
                lbl_proveedor_direccion.innerHTML = `${calle} ${nmr_externo} ${auxInterno}, ${colonia} ${cdg_postal}`;
                lbl_fecha_registro.innerHTML = fch_creacion;
                if (areas) {
                    areasArr = areas.split(",");
                }
                if (areas) {

                    $(areasSelect).val(areasArr);
                    $(areasSelect).trigger('change');
                }

                if (sucursales) {
                    const sucursal = sucursales.split(",");
                    $('#sucursales').val(sucursal).trigger('change');
                    obtenerAreas(sucursales, areasArr);
                }
                proveedorProgress.setAttribute('aria-valuenow', porcentaje.toFixed(2));
                proveedorProgress.style.width = porcentaje.toFixed(2) + '%';
                proveedorProgress.textContent = porcentaje.toFixed(2) + '%';

                $('#justificacion').val(justificacion);
                document.getElementById("iso").checked = iso === true;
                document.getElementById("seguridad").checked = seguridad === true;

                $("#persona_sub_titulo").html(nbr_comercial);

                if (data[0].actividad !== null && data[0].actividad.length > 0) {
                    selectCheckboxesByName('extra-info-actividad', data[0].actividad);
                }
                if (data[0].tipoEmpresa !== null && data[0].tipoEmpresa.length > 0) {
                    selectCheckboxesByName('extra-info-tipo', data[0].tipoEmpresa);
                }
                extra_info_correo.value = (data[0].correoPublico === null ? '' : data[0].correoPublico);
                extra_info_telefono.value = (data[0].telefonoPublico === null ? '' : data[0].telefonoPublico);
                extra_info_web.value = data[0].pagina;

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
                extra_info_empleados.value = data[0].numero;
                if (data[0].idioma !== null && data[0].idioma.length > 0) {
                    selectCheckboxesByName('extra-info-idioma', data[0].idioma);
                }

                blockSectionUI.release();
                blockSectionInfoUI.release();
            }
        },
        error: function (xhr, status, error) {
            console.error('Error en la petición Ajax:', error);
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
    let lnaNegocio = $('#linea_ngc').val();
    $.ajax({
        url: 'controller/updateSocios.php',
        type: 'POST',
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
            taxId: taxId
        },
        success: function (response) {
            toastr.success("Update information", "");
            Swal.fire({
                title: 'response.texto',
                text: 'Quiere regresar al listado de proveedores?',
                showCancelButton: true,
                confirmButtonText: 'Si',
                cancelButtonText: `No`,
                buttonsStyling: false,
                customClass: {confirmButton: "btn btn-sm btn-primary", cancelButton: "btn btn-sm btn-active-light"}
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = `${hostURL}proveedores.html`;
                }
            });

        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });

}

function obtenerPaises() {
    $.ajax({
        url: 'controller/traerPaises.php',
        method: 'POST',
        dataType: 'json',
        success: function (response) {
            paisesAlmacenar = response;
            let paises = response;
            let selectElement = document.getElementById('slc-country-02');
            let selectElement2 = document.getElementById('nacionalidad');

            selectElement.innerHTML = "";
            selectElement2.innerHTML = "";

            let defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.text = 'Seleccionar país';
            defaultOption.selected = true;
            selectElement.appendChild(defaultOption);
            selectElement2.appendChild(defaultOption);

            for (let i = 0; i < paises.length; i++) {
                let pais = paises[i];
                let option = document.createElement('option');
                option.value = pais.Id;
                option.text = pais.Codigo + " - " + pais.Nombre;
                selectElement.appendChild(option);

            }
            cargarNacionalidad(paises);
            cargarDatos();
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });


}

function cargarNacionalidad(paises) {
    let selectElement = document.getElementById('nacionalidad');
    selectElement.innerHTML = "";
    let defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Seleccionar país';
    defaultOption.selected = true;
    selectElement.appendChild(defaultOption);
    for (let i = 0; i < paises.length; i++) {
        let pais = paises[i];
        let option = document.createElement('option');
        option.value = pais.Id;
        option.text = pais.Codigo + " - " + pais.Nombre;
        selectElement.appendChild(option);
    }
}

function traerDepartamentos() {
    $.ajax({
        url: 'controller/traerDepartamentos.php',
        method: 'POST',
        dataType: 'json',
        success: function (response) {
            let selectElement = document.getElementById("linea_ngc");
            selectElement.innerHTML = "";
            let defaultOption = document.createElement('option');
            defaultOption.value = '';
            defaultOption.text = 'Select the line of bussiness';
            defaultOption.selected = true;
            selectElement.appendChild(defaultOption);
            for (let i = 0; i < response.length; i++) {
                let depa = response[i];
                let option = document.createElement('option');
                option.value = depa.Id;
                option.text = depa.Nombre;
                selectElement.appendChild(option);
            }
            obtenerPaises();
        },
        error: function (xhr, status, error) {
            console.error(error);
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

function updateInfoProvedor() {
    let valorId = id_socio;
    let confianza = $('#confianza').val();
    let tipoOperacion = $('#tipo_de_operacion').val();
    let nacionalidad = $('#nacionalidad').val();
    let diasCredito = $('#dias_de_credito').val();
    let limiteCredito = $('#limite_de_credito').val();
    let sucursales = $('#sucursales').val();
    let areas = $('#areas').val();
    let justificacion = $('#justificacion').val();
    let iso = 0;
    let seguridad = 0;
    let isoCheckbox = document.getElementById("iso");
    let isChecked = isoCheckbox.checked;
    if (isChecked) {
        iso = 1;
    }
    isoCheckbox = document.getElementById("seguridad");
    isChecked = isoCheckbox.checked;
    if (isChecked) {
        seguridad = 1;
    }
    let dato = {
        id: valorId,
        confianza: confianza,
        tipoOperacion: tipoOperacion,
        nacionalidad: nacionalidad,
        diasCredito: diasCredito,
        limiteCredito: limiteCredito,
        sucursales: sucursales,
        areas: areas,
        justificacion: justificacion,
        iso: iso,
        seguridad: seguridad
    }
    $.ajax({
        url: 'controller/updateSociosExtraInfo.php',
        method: 'POST',
        data: {
            id: valorId,
            confianza: confianza,
            tipoOperacion: tipoOperacion,
            nacionalidad: nacionalidad,
            diasCredito: diasCredito,
            limiteCredito: limiteCredito,
            sucursales: sucursales,
            areas: areas,
            justificacion: justificacion,
            iso: iso,
            seguridad: seguridad
        },
        success: function (response) {
            toastr.success("Update information", "");
            Swal.fire({
                title: 'response.texto',
                text: 'Quiere regresar al listado de proveedores?',
                showCancelButton: true,
                confirmButtonText: 'Si',
                cancelButtonText: `No`,
                buttonsStyling: false,
                customClass: {confirmButton: "btn btn-sm btn-primary", cancelButton: "btn btn-sm btn-active-light"}
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = `${hostURL}proveedores.html`;
                }
            });

        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

function cargarOperationType() {
    $.ajax({
        url: 'controller/mostrar_opeciones_tipo.php',
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            let select = $('#tipo_de_operacion');
            select.empty();
            for (let i = 0; i < response.length; i++) {
                let option = $('<option>');
                option.val(response[i].Id);
                option.text(response[i].Name);
                select.append(option);
            }
            traerDepartamentos();
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

function traerBranch() {
    $.ajax({
        url: 'controller/getBranch.php',
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            let select = $('#sucursales');
            $.each(response, function (index, item) {
                select.append($('<option>', {
                    value: item.id,
                    text: item.text,
                    Codigo: item.Codigo
                }));
            });
            cargarOperationType();
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

function traerAreas(valor_id_sucursal_) {
    $('#areas').html("");
    let promesas = [];
    for (let index = 0; index < valor_id_sucursal_.length; index++) {
        const valor_id_sucursal = valor_id_sucursal_[index];
        let promesa = new Promise(function (resolve, reject) {
            $.ajax({
                url: 'controller/mostrar_areas.php',
                type: 'POST',
                data: {
                    idSucursal: valor_id_sucursal
                },
                dataType: 'json',
                success: function (response) {
                    for (let i = 0; i < response.length; i++) {
                        let option = $('<option>').val(response[i].Id).text(response[i].Codigo);
                        $('#areas').append(option);
                    }
                    resolve();
                },
                error: function (xhr, status, error) {
                    reject(error);
                }
            });
        });

        promesas.push(promesa);
    }
    Promise.all(promesas)
        .then(function () {
            indicadorDeInicioDePagina++;
            if (area_id_almacenamiento != null && area_id_almacenamiento !== "") {
                let areas = area_id_almacenamiento.split(",");
                $('#areas').val(areas).trigger('change');
            }
        })
        .catch(function (error) {
            console.error(error);
        });
}

function traerNotificacionesEstadoDeRecibiento_tabla() {
    if (!current_socio) {
        location.href = 'proveedores.html';
        return;
    }
    $.ajax({
        url: 'controller/traer_documento_tiempo_de_expiracion.php',
        type: 'POST',
        data: {usuario: current_socio},
        dataType: 'json',
        success: function (response) {
            if (response.length > 0) {
                let fecha_mas_alta = encontrarFechaMasAlta(response);
                $("#update_tr").html(fecha_mas_alta);
                let fecha_de_notificacion_mas_cercana = buscarFechaMasPequena_notificacion(response);
                $("#notificacion_tr").html(fecha_de_notificacion_mas_cercana);
            }
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

function obtenerFecha_diseno(fechaConHora) {
    const fecha = new Date(fechaConHora);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    return `${mes}/${dia}/${anio}`;
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
    const fechaInicial = new Date(fecha);
    const fechaFinal = new Date(fechaInicial.getTime() + dias * 24 * 60 * 60 * 1000);
    const dia = fechaFinal.getDate();
    const mes = fechaFinal.getMonth() + 1;
    const year = fechaFinal.getFullYear();
    return `${mes}/${dia}/${year}`;
}

function buscarFechaMasPequena_notificacion(arrayObjetos) {
    let fechaMasPequena = null;
    arrayObjetos.forEach((objeto) => {
        const fecha = objeto.fecha;
        const notificacionCnt = objeto.notificacion_cnt * objeto.Notification_dias;
        const fechaResultante = sumarDias(fecha, notificacionCnt);
        if (fechaMasPequena === null || fechaResultante < fechaMasPequena) {
            fechaMasPequena = fechaResultante;
        }
    });
    return fechaMasPequena;
}

const frmExtraInfo = document.getElementById('frmExtraInfo');
const extra_info_correo = frmExtraInfo.querySelector('#extra-info-correo');
const extra_info_telefono = frmExtraInfo.querySelector('#extra-info-telefono');
const extra_info_web = frmExtraInfo.querySelector('#extra-info-web');
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
            'extra-info-correo': {
                validators: {
                    notEmpty: {
                        message: 'Correo es requerido'
                    },
                    emailAddress: {
                        message: "Correo inválido",
                    },
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
                            correo: extra_info_correo.value,
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
                                Swal.fire({
                                    title: 'response.texto',
                                    text: 'Quiere regresar al listado de proveedores?',
                                    showCancelButton: true,
                                    confirmButtonText: 'Si',
                                    cancelButtonText: `No`,
                                    buttonsStyling: false,
                                    customClass: {
                                        confirmButton: "btn btn-sm btn-primary",
                                        cancelButton: "btn btn-sm btn-active-light"
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        window.location.href = `${hostURL}proveedores.html`;
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
                }, 2000);
            }
        });
    }
});

const btnRedirectInfo = document.querySelector("#btn-redirect-info");
btnRedirectInfo.addEventListener('click', function (e) {
    window.location.href = `proveedores-info.html?identificador=${current_socio}`;
});

const btnRedirectDocu = document.querySelector("#btn-redirect-documents");
btnRedirectDocu.addEventListener('click', function (e) {
    window.location.href = `proveedores-docu.html?identificador=${current_socio}`;
});

const btnRedirectBill = document.querySelector("#btn-redirect-bill");
btnRedirectBill.addEventListener('click', function (e) {
    window.location.href = `proveedores-bill.html?identificador=${current_socio}`;
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
                obtenerAreas(null, null);
                traerBranch();
            }
        }
    });
}