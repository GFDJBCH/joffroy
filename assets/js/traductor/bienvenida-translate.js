let language = localStorage.getItem('language');
const sistema_lenguage = document.getElementById("sistema-lenguage");
const sistema_fecha = document.getElementById("sistema-fecha");
$(sistema_lenguage).select2({
    data: [
        {
            id: "en",
            text: "English",
            flag: "assets/media/flags/united-states.svg",
        },
        {
            id: "es",
            text: "Español",
            flag: "assets/media/flags/mexico.svg",
        }
    ],
    minimumResultsForSearch: Infinity,
    placeholder: (language === "en" ? "Select language" : "Seleccionar idioma"),
    templateResult: languageTemplate,
    templateSelection: languageTemplate
});
function languageTemplate(state) {
    if (!state.id) {
        return state.text;
    }
    return $(`<span><img src="${ state.flag }" alt="Bandera idioma" width="15" class="img-fluid rounded me-2">${ state.text }</span>`);
}
$(sistema_lenguage).on("change", function() {
    const opcionSeleccionada = $(this).select2('data')[0];
    localStorage.setItem('language', opcionSeleccionada.id);
    if (language !== opcionSeleccionada.id) {
        location.reload();
    }
});
$(sistema_lenguage).val(language).trigger("change");

// Diccionario de traducciones
const translations = {
    en: {
        page_header: 'Welcome to your space',
        page_title: 'Registration confirmation page',
        card_title_1: 'General information',
        card_title_2: 'Business Information',
        sub_title_1: 'Address Information',
        socio_pais: 'Country',
        socio_tipo: 'Supplier type',
        socio_archivo: 'File Attachment',
        info_title: 'Important information',
        info_text: 'Fields with * are required. Please enter the correct information requested.',
        socio_input_1: 'Business name',
        socio_input_1_2: 'Name',
        socio_input_1_3: 'Last name',
        socio_input_2: 'Capital regime',
        socio_input_3: 'TaxID',
        socio_input_4: 'Comercial name',
        socio_input_5: 'Email',
        socio_input_6: 'Phone number',
        socio_input_7: 'Street',
        socio_input_8: 'Int. num.',
        socio_input_9: 'Ext. num.',
        socio_input_10: 'Zip code',
        socio_input_11: 'Neighborhood',
        socio_input_12: 'Location',
        socio_input_13: 'City',
        socio_input_14: 'State',
        socio_input_15: 'Country',
        btn_password: 'Change Password',
        btn_submit: 'Save',
        btn_close: 'Close',
        menu_main: 'Administrative area',
        menu_header: 'Profile',
        menu_navigation: 'Navigation',
        menu_supplier: 'Suppliers',
        menu_pending: 'Pending',
        menu_catalog: 'Catalogs',
        menu_document: 'Documents',
        menu_dashboard: 'Dashboard',
        menu_documentos: 'Documents',
        menu_contacts: 'Contacts',
        menu_business_information: 'Business information',
        option_profile: 'My profile',
        option_logout: 'Log out',
    },
    es: {
        page_header: 'Bienvenido a tu espacio',
        page_title: 'Página de confirmación de registro',
        card_title_1: 'Información general',
        card_title_2: 'Información empresarial',
        sub_title_1: 'Información de la dirección',
        socio_pais: 'País',
        socio_tipo: 'Tipo de proveedor',
        socio_archivo: 'Adjuntar archivo',
        info_title: 'Información importante',
        info_text: 'Los campos con * son de obligatorios. Por favor ingrese la información correcta solicitada.',
        socio_input_1: 'Razón social',
        socio_input_1_2: 'Nombre',
        socio_input_1_3: 'Apellidos',
        socio_input_2: 'Régimen capital',
        socio_input_3: 'RFC',
        socio_input_4: 'Nombre comercial',
        socio_input_5: 'Correo',
        socio_input_6: 'Teléfono',
        socio_input_7: 'Calle',
        socio_input_8: 'Num. Int.',
        socio_input_9: 'Num. Ext.',
        socio_input_10: 'Código postal',
        socio_input_11: 'Colonia',
        socio_input_12: 'Ubicación',
        socio_input_13: 'Ciudad',
        socio_input_14: 'Estado',
        socio_input_15: 'País',
        btn_password: 'Cambiar contraseña',
        btn_submit: 'Guardar',
        btn_close: 'Cerrar',
        menu_main: 'Área administrativa',
        menu_header: 'Perfil',
        menu_navigation: 'Navegación',
        menu_supplier: 'Proveedores',
        menu_catalog: 'Catálogos',
        menu_document: 'Documentos',
        menu_dashboard: 'Escritorio',
        menu_documentos: 'Documentos',
        menu_contacts: 'Contactos',
        menu_business_information: 'Información del negocio',
        option_profile: 'Mi perfil',
        option_logout: 'Cerrar sesión',
    }
};

// Obtener el valor de language desde localStorage (si no existe, crear con valor por defecto 'en')
if (!language) {
    language = 'en';
    localStorage.setItem('language', language);
    const elementoHTML = document.documentElement;
    elementoHTML.setAttribute("lang", language);
}

// Obtener todos los elementos con el atributo data-lang
const elements = document.querySelectorAll('[data-lang]');

// Iterar sobre los elementos y aplicar la traducción correspondiente
elements.forEach(element => {
    const translationKey = element.getAttribute('data-lang');
    if (translations[language] && translations[language][translationKey]) {
        element.textContent = translations[language][translationKey];
    }
});


const span_spnNombreU = document.getElementById('spnNombreU');
const span_spnCorreoU = document.getElementById('spnCorreoU');

span_spnNombreU.innerText = localStorage.getItem("socioComercial_nombre_user");
span_spnCorreoU.innerText = localStorage.getItem("socioComercial_correo_user");
moment.locale(language);
sistema_fecha.innerText = moment().format("LL");
