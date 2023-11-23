let parametrosVerificacion_;

setTimeout("mandarPagina()", 2000);

function mandarPagina(){
    location.href ='socios-info.html';
}
function verificacion(){
    let id = getParameterByName('vr');
    parametrosVerificacion_ = {
        "id": id, 
        "socio": '',
        "nombre": '',
        "apellidos": '',
        "email": '',
        "contrasena": '',
        "telefono": '',
        "puesto": '',
        "activo": '',
        "tipo": 'usuario'
    };
    let resRegistro = selectContacto(parametrosVerificacion_);
    if(resRegistro.activo === "sin confirmar"){
        parametrosVerificacion_ = {
            "id": id,
            "socio": resRegistro.socio,
            "nombre": resRegistro.nombre,
            "apellidos": resRegistro.apellidos,
            "email": resRegistro.email,
            "contrasena": resRegistro.contrasena,
            "telefono": resRegistro.telefono,
            "puesto": resRegistro.puesto,
            "activo": 'confirmado'
        };

        resRegistro = updateContacto(parametrosVerificacion_);
        if(resRegistro === "true"){
            window.location="partners-information.html";
        }
    }
    else if(resRegistro.activo === "baja"){

    }
    else{
        window.location="partners-dashboard.html";
    }
}
function camPagina(){
    window.location="login.html";
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}