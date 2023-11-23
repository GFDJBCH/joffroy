<?php
require '../model/perfil.php';
$usuarioID = $_POST["usuario"];
$correo = $_POST["correo"];

$partesCorreo = explode("@", strtolower($correo));

$perfil = new Perfil();
if (count($partesCorreo) == 2) {
    $usuario = $partesCorreo[0];
    $dominio = $partesCorreo[1];
    if (strpos($dominio, 'joffroy') !== false) {
        $respuesta = $perfil->buscar_usuario_joffroy($usuarioID);
    } else {
        $respuesta = $perfil->buscar_usuario($usuarioID);
    }
} else {
    $respuesta = [];
}
echo json_encode($respuesta);
