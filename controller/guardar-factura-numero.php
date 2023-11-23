<?php
require '../model/socios.php';

$invoice = $_POST['invoice'];
$orderNumber = $_POST['orderNumber'];

$response = [];
$instancia = new socios();
$datos = [
    "id" => $invoice,
    "orderNumber" => $orderNumber
];

$response = $instancia->actualizar_factura_orden($datos);

if ($response) {
    $alerta = [
        "texto" => "Information saved correctly.",
        "texto_ingles" => "Information saved correctly.",
        "lastId" => $invoice,
        "estado" => 200,
    ];
} else {
    $alerta = [
        "texto" => "Ningún cambio realizado.",
        "texto_ingles" => "No changes made.",
        "lastId" => null,
        "estado" => 400,
    ];
}

echo json_encode($alerta);
