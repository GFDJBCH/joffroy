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
        page_title: 'Business information',
        page_description: 'Capture',
        menu_navigation: 'Navigation',
        menu_partner_dashboard: 'Dashboard',
        menu_partner_documents: 'Documents',
        menu_partner_contacts: 'Contacts',
        menu_partner_business: 'Business information',
        option_profile: 'My profile',
        option_logout: 'Log out',

        tab_fields: 'Registration fields',
        tab_extra: 'Extra information',

        current_page_title: 'Document control',

        alert_title: 'Important information',
        alert_message: 'The fields with the sign <span class="text-danger">*</span> are mandatory to fill out. Please enter the correct information requested.',

        business_name: 'Business name',
        capital_regime: 'Capital regime',
        comercial_name: 'Comercial name',
        email: 'Email',
        phone_number: 'Phone number',
        street: 'Street',
        interior: 'Int',
        outdoor: 'Out',
        number: 'number',
        colony: 'Colony',
        location: 'Location',
        provider_type: 'Provider type',
        physical_person: 'Physical person',
        moral_person: 'Moral person',
        tax_identifier: 'Tax identifier',

        subtitle_address: 'Address information',
        subtitle_tax: 'Tax information',

        yes: 'Yes',
        not: 'Not',
        type_company: 'Type of company',
        industrial_manufacturing: 'Industrial/Manufacturing',
        commerce: 'Commerce',
        services: 'Services',
        sector: 'Specify the sector to which your company belongs',
        aerospace: 'Aerospace',
        food: 'Food',
        commerce_distribution: 'Commerce/Distribution',
        executive_electronic: 'Executive and/or Electronic',
        energy: 'Energy',
        mining: 'Mining',
        paper_cardboard: 'Paper and cardboard',
        chemistry: 'Chemistry',
        agriculture_livestock: 'Agriculture/Livestock',
        automotive: 'Automotive',
        construction: 'Construction',
        appliances: 'Appliances',
        wood_industry: 'Wood industry',
        furniture: 'Furniture',
        plastics_rubber: 'Plastics and rubber',
        health: 'Health',
        machinery: 'Machinery',
        payphone: 'Payphone',
        website: 'Website',
        view_site: 'View site',
        client_sector: 'Specify the sector to which your clients belong',
        year_inception: 'Year of commencement of operations',
        capacity: 'Do you have production capacity for new projects?',
        number_employees: 'Number of employees',
        language: 'Language',
        english: 'English',
        spanish: 'Spanish',
        wait: 'Please wait...',

        other_activities: 'Do you have activity in other states of the country?',

        button_save: 'Save',
    },
    es: {
        page_header: 'Bienvenido a tu espacio',
        page_title: 'Información empresarial',
        page_description: 'Captura',
        menu_navigation: 'Navegación',
        menu_partner_dashboard: 'Escritorio',
        menu_partner_documents: 'Documentos',
        menu_partner_contacts: 'Contactos',
        menu_partner_business: 'Información del negocio',
        option_profile: 'Mi perfil',
        option_logout: 'Cerrar sesión',

        tab_fields: 'Campos de registro',
        tab_extra: 'Información extra',

        current_page_title: 'Control de documentos',

        alert_title: 'Información importante',
        alert_message: 'Los campos con el signo <span class="text-danger">*</span> son obligatorios de llenar. Por favor, ingrese la información correcta solicitada.',

        business_name: 'Nombre de la empresa',
        capital_regime: 'Régimen capital',
        comercial_name: 'Nombre comercial',
        email: 'Correo electrónico',
        phone_number: 'Número de teléfono',
        street: 'Calle',
        interior: 'Int',
        outdoor: 'Ext',
        number: 'numero',
        colony: 'Colonia',
        location: 'Ubicación',
        provider_type: 'Tipo de proveedor',
        physical_person: 'Persona física',
        moral_person: 'Persona moral',
        tax_identifier: 'Identificador fiscal',

        subtitle_address: 'Información de dirección',
        subtitle_tax: 'Información fiscal',
        yes: 'Si',
        not: 'No',
        type_company: 'Tipo de empresa',
        industrial_manufacturing: 'Industrial/Manufactura',
        commerce: 'Comercio',
        services: 'Servicios',
        sector: 'Indique el sector al que pertenece su compañía',
        aerospace: 'Aeroespacial',
        food: 'Alimentos',
        commerce_distribution: 'Comercio/Distribución',
        executive_electronic: 'Ejecutivo y/o Electrónico',
        energy: 'Energía',
        mining: 'Minería',
        paper_cardboard: 'Papel y cartón',
        chemistry: 'Química',
        agriculture_livestock: 'Agricultura/Ganadería',
        automotive: 'Automotriz',
        construction: 'Construcción',
        appliances: 'Electrodomésticos',
        wood_industry: 'Industria de la madera',
        furniture: 'Muebles',
        plastics_rubber: 'Plásticos y hule',
        health: 'Salud',
        machinery: 'Maquinaria',
        
        payphone: 'Teléfono público',
        website: 'Página web',
        view_site: 'Ver sitio',
        client_sector: 'Indique el sector al que pertenecen sus clientes',
        year_inception: 'Año de inicio de operaciones',
        capacity: '¿Cuenta con capacidad de producción para nuevos proyectos?',
        number_employees: 'Número de empleados',
        language: 'Idioma',
        english: 'Ingles',
        spanish: 'Español',
        wait: 'Por favor espera...',

        other_activities: '¿Tiene actividad en otras entidades de la república?',

        button_save: 'Guardar',
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
