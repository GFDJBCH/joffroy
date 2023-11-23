<?php
require '../model/socios.php';
$socios = new socios();
// Obtener los datos
$datosUno = $socios->traer_datos_socios_simple();
// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);