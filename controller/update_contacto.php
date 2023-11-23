<?php
    require '../model/contactos.php';

    $socio = $_GET["socio"];
    $nombre = $_GET["nombre"];
    $apellidos = $_GET["apellidos"];
    $email = $_GET["email"];
    $contrasena = $_GET["contrasena"];
    $telefono = $_GET["telefono"];
    $puesto = $_GET["puesto"];


    $contactos= new contactos();

    $vlr_respuesta = $contactos->update($socio, $nombre, $apellidos, $email, $contrasena, $telefono, $puesto);
    

    

    echo $vlr_respuesta;
?>