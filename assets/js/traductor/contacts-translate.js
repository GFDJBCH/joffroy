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
        page_title: 'Contacts',
        menu_navigation: 'Navigation',
        menu_partner_dashboard: 'Dashboard',
        menu_partner_documents: 'Documents',
        menu_partner_contacts: 'Contacts',
        menu_partner_business: 'Business information',
        option_profile: 'My profile',
        option_logout: 'Log out',
        menu_partner_bills: 'Bills',

        current_page_title: 'Contact list',
        current_page_record: 'Total records:',
        current_page_new_record: 'New contact',
        current_page_description: 'The information displayed in the table belongs to those contacts who have successfully registered on the platform',

        table_column_1: 'Name',
        table_column_2: 'Email',
        table_column_3: 'Phone',
        table_column_4: 'Position',
        table_column_5: 'Actions',

        modal_title: 'Contact information',
        modal_alert: 'Once registered, you will receive a confirmation email that will allow you to access the system.',
        modal_close: 'Close',
        modal_submit: 'Save',

        contact_name: 'Contact name',
        contact_lastname: 'Contact last name',
        contact_position: 'Contact position',
        contact_phone: 'Contact phone',
        contact_email: 'Contact email',
        contact_email_warning: 'Be aware that the email address is used for login purposes.',
        contact_new_password: 'Password',
        contact_confirm_password: 'Confirm password',
    },
    es: {
        page_header: 'Bienvenido a tu espacio',
        page_title: 'Contactos',
        menu_navigation: 'Navegación',
        menu_partner_dashboard: 'Escritorio',
        menu_partner_documents: 'Documentos',
        menu_partner_contacts: 'Contactos',
        menu_partner_business: 'Información del negocio',
        option_profile: 'Mi perfil',
        option_logout: 'Cerrar sesión',
        menu_partner_bills: 'Facturas',

        current_page_title: 'Lista de contactos',
        current_page_record: 'Total de registros:',
        current_page_new_record: 'Nuevo contacto',
        current_page_description: 'La información mostrada en la tabla pertenece a aquellos contactos que se han registrado con éxito en la plataforma.',

        table_column_1: 'Nombre completo',
        table_column_2: 'Correo electrónico',
        table_column_3: 'Teléfono',
        table_column_4: 'Puesto',
        table_column_5: 'Acciones',

        modal_title: 'Información del contacto',
        modal_alert: 'Una vez registrado, recibirá un correo de confirmación que le permitirá acceder al sistema.',
        modal_close: 'Cerrar',
        modal_submit: 'Guardar',

        contact_name: 'Nombre del contacto',
        contact_lastname: 'Apellidos del contacto',
        contact_position: 'Puesto del contacto',
        contact_phone: 'Teléfono del contacto',
        contact_email: 'Correo del contacto',
        contact_email_warning: 'Tenga en cuenta que la dirección de correo electrónico se utiliza con fines de inicio de sesión.',
        contact_new_password: 'Contraseña',
        contact_confirm_password: 'Confirmar contraseña',
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
