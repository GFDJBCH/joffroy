<?php
class tiempo{
    private $connection;

    public function __construct() {
        require '../config/database.php';
        $this->connection = $mysqli;
    }

    public function insert($nombre, $name, $tiempo){
        $query = "INSERT INTO `scc_tiempos`(`nombre`, `name`, `tiempo`) VALUES ('" . $nombre . "', '" . $name . "', '" . $tiempo . "')";
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

    public function update($id, $nombre, $name, $tiempo){
        $query = "UPDATE `scc_tiempos` SET `nombre`='".$nombre."',`name`='".$name."',`tiempo`='".$tiempo."' WHERE `id`=" . $id;
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

    public function select($id, $nombre, $name, $tiempo){
        $query = "SELECT * FROM `scc_tiempos`" . $this->selectWhere($id, $nombre, $name, $tiempo);
        $resultado = $this->connection->query($query);

        return $resultado;
    }

    // Session
    public function sessionSave($contacto){
        session_start();
        $_SESSION['contacto'] = $contacto;
    }

    // Funciones
    function selectWhere($id, $nombre, $name, $tiempo){
        $where = "";

        if($id != '' || $nombre != '' || $name != '' || $tiempo != ''){
            $where = " WHERE";
            if($id != ''){
                $where .= " id = " . $id;
            }
            if($nombre != ''){
                $where .= $this->selectWhereAnd($where) . " nombre = '" . $nombre . "'";
            }
            if($name != ''){
                $where .= $this->selectWhereAnd($where) . " name = '" . $name . "'";
            }
            if($tiempo != ''){
                $where .= $this->selectWhereAnd($where) . " tiempo = '" . $tiempo . "'";
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
?>

