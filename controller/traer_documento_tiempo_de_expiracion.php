<?php
require '../model/scc_scs_documentos.php';

 // Acceder a los valores POST
 $usuario = $_POST['usuario'] ?? '';

$scs_scs_documentos = new scs_scs_documentos();





// Obtener los datos
$datosUno = $scs_scs_documentos->select_documentos_notificaciones_by_usuario($usuario);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);
