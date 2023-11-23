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
        page_title: 'Documents',
        menu_navigation: 'Navigation',
        menu_partner_dashboard: 'Dashboard',
        menu_partner_documents: 'Documents',
        menu_partner_contacts: 'Contacts',
        menu_partner_business: 'Business information',
        option_profile: 'My profile',
        option_logout: 'Log out',
        menu_partner_bills: 'Bills',

        current_page_title: 'Document control',

        alert_title: 'Important information',
        alert_message: "Please complete the provided registration form, attaching your company's legal documentation. Once we receive and review the information, we will show you the result of the process. We look forward to a successful collaboration in the future! If you have any additional questions or need more details about the registration process, please don't hesitate to contact us. We appreciate your interest in joining our network of suppliers and look forward to receiving your information soon. Thank you for considering this collaboration with our company!",
        alert_li_1_1: 'Fill in all the fields to send the',
        alert_li_1_2: 'request',
        alert_li_2_1: 'Fields with',
        alert_li_2_2: 'are required',

        states_title: 'Document states',
        states_confirmed: 'Confirmed state',
        states_pending: 'Pending state',
        states_under_review: 'Under review state',
        states_rejected: 'Rejected state',
        states_upload_pending: 'Upload pending state',

        records: 'Records',

        option_all: 'All states',

        modal_history_title: 'History',

        modal_logbook_title: 'Logbook',
        modal_duedates_title: 'Some documents have expired by the estimated time',
        modal_document_title: 'Choose a PDF file for preview.',

        modal_column_1: 'Document',
        modal_column_2: 'Date',
        modal_column_3: 'Status',
        modal_column_4: 'Comment',

        modal_document_3_title: 'View document',
        modal_document_3_status: 'Status',
        modal_document_3_file: 'File',
        modal_document_3_upload: 'Upload document',

        button_close: 'Close',
        button_save: 'Save',
    },
    es: {
        page_header: 'Bienvenido a tu espacio',
        page_title: 'Documentos',
        menu_navigation: 'Navegación',
        menu_partner_dashboard: 'Escritorio',
        menu_partner_documents: 'Documentos',
        menu_partner_contacts: 'Contactos',
        menu_partner_business: 'Información del negocio',
        option_profile: 'Mi perfil',
        option_logout: 'Cerrar sesión',
        menu_partner_bills: 'Facturas',

        current_page_title: 'Control de documentos',
        alert_title: 'Información importante',
        alert_message: 'Por favor complete el formulario de alta proporcionado, adjuntando la documentación legal de su empresa. Una vez recibida y revisada la información, le mostraremos el resultado del proceso. ¡Esperamos tener una exitosa colaboración en el futuro! Si tiene alguna pregunta adicional o necesita más detalles sobre el proceso de alta, no dude en ponerse en contacto con nosotros. Agradecemos su interés en ser parte de nuestra red de proveedores y esperamos recibir su información pronto. ¡Gracias por considerar esta colaboración con nuestra empresa!',
        alert_li_1_1: 'Complete todos los campos para enviar la',
        alert_li_1_2: 'solicitud',
        alert_li_2_1: 'Los campos con',
        alert_li_2_2: 'son obligatorios',

        states_title: 'Estados de documentos',
        states_confirmed: 'Estado de confirmación',
        states_pending: 'Estado en espera',
        states_under_review: 'Estado en revisión',
        states_rejected: 'Estado de rechazo',
        states_upload_pending: 'Estado de carga pendiente',

        records: 'Registros',

        option_all: 'Todos los estados',

        modal_history_title: 'Historia',

        modal_logbook_title: 'Bitácora',

        modal_duedates_title: 'Algunos documentos han vencido según el tiempo estimado',

        modal_document_title: 'Elija un archivo en formato PDF para su previsualización.',

        modal_column_1: 'Documento',
        modal_column_2: 'Fecha',
        modal_column_3: 'Estado',
        modal_column_4: 'Comentario',

        modal_document_3_title: 'Ver documento',
        modal_document_3_status: 'Estado',
        modal_document_3_file: 'Archivo',
        modal_document_3_upload: 'Subir documento',

        button_close: 'Cerrar',
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
