<?php
    class usuarios{
        private $connection;
        public function __construct() {
            require '../config/database.php';
            $this->connection = $mysqli;
        }
        public function selectView($id, $nombre, $apellidos, $correo, $contrasena, $id_puesto, $puesto, $fch_creacion, $estado){
            $query = "SELECT * FROM `scc_vw_jff_usuarios`" . $this->selectWhere($id, $nombre, $apellidos, $correo, $contrasena, $id_puesto, $puesto, $fch_creacion, $estado);
            $resultado = $this->connection->query($query);

            return $resultado;
        }
        public function selectView_socio($correo, $contrasena){
            $query = "SELECT * FROM `_EntidadContactos` WHERE email= '" . $correo ."' AND contrasena= '" . $contrasena ."' AND activo = 'confirmar';" ;
            $resultado = $this->connection->query($query);
            return $resultado;
        }
        function selectWhere($id, $nombre, $apellidos, $correo, $contrasena, $id_puesto, $puesto, $fch_creacion, $estado){
            $where = "";

            if($id != '' || $nombre != '' || $apellidos != '' || $correo != '' || $contrasena != '' || $puesto != '' || $fch_creacion != '' || $estado != ''){
                $where = " WHERE";
                if($id != ''){
                    $where .= " id = " . $id;
                }
                if($nombre != ''){
                    $where .= $this->selectWhereAnd($where) . " nombre = '" . $nombre . "'";
                }
                if($apellidos != ''){
                    $where .= $this->selectWhereAnd($where) . " apellidos = '" . $apellidos . "'";
                }
                if($correo != ''){
                    $where .= $this->selectWhereAnd($where) . " correo = '" . $correo . "'";
                }
                if($contrasena != ''){
                    $where .= $this->selectWhereAnd($where) . " contrasena = '" . $contrasena . "'";
                }
                if($puesto != ''){
                    $where .= $this->selectWhereAnd($where) . " puesto = '" . $puesto . "'";
                }
                if($fch_creacion != ''){
                    $where .= $this->selectWhereAnd($where) . " fch_creacion = '" . $fch_creacion . "'";
                }
                if($estado != ''){
                    $where .= $this->selectWhereAnd($where) . " estado = '" . $estado . "'";
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