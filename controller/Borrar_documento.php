<?php
    require '../model/scc_documentos.php';

    

    // Crear una instancia de la clase documentos
    $documentos = new documentos();

    $documento_m = $_POST['id'];

    // Llamar a la función insert
    $resultado = $documentos->delete($documento_m);

    


    // Manejar el resultado según tus necesidades
    if ($resultado === 'true') {
        echo $documento_m;
    } else {
        echo "Ocurrió un error al borrar el documento: " . $resultado;
    }

?>