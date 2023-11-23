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
        page_title: 'Documents',
        page_subtitle: 'New record',

        menu_navigation: 'Navigation',
        menu_supplier: 'Suppliers',
        menu_pending: 'Pending documents',
        menu_invoices: 'Pending invoices',
        menu_catalog: 'Catalogs',
        menu_document: 'Documents',
        option_profile: 'My profile',
        option_logout: 'Log out',

        alert_title: 'Important information',
        alert_message_1: "The fields with the sign",
        alert_message_2: "are mandatory to fill out. Please enter the correct information requested.",

        name: 'Name',
        name_english: 'English name',
        description: 'Description',
        description_english: 'English description',
        code: 'Code',
        units: 'Units',
        branch: 'Branch',
        natural_p: 'Natural person',
        entity_p: 'Entity person',
        foreign_p: 'Foreign person',
        exp_period: 'Expiration period',
        physical_p: 'Physical person',
        moral_p: 'Moral person',

        opt_weekly: 'Weekly',
        opt_biweekly: 'Biweekly',
        opt_monthly: 'Monthly',
        opt_bimonthly: 'Bimonthly',
        opt_quarterly: 'Quarterly',
        opt_semiannual: 'Semiannual',
        opt_annual: 'Annual',

        opt_review: 'Review',
        opt_authorize: 'Authorize',

        notification: 'Notification',

        subtitle: 'Document Settings',

        col_1: 'Type of person',
        col_2: 'Expiration',
        col_3: 'Notification',
        col_4: 'Actions',

        button_new_c: 'New configuration',
        button_new_f: 'New flow',
        button_delete: 'Delete',
        button_save: 'Save',
        button_assign: 'Assign',
        a_return: 'Return to list',

        flow: 'Flow',
        wait: 'Please wait...',
        since: 'Who intervenes?',
        close: 'Close',

        modal_title: 'New document settings',
    },
    es: {
        page_header: 'Área administrativa',
        page_title: 'Documentos',
        page_subtitle: 'Nuevo registro',

        menu_navigation: 'Navegación',
        menu_supplier: 'Proveedores',
        menu_pending: 'Documentos pendientes',
        menu_invoices: 'Facturas pendientes',
        menu_catalog: 'Catálogos',
        menu_document: 'Documentos',
        option_profile: 'Mi perfil',
        option_logout: 'Cerrar sesión',

        alert_title: 'Important information',
        alert_message_1: "Los campos con el signo",
        alert_message_2: "son obligatorios de llenar. Por favor, ingrese la información correcta solicitada.",

        name: 'Nombre',
        name_english: 'Nombre en inglés',
        description: 'Descripción',
        description_english: 'Descripción en inglés',
        code: 'Código',
        units: 'Unidades',
        branch: 'Sucursal',
        natural_p: 'Persona física',
        entity_p: 'Persona moral',
        foreign_p: 'Persona foránea',
        exp_period: 'Período de vencimiento',
        physical_p: 'Persona física',
        moral_p: 'Persona moral',

        opt_weekly: 'Semanal',
        opt_biweekly: 'Quincenal',
        opt_monthly: 'Mensual',
        opt_bimonthly: 'Bimestral',
        opt_quarterly: 'Trimestral',
        opt_semiannual: 'Semestral',
        opt_annual: 'Anual',

        opt_review: 'Revision',
        opt_authorize: 'Autorizar',

        notification: 'Notificación',

        subtitle: 'Configuración de documentos',

        col_1: 'Tipo de persona',
        col_2: 'Vencimiento',
        col_3: 'Notificación',
        col_4: 'Acciones',

        button_new_c: 'Nueva configuración',
        button_new_f: 'Nuevo flujo',
        button_delete: 'Eliminar',
        button_save: 'Guardar',
        button_assign: 'Asignar',
        a_return: 'Regresar a la lista',

        flow: 'Flujo',
        wait: 'Espere por favor...',
        since: '¿Quién interviene?',
        close: 'Cerrar',

        modal_title: 'Nueva configuración de documento',
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
