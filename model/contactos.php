<?php
    class contactos {
        private $connection;
    
        public function __construct() {
            
                require '../config/database.php';
            
            $this->connection = $mysqli;
        }
        
        public function insert($socio, $nombre, $apellidos, $email, $contrasena, $telefono, $puesto, $activo){
            $query = "INSERT INTO `_EntidadContactos`(`socio`, `nombre`, `apellidos`, `email`, `contrasena`, `telefono`, `puesto`, `activo`) VALUES (" . $socio . ", '" . $nombre . "', '" . $apellidos . "', '" . $email . "', '" . $contrasena . "', '" . $telefono . "', '" . $puesto . "', '" . $activo . "')";
            $resultado = $this->connection->query($query);
            $vlr_respuesta = '';

            if($resultado == true){
                $vlr_respuesta = "true";
            }
            else{
                $vlr_respuesta = $resultado;
            }

            return $vlr_respuesta;
        }
        public function update($id, $nombre, $apellidos, $email, $contrasena, $telefono, $puesto){
            $query = "UPDATE `_EntidadContactos` SET `nombre`='".$nombre."',`apellidos`='".$apellidos."',`email`='".$email."',`contrasena`='".$contrasena."',`telefono`='".$telefono."',`puesto`='".$puesto."' WHERE `id`=" . $id;
            
            

            $resultado = $this->connection->query($query);
            $vlr_respuesta = '';

            if($resultado == true){
                $vlr_respuesta = "true";
            }
            else{
                $vlr_respuesta = $resultado;
            }

            return $vlr_respuesta;
        }

        public function update_activo($email, $socio, $activo) {
            $query = "UPDATE `_EntidadContactos` SET `socio`='".$socio."', `activo`='".$activo."' WHERE `email`='" . $email . "'";
            $resultado = $this->connection->query($query);
            $vlr_respuesta = '';
        
            if ($resultado == true) {
                $vlr_respuesta = "true";
            } else {
                $vlr_respuesta = $resultado;
            }
        
            return $vlr_respuesta;
        }

        public function borrar($id, $activo) {
            $query = "UPDATE `_EntidadContactos` SET `activo`='".$activo."' WHERE `id`='" . $id . "'";
            $resultado = $this->connection->query($query);
            $vlr_respuesta = '';
        
            if ($resultado == true) {
                $vlr_respuesta = "true";
            } else {
                $vlr_respuesta = $resultado;
            }
        
            return $vlr_respuesta;
        }

        public function select($id, $socio, $nombre, $apellidos, $email, $contrasena, $telefono, $puesto, $activo){
            $query = "SELECT * FROM `_EntidadContactos`" . $this->selectWhere($id, $socio, $nombre, $apellidos, $email, $contrasena, $telefono, $puesto, $activo);
            $resultado = $this->connection->query($query);

            return $resultado;
        }

        public function select_ultimo(){
            $query = "SELECT MAX(id) AS id FROM _EntidadContactos";
            $resultado = $this->connection->query($query);
    
            return $resultado;
        }

        public function select_correo($email){
            $query = "SELECT id AS id FROM _EntidadContactos WHERE `email`='" . $email . "'";
            $resultado = $this->connection->query($query);
    
            return $resultado;
        }

        public function select_contacto($id){
            $query = "SELECT c.* FROM _EntidadContactos c INNER JOIN _EntidadesSocios s ON c.socio = s.id WHERE s.id = ".$id.";";
            $resultado = $this->connection->query($query);
    
            // Obtener los datos
            $rowcount = 0;
            while ($row = $resultado->fetch_assoc()) {
                $rowcount++;
        
                $content = [
                    'id' => $row['id'],
                    'socio' => $row['socio'],
                    'nombre' => $row['nombre'],
                    'apellidos' => $row['apellidos'],
                    'email' => $row['email'],
                    'contrasena' => $row['contrasena'],
                    'telefono' => $row['telefono'],
                    'puesto' => $row['puesto'],
                    // Otros campos según sea necesario
                ];
        
                $datos[] = $content;
            }
        
            return $datos;
        }


        //REcuperar contraseña
        public function recuperar_contrasena($correo) {
        
            // Ejecutar la segunda consulta
            $query2 = "SELECT * FROM `_EntidadContactos` WHERE email = '". $correo ."'; ";
            $result2 = $this->connection->query($query2);
            $row2 = $result2->fetch_assoc();
            return $row2['contrasena'];
        }

        public function contacto_revision($email) {
            $datos = [];
        
            // Ejecución de la consulta
            $query = "SELECT * FROM _EntidadContactos WHERE _EntidadContactos.email = '$email' AND _EntidadContactos.activo = 'sin confirmar';";
        
            

            $resultado = $this->connection->query($query);
        
            // Obtener los datos
            while ($row = $resultado->fetch_assoc()) {
                $content = [
                    'id' => $row['id'],
                    'socio' => $row['socio'],
                    'nombre' => $row['nombre'],
                    'apellidos' => $row['apellidos'],
                    'email' => $row['email'],
                    'contrasena' => $row['contrasena'],
                    'telefono' => $row['telefono'],
                    'puesto' => $row['puesto'],
                    // Otros campos según sea necesario
                ];
        
                $datos[] = $content;
            }
        
            
        
            return $datos;
        }
        

        public function validarCorreo($correo) {

            // Ejecutar la segunda consulta
            $query2 = "SELECT count(id) as conteo FROM _EntidadContactos WHERE email = '". $correo ."'; ";
            $result2 = $this->connection->query($query2);
            $row2 = $result2->fetch_assoc();
            return (int)$row2['conteo'];
        }

        public function select_contacto_by_socio($socioId)
        {
            $query = "SELECT * FROM `_EntidadContactos` WHERE activo = 'confirmar' AND socio = " . $socioId . ";";
            $resultado = $this->connection->query($query);

            // Obtener los datos
            $datos = array();
            while ($row = $resultado->fetch_assoc()) {
                $content = [
                    'id' => $row['id'],
                    'socio' => $row['socio'],
                    'nombre' => $row['nombre'],
                    'apellidos' => $row['apellidos'],
                    'email' => $row['email'],
                    'contrasena' => $row['contrasena'],
                    'telefono' => $row['telefono'],
                    'puesto' => $row['puesto']
                ];

                $datos[] = $content;
            }

            $array = [
                "draw" => 1,
                "recordsTotal" => count($datos),
                "recordsFiltered" => count($datos),
                "data" => $datos
            ];

            return $array;
        }


        // Session
        public function sessionSave($contacto){
            session_start();
            $_SESSION['contacto'] = $contacto;
        }

        // Funciones
        function selectWhere($id, $socio, $nombre, $apellidos, $email, $contrasena, $telefono, $puesto, $activo){
            $where = "";

            if($id != '' || $socio != '' || $nombre != '' || $apellidos != '' || $email != '' || $contrasena != '' || $telefono != '' || $puesto != '' || $activo != ''){
                $where = " WHERE";
                if($id != ''){
                    $where .= " id = " . $id;
                }
                if($socio != ''){
                    $where .= $this->selectWhereAnd($where) . " socio = '" . $socio . "'";
                }
                if($nombre != ''){
                    $where .= $this->selectWhereAnd($where) . " nombre = '" . $nombre . "'";
                }
                if($apellidos != ''){
                    $where .= $this->selectWhereAnd($where) . " apellidos = '" . $apellidos . "'";
                }
                if($email != ''){
                    $where .= $this->selectWhereAnd($where) . " email = '" . $email . "'";
                }
                if($contrasena != ''){
                    $where .= $this->selectWhereAnd($where) . " contrasena = '" . $contrasena . "'";
                }
                if($telefono != ''){
                    $where .= $this->selectWhereAnd($where) . " telefono = '" . $telefono . "'";
                }
                if($puesto != ''){
                    $where .= $this->selectWhereAnd($where) . " puesto = '" . $puesto . "'";
                }
                if($activo != ''){
                    $where .= $this->selectWhereAnd($where) . " activo = '" . $activo . "'";
                }
            }

            return $where;
        }
        function selectWhereAnd($where){
            $and = "";

            if($where != " WHERE"){
                $and = " AND";
            }

            return $and;
        }
    }
