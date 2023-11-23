const diccionarioIngles = {
    menuTitle: "Navigation",
    titulo: "Business information",
    bienvenida: "Welcome to the RITS Suppliers Platform",
    msgBienvenida1: "We are excited to welcome you to our supplier management platform , designed specifically for you . Here , you can easily upload your invoices for the payment authorization process , as well as submit digital files related toaffic references.",
};
const diccionarioEspanol = {
    menuTitle: "Navegación",
    titulo: "Información del negocio",
    bienvenida: "Bienvenido a la Plataforma de Proveedores de RITS",
    msgBienvenida1: "Nos complace darle la bienvenida a nuestra plataforma de gestión de proveedores, diseñada específicamente para usted. Aquí, puede cargar fácilmente sus facturas para el proceso de autorización de pago, así como enviar archivos digitales relacionados con las referencias oficiales.",
};

function cambiarIdioma(idioma) {
    let diccionario;
    if (idioma === "en") {
        diccionario = diccionarioIngles;
    } else if (idioma === "es") {
        diccionario = diccionarioEspanol;
    }
    const elementos = document.querySelectorAll("[data-lang-key]");
    elementos.forEach((elemento) => {
        const clave = elemento.getAttribute("data-lang-key");
        elemento.textContent = diccionario[clave];
    });
    localStorage.setItem("idioma", idioma);
    const menuLinks = document.querySelectorAll('.menu-link[data-lang]');
    menuLinks.forEach((link) => {
        const linkIdioma = link.getAttribute("data-lang");
        if (linkIdioma === idioma) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    const languageDisplay = document.getElementById("languageDisplay");
    const languageName = idioma === "en" ? "English" : "Español";
    const languageFlag = idioma === "en" ? "assets/media/flags/united-states.svg" : "assets/media/flags/mexico.svg";
    languageDisplay.innerHTML = `${languageName} <img class="w-15px h-15px rounded-1 ms-2" src="${languageFlag}" alt="" />`;
}

const menuLinks = document.querySelectorAll('.menu-link[data-lang]');
menuLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const idiomaSeleccionado = link.getAttribute("data-lang");
        cambiarIdioma(idiomaSeleccionado);
    });
});

function obtenerIdiomaGuardado() {
    return localStorage.getItem("idioma") || "en";
}

const idiomaGuardado = obtenerIdiomaGuardado();
cambiarIdioma(idiomaGuardado);
let correo_actualizar = "";

function validarCampos() {

    let inp_razonsocial = $("#inp-razonsocial").val();
    let inp_rz_nombre = $("#inp-rz-nombre").val();
    let inp_rz_apellido = $("#inp-rz-apellido").val();

    let regimen_cpt = $("#regimen_cpt").val();
    let comercial_name = $("#comercial_name").val();
    let email = $("#email").val();
    let telefono = $("#telefono").val();
    let calle = $("#calle").val();
    let numero_int = $("#numero_int").val();
    let numero_ext = $("#numero_ext").val();
    let zip_code = $("#zip_code").val();
    let colonia = $("#colonia").val();
    let slc_country_02 = $("#slc-country-02").val();
    let estado = $("#estado").val();
    let ciudad = $("#ciudad").val();
    let slc_typprovider_02 = $("#slc-typprovider-02").val();
    let identificador_fsc = $("#identificador_fsc").val();
    if (slc_typprovider_02 === 2) {
        if (inp_razonsocial === "") {
            toastr.error("El campo Razón Social es obligatorio");
            return false;
        }

    }
    if (slc_typprovider_02 === 1) {
        if (inp_rz_nombre === "") {
            toastr.error("El campo Nombre es obligatorio");
            return false;
        }

    }
    if (slc_typprovider_02 === 1) {
        if (inp_rz_apellido === "") {
            toastr.error("El campo Apellido es obligatorio");
            return false;
        }
    }
    if (email == "") {
        toastr.error("El campo Email es obligatorio");
        return false;
    }
    if (telefono == "") {
        toastr.error("El campo Teléfono es obligatorio");
        return false;
    }
    if (calle == "") {
        toastr.error("El campo Calle es obligatorio");
        return false;
    }
    if (numero_int == "") {
        toastr.error("El campo Número Interno es obligatorio");
        return false;
    }
    if (zip_code == "") {
        toastr.error("El campo Código Postal es obligatorio");
        return false;
    }
    if (slc_country_02 == "") {
        toastr.error("El campo País es obligatorio");
        return false;
    }
    if (estado == "") {
        toastr.error("El campo Estado es obligatorio");
        return false;
    }
    if (ciudad == "") {
        toastr.error("El campo Ciudad es obligatorio");
        return false;
    }
    if (slc_typprovider_02 === "") {
        toastr.error("El campo Tipo de Proveedor es obligatorio");
        return false;
    }
    if (identificador_fsc === "") {
        toastr.error("El campo Identificador FSC es obligatorio");
        return false;
    }
    let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegEx.test(email)) {
        toastr.error("Por favor, ingrese un correo electrónico válido.");
        return false;
    }
    return true;
}

