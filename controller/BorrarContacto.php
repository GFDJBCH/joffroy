<?php
    require '../model/contactos.php';

    $id = $_GET["id"];
    

    $activo = "Borrado";


    $contactos= new contactos();

    $vlr_respuesta = $contactos->borrar($id,$activo);
    

    

    echo $vlr_respuesta;
?>