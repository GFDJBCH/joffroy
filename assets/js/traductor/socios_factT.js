
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

        Ingles_tr: "Español",

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

        
        Bills__tr: "Facturas",
        
        Title_tr: "Titulo",
        

        Fields_with_the_sign_tr: "Los campos con el signo",
        Please_enter_the_correct_information_requested_tr: "Favor de introducir la información correcta que se le solicita",
        


       // Resto de los elementos en inglés y sus traducciones en español
    };


     // Realizar la traducción de los elementos
     Object.keys(traducciones).forEach(function(id) {
        var elemento = document.getElementById(id);
        if (elemento) {
           if (idioma === "en") {
              // Cargar los elementos en inglés
              elemento.textContent = id.replace("_tr", "").replace(/_/g, " ");
           } else {
              // Cargar los elementos traducidos al español
              elemento.textContent = traducciones[id];
           }
           
        }
        console.log(id)
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
