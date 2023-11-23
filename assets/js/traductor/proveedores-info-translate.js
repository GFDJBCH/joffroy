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
        page_title: 'Suppliers information',
        alert_information: 'Important information',
        data_info_label: 'The information displayed in the table pertains to those suppliers who have successfully registered on the platform.',
        info_registration_date: 'Registration date',
        info_btn_info: 'Information',
        info_btn_documentation: 'Documentation',
        info_btn_facturas: 'Bills',
        info_progress: 'Requested documentation',

        //#region Formularios
        tab_1: 'Business information',
        tab_2: 'Supplier information',
        tab_3: 'Extra information',
        tab_4: 'Bills',
        lbl_1: 'Business name',
        lbl_2: 'Capital regime',
        lbl_3: 'Comercial name',
        lbl_4: 'Email',
        lbl_5: 'Phone number',
        lbl_6: 'Address information',
        lbl_7: 'Street name',
        lbl_8: 'Apt. Num.',
        lbl_9: 'St. Num.',
        lbl_10: 'ZIP Code',
        lbl_11: 'Subdivision',
        lbl_12: 'Location',
        lbl_13: 'TAX Information',
        lbl_14: 'Provider type',
        lbl_15: 'Tax identifier',
        lbl_16: 'Line of business',
        lbl_17: 'Confidence level',
        lbl_18: 'Operation type',
        lbl_19: 'Nationality',
        lbl_20: 'Credit days',
        lbl_21: 'Credit limit',
        lbl_22: 'Branch offices',
        lbl_23: 'Departments',
        lbl_24: 'Justification',
        lbl_25: 'Security',
        lbl_26: 'Do you have activity in other entities of the republic?',
        lbl_27: 'Company type',
        lbl_28: 'Specify the sector your company belongs to',
        lbl_29: 'Email address',
        lbl_30: 'Public phone number',
        lbl_31: 'Website',
        lbl_32: 'Specify the sector your customers belong to',
        lbl_33: 'Year of commencement of operations',
        lbl_34: 'Do you have production capacity for new projects?',
        lbl_35: 'Number of employees',
        lbl_36: 'Language',
        //#endregion

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

        yes: 'Yes',
        not: 'Not',
        industrial_manufacturing: 'Industrial/Manufacturing',
        commerce: 'Commerce',
        services: 'Services',
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
        english: 'English',
        spanish: 'Spanish',
    },
    es: {
        page_title: 'Información del proveedor',
        alert_information: 'Información importante',
        data_info_label: 'La información presente en la tabla corresponde a los proveedores que han completado con éxito su registro en la plataforma.',
        info_registration_date: 'Fecha de registro',
        info_btn_info: 'Información',
        info_btn_documentation: 'Documentación',
        info_btn_facturas: 'Facturas',
        info_progress: 'Documentación solicitada',

        //#region Formularios
        tab_1: 'Información del negocio',
        tab_2: 'Información del proveedor',
        tab_3: 'Información extra',
        tab_4: 'Facturas',
        lbl_1: 'Nombre del negocio',
        lbl_2: 'Régimen de capital',
        lbl_3: 'Nombre comercial',
        lbl_4: 'Correo',
        lbl_5: 'Numero telefónico',
        lbl_6: 'Dirección',
        lbl_7: 'Calle',
        lbl_8: 'Int.',
        lbl_9: 'Ext.',
        lbl_10: 'Código postal',
        lbl_11: 'Colonia',
        lbl_12: 'Ubicación',
        lbl_13: 'Información sobre los impuestos',
        lbl_14: 'Tipo de proveedor',
        lbl_15: 'Identificador fiscal',
        lbl_16: 'Linea de negocio',
        lbl_17: 'Nivel de confianza',
        lbl_18: 'Tipo de operación',
        lbl_19: 'Nacionalidad',
        lbl_20: 'Días de crédito',
        lbl_21: 'Limite de crédito',
        lbl_22: 'Sucursales',
        lbl_23: 'Departamentos',
        lbl_24: 'Justificación',
        lbl_25: 'Seguridad',
        lbl_26: '¿Tiene actividad en otras entidades de la república?',
        lbl_27: 'Tipo de empresa',
        lbl_28: 'Indique el sector al que pertenece su compañía',
        lbl_29: 'Correo electrónico',
        lbl_30: 'Teléfono público',
        lbl_31: 'Página web',
        lbl_32: 'Indique el sector al que pertenecen sus clientes',
        lbl_33: 'Año de inicio de operaciones',
        lbl_34: '¿Cuenta con capacidad de producción para nuevos proyectos?',
        lbl_35: 'Número de empleados',
        lbl_36: 'Idioma',
        //#endregion

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

        yes: 'Si',
        not: 'No',
        industrial_manufacturing: 'Industrial/Manufactura',
        commerce: 'Comercio',
        services: 'Servicios',
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