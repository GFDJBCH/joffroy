<?php
require '../model/scc_documentos.php';

// Acceder a las variables POST
$nombre = $_POST['nombre'] ?? '';
$documento_ingles = $_POST['documento_ingles'] ?? '';
$descripcion = $_POST['descripcion'] ?? '';
$descripcion_ingles = $_POST['description_english'] ?? '';
$codigo = $_POST['codigo'] ?? '';
$sucursal = $_POST['sucursal'] ?? [];

$negocio = $_POST['negocio'] ?? [];
$documento_m = $_POST['id'];

$fisica = $_POST['fisica'] === '1' ? 'true' : 'false';
$moral = $_POST['moral'] === '1' ? 'true' : 'false';
$extranjero = $_POST['extranjero'] === '1' ? 'true' : 'false';

$documentos = new documentos();
$validarCodigo = $documentos->validarCodigo($codigo, $documento_m);

if (!$validarCodigo) {
    $resultado = $documentos->update($documento_m, $nombre, $documento_ingles, $descripcion, $codigo, $descripcion_ingles, $fisica, $moral, $extranjero);
   if (count($negocio) > 0) {
       $negocio_ = implode(',', $negocio);
       $resultado = $documentos->update_business($documento_m, $negocio_);
   }
    $resultado = $documentos->delete_sucursal($documento_m);
   if (count($sucursal) > 0) {
       $miArray = $sucursal;
       foreach ($miArray as $valor) {
           $resultado = $documentos->insert_documento_sucursal($documento_m, $valor);
       }
   }

    if ($resultado === 'true') {
        echo json_encode([
            "id" => $documento_m,
            "mensaje" => 'Documento actualizado correctamente',
            "status" => true,
        ]);
    } else {
        echo json_encode([
            "id" => $documento_m,
            "mensaje" => 'Ocurrió un error al insertar el documento',
            "status" => false,
        ]);
    }
} else {
    echo json_encode([
        "id" => $documento_m,
        "mensaje" => 'El código del documento ya existe para otro documento.',
        "status" => false,
    ]);
}


