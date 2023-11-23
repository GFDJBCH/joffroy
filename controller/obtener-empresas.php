<?php
require '../model/Empresas.php';

$id = $_POST['id'] ?? '';
$instancia = new Empresas();
$datosUno = $instancia->obtener_empresas();

header('Content-Type: application/json');
echo json_encode($datosUno);
