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
        page_subtitle: 'Records',

        menu_navigation: 'Navigation',
        menu_supplier: 'Suppliers',
        menu_pending: 'Pending documents',
        menu_invoices: 'Pending invoices',
        menu_catalog: 'Catalogs',
        menu_document: 'Documents',
        option_profile: 'My profile',
        option_logout: 'Log out',

        documents: 'Documents',
        filter: 'Filter',
        filter_title: 'Filter options',
        filter_discharged: 'Discharged documents',
        filter_type: 'Type documet',
        filter_physical: 'Physical person',
        filter_moral: 'Moral person',
        filter_foreign: 'Foreign person',
        filter_button_reset: 'To reset',
        filter_button_apply: 'Apply',
        button_new: 'New document',
    },
    es: {
        page_header: 'Área administrativa',
        page_title: 'Documentos',
        page_subtitle: 'Registros',

        menu_navigation: 'Navegación',
        menu_supplier: 'Proveedores',
        menu_pending: 'Documentos pendientes',
        menu_invoices: 'Facturas pendientes',
        menu_catalog: 'Catálogos',
        menu_document: 'Documentos',
        option_profile: 'Mi perfil',
        option_logout: 'Cerrar sesión',

        documents: 'Documentos',
        filter: 'Filtros',
        filter_title: 'Opciones de filtro',
        filter_discharged: 'Documentos dados de baja',
        filter_type: 'Tipo de documento',
        filter_physical: 'Persona física',
        filter_moral: 'Persona moral',
        filter_foreign: 'Persona extranjera',
        filter_button_reset: 'Restablecer',
        filter_button_apply: 'Aplicar',
        button_new: 'Nuevo documento',
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
