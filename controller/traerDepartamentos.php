<?php
require '../model/socios.php';
$socios = new socios();
$datos = $socios->traer_datos_departamentos();
header('Content-Type: application/json');
echo json_encode($datos, JSON_UNESCAPED_UNICODE);
