<?php

require '../model/scc_scs_documentos.php';

$scs_scs_documentos = new scs_scs_documentos(); // Reemplaza "TuClaseDeConexion" por el nombre de tu clase de conexión

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $documento = $_POST['documento'];
    $usuario = $_POST['usuario'];
    $comentario = $_POST['comentario'];
    $estado = $_POST['estado'];

    $id = $_POST['id'];


    $resultado = $scs_scs_documentos->insert_dcm_flujo($documento, $usuario, $comentario, $estado,$id);

    if ($resultado === 'true') {
        echo "El flujo se ha insertado correctamente.";
    } else {
        echo "Error al insertar el flujo: " . $resultado;
    }
}

?>