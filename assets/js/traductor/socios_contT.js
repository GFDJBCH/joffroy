
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

        Contacts_tr: "Contactos",
        
        Important_information_tr: "Información importante",
        are_mandatory_to_fill_out_tr: "Son obligatorios de llenar",
        Please_enter_the_correct_information_requested_tr: "Por favor ingrese la información correcta solicitada.",
        
        Name_tr: "Nombre",
        Last_name_tr: "Apellido",
        Email_tr: "Correo electrónico",
        Password_tr: "Contraseña",
        Phone_tr: "Teléfono",
        Position_tr: "Posición",

        Contacts_tr: "Contactos",
        Business_information_tr: "Información comercial",
        Contact_list_tr: "Lista de contactos",
        Quantity_tr: "Cantidad",
        New_contact_tr: "Nuevo contacto",
        Important_information_tr: "Información importante",
        The_information_displayed_in_the_table_belongs_to_those_contacts_who_have_successfully_registered_on_the_platform_tr: "La información mostrada en la tabla pertenece a aquellos contactos que se han registrado exitosamente en la plataforma",
        Use_the_buttons_on_the_lines_to_see_the_information_of_the_providers_tr: "Utiliza los botones en las filas para ver la información de los proveedores",
        Name_tr: "Nombre",
        Email_tr: "Email",
        Phone_tr: "Teléfono",
        Job_tr: "Puesto",
        Actions_tr: "Acciones",
        No_result_found_tr: "No se encontraron resultados",
        About_tr: "Acerca de",
        Support_tr: "Soporte",
        Purchase_tr: "Compra",

        Contact_information_tr: "Información de contacto",
        Important_information_tr: "Información importante",
        The_fields_with_the_sign_tr: "Los campos con el asterisco",
        are_mandatory_to_fill_out_tr: "son obligatorios",
        Please_enter_the_correct_information_requested_tr: "Por favor, ingrese la información solicitada correctamente",
        Name_tr: "Nombre",
        Last_name_tr: "Apellido",
        Email_tr: "Correo electrónico",
        Phone_tr: "Teléfono",
        Job_tr: "Trabajo",
        Password_tr: "Contraseña",
        Save_information_tr: "Guardar información",
        Confirm_deletion_tr: "Confirmar eliminación",
        Are_you_sure_you_want_to_delete_this_data_tr: "¿Está seguro de que desea eliminar estos datos",
        Cancel_tr: "Cancelar",
        Delete_tr: "Eliminar"

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
    //     console.log(id)
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
