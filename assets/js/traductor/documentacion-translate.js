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
        page_header: 'Administrative area',
        page_title: 'Pendings',

        menu_navigation: 'Navigation',
        menu_supplier: 'Suppliers',
        menu_pending: 'Pending documents',
        menu_invoices: 'Pending invoices',
        menu_catalog: 'Catalogs',
        menu_document: 'Documents',
        option_profile: 'My profile',
        option_logout: 'Log out',

        card_title: 'List of received documents',
        card_quantity: 'Quantity',

        alert_information: 'Important information',
        alert_mns_1: 'The information displayed in the table belongs to those providers who have successfully registered on the platform.',
        alert_mns_2: 'Use the buttons on the lines to see the information of the providers.',

        modal_title: 'View document',
        modal_status: 'Status',
        modal_pending: 'Pending',
        modal_alert_mns_1: 'Fill in all the fields to send the request',
        modal_alert_mns_2_1: 'Fields with',
        modal_alert_mns_2_2: 'are required',
        modal_comment: 'Comment',
        modal_issue_date: 'Issue date',
        modal_expiration_date: 'Expiration date',
        modal_button_decline: 'Decline',
        modal_button_accept: 'Accept',
        modal_tab: 'Document',
    },
    es: {
        page_header: 'Área administrativa',
        page_title: 'Pendientes',

        menu_navigation: 'Navegación',
        menu_supplier: 'Proveedores',
        menu_pending: 'Documentos pendientes',
        menu_invoices: 'Facturas pendientes',
        menu_catalog: 'Catálogos',
        menu_document: 'Documentos',
        option_profile: 'Mi perfil',
        option_logout: 'Cerrar sesión',

        card_title: 'Lista de documentos recibidos',
        card_quantity: 'Cantidad',

        alert_information: 'Información importante',
        alert_mns_1: 'La información mostrada en la tabla pertenece a aquellos proveedores que se han registrado exitosamente en la plataforma.',
        alert_mns_2: 'Use the buttons on the lines to see the information of the providers.',

        modal_title: 'Ver documento',
        modal_status: 'Estado',
        modal_pending: 'Pendiente',
        modal_alert_mns_1: 'Complete todos los campos para enviar la solicitud',
        modal_alert_mns_2_1: 'Los campos con',
        modal_alert_mns_2_2: 'son obligatorios',
        modal_comment: 'Comentario',
        modal_issue_date: 'Fecha de emisión',
        modal_expiration_date: 'Fecha de vigencia',
        modal_button_decline: 'Rechazar',
        modal_button_accept: 'Aceptar',
        modal_tab: 'Documento',
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

moment.locale(language);
sistema_fecha.innerText = moment().format("LL");
