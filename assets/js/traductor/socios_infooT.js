
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

        Business_information_tr: "Información comercial",
        Capture_tr: "Capturar",
        Registration_fields_tr: "Campos de registro",
        Important_information_tr: "Información importante",
        The_fields_with_the_sign_tr: "Los campos con el signo",
        are_mandatory_to_fill_out_tr: "son obligatorios de completar",
        Please_enter_the_correct_information_requested_tr: "Por favor, ingresa la información solicitada correctamente",
        Business_name_tr: "Nombre de la empresa",
        Capital_regime_tr: "Régimen de capital",
        Comercial_name_tr: "Nombre comercial",
        Colony_tr: "Colonia",
        Save_tr: "Guardar",
        info_extra_tr: "Información extra",
        info_actividades_tr: "¿Tiene actividad en otras entidades de la república?",
        info_tipos_tr: "Tipo de empresa",
        Info_sector_tr: "Indique el sector al que pertenece su compañía",
    };
    Object.keys(traducciones).forEach((clase) => {
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

