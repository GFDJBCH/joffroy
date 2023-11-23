
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

        
        //base
        Documents_tr: "Documentos",
        New: "Nuevo",
        Suppliers: "Proveedores",
        Bills: "Facturas",
        Options: "Opciones",


        New_document: "Nuevo documento",
        Important_information: "Informacion importante",
        The_fields_with_the_sign: "Los campos con el signo",
        are_mandatory_to_fill_out: "es obligatorio rellenar",
        Please_enter_the_correct_information_requested: "Introduzca correctamente la información solicitada",
        Name: "Nombre",
        Description: "Descripcion",
        Code: "Codigo",
        Physical_person: "Persona fisica",
        Moral_person: "Persona moral",
        Business: "Empresas",
        units: "unidades",
        Store: "Almacén",
        Aduana_MX: "Aduana MX",
        Documents_Settings: "Configuración de documentos",
        Type_of_person: "Tipo de persona",
        Expiration: "Vencimiento",
        Anual: "Anual",
        Fortnightly: "Quincenal",
        Notification: "Notificaciones",
        Documents_flows: "Flujos de documentos",
        Positions_involved: "Puestos implicados",
        Actions_tr: "Accion",
        New_flow: "Nuevo flujo",
        Save_information: "Guardar informacion",
        About_tr: "Nosotros",
        Support_tr: "Soporte",
        List_of_suppliers_tr: "Lista de proveedores",
        Quantity_tr: "Cantidad",
        Search_tr: "Buscar",
        Search_options_tr: "Opciones de búsqueda",
        Navigation_tr: "Navegación",
        Suppliers_tr: "Proveedores",
        Pendings_tr: "Pendientes",
        Catalogs_tr: "Catálogos",
        Documents_tr: "Documentos",
        Suppliers_tr: "Proveedores",
        Location_options_tr: "Opciones de ubicación",
        Establishments_tr: "Establecimientos",
        Important_information_tr: "Información importante",
        Application_tr: "Solicitud",
        The_information_displayed_in_the_table_belongs_to_those_providers_who_have_successfully_registered_on_the_platform_tr: "La información mostrada en la tabla pertenece a aquellos proveedores que se han registrado exitosamente en la plataforma",
        Those_providers_with_the_tr: "Aquellos proveedores con el ",
        icon_are_those_that_have_all_their_information_and_complete_documentation_tr: "ícono son aquellos que tienen toda su información y documentación completa",
        Use_the_buttons_on_the_lines_to_see_the_information_of_the_providers_tr: "Utiliza los botones en las filas para ver la información de los proveedores",
        Name_tr: "Nombre",
        Type_tr: "Tipo",
        Documentation_tr: "Documentación",
        Actions_tr: "Acciones",
        No_result_found_tr: "No se encontraron resultados",
        Documentation: "",
        List_of_received_documents: "Lista de documentos recibidos",
        Quantity: "Cantidad",
        Search: "Buscar",
        Search_options: "Opciones de búsqueda",
        Provider: "Proveedor",
        Provider_type: "Tipo de proveedor",
        Mexican: "Mexicano",
        Foreign: "Extranjero",
        Important_information: "Información importante",
        The_information_displayed_in_the_table_belongs_to_those_providers_who_have_successfully_registered_on_the_platform: "La información mostrada en la tabla pertenece a aquellos proveedores que se han registrado exitosamente en la plataforma",
        Use_the_buttons_on_the_lines_to_see_the_information_of_the_providers: "Utiliza los botones en las filas para ver la información de los proveedores",
        Document: "Documento",
        Date_of_receipt: "Fecha de recepción",
        Actions: "Acciones",
        No_result_found: "No se encontraron resultados",
        View_document: "Ver documento",
        Status: "Estado",
        Awaiting_confirmation: "Esperando confirmación",
        Received_time: "Tiempo de recepción",
        Fill_in_all_the_fields_to_send_the_request: "Completa todos los campos para enviar la solicitud",
        Fields_with: "Campos con",
        are_required: "son obligatorios",
        Comment: "Comentario",
        Decline: "Rechazar",
        Accept: "Aceptar",
        List_of_received_documents_tr: "Lista de documentos recibidos",
 
        Mexican_tr: "Mexicano",
        Foreign_tr: "Extranjero",
        State_tr: "Estado",
        Active_tr: "Activo",
        Apply_tr: "Aplicar",
        To_reset_tr: "Restablecer",
        Documents_tr: "Documentos",
        Support_tr: "Soporte",
        Purchase_tr: "Comprar",

        Provider_tr: "Proveedor",
        Provider_type_tr: "Tipo de proveedor",
        Document_tr: "Documento",
        Date_of_receipt_tr: "Fecha de recepción",
        View_document_tr: "Ver documento",
        Status_tr: "Estado",
        Received_time_tr: "Tiempo de recepción",
        Fill_in_all_the_fields_to_send_the_tr: "Completa todos los campos para enviar el formulario",
        request_tr: "solicitud",
        Fields_with_tr: "Campos con",
        are_required_tr: "son requeridos",
        Comment_tr: "Comentario",
        Decline_tr: "Rechazar",
        Accept_tr: "Aceptar",
        Document_tr: "Documento",
        Pending_tr: "Pendiente",

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
    //     // console.log(id)
    //     console.log(elemento)

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