const frmRegistrarSocio = document.getElementById('frmRegistrarSocio');
const inpRzNombre = frmRegistrarSocio.querySelector('#inp-rz-nombre');
const inpRzApellido = frmRegistrarSocio.querySelector('#inp-rz-apellido');
const inpRazonsocial = frmRegistrarSocio.querySelector('#inp-razonsocial');
const regimenCpt = frmRegistrarSocio.querySelector('#regimen_cpt');
const comercialName = frmRegistrarSocio.querySelector('#comercial_name');
const email = frmRegistrarSocio.querySelector('#email');
const telefono = frmRegistrarSocio.querySelector('#telefono');
const calle = frmRegistrarSocio.querySelector('#calle');
const numeroInt = frmRegistrarSocio.querySelector('#numero_int');
const numeroExt = frmRegistrarSocio.querySelector('#numero_ext');
const zipCode = frmRegistrarSocio.querySelector('#zip_code');
const colonia = frmRegistrarSocio.querySelector('#colonia');
const slcCountry02 = frmRegistrarSocio.querySelector('#slc-country-02');
const estado = frmRegistrarSocio.querySelector('#estado');
const ciudad = frmRegistrarSocio.querySelector('#ciudad');
const slcTypprovider02 = frmRegistrarSocio.querySelector('#slc-typprovider-02');
const identificadorFsc = frmRegistrarSocio.querySelector('#identificador_fsc');
const btnGuardarInfo = document.getElementById('btnGuardarInfo');

