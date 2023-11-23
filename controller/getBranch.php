<?php
require '../model/socios.php';
$socios = new socios();
$datos = $socios->getBranch();
header('Content-Type: application/json');
echo json_encode($datos, JSON_UNESCAPED_UNICODE);
