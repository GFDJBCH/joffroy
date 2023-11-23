const url = new URL(window.location.href);
const currentEmail = url.searchParams.get('email');
if (!currentEmail) {
    window.location.href = 'sing-in.html';
} else {
    validarCorreo(currentEmail);
}

$(document).on('focus', '.select2-selection.select2-selection--single', function (e) {
    $(this).closest(".select2-container").siblings('select:enabled').select2('open');
});
$(document).on('select2:open', () => {
    document.querySelector('.select2-search__field').focus();
});
$('select.select2').on('select2:closing', function (e) {
    $(e.target).data("select2").$selection.one('focus focusin', function (e) {
        e.stopPropagation();
    });
});

let paises = [];

const socio_pais = document.getElementById("socio-pais");
const socio_tipo = document.getElementById("socio-tipo");
const socio_archivo = document.getElementById("socio-archivo");
const socio_archivo_mensaje = document.getElementById("socio-archivo-mensaje");
const socio_archivo_seccion = document.getElementById("socio-archivo-seccion");

const socio_form = document.getElementById("socio-form");
const socio_nombre = socio_form.querySelector("#socio-nombre");
const socio_apellidos = socio_form.querySelector("#socio-apellidos");
const socio_razon_social = socio_form.querySelector("#socio-razon-social");
const socio_regimen_capital = socio_form.querySelector("#socio-regimen-capital");
const socio_rfc = socio_form.querySelector("#socio-rfc");
const socio_nombre_comercial = socio_form.querySelector("#socio-nombre-comercial");
const socio_correo = socio_form.querySelector("#socio-correo");
const socio_telefono = socio_form.querySelector("#socio-telefono");
const socio_calle = socio_form.querySelector("#socio-calle");
const socio_interior = socio_form.querySelector("#socio-interior");
const socio_exterior = socio_form.querySelector("#socio-exterior");
const socio_postal = socio_form.querySelector("#socio-postal");
const socio_colonia = socio_form.querySelector("#socio-colonia");
const socio_ciudad = socio_form.querySelector("#socio-ciudad");
const socio_estado = socio_form.querySelector("#socio-estado");
const socio_pais_seleccionado = socio_form.querySelector("#socio-pais-seleccionado");
const btn_socio_guardar = document.getElementById("btn-socio-guardar");

$(socio_tipo).select2({
    data: [
        {
            id: 1,
            text: (language === "en" ? "Individual" : "Persona física")
        },
        {
            id: 2,
            text: (language === "en" ? "Corporate Entity" : "Persona moral")
        },
        {
            id: 3,
            text: (language === "en" ? "Foreigner" : "Extranjero")
        }
    ],
    placeholder: (language === "en" ? "Select person type" : "Seleccionar tipo de persona")
});

socio_archivo_mensaje.innerHTML = (language === "en" ? `<strong>IMPORTANT:</strong> Attach Tax Status Certificate` : `<strong>IMPORTANTE:</strong> Adjuntar Constancia de Situación Fiscal "CSF"`);

socio_archivo.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = async function (e) {
        const pdfData = new Uint8Array(e.target.result);

        let elTipo = '';
        if (socio_tipo.value === "1") {
            elTipo = 'fisica';
        } else {
            elTipo = 'moral';
        }

        const sistema = await procesarPDF(pdfData, elTipo);
        if (socio_tipo.value === "1") {
            socio_nombre.disabled = false;
            socio_apellidos.disabled = false;
            socio_nombre.value = sistema.nombres;
            socio_apellidos.value = sistema.primer_apellido + ' ' + sistema.segundo_apellido;
            socio_razon_social.value = (sistema.nombres + ' ' + sistema.primer_apellido + ' ' + sistema.segundo_apellido);
            socio_nombre_comercial.value = (sistema.nombre_comercial === "" ? (sistema.nombres + ' ' + sistema.primer_apellido + ' ' + sistema.segundo_apellido) : sistema.nombre_comercial)
            socio_regimen_capital.disabled = true;
            socio_regimen_capital.value = null;
        } else {
            socio_nombre.disabled = true;
            socio_apellidos.disabled = true;
            socio_nombre.value = null;
            socio_apellidos.value = null;
            socio_razon_social.value = sistema.razon_social;
            socio_nombre_comercial.value = (sistema.nombre_comercial === "" ? sistema.razon_social : sistema.nombre_comercial);
            socio_regimen_capital.disabled = false;
            socio_regimen_capital.value = sistema.regimen_capital;
        }

        socio_calle.value = sistema.nombre_de_vialidad;
        socio_interior.value = sistema.numero_interior;
        socio_exterior.value = sistema.numero_exterior;
        socio_postal.value = sistema.codigo_postal;
        socio_colonia.value = sistema.nombre_de_la_colonia;
        socio_estado.value = sistema.nombre_de_la_entidad_federativa;
        socio_ciudad.value = sistema.nombre_de_la_localidad;
        socio_rfc.value = sistema.rfc;
    };
    reader.readAsArrayBuffer(file);
});


