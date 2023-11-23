<?php
require '../model/documento.php';
$socio = $_POST['id'];

$responseDocumento = [];
$instancia = new Documento();
$responseDocumento = $instancia->obtener_documentos_faltantes($socio);
echo json_encode($responseDocumento);
