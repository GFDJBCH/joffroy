<?php
require '../model/socios.php';

// Acceder a los valores POST


$socios = new socios();





// Obtener los datos
$datosUno = $socios->traer_datos_sucursales();

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);