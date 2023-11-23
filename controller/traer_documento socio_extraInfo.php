<?php
require '../model/scc_scs_documentos.php';

 // Acceder a los valores POST
 $usuarios = $_POST['usuarios'] ?? '';
 $scs_documentos= $_POST['scs_documentos'] ?? '';


$scs_scs_documentos = new scs_scs_documentos();





// Obtener los datos
// $datosUno = $scs_scs_documentos->traer_ultimo_flujo($usuarios, $scs_documentos);
$datosUno = $scs_scs_documentos->traer_estado_de_documento($usuarios, $scs_documentos);



// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);