<?php
require '../model/documento.php';
$baja = $_POST['baja'];
$fisica = $_POST['fisica'];
$moral = $_POST['moral'];
$extranjero = $_POST['extranjero'];

$responseDocumento = [];
$instancia = new Documento();

$baja = $baja === 'true' ? 'NOT NULL' : 'NULL';

$data = [
    "baja" => $baja,
    "fisica" => $fisica,
    "moral" => $moral,
    "extranjero" => $extranjero,
];

$filtro = "(fisica IS $fisica OR moral IS $moral OR extranjero IS $extranjero) AND fch_borrar IS $baja";

$responseDocumento = $instancia->buscar_documentos($filtro);
echo json_encode($responseDocumento);
