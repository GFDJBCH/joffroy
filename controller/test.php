<?php
// Datos de conexión a la base de datos
$servername = "149.56.140.45"; // Cambia esto al nombre de tu servidor MySQL
$username = "joffroy";     // Cambia esto a tu nombre de usuario de MySQL
$password = "Mffp139_7";      // Cambia esto a tu contraseña de MySQL
$database = "joffroy_socios"; // Cambia esto al nombre de tu base de datos

// Crear una conexión a la base de datos
$conn = new mysqli($servername, $username, $password, $database);

// Verificar si la conexión fue exitosa
if ($conn->connect_error) {
    die("Error de conexión a la base de datos: " . $conn->connect_error);
} else {
    echo "Conexión exitosa a la base de datos!";

    // Aquí puedes realizar operaciones en la base de datos, como consultas SQL.

    // Finalmente, cierra la conexión cuando hayas terminado de usarla.
    $conn->close();
}