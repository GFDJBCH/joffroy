// Diccionario de traducciones
const translations = {
    en: {
        profile: 'My profile',
        information: 'Important information',
        info_label: 'Fields with * are required. Please enter the correct information requested.',
        input_name: 'Name',
        input_phone: 'Phone number',
        input_email: 'Email',
        input_change_password: 'Password',
        input_confirm_password: 'Confirm password',
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
        profile: 'Mi perfil',
        information: 'Información importante',
        info_label: 'Los campos con * son de obligatorios. Por favor ingrese la información correcta solicitada.',
        input_name: 'Nombre',
        input_phone: 'Número de teléfono',
        input_email: 'Correo',
        input_change_password: 'Contraseña',
        input_confirm_password: 'Confirmar contraseña',
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
let language = localStorage.getItem('language');
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

//#region
const elementMappings = [
    { variableName: 'profile-name', elementId: 'input_name' },
    { variableName: 'profile-phone', elementId: 'input_phone' },
    { variableName: 'profile-email', elementId: 'input_email' },
    { variableName: 'change-password', elementId: 'input_change_password' },
    { variableName: 'change-confirm', elementId: 'input_confirm_password' },
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

const span_spnNombreU = document.getElementById('spnNombreU');
const span_spnCorreoU = document.getElementById('spnCorreoU');

span_spnNombreU.innerText = localStorage.getItem("socioComercial_nombre_user");
span_spnCorreoU.innerText = localStorage.getItem("socioComercial_correo_user");
