<?php
    require '../model/scc_documentos.php';

    // Acceder a los valores POST
    $id = $_POST['id'] ?? '';
    $flujo = $_POST['flujo'] ?? '';
    $puesto = $_POST['puesto'] ?? '';

    // Crear una instancia del modelo
    $documentos = new documentos();

    // Llamar a la función insert_settings
    $resultado = $documentos->insert_flujo($id, $flujo, $puesto);

    // Manejar el resultado según tus necesidades
    if ($resultado === 'true') {
        echo "Los datos se insertaron correctamente.";
    } else {
        echo "Ocurrió un error al insertar los datos: " . $resultado;
    }
    
?>
