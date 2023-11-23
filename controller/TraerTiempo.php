<?php
    require '../model/linea_tiempo.php';

    $id = $_POST['id'] ?? '';
    $nombre = $_POST['nombre'] ?? '';
    $name = $_POST['name'] ?? '';
    $tiempo = $_POST['tiempo'] ?? '';

    $Tiempo_ = new tiempo();


    
    $resultado = $Tiempo_->select($id,$nombre,$name,$tiempo);

    // Obtener los datos en un array asociativo
    $data = [];
    while ($row = $resultado->fetch_assoc()) {
        $data[] = $row;
    }

    // Convertir a JSON
    $jsonResult = json_encode($data);

    // Devolver la respuesta JSON
    header('Content-Type: application/json');
    echo $jsonResult;

?>