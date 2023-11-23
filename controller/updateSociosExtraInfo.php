<?php

require '../model/socios.php'; // Asegúrate de ajustar la ruta al archivo adecuadamente

// Acceder a los valores POST
$id = $_POST['id'];
$tipoOperacion = $_POST['tipoOperacion'];
$confianza = $_POST['confianza'];
$nacionalidad = $_POST['nacionalidad'];
$diasCredito = $_POST['diasCredito'];
$limiteCredito = $_POST['limiteCredito'];
$sucursales = isset($_POST['sucursales']) ? $_POST['sucursales'] : null;
$areas = isset($_POST['areas']) ? $_POST['areas'] : null;
$justificacion = $_POST['justificacion'];
$seguridad = $_POST['seguridad'];
$iso = $_POST['iso'];

//Quitarlo de array
if ($sucursales) {
    $sucursales = implode(',', $sucursales);
}
if ($areas) {
    $areas = implode(',', $areas);
}
// $areas = implode(',', $areas);

// Crear una instancia de la clase documentos
$socios = new socios();

// Llamar a la función update_extra_info
$resultado = $socios->update_extra_info($id, $tipoOperacion, $confianza, $nacionalidad, $diasCredito, $limiteCredito, $sucursales, $areas, $justificacion, $seguridad, $iso);

// Manejar el resultado según tus necesidades
if ($resultado === 'true') {
    echo "La actualización se realizó correctamente";
} else {
    echo "Ocurrió un error al actualizar la información: " . $resultado;
}
