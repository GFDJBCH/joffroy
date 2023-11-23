<?php
require '../model/scc_scs_documentos.php';

$scs_scs_documentos = new scs_scs_documentos();





// Obtener los datos
$datosUno = $scs_scs_documentos->traer_datos_socios_documentos_revision();

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);