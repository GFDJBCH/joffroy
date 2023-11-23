<?php
require '../model/documento.php';
$id = $_POST['id'];

$responseDocumento = [];
$instancia = new Documento();

$responseDocumento = $instancia->eliminar_documento($id);
if ($responseDocumento) {
    $alerta = [
        "texto" => "Documento dado de baja correctamente.",
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
