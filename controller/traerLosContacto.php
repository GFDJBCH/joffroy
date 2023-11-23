<?php
    require '../model/contactos.php';
    $id = $_POST["id"];

    $contactos = new contactos();
    $datos = $contactos->select_contacto_by_socio($id);
    header('Content-Type: application/json');
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
