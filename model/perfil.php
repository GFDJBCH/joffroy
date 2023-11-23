<?php
    class Perfil {
        private $connection;
        public function __construct() {
            require '../config/database.php';
            $this->connection = $mysqli;
        }

        public function buscar_usuario($id)
        {
            $resultado = $this->connection->query("SELECT id, trim(nombre) as nombre, trim(apellidos) as apellidos, email, telefono FROM _EntidadContactos WHERE id = $id;");
            $content = [];
            while ($row = $resultado->fetch_assoc()) {
                $content[] = [
                    'id' => $row['id'],
                    'nombre' => $row['nombre'] . " " . $row['apellidos'],
                    'correo' => $row['email'],
                    'telefono' => $row['telefono'],
                    'usuario' => $row['email']
                ];
            }
            return $content;
        }
        public function buscar_usuario_joffroy($id)
        {
            $connection = conecion_remota();
            $resultado = $connection->query("SELECT * FROM Users WHERE id = '$id';");
            $content = [];
            while ($row = $resultado->fetch_assoc()) {
                $content[] = [
                    'id' => $row['id'],
                    'nombre' => $row['Name'],
                    'correo' => $row['Email'],
                    'telefono' => $row['PhoneNumber'],
                    'usuario' => $row['UserName']
                ];
            }
            return $content;
        }
    }
