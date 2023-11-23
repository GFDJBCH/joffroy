<?php

require '../model/socios.php';

$socios= new socios();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['socio'];
    $actividad = $_POST['actividad'];
    $tipoEmpresa = $_POST['tipoEmpresa'];
    $sectorEmpresa = $_POST['sectorEmpresa'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $pagina = $_POST['pagina'];
    $sectorCliente = $_POST['sectorCliente'];
    $operaciones = $_POST['operaciones'];
    $capacidad = $_POST['capacidad'];
    $numero = $_POST['numero'];
    $idioma = $_POST['idioma'];

    // Llamada a la función insertSocio con los valores cargados por POST
    $resultado = $socios->updateSocioExtra($id, $actividad, $tipoEmpresa, $sectorEmpresa, $correo, $telefono, $pagina, $sectorCliente, $operaciones, $capacidad, $numero, $idioma);

    echo $resultado;
}
