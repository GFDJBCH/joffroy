function printUsuario(_id){
    let usuario = buscarUsuarioCC(_id, '', '', '');

    document.getElementById("spnMnSeudonimo").innerHTML = usuario['seudonimo'];
    //document.getElementById("hSeudonimo").innerHTML = usuario['seudonimo'];
    document.getElementById("spnMnCorreo").innerHTML = usuario['correo'];
    //document.getElementById("dvPuesto").innerHTML = usuario['puesto'];
}