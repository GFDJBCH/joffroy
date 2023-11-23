<?php
require '../model/contacto.php';

$id = $_POST["contacto"];
$socio = $_POST["socio"];
$nombre = $_POST["nombre"];
$apellidos = $_POST["apellidos"];
$email = $_POST["email"];
$contrasena = $_POST["contrasena"];
$telefono = $_POST["telefono"];
$puesto = $_POST["puesto"];
$activo = "sin confirmar";

$id = $id === "" ? null : $id;
$email = strtolower(trim($email));

$response = [];
$instancia = new Contacto();
$datos = [
    "id" => $id,
    "socio" => $socio,
    "nombre" => $nombre,
    "apellidos" => $apellidos,
    "email" => $email,
    "contrasena" => $contrasena,
    "telefono" => $telefono,
    "puesto" => $puesto,
    "activo" => $activo
];

$validarCorreo = $instancia->validar_correo($datos);
if ($id) {
    if ($validarCorreo) {
        echo json_encode([
            "texto" => "El correo ya esta en uso para otro usuario.",
            "lastId" => null,
            "estado" => 400,
        ]);
        exit();
    } else {
        $response = $instancia->actualizar_contacto($datos);
    }
} else {
    if ($validarCorreo) {
        echo json_encode([
            "texto" => "El correo ya esta en uso para otro usuario.",
            "lastId" => null,
            "estado" => 400,
        ]);
        exit();
    } else {
        $response = $instancia->registrar_contacto($datos);
        if ($response) {
            $response = $instancia->enviar_correo($email);
        }
    }
}
if ($response) {
    $alerta = [
        "texto" => "Cambios realizados correctamente.",
        "lastId" => $id,
        "estado" => 200,
    ];
} else {
    $alerta = [
        "texto" => "Ningún cambio realizado.",
        "lastId" => null,
        "estado" => 400,
    ];
}

echo json_encode($alerta);
