<?php
require '../model/scc_scs_documentos.php';
$id = $_POST["id"];
//$nombreDocumento = $_GET["indicador"];
$id_documento = $_POST["id_documento"];
$emision = $_POST["emision"] ?? null;
$vence = $_POST["vence"] ?? null;
$contenidoPDF = $_FILES['archivo']['tmp_name'];
$scs_scs_documentos = new scs_scs_documentos();
if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
    $directorioDestino = '../documentos/' . $id . '/archivo/';
    if (!is_dir($directorioDestino)) {
        mkdir($directorioDestino, 0777, true);
    }
    $nombreArchivoOriginal = $_FILES['archivo']['name'];
    $nombreAleatorio = bin2hex(random_bytes(8));
    $extension = pathinfo($nombreArchivoOriginal, PATHINFO_EXTENSION);
    $rutaCompleta = $directorioDestino . $nombreAleatorio;
    $rutaCompletaConExtension = $rutaCompleta . '.' . $extension;
    if (move_uploaded_file($_FILES['archivo']['tmp_name'], $rutaCompletaConExtension)) {

        $registro_id = $scs_scs_documentos->insert($id, $id_documento, "", $emision, $vence, $rutaCompletaConExtension, "revision");
        $comentario = 'System: A document with the status "Pending" has been registered.';
        $historial_id = $scs_scs_documentos->insertHistorialDocumento($id, $id_documento, $comentario, 'Pendiente', $rutaCompletaConExtension);

        echo json_encode(array("status" => "success", "message" => "Documento archivado correctamente."));
    } else {
        echo json_encode(array("status" => "error", "message" => "Error al guardar el archivo."));
    }
} else {
    echo json_encode(array("status" => "error", "message" => "No se ha seleccionado un archivo o hubo un error en la carga."));
}