<?php
    require '../model/scc_documentos.php';

    // Acceder a los valores POST
    $documento = $_POST['documento'] ?? '';
    $tipo_prs = $_POST['tipo_prs'] ?? '';
    $expiracion = $_POST['expiracion'] ?? '';
    $expiracion_cnt = $_POST['expiracion_cnt'] ?? '';
    $notificacion = $_POST['notificacion'] ?? '';
    $notificacion_cnt = $_POST['notificacion_cnt'] ?? '';

    // Crear una instancia del modelo
    $documentos = new documentos();


    // Llamar a la función insert_settings
    $resultado = $documentos->insert_settings($documento, $tipo_prs, $expiracion, $expiracion_cnt, $notificacion, $notificacion_cnt);

    // Manejar el resultado según tus necesidades
    if ($resultado === 'true') {
        echo "Los datos se insertaron correctamente.";
    } else {
        echo "Ocurrió un error al insertar los datos: " . $resultado;
    }
    
?>
