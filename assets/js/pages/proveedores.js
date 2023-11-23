let paisesAlmacenar = [];
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

const mdlProveedorInfo = new bootstrap.Modal(document.getElementById('mdl-proveedor-info'), {
    keyboard: false
});
const bodyProveedorInfo = document.querySelector("#body-proveedor-info");
const extra_info_correo = document.querySelector('#extra-info-correo');
const extra_info_telefono = document.querySelector('#extra-info-telefono');
const extra_info_web = document.querySelector('#extra-info-web');
const extra_info_operaciones = document.querySelector('#extra-info-operaciones');
const extra_info_empleados = document.querySelector('#extra-info-empleados');
const btnLinkProveedor = document.querySelector('#btnLinkProveedor');

obtenerPaises();
traerProvedores();

function cargarTablaProvedores() {
    $(document).ready(function () {
        $.ajax({
            url: 'controller/getSocios.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                if (data) {
                    const tbody = $('#proveedoresTbody');
                    tbody.html(null);
                    data.forEach(socio => {
                        const pais = paisesAlmacenar.find(objeto => objeto.Codigo === (socio.pais === "" ? '1' : socio.pais));
                        const tipoDePersona = socio.tp_proveedor === 1 ? (language === 'en' ? 'Physical person' : "Persona física") : (language === 'en' ? 'Moral person' : "Persona moral");
                        const auxNombre = socio.nbr_comercial !== "" ? socio.nbr_comercial : `${socio.prs_nombre} ${socio.prs_apellidos}`;
                        let elemento = `<tr>
                                <td>
                                </td>
                                <td>
                                  <div class="d-flex align-items-center">
                                    <div class="symbol symbol-45px me-5">
                                      <img src="assets/media/avatars/blank.png" alt="" />
                                    </div>
                                    <div class="d-flex justify-content-start flex-column">
                                      <a href="proveedores-info.html?identificador=${socio.id}" class="text-dark fw-bolder text-hover-primary fs-6">${auxNombre}</a>
                                      <span class="text-muted fw-bold text-muted d-block fs-7">${tipoDePersona}</span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <span class="text-dark fw-bolder text-hover-primary d-block fs-6">${pais.Codigo}</span>
                                </td>
                                <td class="text-end">
                                  <div class="d-flex flex-column w-100 me-2">
                             
                                    <div class="progress">
                                      <div class="progress-bar progress-bar-striped progress-bar-animated ${(socio.porcentaje === 100 ? 'bg-success' : 'bg-joffroy-primary')} " role="progressbar" style="width: ${(socio.porcentaje).toFixed(2)}%;" aria-valuenow="${(socio.porcentaje).toFixed(2)}" aria-valuemin="0" aria-valuemax="100">${(socio.porcentaje).toFixed(2)}%</div>
                                    </div>
                                    
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex justify-content-end flex-shrink-0">
                                    <button type="button" class="btn btn-icon btn-joffroy-primary btn-sm me-1" onclick="verInformacion(${socio.id})">
                                      <span class="svg-icon svg-icon-white svg-icon-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                          <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"/>
                                          <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"/>
                                        </svg>
                                      </span>
                                    </button>
                                    <a href="proveedores-info.html?identificador=${socio.id}" class="btn btn-icon btn-joffroy-warning btn-sm me-1">
                                      <span class="svg-icon svg-icon-white svg-icon-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z" fill="black"/>
<path d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z" fill="black"/>
<path d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z" fill="black"/>
</svg>
                                      </span>
                                    </a>
                                  </div>
                                </td>
                              </tr>`;
                        tbody.append(elemento);
                    });
                }
                blockSectionUI.release();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log({jqXHR, textStatus, errorThrown});
            }
        });
    });
}

