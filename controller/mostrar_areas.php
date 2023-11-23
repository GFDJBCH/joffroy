<?php
require '../model/socios.php';

// Acceder a los valores POST


$socios = new socios();


$idSucursal = $_POST["idSucursal"];


// Obtener los datos
$datosUno = $socios->traer_datos_almacenes_yardas();

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);
