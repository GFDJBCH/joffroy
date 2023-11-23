<?php
require '../model/socios.php';

$responseContacto = [];
$instancia = new socios();

if (isset($_POST['socio'])) {
    $socio = $_POST['socio'];
    $responseContacto = $instancia->buscar_facturas($socio);
} else {
    $responseContacto = $instancia->buscar_facturas_todas();
}
echo json_encode($responseContacto);
