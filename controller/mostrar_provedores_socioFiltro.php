<?php
require '../model/socios.php';

// Acceder a los valores POST
$id = $_POST['id'] ?? null;
$pais = $_POST['pais'] ?? null;
$extenjero = $_POST['extenjero'] ?? null;
$activo = $_POST['activo'] ?? null;


$socios = new socios();





// Obtener los datos
$datosUno = $socios->traer_datos_socios_general_filtro($id, $extenjero, $pais, $activo);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);