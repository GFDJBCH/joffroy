<?php
require '../model/socios.php';

 // Acceder a los valores POST
 $id = $_POST['id'] ?? '';

$socios = new socios();

// Obtener los datos
$datosUno = $socios->traer_datos_socios($id);
// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);