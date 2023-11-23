
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
        Options_tr: "Opciones",
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
        
        Information_tr: "Información",
        Documentation_tr: "Documentación",
        More_options_tr: "Más opciones",
        Option_tr: "Opción",
        Settings_tr: "Configuración",
        Request_tr: "Solicitud",
        Update_tr: "Actualizar",
        Next_tr: "Siguiente",
        Documentation_tr: "Documentación",
        Business_information_tr: "Información de la empresa",
        Important_information_tr: "Información importante",
        The_fields_with_the_sign_tr: "Los campos con el signo",
        are_mandatory_to_fill_out_tr: "son obligatorios de completar",
        Please_enter_the_correct_information_requested_tr: "Por favor ingresa la información solicitada correctamente",
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
        Physical_person_tr: "Persona física",
        Moral_person_tr: "Persona moral",
        Tax_identifier_tr: "Identificador fiscal",
        Line_of_business_tr: "Línea de negocio",
        Save_tr: "Guardar",
        Supplier_information_tr: "Información del proveedor",
        Confidence_level_tr: "Nivel de confianza",
        Operation_type_tr: "Tipo de operación",
        Nationality_tr: "Nacionalidad",
        Credit_days_tr: "Días de crédito",
        Credit_limit_tr: "Límite de crédito",
        Branch_offices_tr: "Sucursales",
        Areas_tr: "Áreas",
        Departments_tr: "Departamentos",
        Justification_tr: "Justificación",
        Security_tr: "Seguridad",
        About_tr: "Acerca de",
        Support_tr: "Soporte",
        Purchase_tr: "Compra",
        registratio_date_tr: "Fecha de registro",


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



//Apartado para cargar la informacionbasica de usuario
// Obtener el elemento <span> por su ID
const span_spnNombreU = document.getElementById('spnNombreU');

// Agregar texto al contenido existente
span_spnNombreU.textContent += localStorage.getItem("socioComercial_nombre_user");

// Obtener el elemento <span> por su ID
const span_spnCorreoU = document.getElementById('spnCorreoU');

// Agregar texto al contenido existente
span_spnCorreoU.textContent += localStorage.getItem("socioComercial_correo_user");
