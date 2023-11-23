
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
        No_result_found_tr: "No se encontraron resultados",
        Documentation: "Documentación",
        New_record: "Nuevo registro",
        Location_options: "Opciones de ubicación",
        Establishments: "Establecimientos",
        Restart: "Reiniciar",
        Apply: "Aplicar",
        New_document: "Nuevo documento",
        Important_information: "Información importante",
        The_fields_with_the_sign: "Los campos con el signo",
        are_mandatory_to_fill_out: "son obligatorios de completar",
        Please_enter_the_correct_information_requested: "Por favor ingresa la información solicitada correctamente",
        Name: "Nombre",
        Description: "Descripción",
        Code: "Código",
        Business_units: "Unidades de negocio",
        Document_Settings: "Configuración de documentos",
        Type_of_person: "Tipo de persona",
        Expiration: "Fecha de vencimiento",
        Actions: "Acciones",
        Empty_table: "Tabla vacía",
        New_configuration: "Nueva configuración",
        Document_flows: "Flujos de documentos",
        Flow: "Flujo",
        Positions_involved: "Posiciones involucradas",
        Actions: "Acciones",
        Empty_table: "Tabla vacía",
        New_flow: "Nuevo flujo",
        Save_information: "Guardar información",
        About: "Acerca de",
        Support: "Soporte",
        Purchase: "Compra",
        New_record_tr: "Nuevo récord",
        The_fields_with_the_sign_tr: "Los campos con el signo",
        are_mandatory_to_fill_out_tr: "son de cumplimentación obligatoria",
        Please_enter_the_correct_information_requested_tr: "Introduzca correctamente la información solicitada",
        New_document_tr: "Nuevo documento",
        Description_tr: "Descripción",
        Description_ingles_tr: "Descripción en ingles",
        Code_tr: "Código",
        Business_units_tr: "Unidades",
        Document_Settings_tr: "Configuración del documento",
        Type_of_person_tr: "Tipo de persona",
        Expiration_tr: "Vencimiento",
        Notification_tr: "Notificación",
        Empty_table_tr: "Tabla vacía",
        New_configuration_tr: "Nueva configuración",
        New_document_settings_tr: "Nueva configuración de documento",
        Physical_person_tr: "Persona física",
        Moral_person_tr: "Persona moral",
        Save_tr: "Guardar",
        English_name: "Nombre en ingles",
        Delete_tr: "Borrar",
        Business_due_tr: "Fecha de vencimiento",
        Business_natural_check_tr: "Persona física",
        Business_entity_check_tr: "Persona moral",
        Business_foreign_check_tr: "Extranjero",
        due_date_tr: "Periodo de expiración",
        Close_tr: "Regresar al listado",
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

                    // console.log(traducciones[clase]);
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