const validatorSocio = FormValidation.formValidation(
    frmRegistrarSocio,
    {
        fields: {
            'inp-rz-nombre': {
                validators: {
                    notEmpty: {
                        message: 'El nombre es requerido.'
                    }
                }
            },
            'inp-rz-apellido': {
                validators: {
                    notEmpty: {
                        message: 'El apellido es requerido.'
                    }
                }
            },
            'comercial_name': {
                validators: {
                    notEmpty: {
                        message: 'El nombre comercial es requerido.'
                    }
                }
            },
            'email': {
                validators: {
                    notEmpty: {
                        message: 'El correo es requerido.'
                    },
                    emailAddress: {
                        message: "Correo inválido",
                    }
                }
            },
            'telefono': {
                validators: {
                    notEmpty: {
                        message: 'El teléfono es requerido.'
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

btnGuardarInfo.addEventListener('click', function (e) {
    e.preventDefault();
    if (validatorSocio) {
        validatorSocio.validate().then(function (status) {
            if (status === 'Valid') {
                btnGuardarInfo.setAttribute('data-kt-indicator', 'on');
                btnGuardarInfo.disabled = true;
                setTimeout(function () {
                    btnGuardarInfo.removeAttribute('data-kt-indicator');
                    btnGuardarInfo.disabled = false;
                    let formData = {
                        nbrNegocio: inpRazonsocial.value,
                        prsNombre: inpRzNombre.value,
                        prsApellidos: inpRzApellido.value,
                        compania: "",
                        rgmCapital: regimenCpt.value,
                        nbrComercial: comercialName.value,
                        correo: email.value,
                        telefono: telefono.value,
                        calle: calle.value,
                        nmrInterno: numeroInt.value,
                        nmrExterno: numeroExt.value,
                        cdgPostal: zipCode.value,
                        colonia: colonia.value,
                        pais: $(slcCountry02).val(),
                        estado: estado.value,
                        ciudad: ciudad.value,
                        tpProveedor: $(slcTypprovider02).val(),
                        taxId: identificadorFsc.value,
                        lnaNegocio: "",
                        fchCreacion: "",
                        activo: "",
                        correo_identificador: correo_actualizar
                    };
                    $.ajax({
                        url: 'controller/insertSocios.php',
                        type: 'POST',
                        data: formData,
                        success: function (response) {
                            localStorage.setItem('socioComercial_ID', response);
                            localStorage.getItem("socioComercial_ID");
                            let fileInput = document.getElementById('inp-file-situation');
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

                }, 2000);
            }
        });
    }
});

function registrarSocio() {
    if (validarCampos()) {
        let nbrNegocio = $("#inp-razonsocial").val();
        let prsNombre = $("#inp-rz-nombre").val();
        let prsApellidos = $("#inp-rz-apellido").val();
        let compania = "";
        let rgmCapital = $("#regimen_cpt").val();
        let nbrComercial = $("#comercial_name").val();
        let correo = $("#email").val();
        let telefono = $("#telefono").val();
        let calle = $("#calle").val();
        let nmrInterno = $("#numero_int").val();
        let nmrExterno = $("#numero_ext").val();
        let cdgPostal = $("#zip_code").val();
        let colonia = $("#colonia").val();
        let pais = $("#slc-country-02").val();
        let estado = $("#estado").val();
        let ciudad = $("#ciudad").val();
        let tpProveedor = $("#slc-typprovider-02").val();
        let taxId = $("#identificador_fsc").val();
        let lnaNegocio = "";
        let fchCreacion = "";
        let activo = "";
        let formData = {
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
            lnaNegocio: lnaNegocio,
            fchCreacion: fchCreacion,
            activo: activo,
            correo_identificador: correo_actualizar
        };
        $.ajax({
            url: 'controller/insertSocios.php',
            type: 'POST',
            data: formData,
            success: function (response) {
                localStorage.setItem('socioComercial_ID', response);
                localStorage.getItem("socioComercial_ID");
                let fileInput = document.getElementById('inp-file-situation');
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
    }
}

function obtenerGet() {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const parametro = params.get('identificador');

    if (parametro) {
        correo_actualizar = parametro;
        $("#email").val(parametro);
        validarCorreo(correo_actualizar);
    } else {
        location.href = "sing-in.html";
    }
}

obtenerGet();

async function obtenerPaises() {
    try {
        const response = await fetch('controller/traerPaises.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            toastr.error('No se pudieron cargar los países.');
        }

        const paises = await response.json();
        caegarPaises("slc-country-01", paises);
        caegarPaises("slc-country-02", paises);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

obtenerPaises();

function caegarPaises(elemto_id, paises) {
    const selectElement = document.getElementById(elemto_id);
    const defaultOption = new Option('Select the corresponding country', '', true, true);
    paises.forEach((pais) => {
        const option = new Option(`${pais.Codigo} - ${pais.Nombre}`, pais.Id);
        selectElement.appendChild(option);
    });
}

function subirDoc(id_socio) {
    let fileInput = document.getElementById('inp-file-situation');
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
        success: function (response) {
            toastr.success("El campo Identificador FSC es obligatorio");
            location.href = 'socios-dash.html';
        },
        error: function (xhr, status, error) {
            console.error('Error al subir el archivo:', error);
        }
    });
}

const newPartnerCsf = document.getElementById('inp-file-situation');
const newPartnerCustomerType = document.getElementById('slc-typprovider-02');

newPartnerCsf.addEventListener("change", function (event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = async function (e) {
        let pdfData = new Uint8Array(e.target.result);

        let elTipo = '';
        if (document.getElementById('slc-typprovider-02').value === '1') {
            elTipo = 'fisica';
        } else {
            elTipo = 'moral';
        }

        const sistema = await procesarPDF(pdfData, elTipo);
        if (sistema.razon_social) {
            document.getElementById('inp-rz-nombre').value = sistema.razon_social;
        } else {
            document.getElementById('inp-rz-nombre').value = sistema.nombres;
        }
        if (elTipo === 'moral') {
            document.getElementById('inp-razonsocial').value = sistema.razon_social;
            document.getElementById('regimen_cpt').value = sistema.regimen_capital;
        }

        document.getElementById('comercial_name').value = sistema.nombre_comercial;
        document.getElementById('inp-rz-apellido').value = sistema.primer_apellido + ' ' + sistema.segundo_apellido;
        document.getElementById('comercial_name').value = sistema.nombre_comercial;
        document.getElementById('calle').value = sistema.nombre_de_vialidad;
        document.getElementById('numero_int').value = sistema.numero_interior;
        document.getElementById('numero_ext').value = sistema.numero_exterior;
        document.getElementById('zip_code').value = sistema.codigo_postal;
        document.getElementById('colonia').value = sistema.nombre_de_la_colonia;
        document.getElementById('estado').value = sistema.nombre_de_la_entidad_federativa;
        document.getElementById('ciudad').value = sistema.nombre_de_la_localidad;
        document.getElementById('identificador_fsc').value = sistema.rfc;
    };
    reader.readAsArrayBuffer(file);
});

function procesarDocumento(event) {
    const inputFile = event.target.files[0];
    const file = inputFile.files && inputFile.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = async (e) => {
            const pdfData = e.target && e.target.result;
            const tipoPersona = newPartnerCustomerType.value;
            this.documentData = await this.procesarPDF(pdfData, tipoPersona);
            if (this.documentData.rfc) {
                if (this.documentData.numero_interior === 'SIN NUMERO') {
                    this.documentData.numero_interior = null;
                }
                this.documentData.pais = 'MÉXICO';
            } else {
                Swal.fire('Ocurrió un error', 'El archivo no es válido', 'error');
            }
        };

        reader.readAsDataURL(file);
    } else {
        this.newPartnerCsf.value = null;
        Swal.fire('Ocurrió un error', 'Por favor selecciona un archivo PDF.', 'error');
    }
}

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
                location.href = "sing-in.html";
            } else {
                localStorage.setItem("socioComercial_Tipo", "socio");
                localStorage.setItem("socioComercial_ID", response[0].socio);
                localStorage.setItem("socioComercial_nombre_user", response[0].nombre);
                localStorage.setItem("socioComercial_correo_user", response[0].email);
            }
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}