let registroValidator = FormValidation.formValidation(socio_form, {
    fields: {
        "socio-rfc": {validators: {notEmpty: {message: (language === 'en' ? 'The TaxID is required.' : 'El RFC es requerido.')}}},
        "socio-nombre-comercial": {validators: {notEmpty: {message: (language === 'en' ? 'The comercial name is required.' : 'El nombre comercial es requerido.')}}},
        "socio-correo": {
            validators: {
                emailAddress: {
                    message: (language === 'en' ? 'It is not a valid email address.' : 'No es una dirección de correo electrónico válida.')
                }, notEmpty: {message: (language === 'en' ? 'The Email is required.' : 'El correo es requerido.')}
            }
        },
        "socio-calle": {validators: {notEmpty: {message: (language === 'en' ? 'The street name is required.' : 'La calle es requerida.')}}},
        "socio-exterior": {validators: {notEmpty: {message: (language === 'en' ? 'The street number is required.' : 'El número exterior es requerido.')}}},
        "socio-postal": {validators: {notEmpty: {message: (language === 'en' ? 'The ZIP code is required.' : 'El código postal es requerido.')}}},
        "socio-colonia": {validators: {notEmpty: {message: (language === 'en' ? 'The neighborhood is required.' : 'La colonia es requerida.')}}},
        "socio-ciudad": {validators: {notEmpty: {message: (language === 'en' ? 'The city name is required.' : 'La ciudad es requerida.')}}},
        "socio-estado": {validators: {notEmpty: {message: (language === 'en' ? 'The state name is required.' : 'El estado es requerido.')}}},
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap: new FormValidation.plugins.Bootstrap5({
            rowSelector: '.fv-row',
            eleInvalidClass: '',
            eleValidClass: ''
        })
    }
});
btn_socio_guardar.addEventListener('click', function (e) {
    e.preventDefault();
    if (registroValidator) {
        registroValidator.validate().then(function (status) {
            if (status === 'Valid') {
                btn_socio_guardar.setAttribute('data-kt-indicator', 'on');
                btn_socio_guardar.disabled = true;
                setTimeout(function () {
                    btn_socio_guardar.removeAttribute('data-kt-indicator');
                    btn_socio_guardar.disabled = false;

                    let formData = {
                        nbrNegocio: socio_razon_social.value,
                        prsNombre: socio_nombre.value,
                        prsApellidos: socio_apellidos.value,
                        compania: "",
                        rgmCapital: socio_regimen_capital.value,
                        nbrComercial: socio_nombre_comercial.value,
                        correo: socio_correo.value,
                        telefono: socio_telefono.value,
                        calle: socio_calle.value,
                        nmrInterno: socio_interior.value,
                        nmrExterno: socio_exterior.value,
                        cdgPostal: socio_postal.value,
                        colonia: socio_colonia.value,
                        pais: $(socio_pais).val(),
                        estado: socio_estado.value,
                        ciudad: socio_ciudad.value,
                        tpProveedor: $(socio_tipo).val(),
                        taxId: socio_rfc.value,
                        lnaNegocio: "",
                        fchCreacion: "",
                        activo: "",
                        correo_identificador: currentEmail
                    };

                    $.ajax({
                        url: 'controller/insertSocios.php',
                        type: 'POST',
                        data: formData,
                        success: function (response) {
                            localStorage.setItem('socioComercial_ID', response);
                            localStorage.getItem("socioComercial_ID");
                            let fileInput = document.getElementById('socio-archivo');
                            if (fileInput.files.length === 0) {
                                console.log('Por favor, selecciona al menos un archivo.');
                                return false;
                            } else {
                                subirDoc(response)
                            }
                        },
                        error: function (xhr, status, error) {
                            console.error(error);
                        }
                    });

                }, 1100);
            }
        });
    }
});

fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(response => {
        const newDataPaises = response.map(objeto => {
            return {
                ...objeto,
                id: objeto.cioc,
                text: `${objeto.cca3} - ${(language === "en" ? objeto.name.official : objeto.translations.spa.official)}`
            };
        });
        paises = newDataPaises;
        $(socio_pais).select2({
            data: newDataPaises,
            placeholder: (language === "en" ? "Select country" : "Seleccionar país")
        });
    });

$(socio_pais).on("change", function () {
    const opcionPais = $(this).select2('data')[0];
    const opcionTipo = $(socio_tipo).select2('data')[0];
    const value = opcionPais.id;
    if (value !== "MEX" || opcionTipo.id === "") {
        console.log("No has seleccionado el tipo")
        socio_archivo_seccion.style.display = "none";
        socio_archivo.value = "";
    } else if (opcionTipo.id !== "") {
        socio_archivo_seccion.style.display = "block";
    }

    if (opcionPais.postalCode) {
        socio_postal.placeholder = opcionPais.postalCode.format;
        socio_pais_seleccionado.value = (language === "en" ? opcionPais.name.official : opcionPais.translations.spa.official);
    }
});
$(socio_tipo).on("change", function () {
    const opcionTipo = $(this).select2('data')[0];
    const opcionPais = $(socio_pais).select2('data')[0];
    if (opcionPais.id !== "MEX" || opcionPais.id === "") {
        socio_archivo_seccion.style.display = "none";
        socio_archivo.value = "";
    } else {
        socio_archivo_seccion.style.display = "block";
    }
});

async function procesarPDF(pdfData, tipo) {
    const paginaDeseada = 1;
    const data = {};
    const loadingTask = pdfjsLib.getDocument(pdfData);
    try {
        const pdf = await loadingTask.promise;
        if (paginaDeseada >= 1 && paginaDeseada <= pdf.numPages) {
            const page = await pdf.getPage(paginaDeseada);
            const textContent = await page.getTextContent();

            textContent.items.forEach((textItem, index) => {
                const n = index + 1;
                const campo = '';
                const tipoPersona = 'fisica';
                if (!data[campo]) {
                    data[campo] = textItem.str;
                } else {
                    data[campo] += ' ' + textItem.str;
                }
            });

            let datos = {};
            if (tipo === 'fisica') {
                datos = this.funcionFisica(data['']);
            } else {
                datos = this.funcionMoral(data['']);
            }
            return datos;
        } else {
            console.log('La página deseada está fuera del rango del documento.');
            return null;
        }
    } catch (error) {
        console.error('Error al procesar el PDF:', error);
        return null;
    }
}

