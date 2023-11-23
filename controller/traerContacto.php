<?php
require '../model/contactos.php';

 // Acceder a los valores POST
 $id = $_POST['id'] ?? '';

$contactos = new contactos();





// Obtener los datos
$datosUno = $contactos->select_contacto($id);

// Devolver la respuesta JSON
header('Content-Type: application/json');
echo json_encode($datosUno);