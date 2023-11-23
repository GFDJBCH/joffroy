<?php
    require '../model/contacto.php';
    $correo= $_POST["email"];
    $contrasena= $_POST["contrasena"];

    $correo = strtolower(trim($correo));

    $data = [
        "email" => $correo,
        "contrasena" => $contrasena
    ];

    $contactos = new Contacto();
    $datos = $contactos->reverificar_correo($correo);

    if ($datos) {
        $response = $contactos->actualizar_password($data);
    } else {
        $response = false;
    }


if ($response) {
    $alerta = [
        "texto" => "Cambios realizados correctamente.",
        "lastId" => $correo,
        "estado" => 200,
    ];
} else {
    $alerta = [
        "texto" => "Ningún cambio realizado.",
        "lastId" => null,
        "estado" => 400,
    ];
}


    // Devolver la respuesta JSON
    header('Content-Type: application/json');
    echo json_encode($alerta);
