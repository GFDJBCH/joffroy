<?php
require '../model/scc_scs_documentos.php';

$id = $_POST['id'] ?? '';
$scs_scs_documentos = new scs_scs_documentos();
$datosUno = $scs_scs_documentos->get_expiration();

header('Content-Type: application/json');
echo json_encode($datosUno);
