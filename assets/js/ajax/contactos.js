function insertContacto(_parametros){
    var respuesta = "false";

    $.ajax({
        async: false,
        type: "GET",
        url: 'controller/insertContacto.php',
        data: _parametros,
        success: function(data){
            respuesta = data
        }
    });

    return respuesta;
}
function updateContacto(_parametros){
    var respuesta;

    $.ajax({
        async: false,
        type: "GET",
        url: 'controller/updateContacto.php',
        data: _parametros,
        success: function(data){
            respuesta = data;
        }
    });

    return respuesta;
}
function selectContacto(_parametros){
    var respuesta;

    $.ajax({
        async: false,
        type: "GET",
        url: 'controller/selectContacto.php',
        data: _parametros,
        success: function(data){
            respuesta = data;
        }
    });

    return respuesta;
}
function selectContactSession(){
    var respuesta;

    $.ajax({
        async: false,
        type: "GET",
        url: 'controller/sessionContacto.php',
        success: function(data){
            respuesta = data;
        }
    });

    return respuesta;
}
function allContacto(_parametros){
    
}