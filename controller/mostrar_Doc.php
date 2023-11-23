<?php
require '../model/scc_documentos.php';

// Recibir los datos del modelo
// $modelo = json_decode(file_get_contents('php://input'));


$documentos = new documentos();

$negocioId = $_POST["negocioId"];

if ($negocioId == "0") {
    $negocioId = null;
}

$datosUno = $documentos->mostrar_documentos($negocioId);


// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);
