<?php
require '../model/scc_documentos.php';

 // Acceder a los valores POST
 $id = $_POST['id'] ?? '';

$documentos = new documentos();





// Obtener los datos
$datosUno = $documentos->traer_datos_flujo($id);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);