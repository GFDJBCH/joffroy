<?php
require '../model/scc_scs_documentos.php';

$scs_scs_documentos = new scs_scs_documentos();
$datosUno = $scs_scs_documentos->get_documentos_socios_pendientes();

header('Content-Type: application/json');
echo json_encode($datosUno);
