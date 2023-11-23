<?php
require '../model/scc_scs_documentos.php';

$usuario = $_POST['usuario'] ?? '';
$scs_scs_documentos = new scs_scs_documentos();
$datosUno = $scs_scs_documentos->traer_datos_documentos_socio($usuario);
header('Content-Type: application/json');
echo json_encode($datosUno);