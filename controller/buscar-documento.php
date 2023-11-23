<?php
require '../model/documento.php';
$id = $_POST['id'];

$responseDocumento = [];
$instancia = new Documento();

$responseDocumento = $instancia->buscar_documento($id);
echo json_encode($responseDocumento);
