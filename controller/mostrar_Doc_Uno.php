<?php
require '../model/scc_documentos.php';

 // Acceder a los valores POST
 $id = $_POST['id'] ?? '';

$documentos = new documentos();



// Guardar en la tabla ssc_dcm_flujo
$queryFlujo = "SELECT * FROM vwdocumentos WHERE id = ".$id.";";

// Obtener los datos
$datosUno = $documentos->Traer_datos_extra($queryFlujo);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);
