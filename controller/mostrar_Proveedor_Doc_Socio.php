<?php
require '../model/scc_scs_documentos.php';

 // Acceder a los valores POST
 $id = $_POST['id'] ?? '';

$scs_scs_documentos = new scs_scs_documentos();





// Obtener los datos
$datosUno = $scs_scs_documentos->traer_datos_documentos_socio($id);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);