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
        page_title: 'Suppliers',
        alert_information: 'Important information',
        data_info_label: 'The information displayed in the table pertains to those suppliers who have successfully registered on the platform.',
        table_filter: 'Search supplier',
        table_header_column_name: 'Name',
        table_header_column_country: 'Country',
        table_header_column_documentation: 'Documentation',
        table_header_column_actions: 'Actions',
        table_body_not_found: 'Results not found',
        modal_header: 'Supplier information',
        modal_title: 'Taxpayer Identification Data',
        btn_password: 'Change Password',
        btn_submit: 'Save',
        btn_edit: 'Edit supplier',
        btn_close: 'Close',
        menu_main: 'Administrative area',
        menu_header: 'Supplier list',
        menu_counter: 'Total Records',
        menu_navigation: 'Navigation',
        menu_supplier: 'Suppliers',
        menu_pending: 'Pending documents',
        menu_invoices: 'Pending invoices',
        menu_catalog: 'Catalogs',
        menu_document: 'Documents',
        option_profile: 'My profile',
        option_logout: 'Log out',
        modal_subtitle: 'Business Information',

        other_activities: 'Do you have activity in other states of the country?',
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
        email: 'Email',
        payphone: 'Payphone',
        website: 'Website',
        client_sector: 'Specify the sector to which your clients belong',
        year_inception: 'Year of commencement of operations',
        capacity: 'Do you have production capacity for new projects?',
        number_employees: 'Number of employees',
        language: 'Language',
        english: 'English',
        spanish: 'Spanish',
    },
    es: {
        page_title: 'Proveedores',
        alert_information: 'Información importante',
        data_info_label: 'La información presente en la tabla corresponde a los proveedores que han completado con éxito su registro en la plataforma.',
        table_filter: 'Buscar proveedor',
        table_header_column_name: 'Nombre',
        table_header_column_country: 'País',
        table_header_column_documentation: 'Documentación',
        table_header_column_actions: 'Acciones',
        table_body_not_found: 'Resultados no encontrados',
        modal_header: 'Información del proveedor',
        modal_title: 'Datos de identificación del contribuyente',
        btn_password: 'Cambiar contraseña',
        btn_submit: 'Guardar',
        btn_edit: 'Editar proveedor',
        btn_close: 'Cerrar',
        menu_main: 'Área administrativa',
        menu_header: 'Listado de proveedores',
        menu_counter: 'Total de Registros',
        menu_navigation: 'Navegación',
        menu_supplier: 'Proveedores',
        menu_pending: 'Documentos pendientes',
        menu_invoices: 'Facturas pendientes',
        menu_catalog: 'Catálogos',
        menu_document: 'Documentos',
        option_profile: 'Mi perfil',
        option_logout: 'Cerrar sesión',
        modal_subtitle: 'Datos de la Empresa',

        other_activities: '¿Tiene actividad en otras entidades de la república?',
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
        email: 'Correo electrónico',
        payphone: 'Teléfono público',
        website: 'Página web',
        client_sector: 'Indique el sector al que pertenecen sus clientes',
        year_inception: 'Año de inicio de operaciones',
        capacity: '¿Cuenta con capacidad de producción para nuevos proyectos?',
        number_employees: 'Número de empleados',
        language: 'Idioma',
        english: 'Ingles',
        spanish: 'Español',
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