function verInformacion(proveedor) {
    $.ajax({
        url: 'controller/traerUnSocio.php',
        type: 'POST',
        data: {id: proveedor},
        dataType: 'json',
        success: function (data) {
            if (data.length > 0) {
                mdlProveedorInfo.show();
                const socio = data[0];
                const confianzaLevel = [
                    {id: '1', nombre: 'Unreliable'},
                    {id: '2', nombre: 'Conditioned'},
                    {id: '3', nombre: 'Reliable'},
                    {id: '4', nombre: 'Disabled'},
                ]

                const confianza = confianzaLevel.find(nivel => nivel.id === socio.confianza);
                const pais = paisesAlmacenar.find(pais => pais.Id === socio.nacionalidad);
                bodyProveedorInfo.innerHTML = `
                <h2 class="fw-bolder mt-0 mb-3">${language === 'en' ? 'Taxpayer Identification Data' : 'Datos de identificación del contribuyente'}</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'TaxID' : 'RFC'}:</div>
                    <div class="col-sm-12 col-md-6">${socio.tax_id}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Business Name' : 'Nombre comercial'}:</div>
                    <div class="col-sm-12 col-md-6">${socio.nbr_comercial}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Full Name' : 'Nombre completo'}:</div>
                    <div class="col-sm-12 col-md-6">${socio.prs_nombre} ${socio.prs_apellidos}</div>
                </div>
                <h2 class="fw-bolder my-3">${language === 'en' ? 'Location Data' : 'Datos de ubicación'}:</h2>
                <div class="row">
                    <div class="col-sm-12 col-md-3 fw-bolder">${language === 'en' ? 'ZIP Code' : 'Código Postal'}:</div>
                    <div class="col-sm-12 col-md-3">${socio.cdg_postal}</div>
                    <div class="col-sm-12 col-md-3 fw-bolder">${language === 'en' ? 'Street Name' : 'Calle'}:</div>
                    <div class="col-sm-12 col-md-3">${socio.calle}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-3 fw-bolder">${language === 'en' ? 'Street Number' : 'Número Exterior'}:</div>
                    <div class="col-sm-12 col-md-3">${socio.nmr_externo}</div>
                    <div class="col-sm-12 col-md-3 fw-bolder">${language === 'en' ? 'Apartment Number' : 'Número Interior'}:</div>
                    <div class="col-sm-12 col-md-3">${socio.nmr_interno}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-3 fw-bolder">${language === 'en' ? 'Subdivision' : 'Colonia'}:</div>
                    <div class="col-sm-12 col-md-3">${socio.colonia}</div>
                    <div class="col-sm-12 col-md-3 fw-bolder">${language === 'en' ? 'City' : 'Localidad'}:</div>
                    <div class="col-sm-12 col-md-3">${socio.ciudad}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-3 fw-bolder">${language === 'en' ? 'Municipality' : 'Municipio'}:</div>
                    <div class="col-sm-12 col-md-3">${socio.ciudad}</div>
                    <div class="col-sm-12 col-md-3 fw-bolder">${language === 'en' ? 'Federal Entity' : 'Entidad Federativa'}:</div>
                    <div class="col-sm-12 col-md-3">${socio.estado}</div>
                </div>
                
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Trust level' : 'Nivel de confianza'}:</div>
                    <div class="col-sm-12 col-md-6">${(confianza === undefined ? language === 'en' ? 'Unregistered' : 'Sin registrar' : confianza.nombre)}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Operation type' : 'Tipo de operación'}:</div>
                    <div class="col-sm-12 col-md-6">${(socio.tipo_operacion === null ? language === 'en' ? 'Unregistered' : 'Sin registrar' : socio.tipo_operacion)}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Nationality' : 'Nacionalidad'}:</div>
                    <div class="col-sm-12 col-md-6">${(pais === undefined ? language === 'en' ? 'Unregistered' : 'Sin registrar' : pais.Nombre)}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Credit days' : 'Días de crédito'}:</div>
                    <div class="col-sm-12 col-md-6">${((socio.dias_de_credito === null || socio.dias_de_credito === '') ? language === 'en' ? 'Unregistered' : 'Sin registrar' : socio.dias_de_credito)}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Credit limit' : 'Límite de crédito'}:</div>
                    <div class="col-sm-12 col-md-6">${((socio.limite_de_credito === null || socio.limite_de_credito === '') ? language === 'en' ? 'Unregistered' : 'Sin registrar' : socio.limite_de_credito)}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Branches' : 'Sucursales'}:</div>
                    <div class="col-sm-12 col-md-6">${((socio.sucursales === null || socio.sucursales === '') ? language === 'en' ? 'Unregistered' : 'Sin registrar' : socio.sucursales)}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Areas' : 'Áreas'}:</div>
                    <div class="col-sm-12 col-md-6">${((socio.areas === null || socio.areas === '') ? language === 'en' ? 'Unregistered' : 'Sin registrar' : socio.areas)}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 fw-bolder">${language === 'en' ? 'Justification' : 'Justificación'}:</div>
                    <div class="col-sm-12 col-md-6">${((socio.justificacion === null || socio.justificacion === '') ? language === 'en' ? 'Unregistered' : 'Sin registrar' : socio.justificacion)}</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-3 fw-bolder">ISO:</div>
                    <div class="col-sm-12 col-md-3">${(socio.iso ? language === 'en' ? 'YES' : 'SI' : language === 'en' ? 'NOT' : 'NO')}</div>
                    <div class="col-sm-12 col-md-3 fw-bolder">${language === 'en' ? 'Security' : 'Seguridad'}:</div>
                    <div class="col-sm-12 col-md-3">${(socio.seguridad ? language === 'en' ? 'YES' : 'SI' : language === 'en' ? 'NOT' : 'NO')}</div>
                </div>
                `;

                if (socio.actividad !== null && socio.actividad.length > 0) {
                    selectCheckboxesByName('extra-info-actividad', JSON.parse(socio.actividad));
                }
                if (socio.tipoEmpresa !== null && socio.tipoEmpresa.length > 0) {
                    selectCheckboxesByName('extra-info-tipo', socio.tipoEmpresa);
                }
                extra_info_correo.value = socio.correoPublico;
                extra_info_telefono.value = (socio.telefonoPublico === null ? '' : socio.telefonoPublico);
                extra_info_web.value = socio.pagina;
                if (socio.sectorEmpresa !== null && socio.sectorEmpresa.length > 0) {
                    selectCheckboxesByName('check-info-sector', socio.sectorEmpresa);
                }
                if (socio.sectorCliente !== null && socio.sectorCliente.length > 0) {
                    selectCheckboxesByName('check-cliente-sector', socio.sectorCliente);
                }
                extra_info_operaciones.value = socio.operaciones;
                if (socio.capacidad !== null && socio.capacidad.length > 0) {
                    selectCheckboxesByName('extra-info-capacidad', socio.capacidad);
                }
                extra_info_empleados.value = socio.numero;
                if (socio.idioma !== null && socio.idioma.length > 0) {
                    selectCheckboxesByName('extra-info-idioma', socio.idioma);
                }

                btnLinkProveedor.href = `proveedores-info.html?identificador=${socio.id}`;
            }
        }
    });
}