function funcionFisica(textoExtraido) {
    const data = {};
    const palabrasAEliminar = ['Datos del domicilio registrado ', 'Datos de Ubicación: ', 'Actividades Económicas:'];

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    const palabrasRegex = new RegExp(palabrasAEliminar.map(escapeRegExp).join('|'), 'g');
    const textoModificado = textoExtraido.replace(palabrasRegex, '');

    function quitarAcentos(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function eliminarGuionesBajos(texto) {
        return texto.replace(/_/g, '');
    }

    function obtenerDatosEspecificos(texto, campos) {
        const datosExtraidos = {};

        campos.forEach((campo, index) => {
            const indiceCampo = texto.indexOf(campo);

            if (indiceCampo !== -1) {
                const inicioValor = indiceCampo + campo.length;
                const finValor = index < campos.length - 1 ? texto.indexOf(campos[index + 1]) : texto.length;
                if (finValor !== -1) {
                    let valor = texto.substring(inicioValor, finValor).trim();
                    let propiedadEnMinuscula = campo.toLowerCase().replace(':', '').replace(/\s+/g, '_');

                    if (propiedadEnMinuscula === 'nombre_(s)') {
                        propiedadEnMinuscula = 'nombres';
                    }

                    propiedadEnMinuscula = quitarAcentos(propiedadEnMinuscula);

                    if (propiedadEnMinuscula === 'nombre_del_municipio_o_demarcacion_territorial') {
                        propiedadEnMinuscula = 'nombre_del_municipio';
                    }
                    if (propiedadEnMinuscula === 'estatus_en_el_padron') {
                        propiedadEnMinuscula = 'estatus_padron';
                    }
                    datosExtraidos[propiedadEnMinuscula] = valor;
                }
            }
        });

        return datosExtraidos;
    }

    const camposEspecificos = [
        'RFC:', 'CURP:', 'Nombre (s):', 'Primer Apellido:', 'Segundo Apellido:', 'Fecha inicio de operaciones:',
        'Estatus en el padrón:', 'Fecha de último cambio de estado:', 'Nombre Comercial:',
        'Código Postal:', 'Tipo de Vialidad:', 'Nombre de Vialidad:', 'Número Exterior:', 'Número Interior:',
        'Nombre de la Colonia:', 'Nombre de la Localidad:', 'Nombre del Municipio o Demarcación Territorial:',
        'Nombre de la Entidad Federativa:', 'Entre Calle:'
    ];

    Object.assign(data, obtenerDatosEspecificos(textoModificado, camposEspecificos));
    return data;
}

function funcionMoral(textoExtraido) {
    const data = {};
    const palabrasAEliminar = ['Datos del domicilio registrado ', 'Datos de Ubicación: ', 'Actividades Económicas:'];

    function escapeRegExp(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    const palabrasRegex = new RegExp(palabrasAEliminar.map(escapeRegExp).join('|'), 'g');
    const textoModificado = textoExtraido.replace(palabrasRegex, '');

    function quitarAcentos(texto) {
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    function eliminarGuionesBajos(texto) {
        return texto.replace(/_/g, '');
    }

    function obtenerDatosEspecificos(texto, campos) {
        const datosExtraidos = {};
        campos.forEach((campo, index) => {
            const indiceCampo = texto.indexOf(campo);
            if (indiceCampo !== -1) {
                const inicioValor = indiceCampo + campo.length;
                const finValor = index < campos.length - 1 ? texto.indexOf(campos[index + 1]) : texto.length;
                if (finValor !== -1) {
                    let valor = texto.substring(inicioValor, finValor).trim();
                    let propiedadEnMinuscula = campo.toLowerCase().replace(':', '').replace(/\s+/g, '_');
                    if (propiedadEnMinuscula === 'nombre_(s)') {
                        propiedadEnMinuscula = 'nombres';
                    }
                    propiedadEnMinuscula = quitarAcentos(propiedadEnMinuscula);
                    if (propiedadEnMinuscula === 'nombre_del_municipio_o_demarcacion_territorial') {
                        propiedadEnMinuscula = 'nombre_del_municipio';
                    }
                    if (propiedadEnMinuscula === 'denominacion/razon_social') {
                        propiedadEnMinuscula = 'razon_social';
                    }
                    if (propiedadEnMinuscula === 'estatus_en_el_padron') {
                        propiedadEnMinuscula = 'estatus_padron';
                    }
                    datosExtraidos[propiedadEnMinuscula] = valor;
                }
            }
        });

        return datosExtraidos;
    }

    const camposEspecificos = [
        'RFC:', 'Denominación/Razón Social:', 'Régimen Capital:', 'Nombre Comercial:', 'Fecha inicio de operaciones:',
        'Estatus en el padrón:',
        'Fecha de último cambio de estado:',
        'Código Postal:', 'Tipo de Vialidad:', 'Nombre de Vialidad:', 'Número Exterior:', 'Número Interior:',
        'Nombre de la Colonia:', 'Nombre de la Localidad:', 'Nombre del Municipio o Demarcación Territorial:',
        'Nombre de la Entidad Federativa:', 'Entre Calle:', 'Y Calle:'
    ];
    Object.assign(data, obtenerDatosEspecificos(textoModificado, camposEspecificos));
    return data;
}

const elementMappings = [
    {variableName: 'socio-nombre', elementId: 'socio_input_1_2'},
    {variableName: 'socio-apellidos', elementId: 'socio_input_1_3'},
    {variableName: 'socio-razon-social', elementId: 'socio_input_1'},
    {variableName: 'socio-regimen-capital', elementId: 'socio_input_2'},
    {variableName: 'socio-rfc', elementId: 'socio_input_3'},
    {variableName: 'socio-nombre-comercial', elementId: 'socio_input_4'},
    {variableName: 'socio-correo', elementId: 'socio_input_5'},
    {variableName: 'socio-telefono', elementId: 'socio_input_6'},
    {variableName: 'socio-calle', elementId: 'socio_input_7'},
    {variableName: 'socio-interior', elementId: 'socio_input_8'},
    {variableName: 'socio-exterior', elementId: 'socio_input_9'},
    {variableName: 'socio-postal', elementId: 'socio_input_10'},
    {variableName: 'socio-colonia', elementId: 'socio_input_11'},
    {variableName: 'socio-ciudad', elementId: 'socio_input_13'},
    {variableName: 'socio-estado', elementId: 'socio_input_14'},
    {variableName: 'socio-pais-seleccionado', elementId: 'socio_input_15'},
];

function setPlaceholders(language, mappings, translations) {
    mappings.forEach(mapping => {
        const element = window[mapping.variableName];
        const translationKey = mapping.elementId;
        if (element) {
            element.placeholder = language === 'en' ? translations.en[translationKey] : translations.es[translationKey];
        }
    });
}

setPlaceholders(language, elementMappings, translations);

function subirDoc(id_socio) {
    let fileInput = document.getElementById('socio-archivo');
    let file = fileInput.files[0];
    let formData = new FormData();
    formData.append('id', id_socio);
    formData.append('file', file);

    $.ajax({
        url: 'controller/subirSociosDocu.php?id=' + id_socio + '&id_documento=' + "40" + '&indicador=' + "Constancia fiscal",
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: 'json',
        success: function (response) {
            if (response.status === "success") {
                toastr.success(response.message);
                location.href = 'socios-dash.html';
            } else {
                toastr.warning(response.message);
            }
        },
        error: function (xhr, status, error) {
            toastr.error("Error al guardar el archivo.");
        }
    });
}

function validarCorreo(correo) {
    $.ajax({
        type: 'POST',
        url: 'controller/revisar_contacto_registro.php',
        data: {correo: correo},
        dataType: 'json',
        success: function (response) {
            if (response.length === 0) {
                localStorage.removeItem("socioComercial_Tipo");
                localStorage.removeItem("socioComercial_ID");
                localStorage.removeItem("socioComercial_nombre_user");
                localStorage.removeItem("socioComercial_correo_user");
                window.location.href = 'sing-in.html';
            } else {
                const socioData = response[0];

                localStorage.setItem("socioComercial_Tipo", "socio");
                localStorage.setItem("socioComercial_ID", socioData.id);
                localStorage.setItem("socioComercial_nombre_user", socioData.nombre);
                localStorage.setItem("socioComercial_correo_user", socioData.email);

                socio_nombre.value = socioData.nombre;
                socio_apellidos.value = socioData.apellidos;
                socio_correo.value = socioData.email;
                socio_telefono.value = socioData.telefono || '';
            }
        }

    });
}

const mdlBienvenida = new bootstrap.Modal(document.getElementById('mdl-bienvenida'), {
    backdrop: "static",
    keyboard: false,
});
const carBienvenida = document.querySelector('#car-bienvenida');
const carousel = new bootstrap.Carousel(carBienvenida, {
    interval: 2000,
    wrap: false
});
const parrafo_1 = (language === 'en' ? 'We are thrilled to introduce you to our supplier management platform, which has been tailored exclusively for your convenience. Here, you can effortlessly upload your invoices for payment authorization and submit digital files related to traffic references.' : 'Estamos emocionados de darle la bienvenida a nuestra plataforma de gestión de proveedores diseñada específicamente para usted. Aquí, puede cargar fácilmente sus facturas para el proceso de autorización de pago y enviar archivos digitales relacionados con referencias de tráfico.');
const parrafo_2 = (language === 'en' ? 'Do you need to review your recent invoices and search for a specific document? No problem! With just a few clicks, you\'ll have access to all of this crucial information and more. Our platform has been carefully designed to offer you an intuitive and efficient experience.' : '¿Necesitas revisar tus facturas recientes y buscar un documento específico? ¡No hay problema! Con solo unos clics, tendrás acceso a toda esta información crucial y más. Nuestra plataforma ha sido cuidadosamente diseñada para brindarte una experiencia intuitiva y eficiente.');
const parrafo_3 = (language === 'en' ? 'To ensure a fast and smooth process, it is essential that you have the necessary information available to you to provide accurate and complete details.' : 'Para garantizar un proceso rápido y fluido, es esencial que tengas la información necesaria a tu disposición para proporcionar detalles precisos y completos.');
const btn_modal = (language === 'en' ? 'Agreed' : 'Entendido');

document.querySelector('#parrafo_1').innerText = parrafo_1;
document.querySelector('#parrafo_2').innerText = parrafo_2;
document.querySelector('#parrafo_3').innerText = parrafo_3;
document.querySelector('#btn_modal').innerText = btn_modal;

mdlBienvenida.show();