<?php
require '../model/documento.php';

// Acceder a los valores POST
$socio = $_POST['socio'] ?? '';
$documento = $_POST['documento'] ?? '';
$documentoInstancia = new Documento();
$datosUno = $documentoInstancia->obtener_documento_socio($socio, $documento);
header('Content-Type: application/json');
echo json_encode($datosUno);