function traerProvedores() {
    $.ajax({
        url: 'controller/mostrar_provedores_socio.php',
        type: 'POST',
        dataType: 'json',
        success: (response) => {
            if (response.length > 0) {
                const select = $('#provider_mostrar');
                select.empty();
                select.append($('<option>', {
                    value: '',
                    text: ''
                }));
                for (const item of response) {
                    const option = $('<option>', {
                        value: item.id,
                        text: item.nbr_comercial
                    });
                    select.append(option);
                }
                $("#mostrarCantidad").html(response.length);
            }
        },
        error: (xhr, status, error) => {
            console.log(error);
        }
    });
}

function obtenerPaises() {
    $.ajax({
        url: 'controller/traerPaises.php',
        method: 'POST',
        dataType: 'json',
        success: (response) => {
            paisesAlmacenar = response;
            cargarTablaProvedores();
        },
        error: (xhr, status, error) => {
            console.log(error);
        }
    });
}

function cargarTablaProvedores_filtro() {
    const id = $("#provider_mostrar").val();
    const pais = document.getElementById("check_mexican").checked;
    const extranjero = document.getElementById("check_foreign").checked;
    const activo = document.getElementById("check_activo").checked;
    const data = {};
    if (id) data.id = id;
    if (!pais) data.pais = pais;
    if (!extranjero) data.extranjero = extranjero;
    if (!activo) data.activo = 0;
    $.ajax({
        url: 'controller/mostrar_provedores_socioFiltro.php',
        method: 'POST',
        data,
        dataType: 'json',
        success: function (data) {
            const tbody = $('#proveedoresTbody');
            tbody.empty();
            let totalDeElementos = 0;
            $.each(data, (index, item) => {
                totalDeElementos++;
                const tipoDePersona = item.tp_proveedor === 1 ? 'Physical person' : 'Moral person';
                let pais = paisesAlmacenar.find(objeto => objeto.Id === item.pais);
                pais = pais ? pais.Codigo : 'MEX';
                const elemento = `
                <tr class="tr-proveedor">
                    <td></td>
                    <td>
                        <div>
                            <a href="proveedores-info.html?identificador=${item.id}" class="text-dark fw-bolder text-hover-primary fs-6 proveedor-nombre">${item.nbr_comercial}</a>
                            <span class="text-danger fw-bold d-block fs-7">${tipoDePersona}</span>
                        </div>
                    </td>
                    <td>
                        <span class="text-dark fw-bolder text-hover-primary d-block fs-6">${pais}</span>
                    </td>
                    <td class="text-end">
                        <div class="d-flex flex-column w-100 me-2">
                            <div class="d-flex flex-stack mb-2">
                                <span class="text-muted me-2 fs-7 fw-bold">${item.porcentaje}%</span>
                            </div>
                            <div class="progress h-6px w-100">
                                <div class="progress-bar bg-info" role="progressbar" style="width: ${item.porcentaje}%; background-color:#1A2BC2!important;" aria-valuenow="${item.porcentaje}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex justify-content-end flex-shrink-0">
                            <a href="proveedores-info.html?identificador=${item.id}" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                <span class="svg-icon svg-icon-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"/>
                                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"/>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </td>
                </tr>`;
                tbody.append(elemento);
            });
            $("#mostrarCantidad").html(totalDeElementos);
        }
    });
}

function restablecerFiltro() {
    $("#provider_mostrar").val("");
    document.getElementById("check_mexican").checked = true;
    document.getElementById("check_foreign").checked = true;
    document.getElementById("check_activo").checked = true;
    cargarTablaProvedores_filtro();
}

function selectCheckboxesByName(name, valuesToSelect) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]`);
    checkboxes.forEach(checkbox => {
        checkbox.checked = valuesToSelect.includes(checkbox.value);
    });
}

const filtroProveedor = document.getElementById('filtro-proveedor');
let nombreFiltrado = '';

filtroProveedor.addEventListener('input', function () {
    nombreFiltrado = this.value.trim().toLowerCase();
    aplicarFiltros();
});

function aplicarFiltros() {
    const proveedores = document.getElementById('proveedoresTbody');
    const rows = proveedores.getElementsByTagName('tr');

    for (const row of rows) {
        const nombreLink = row.querySelector('.proveedor-nombre');
        const nombre = nombreLink.textContent.toLowerCase();
        const cumpleFiltroNombre = nombre.includes(nombreFiltrado);

        if (cumpleFiltroNombre) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
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
                obtenerPaises();
                traerProvedores();
            }
        }
    });
}