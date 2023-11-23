<?php
require '../model/scc_scs_documentos.php';

$scs_scs_documentos = new scs_scs_documentos();

// Acceder a los valores POST
$id = $_POST['id'] ?? null;
$pais = $_POST['pais'] ?? null;
$extenjero = $_POST['extenjero'] ?? null;
$activo = $_POST['activo'] ?? null;




// Obtener los datos
$datosUno = $scs_scs_documentos->traer_datos_socios_documentos_revision_filtro($id, $extenjero, $pais, $activo);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);