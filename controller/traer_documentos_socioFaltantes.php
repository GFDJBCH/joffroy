
<?php
require '../model/scc_scs_documentos.php';

// Acceder a los valores POST
$id = $_POST['id'] ?? '';
$documentos = $_POST['documentos'] ?? '';


$scs_scs_documentos = new scs_scs_documentos();





// Obtener los datos
$datosUno = $scs_scs_documentos->traer_datos_socios_documentos_losQueFaltan($id, $documentos);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);
