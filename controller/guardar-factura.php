<?php
require '../model/socios.php';


if (isset($_POST['id'])) {
    $id = $_POST['id'];
    $statusi = $_POST['statusi'];
    $statuse = $_POST['statuse'];
    $purchase = $_POST['purchase'];
    $justification = $_POST['justification'];
} else {
    $id = null;
    $statusi = "pending";
    $statuse = "pendiente";
    $purchase = null;
    $justification = null;
}

$partner = $_POST['partner'];
$invoice = $_POST['invoice'];
$date = $_POST['date'];
$expire = $_POST['expire'];
$amount = $_POST['amount'];
$currency = $_POST['currency'];
$payments = $_POST['payments'];
$expense = $_POST['expense'];
$company = $_POST['company'];
$branch = $_POST['branch'];
$concepts = $_POST['concepts'];
$notes = $_POST['notes'];
$withholding = $_POST['withholding'];
$globaltax = $_POST['globaltax'];

$response = [];
$instancia = new socios();
$datos = [
    "id" => $id,
    "partner" => $partner,
    "invoice" => $invoice,
    "date" => $date,
    "expire" => $expire !== '' ? "'".$expire."'" : 'null',
    "amount" => $amount,
    "currency" => $currency,
    "payments" => $payments ? $payments : 'null',
    "expense" => $expense !== '' ? "'".$expense."'" : 'null',
    "company" => $company ? $company : 'null',
    "branch" => $branch ? $branch : 'null',
    "concepts" => $concepts,
    "notes" => $notes !== '' ? "'".$notes."'" : 'null',
    "withholding" => $withholding ? $withholding : 'null',
    "globaltax" => $globaltax ? $globaltax : 'null',
    "purchase" => $purchase,
    "justification" => $justification,
    "statusi" => $statusi,
    "statuse" => $statuse,
];

if (isset($_FILES['billPdf']) && $_FILES['billPdf']['error'] === UPLOAD_ERR_OK) {
    $directorioDestino = '../documentos/' . $partner . '/facturas/pdf/';
    if (!is_dir($directorioDestino)) {
        mkdir($directorioDestino, 0777, true);
    }
    $nombreArchivoOriginal = $_FILES['billPdf']['name'];
    $nombreAleatorio = bin2hex(random_bytes(8));
    $extension = pathinfo($nombreArchivoOriginal, PATHINFO_EXTENSION);
    $rutaCompleta = $directorioDestino . $nombreAleatorio;
    $rutaCompletaConExtension = $rutaCompleta . '.' . $extension;
    move_uploaded_file($_FILES['billPdf']['tmp_name'], $rutaCompletaConExtension);
}
if (isset($_FILES['billXml']) && $_FILES['billXml']['error'] === UPLOAD_ERR_OK) {
    $directorioDestino = '../documentos/' . $partner . '/facturas/xml/';
    if (!is_dir($directorioDestino)) {
        mkdir($directorioDestino, 0777, true);
    }
    $nombreArchivoOriginal = $_FILES['billXml']['name'];
    $nombreAleatorio = bin2hex(random_bytes(8));
    $extension = pathinfo($nombreArchivoOriginal, PATHINFO_EXTENSION);
    $rutaCompleta = $directorioDestino . $nombreAleatorio;
    $rutaCompletaConExtension = $rutaCompleta . '.' . $extension;
    move_uploaded_file($_FILES['billXml']['tmp_name'], $rutaCompletaConExtension);
}
if (isset($_FILES['billOther']) && $_FILES['billOther']['error'] === UPLOAD_ERR_OK) {
    $directorioDestino = '../documentos/' . $partner . '/facturas/other/';
    if (!is_dir($directorioDestino)) {
        mkdir($directorioDestino, 0777, true);
    }
    $nombreArchivoOriginal = $_FILES['billOther']['name'];
    $nombreAleatorio = bin2hex(random_bytes(8));
    $extension = pathinfo($nombreArchivoOriginal, PATHINFO_EXTENSION);
    $rutaCompleta = $directorioDestino . $nombreAleatorio;
    $rutaCompletaConExtension = $rutaCompleta . '.' . $extension;
    move_uploaded_file($_FILES['billOther']['tmp_name'], $rutaCompletaConExtension);
}

if ($id) {
    $response = $instancia->actualizar_factura($datos);
} else {
    $response = $instancia->registrar_factura($datos);
}
if ($response) {
    $alerta = [
        "texto" => "Information saved correctly.",
        "texto_ingles" => "Information saved correctly.",
        "lastId" => $id,
        "estado" => 200,
    ];
} else {
    $alerta = [
        "texto" => "Ningún cambio realizado.",
        "texto_ingles" => "No changes made.",
        "lastId" => null,
        "estado" => 400,
    ];
}

echo json_encode($alerta);
