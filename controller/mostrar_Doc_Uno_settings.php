<?php
require '../model/scc_documentos.php';

 // Acceder a los valores POST
 $id = $_POST['id'] ?? '';

$documentos = new documentos();



// Guardar en la tabla ssc_dcm_flujo
$queryFlujo = "SELECT * FROM scc_documentos INNER JOIN scc_documentos_settings ON scc_documentos.id = scc_documentos_settings.documento WHERE scc_documentos.id = ".$id.";";


// Obtener los datos
$datosUno = $documentos->traer_datos_personalizados_setting($queryFlujo);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);