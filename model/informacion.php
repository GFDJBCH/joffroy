<?php
    class Informacion {
        private $connection;
        public function __construct() {
            require '../config/database.php';
            $this->connection = $mysqli;
        }
        public function validar_correo($datos) {
            $query = "SELECT count(id) as count FROM _EntidadContactos WHERE email = '".$datos['email']."' AND id != ".(is_null($datos['id'])? 0 : $datos['id']).";";
            $response = $this->connection->query($query);
            $raw = $response->fetch_assoc();
            if ((int)$raw['count'] != 0) {
                return true;
            } else {
                return false;
            }
        }
    }
