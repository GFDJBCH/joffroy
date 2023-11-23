
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

    location.reload();

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

    location.reload();

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
        Activities_tr: "última actividad",
        Business_information_tr: "Información de negocios",

        Record_tr: "Registro",
        Update_tr: "Actualización",
        Notification_tr: "Notificación",
        Profile_Compleation_tr: "Completar perfil",
        
        Notifications_tr: "Actividades",
        Notification_tr: "Notificacion",
        // Documents_tr: "Documentos",
        Documents__tr: "Documentos",
        Close_to_win_tr: "Cerca de ganar",
        Document_tr: "Documento",
        Status_tr: "Estado",
        Time_to_expire_tr: "Tiempo de expiración",
        Actions: "Acciones",
        Sales_tr: "Ventas",
        Bills_tr: "Facturas",
        New_Member_tr: "Miembro nuevo",
        Authors_tr: "Autores",
        Company_tr: "Empresa",
        Progress_tr: "Progreso",
        Actions_tr: "Acciones",
        
        Documents_tr: "Documentos",
        Contacts_tr: "Contactos",
        Business_information_tr: "Información comercial",
        Record_tr: "Registro",
        Update_tr: "Actualizar",
        Notification_tr: "Notificación",
        Profile_Compleation_tr: "Completar perfil",
        No_result_found_tr: "No se encontraron resultados",
        Documents_tr: "Documentos",
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
