<?php

require '../model/socios.php';

$socios= new socios();


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nbrNegocio = $_POST['nbrNegocio'];
    $prsNombre = $_POST['prsNombre'];
    $prsApellidos = $_POST['prsApellidos'];
    $compania = $_POST['compania'];
    $rgmCapital = $_POST['rgmCapital'];
    $nbrComercial = $_POST['nbrComercial'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $calle = $_POST['calle'];
    $nmrInterno = $_POST['nmrInterno'];
    $nmrExterno = $_POST['nmrExterno'];
    $cdgPostal = $_POST['cdgPostal'];
    $colonia = $_POST['colonia'];
    $pais = $_POST['pais'];
    $estado = $_POST['estado'];
    $ciudad = $_POST['ciudad'];
    $tpProveedor = $_POST['tpProveedor'];
    $taxId = $_POST['taxId'];
    
    $id = $_POST['id'];


    // Llamada a la función insertSocio con los valores cargados por POST
    $resultado = $socios->updateSocio($id, $nbrNegocio, $prsNombre, $prsApellidos, $compania, $rgmCapital, $nbrComercial, $correo, $telefono, $calle, $nmrInterno, $nmrExterno, $cdgPostal, $colonia, $pais, $estado, $ciudad, $tpProveedor, $taxId);

    echo $resultado;
}
