
/// Apartado de reinicio
document.getElementById("reiniciarT_BTN").addEventListener("click", function() {
    

    ///Verificar idioma

    let idioma = "en";

    // Obtener referencias a los radio buttons
    var radioChecked = document.getElementById("flexRadioChecked");
    // var radioChecked2 = document.getElementById("flexRadioChecked2");

    console.log(idioma);

    // Guardar datos en localStorage
    localStorage.setItem("idioma_SC", idioma);

    // Traducior 
    traducir(idioma);

    

});

document.getElementById("traduccionBTN").addEventListener("click", function() {
    

    ///Verificar idioma

    let idioma;

    // Obtener referencias a los radio buttons
    var radioChecked = document.getElementById("flexRadioChecked");
    var radioChecked2 = document.getElementById("flexRadioChecked2");

    // Verificar si el primer radio button está seleccionado
    if (radioChecked.checked) {
        idioma = radioChecked.value;
    }

    // Verificar si el segundo radio button está seleccionado
    if (radioChecked2.checked) {
        idioma = radioChecked2.value;
    }

    console.log(idioma);

    // Guardar datos en localStorage
    localStorage.setItem("idioma_SC", idioma);

    // Traducior 
    traducir(idioma);

    

});


function traducir(idioma) {
    var traducciones = {

        English_tr: "Español",

        Language_options_tr: "Opciones de idioma",
        Languages_tr: "Idiomas",
        Restart_tr: "Reiniciar",
        Apply_tr: "Aplicar",

        Navigation_tr: "Navegación",
        Bills_tr: "Facturas",
        Documents_tr: "Documentos",
        Contacts_tr: "Contactos",
        Activities_tr: "Actividades",
        Business_information_tr: "Información de negocios",

        Important_information_tr: "Información importante",
        The_fields_with_the_sign_tr: "Los campos con el signo",
        are_mandatory_to_fill_out_tr: "es obligatorio rellenar",
        Please_enter_the_correct_information_requested_tr: "Son obligatorios de llenar. Por favor ingrese la información correcta solicitada.",

        Business_name_tr: "Nombre de la empresa",
        Tradename_tr: "Nombre comercial",
        Email_tr: "Correo electrónico",
        Phone_number_tr: "Número de teléfono",
        Address_information_tr: "Datos del Domicilio",
        Colony_tr: "Colonia",
        Street_tr: "Calle",
        Ext_number_tr: "numero Ext",
        Postal_Code_tr: "Código Postal",
        Location_tr: "Ubicación",
        Tax_information_tr: "Información sobre los impuestos",
        Provider_type_tr: "Tipo de proveedor",
        Physical_person_s_tr: "Persona física",
        Moral_person_s_tr: "Persona moral",
        Tax_identifier_tr: "Identificador fiscal",
        Line_of_business_tr: "Línea de negocio", 

        // modal
        Welcome_tr: "Bienvenido",
        "Welcome_to_our_app!_We_are_delighted_to_have_you_here_tr": "Bienvenido a nuestra aplicación Estamos encantados de tenerte aquí",
        Benefits_tr: "Beneficios",
        We_hope_you_enjoy_all_the_features_we_have_prepared_for_you_tr: "Esperamos que disfrutes de todas las funciones que hemos preparado para ti",
        Let_us_begin_tr: "Comencemos",
        Start_exploring_and_discover_everything_our_app_has_to_offer_tr: "Empieza a explorar y descubre todo lo que te ofrece nuestra aplicación",
        Information_record_tr: "Registro de información",
        Country_tr: "País",
        Provider_type_tr: "Tipo de proveedor",
        Proof_of_tax_situation_tr: "Prueba de la situación fiscal",
        Previous_tr: "Anterior",
        Next_tr: "Siguiente",
        Finish: "Acabado",        

        Business_information_tr: "Información comercial",
        Capture_tr: "Capturar",
        Welcome_to_the_RITS_Suppliers_Platform_tr: "Bienvenido a la Plataforma de Proveedores de RITS",
        We_are_excited_to_welcome_you_to_our_supplier_management_platform: "Estamos emocionados de darte la bienvenida a nuestra plataforma de gestión de proveedores",
        designed_specifically_for_you: "diseñada específicamente para ti",
        Here_tr: "Aquí",
        you_can_easily_upload_your_invoices_for_the_payment_authorization_process_tr: "puedes cargar fácilmente tus facturas para el proceso de autorización de pago",
        as_well_as_submit_digital_files_related_to_traffic_references_tr: "así como enviar archivos digitales relacionados con referencias de tráfico",
        Need_to_review_your_recent_invoices_tr: "¿Necesitas revisar tus facturas recientes?",
        Looking_for_a_specific_document_tr: "¿Buscas un documento específico?",
        No_worries_tr: "No te preocupes",
        you_tr: "tú",
        ll_have_access_to_all_this_vital_information_and_more_tr: "tendrás acceso a toda esta información vital y más",
        Our_platform_has_been_meticulously_developed_to_provide_you_with_an_intuitive_and_efficient_experience_tr: "Nuestra plataforma ha sido meticulosamente desarrollada para brindarte una experiencia intuitiva y eficiente",
        Benefits_of_our_Information_Query_System_tr: "Beneficios de nuestro Sistema de Consulta de Información",
        Experience_the_Power_of_Easy_Information_Access_tr: "Experimenta el poder del fácil acceso a la información",
        We_take_pride_in_offering_you_a_user_tr: "Nos enorgullece ofrecerte una interfaz de usuario",
        friendly_interface_that_allows_effortless_navigation_and_precise_information_retrieval_tr: "amigable que permite una navegación sin esfuerzo y una recuperación precisa de información",
        Moreover_tr: "Además",
        we_have_implemented_state_of_the_art_security_measures_to_ensure_the_confidentiality_and_privacy_of_your_personal_data_tr: "hemos implementado medidas de seguridad de última generación para garantizar la confidencialidad y privacidad de tus datos personales",
        Quick_and_Convenient_Information_Access_tr: "Acceso rápido y conveniente a la información",
        Empower_your_clients_to_autonomously_review_their_reports_and_quotes_through_our_online_system_tr: "Empodera a tus clientes para que revisen de manera autónoma sus informes y cotizaciones a través de nuestro sistema en línea",
        Enhanced_Transparency_and_Self_Management_tr: "Mayor transparencia y autogestión",
        By_granting_your_clients_access_to_their_own_reports_and_quotes_tr: "Al otorgar a tus clientes acceso a sus propios informes y cotizaciones",
        you_foster_transparency_in_the_business_relationship_tr: "fomentas la transparencia en la relación comercial",
        Improved_Operational_Efficiency_tr: "Mejora de la eficiencia operativa",
        Implementing_an_information_query_system_for_your_clients_enables_you_to_optimize_internal_operations_tr: "Implementar un sistema de consulta de información para tus clientes te permite optimizar las operaciones internas",
        Lets_Get_Started_tr: "Comencemos",
        Information_Registration_tr: "Registro de Información",
        Complete_the_Information_Record_tr: "Completa el registro de información",
        Please_fill_out_the_form_below_with_the_required_details_tr: "Por favor, completa el formulario a continuación con los detalles requeridos",
        Country_tr: "País",
        Provider_Type_tr: "Tipo de proveedor",
        Physical_person_tr: "Persona física",
        Moral_person_tr: "Persona moral",
        File_Attachment_tr: "Adjunto de archivo",
        Previous_tr: "Anterior",
        Next_tr: "Siguiente",
        Finish_tr: "Finalizar",
        Important_information_tr: "Información importante",
        The_fields_with_the_sign_tr: "Los campos con el signo",
        are_mandatory_to_fill_out_tr: "son obligatorios de completar",
        Please_enter_the_correct_information_requested_tr: "Por favor, ingresa la información solicitada correctamente",
        Business_name_tr: "Nombre de la empresa",
        Capital_regime_tr: "Régimen de capital",
        Comercial_name_tr: "Nombre comercial",
        Email_tr: "Correo electrónico",
        Phone_number_tr: "Número de teléfono",
        Address_information_tr: "Información de dirección",
        Street_tr: "Calle",
        number_tr: "Número",
        Colony_tr: "Colonia",
        Location_tr: "Ubicación",
        Tax_information_tr: "Información fiscal",
        Provider_type_tr: "Tipo de proveedor",
        Tax_identifier_tr: "Identificador fiscal",
        Line_of_business_tr: "Línea de negocio",
        Save_information_tr: "Guardar información",
        About_tr: "Acerca de",
        Support_tr: "Soporte",
        Purchase_tr: "Compra",


       // Resto de los elementos en inglés y sus traducciones en español
    };


     // Realizar la traducción de los elementos
    //  Object.keys(traducciones).forEach(function(id) {
    //     var elemento = document.getElementById(id);
    //     if (elemento) {
    //        if (idioma === "en") {
    //           // Cargar los elementos en inglés
    //           elemento.textContent = id.replace("_tr", "").replace(/_/g, " ");
    //        } else {
    //           // Cargar los elementos traducidos al español
    //           elemento.textContent = traducciones[id];
    //        }
    //     }
    //  });

    Object.keys(traducciones).forEach(function(clase) {
        var elementos = document.getElementsByClassName(clase);
        if (elementos.length > 0) {
            Array.from(elementos).forEach(function(elemento) {
                if (idioma === "en") {
                    // Cargar los elementos en inglés
                    elemento.textContent = clase.replace("_tr", "").replace(/_/g, " ");
                } else {
                    // Cargar los elementos traducidos al español
                    elemento.textContent = traducciones[clase];
                }
            });
        }
    });

     //Cambiar el chekeo

     // Obtener referencias a los radio buttons
    var radioChecked = document.getElementById("flexRadioChecked");
    var radioChecked2 = document.getElementById("flexRadioChecked2");

     if (idioma === "en") {
        radioChecked.checked = true;


     } else {
        
        radioChecked2.checked = true;
     }

}


document.addEventListener("DOMContentLoaded", function() {
    

let idiomatemp = localStorage.getItem("idioma_SC");

    if (idiomatemp != null) {    
        traducir(idiomatemp);
    } else {
        traducir("en");
    }

    // Aquí puedes escribir el código que deseas ejecutar después de que la página haya cargado
    // Por ejemplo:
    console.log("La página ha cargado completamente");
    // Otro código que deseas ejecutar
});



