const traducciones = {
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
    Document_times_tr: "Control de documentos",
    Document_control_tr: "Control de documentos",
    Important_information_tr: "Información importante",
    Verify_that_your_documents_are_active_tr: "Compruebe que sus documentos están activos",
    Non_active_documents_must_be_updated_with_the_indicated_characteristics_tr: "Los documentos no activos deben actualizarse con las características indicadas",
    SHCP_tax_status_certificate_tr: "Certificado de situación fiscal de la SHCP",
    __Status_tr: "Estado",
    ___Expiry_time_tr: "Caducidad",
    _3_months_tr: "3 meses",
    Defeated_tr: "Vencido",
    ___Status_tr: "Estado",
    Characteristics_tr: "Características",
    Document_not_older_than_3_months_tr: "Documento no más antiguo de 3 meses",
    Upload_document__tr: "Cargar documento",
    Proof_of_Address_tr: "Justificante de domicilio",
    Active_tr: "Activo",
    __3_months_tr: "3 meses",
    ID_Oficial_tr: "ID Oficial ",
    In_review_tr: "En revisión",
    Comment_tr: "Comentario",
    Comment_td: "Sin comentarios",
    The_document_is_being_reviewed_by_our_staff_tr: "El documento está siendo revisado por nuestro personal",
    Articles_of_Incorporation_tr: "Artículos de incorporación",
    ___3_month_tr: "3 meses",
    Power_of_Attorney_of_the_Legal_Representative_tr: "Poder notarial del representante legal",
    Dismissed_tr: "Descartado",
    The_document_does_not_have_the_correct_specifications_tr: "El documento no tiene las especificaciones correctas",
    Characteristics_tr: "Característica",
    Upload_document_tr: "Cargar documento",
    Expiry_time_tr: "Caducidad",
    Banking_Cover_Sheet_tr: "Portada bancaria",
    Some_documents_have_expired_by_the_estimated_time_tr: "Algunos documentos han caducado en el plazo estimado",
    Documents__tr: "Documentos",
    Positive_Opinion_tr: "Opinión positiva",
    Status_tr: "Estado",
    Power_of_Attorney_of_the_Legal_Representative_tr: "",
    Dismissed_tr: "Estado",
    Close_tr: "Cerrar",
    Logbook_tr: 'Bitácora',
    Records_tr: "Registros",
    Sorted_in_tr: "Ordenado en",
    Sort_by_tr: "Ordenar por",
    Ascending_order_tr: "Orden ascendente",
    Descending_order_tr: "Orden descendente",
    In_progress_tr: "En progreso",
    Confirmed_tr: "Confirmado",
    Rejected_tr: "Rechazado",
    History_tr: "Historial",
    Document_tr: "Documento",
    Date_tr: "Fecha",
    All_states_tr: "Todos los Estados",
    Confirmed_state_tr: "Estado confirmado",
    Pending_state_tr: "Estado pendiente",
    Under_review_state_tr: "Estado pendiente",
    Rejected_state_tr: "Estado rechazado",
    Document_states_tr: "Estados del documento",
    Under_review_state_tr: "Estado en revisión",
    Upload_pending_state_tr: "Estado pendiente de carga"
};

document.getElementById("reiniciarT_BTN").addEventListener("click", reiniciarIdioma);
document.getElementById("traduccionBTN").addEventListener("click", cambiarIdioma);

function reiniciarIdioma() {
    establecerIdioma("en");
    traducir("en");
    location.reload();
}
function cambiarIdioma() {
    const radioChecked = document.getElementById("flexRadioChecked");
    const radioChecked2 = document.getElementById("flexRadioChecked2");
    const idioma = radioChecked.checked ? radioChecked.value : radioChecked2.value;

    establecerIdioma(idioma);
    traducir(idioma);
    location.reload();
}
function establecerIdioma(idioma) {
    localStorage.setItem("idioma_SC", idioma);
}
function traducir(idioma) {
    const elementosTraducibles = document.querySelectorAll("[class$='_tr']");
    elementosTraducibles.forEach(function(elemento) {
        const clase = elemento.classList[0];
        if (idioma === "en") {
            elemento.textContent = clase.replace("_tr", "").replace(/_/g, " ");
        } else {
            elemento.textContent = traducciones[clase];
        }
    });
    const radioChecked = document.getElementById("flexRadioChecked");
    const radioChecked2 = document.getElementById("flexRadioChecked2");
    if (idioma === "en") {
        radioChecked.checked = true;
    } else {
        radioChecked2.checked = true;
    }
}
document.addEventListener("DOMContentLoaded", function () {
    let idiomaTemp = localStorage.getItem("idioma_SC") || "en";
    traducir(idiomaTemp);
});
