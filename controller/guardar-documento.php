<?php
require '../model/documento.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$nombre_ingles = $_POST['nombre_ingles'];
$descripcion = $_POST['descripcion'];
$description_english = $_POST['description_english'];
$codigo = $_POST['codigo'];
$fisica = $_POST['fisica'];
$moral = $_POST['moral'];
$extranjero = $_POST['extranjero'];
$unidades_negocio = $_POST['unidades_negocio'];
$sucursales = $_POST['sucursales'];
$datosFlow = $_POST['datosFlow'];

$id = $id === 'null' ? null : $id;

$response = [];
$instancia = new Documento();
$datos = [
    "id" => $id,
    "nombre" => $nombre,
    "nombre_ingles" => $nombre_ingles,
    "descripcion" => $descripcion,
    "description_english" => $description_english,
    "codigo" => $codigo,
    "fisica" => $fisica,
    "moral" => $moral,
    "extranjero" => $extranjero,
    "unidades" => $unidades_negocio,
    "sucursales" => $sucursales,
    "flujos" => $datosFlow
];

$validarCodigo = $instancia->validar_codigo($datos);
if ($id) {
    if ($validarCodigo) {
        echo json_encode([
            "texto" => "El código ya esta en uso para otro documento.",
            "lastId" => null,
            "estado" => 400,
        ]);
        exit();
    } else {
        $response = $instancia->actualizar_documento($datos);
    }
} else {
    if ($validarCodigo) {
        echo json_encode([
            "texto" => "El código ya esta en uso para otro documento.",
            "lastId" => null,
            "estado" => 400,
        ]);
        exit();
    } else {
        $response = $instancia->registrar_documento($datos);
    }
}
if ($response) {
    $alerta = [
        "texto" => "Cambios realizados correctamente.",
        "lastId" => $id,
        "estado" => 200,
    ];
} else {
    $alerta = [
        "texto" => "Ningún cambio realizado.",
        "lastId" => null,
        "estado" => 400,
    ];
}

echo json_encode($alerta);
