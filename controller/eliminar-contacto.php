<?php
require '../model/contacto.php';
$id = $_POST['id'];

$response = [];
$instancia = new Contacto();

$response = $instancia->eliminar_contacto($id);
if ($response) {
    $alerta = [
        "texto" => "Contacto eliminado correctamente.",
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
