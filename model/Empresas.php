<?php
    class Empresas {
        private $connection;
        public function __construct() {
            require '../config/database.php';
            $this->connection = $mysqli;
        }
        public function obtener_empresas() {
            $query = "SELECT * FROM _Empresas;";
            $conexion = conecion_remota();
            $procedimiento = $conexion->query($query);
            $content = [];
            while ($row = $procedimiento->fetch_assoc()) {
                $content[] = [
                    'Id' => $row['Id'],
                    'Descripcion' => $row['Descripcion']
                ];
            }
            mysqli_close($conexion);
            return $content;
        }
    }
