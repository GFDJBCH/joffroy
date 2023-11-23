<?php


require '../model/socios.php';
require '../model/contactos.php';

$socios= new socios();
$contactos= new contactos();


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nbrNegocio = empty($_POST['nbrNegocio']) ? null : $_POST['nbrNegocio'];
    $prsNombre = empty($_POST['prsNombre']) ? null : $_POST['prsNombre'];
    $prsApellidos = empty($_POST['prsApellidos']) ? null : $_POST['prsApellidos'];
    $compania = empty($_POST['compania']) ? null : $_POST['compania'];
    $rgmCapital = empty($_POST['rgmCapital']) ? null : $_POST['rgmCapital'];
    $nbrComercial = empty($_POST['nbrComercial']) ? null : $_POST['nbrComercial'];
    $correo = empty($_POST['correo']) ? null : $_POST['correo'];
    $telefono = empty($_POST['telefono']) ? null : $_POST['telefono'];
    $calle = empty($_POST['calle']) ? null : $_POST['calle'];
    $nmrInterno = empty($_POST['nmrInterno']) ? null : $_POST['nmrInterno'];
    $nmrExterno = empty($_POST['nmrExterno']) ? null : $_POST['nmrExterno'];
    $cdgPostal = empty($_POST['cdgPostal']) ? null : $_POST['cdgPostal'];
    $colonia = empty($_POST['colonia']) ? null : $_POST['colonia'];
    $pais = empty($_POST['pais']) ? null : $_POST['pais'];
    $estado = empty($_POST['estado']) ? null : $_POST['estado'];
    $ciudad = empty($_POST['ciudad']) ? null : $_POST['ciudad'];
    $tpProveedor = empty($_POST['tpProveedor']) ? null : $_POST['tpProveedor'];
    $taxId = empty($_POST['taxId']) ? null : $_POST['taxId'];
    $lnaNegocio = empty($_POST['lnaNegocio']) ? null : $_POST['lnaNegocio'];
    $correo_identificador = empty($_POST['correo_identificador']) ? null : $_POST['correo_identificador'];

    $resultado = $socios->insertSocio($nbrNegocio, $prsNombre, $prsApellidos, $compania, $rgmCapital, $nbrComercial, $correo, $telefono, $calle, $nmrInterno, $nmrExterno, $cdgPostal, $colonia, $pais, $estado, $ciudad, $tpProveedor, $taxId, $lnaNegocio);
    $dataRaw = $socios->select_ultimo();

    $row = $dataRaw->fetch_assoc();
    $documento_m = $row['id'];

    $resultadoUpdate = $contactos->update_activo($correo_identificador,$documento_m,"confirmar");
    $resultadoCorreo = $contactos->select_correo($correo_identificador);
    echo $documento_m;
}
