<?php
    require '../model/scc_scs_documentos.php';

    // Acceder a los valores POST
    $id = $_POST['id'] ?? '';
    $socio = $_POST['socio'] ?? '';

    $scs_scs_documentos = new scs_scs_documentos();
    $datos = $scs_scs_documentos->traer_historial_socios_documentos($id, $socio);

    // Devolver la respuesta JSON
    header('Content-Type: application/json');
    echo json_encode($datos);
