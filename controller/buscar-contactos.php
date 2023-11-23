<?php
require '../model/contacto.php';
$socio = $_POST['socio'];

$responseContacto = [];
$instancia = new Contacto();

$responseContacto = $instancia->buscar_contactos($socio);
echo json_encode($responseContacto);
