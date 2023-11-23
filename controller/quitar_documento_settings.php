<?php
    require '../model/scc_documentos.php';

    // Acceder a los valores POST
    $documento = $_POST['documento'] ?? '';
    

    // Crear una instancia del modelo
    $documentos = new documentos();

    //Borrarpor si se actualiza
    $resultado = $documentos->delete_settings($documento);

    $resultado = $documentos->delete_flujo($documento);


    // Manejar el resultado según tus necesidades
    if ($resultado === 'true') {
        echo "Los datos se insertaron correctamente.";
    } else {
        echo "Ocurrió un error al insertar los datos: " . $resultado;
    }
    
?>
