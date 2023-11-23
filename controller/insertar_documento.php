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

$fisica = $_POST['fisica'] === '1' ? 'true' : 'false';
$moral = $_POST['moral'] === '1' ? 'true' : 'false';
$extranjero = $_POST['extranjero'] === '1' ? 'true' : 'false';

$documentos = new documentos();

$validarCodigo = $documentos->validarCodigo($codigo);

if (!$validarCodigo) {
    $resultado = $documentos->insert($nombre, $documento_ingles, $descripcion, $descripcion_ingles, $codigo, $fisica, $moral, $extranjero);
    $resultado = $documentos->select_ultimo();
    $row = $resultado->fetch_assoc();
    $documento_m = $row['id'];
    if (count($negocio) > 0) {
        $negocio_ = implode(', ', $negocio);
        $resultado = $documentos->insert_business($documento_m, $negocio_);
    }
    if (count($sucursal) > 0) {
        $miArray = $sucursal;
        foreach ($miArray as $valor) {
            $resultado = $documentos->insert_documento_sucursal($documento_m, $valor);
        }
    }
    if ($resultado === 'true') {
        echo json_encode([
            "id" => $documento_m,
            "mensaje" => 'Documento registrado correctamente',
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
        "id" => null,
        "mensaje" => 'El código del documento ya existe para otro documento.',
        "status" => false,
    ]);
}
