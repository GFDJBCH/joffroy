<?php
class documentos{
    private $connection;
    public function __construct() {
        require '../config/database.php';
        $this->connection = $mysqli;
    }
    public function insert($nombre, $nombre_ingles, $descripcion, $descripcion_ingles, $codigo, $fisica, $moral, $extranjero)
    {
        $query = "INSERT INTO scc_documentos (nombre, nombre_ingles, descripcion, description_english, codigo, fisica, moral, extranjero) VALUES ('" . $nombre . "', '" . $nombre_ingles . "', '" . $descripcion . "', '" . $descripcion_ingles . "', '" . $codigo . "', " . $fisica . ", " . $moral . ", " . $extranjero . ");";
        $resultado = $this->connection->query($query);
        if ($resultado) {
            $vlr_respuesta = "true";
        } else {
            $vlr_respuesta = $resultado;
        }
        return $vlr_respuesta;
    }
    public function validarCodigo($codigo, $id = 0) {
        $query = "SELECT COUNT(id) AS conteo FROM scc_documentos WHERE codigo = '$codigo' AND id != $id;";
        $resultado = $this->connection->query($query);

        $fila = $resultado->fetch_assoc();
        return $fila['conteo'] > 0;
    }
    public function update_nombre($id, $nombre, $descripcion, $codigo){
        $query = "UPDATE `scc_documentos` SET `nombre` = '" . $nuevoNombre . "', `descripcion` = '" . $descripcion . "', `codigo` = '" . $codigo . "'  WHERE `id` = '" . $id . "'";
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
    public function insert_business($documento, $negocio){
        $query = "INSERT INTO `scc_documentos_business`(`documento`, `negocio`) VALUES ('" . $documento . "', '" . $negocio . "')";
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
    public function insert_documento_sucursal($documento, $id_sucursal){
        $query = "INSERT INTO `scc_documento_sucursal` (`documento`, `id_sucursal`) VALUES ('" . $documento . "', '" . $id_sucursal . "')";
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
    public function update_business($documento, $nuevoNegocio){

        $checkQuery = "SELECT * FROM scc_documentos_business WHERE documento = $documento";
        $checkResult = $this->connection->query($checkQuery);
        if ($checkResult && $checkResult->num_rows > 0) {
            // Actualizar el negocio existente
            $updateQuery = "UPDATE scc_documentos_business SET negocio = '$nuevoNegocio' WHERE documento = $documento";
            $updateResult = $this->connection->query($updateQuery);

            if ($updateResult) {
                $vlr_respuesta = "Registro actualizado exitosamente";
            } else {
                $vlr_respuesta = "Error al actualizar el registro: " . $this->connection->error;
            }
        } else {
            // Insertar un nuevo registro
            $insertQuery = "INSERT INTO scc_documentos_business (documento, negocio) VALUES ($documento, '$nuevoNegocio')";
            $insertResult = $this->connection->query($insertQuery);

            if ($insertResult) {
                $vlr_respuesta = "Nuevo registro insertado exitosamente";
            } else {
                $vlr_respuesta = "Error al insertar el nuevo registro: " . $this->connection->error;
            }
        }
    }
    public function delete_business($id) {
        $query = "DELETE FROM scc_documentos_business WHERE documento = $id";
        $resultado = $this->connection->query($query);

        if ($resultado === true) {
            return true;
        } else {
            return false;
        }
    }
    public function delete_sucursal($id){
        $query = "DELETE FROM scc_documento_sucursal WHERE `documento` = " . $id;
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
    public function insert_settings($documento, $tipo_prs, $expiracion, $expiracion_cnt, $notificacion, $notificacion_cnt) {
        $query = "INSERT INTO scc_documentos_settings (documento, tipo_prs, expiracion, expiracion_cnt, notificacion, notificacion_cnt) 
                  VALUES ('$documento', '$tipo_prs', '$expiracion', '$expiracion_cnt', '$notificacion', '$notificacion_cnt')";
        
        $resultado = $this->connection->query($query);
    
        if ($resultado === true) {
            return "true";
        } else {
            return $this->connection->error;
        }
    }
    public function delete_settings($documento) {
        $query = "DELETE FROM scc_documentos_settings WHERE documento = '$documento'";
        $resultado = $this->connection->query($query);
        
        if ($resultado === true) {
            return "true";
        } else {
            return $this->connection->error;
        }
    }
    public function insert_flujo($id, $flujo, $puesto) {
        $query = "INSERT INTO scc_documentos_flujo (documento, flujo, puesto) VALUES ('" . $id ."', '" . $flujo."', '" . $puesto."')";
        
        $resultado = $this->connection->query($query);
    
        if ($resultado === true) {
            return "true";
        } else {
            return $this->connection->error;
        }
    }
    public function delete_flujo($id) {
        $query = "DELETE FROM scc_documentos_flujo WHERE documento = '$id'";
        $resultado = $this->connection->query($query);
        
        if ($resultado === true) {
            return "true";
        } else {
            return $this->connection->error;
        }
    }
    public function update($id, $nombre, $nombre_ingles, $descripcion, $codigo,  $descripcion_ingles,  $fisica,  $moral,  $extranjero){
        $query = "UPDATE `scc_documentos` SET `nombre`='".$nombre."', `descripcion`='".$descripcion."', `description_english` = '".$descripcion_ingles."', `codigo`='".$codigo."',  `nombre_ingles` = '" . $nombre_ingles . "',  fisica = " . $fisica . ",  moral = " . $moral . ",  extranjero = " . $extranjero . " WHERE `id`=" . $id;
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
    public function delete($id) {
        $query = "UPDATE `scc_documentos` SET `fch_borrar` = NOW() WHERE `id` = " . $id;
        $resultado = $this->connection->query($query);
        $vlr_respuesta = '';
    
        if ($resultado === true) {
            $vlr_respuesta = "true";
        } else {
            $vlr_respuesta = $resultado;
        }
    
        return $vlr_respuesta;
    }
    public function select($id, $nombre, $descripcion, $codigo, $fch_creacion){
        $query = "SELECT * FROM `scc_documentos`" . $this->selectWhere($id, $nombre, $descripcion, $codigo, $fch_creacion);
        $resultado = $this->connection->query($query);

        return $resultado;
    }
    public function select_ultimo(){
        $query = "SELECT MAX(id) AS id FROM scc_documentos";
        $resultado = $this->connection->query($query);

        return $resultado;
    }
    public function Traer_datos($campo) {
        $datos = [];
    
        // Ejecución de la consulta
        $query = $campo;
    
       
        $procedimiento = $this->connection->query($query);
        
    
        // Obtener los datos
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;
    
            $content = [
                'id' => $row['id'],
                'nombre' => $row['nombre'],
                'descripcion' => $row['descripcion'],
                'codigo' => $row['codigo'],
                'provider_type' => $row['provider_type'],
                'unidad_ngc' => $row['unidad_ngc'],
                // 'fecha_crg' => $row['fecha_crg'],
                // 'fecha_acp' => $row['fecha_acp'],
                'tipo_prv' => $row['tipo_prv'],
                // 'expitacion_frc' => $row['expitacion_frc'],
                // 'expiracion_clc' => $row['expiracion_clc'],
                // 'notificacion_frc' => $row['notificacion_frc'],
                // 'notification_clc' => $row['notification_clc'],
                'flujo' => $row['flujo'],
                'puesto' => $row['puesto'],
                'expitacion' => $row['expitacion'],
                'notificacion' => $row['notificacion']
            ];
    
            $datos[] = $content;
        }
    
        
    
        return $datos;
    }
    public function traer_datos_extra($campo) {
        $datos = [];
    
        // Ejecución de la consulta
        $query = $campo;
    
        $procedimiento = $this->connection->query($query);
    
        // Obtener los datos
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;
    
            $content = [
                'id' => $row['id'],
                'nombre' => $row['nombre'],
                'nombre_ingles' => $row['nombre_ingles'],
                'descripcion' => $row['descripcion'],
                'description_english' => $row['description_english'],
                'codigo' => $row['codigo'],
                'fisica' => $row['fisica'] === '1',
                'fisica_periodo' => ($row['fisica_periodo'] === '' ? null : $row['fisica_periodo']),
                'fisica_notificacion' => $row['fisica_notificacion'],
                'moral' => $row['moral'] === '1',
                'moral_periodo' => ($row['moral_periodo'] === '' ? null : $row['moral_periodo']),
                'moral_notificacion' => $row['moral_notificacion'],
                'extranjero' => $row['extranjero'] === '1',
                'extranjero_periodo' => $row['extranjero_periodo'],
                'extranjero_notificacion' => $row['extranjero_notificacion'],
                'fch_creacion' => $row['fch_creacion'],
                'fch_borrar' => $row['fch_borrar'],
                'negocio' => $row['negocio']
            ];
    
            $datos[] = $content;
        }
    
        return $datos;
    }
    public function traer_datos_personalizados_setting($campo) {
        $datos = [];

        // Ejecución de la consulta
        $query = $campo;
    
        $procedimiento = $this->connection->query($query);
    
        // Obtener los datos
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;
    
            $content = [
                'tipo_prs' => $row['tipo_prs'],
                'expiracion' => $row['expiracion'],
                'expiracion_cnt' => $row['expiracion_cnt'],
                'notificacion' => $row['notificacion'],
                'notificacion_cnt' => $row['notificacion_cnt'],
            ];
    
            $datos[] = $content;
        }
    
        return $datos;
    }
    public function traer_datos_flujo($documentoId) {
        $datos = [];
    
        // Ejecución de la consulta
        $query = "SELECT * FROM scc_documentos INNER JOIN scc_documentos_flujo ON scc_documentos.id = scc_documentos_flujo.documento WHERE scc_documentos.id = " . $documentoId;
    
       
        $procedimiento = $this->connection->query($query);
    
        // Obtener los datos
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;
    
            $content = [
                
                'flujo' => $row['flujo'],
                'puesto' => $row['puesto'],
                // Otros campos del flujo según sea necesario
            ];
    
            $datos[] = $content;
        }
    
        return $datos;
    }
    public function traer_datos_sucursal($documentoId) {
        $datos = [];
    
        // Ejecución de la consulta
        $query = "SELECT * FROM scc_documento_sucursal WHERE documento = " . $documentoId;
    
        $procedimiento = $this->connection->query($query);
    
        // Obtener los datos
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;
    
            $content = [
                // Los campos de la tabla scc_documento_sucursal
                'id_sucursal' => $row['id_sucursal'],
                
                // Otros campos de la tabla según sea necesario
            ];
    
            $datos[] = $content;
        }
    
        return $datos;
    }
    public function calcular_porcentaje_documentos($usuarioId) {

        $query2 = "SELECT COUNT(*) AS total, s.tp_proveedor FROM scc_vw_documentos_c_sb AS d INNER JOIN ( SELECT MAX(fecha) AS max_fecha, scs_documentos FROM scc_scs_dcm_flujo GROUP BY scs_documentos ) AS f ON d.id = f.scs_documentos INNER JOIN scc_scs_dcm_flujo AS f2 ON f2.fecha = f.max_fecha AND f2.scs_documentos = f.scs_documentos INNER JOIN _EntidadesSocios AS s ON f2.usuarios = s.id WHERE f2.usuarios = " . $usuarioId;
        $result2 = $this->connection->query($query2);
        $row2 = $result2->fetch_assoc();
        $totalFlujo = $row2['total'];
        $tipoDeProveedor = $row2['tp_proveedor'];

        $query1 = "SELECT COUNT(*) AS TotalDeDocumentos FROM `scc_vw_documentos_c_sb` where scc_vw_documentos_c_sb.negocio = ".$tipoDeProveedor.";";
        $result1 = $this->connection->query($query1);
        $row1 = $result1->fetch_assoc();
        $totalDocumentos = $row1['TotalDeDocumentos'];

        // Calcular el porcentaje
        if ($totalDocumentos !== '0') {
            $porcentaje = ($totalFlujo / $totalDocumentos) * 100;
            $porcentajeSimple = number_format($porcentaje, 2, '.', '');
        } else {
            $porcentaje = 0;
            $porcentajeSimple = 0;
        }

        return $porcentajeSimple;
    }
    public function mostrar_documentos($negocioId = null) {
        $datos = [];
        $query = "SELECT * FROM scc_documentos where nombre is not null";
        $auxCriterio = '';
        if ((int)$negocioId === 1):
            $auxCriterio = ' and fisica is true';
        elseif ((int)$negocioId === 2):
            $auxCriterio = ' and moral is true';
        else:
            $auxCriterio = ' and extranjero is true';
        endif;
        if ($negocioId !== null) {
            $query .= $auxCriterio;
        }
        $procedimiento = $this->connection->query($query);
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;
            $content = [
                'id' => $row['id'],
                'nombre' => $row['nombre'],
                'nombre_ingles' => $row['nombre_ingles'],
                'descripcion' => $row['descripcion'],
                'codigo' => $row['codigo'],
                'fisica' => $row['fisica'],
                'fisica_periodo' => $row['fisica_periodo'],
                'moral' => $row['moral'],
                'moral_periodo' => $row['moral_periodo'],
                'extranjero' => $row['extranjero'],
                'extranjero_periodo' => $row['extranjero_periodo'],
                'unidades' => json_decode($row['unidades']),
                'sucursales' => json_decode($row['sucursales']),
                'flujos' => json_decode($row['flujos']),
                'fch_creacion' => $row['fch_creacion'],
                'fch_borrar' => $row['fch_borrar'],
            ];
            $datos[] = $content;
        }
        return $datos;
    }
    // Session
    public function sessionSave($contacto){
        session_start();
        $_SESSION['contacto'] = $contacto;
    }
    // Funciones
    function selectWhere($id, $nombre, $descripcion, $codigo, $fch_creacion){
        $where = "";

        if($id != '' || $nombre != '' || $descripcion != '' || $codigo != '' || $fch_creacion != ''){
            $where = " WHERE";
            if($id != ''){
                $where .= " id = " . $id;
            }
            if($nombre != ''){
                $where .= $this->selectWhereAnd($where) . " nombre = '" . $nombre . "'";
            }
            if($descripcion != ''){
                $where .= $this->selectWhereAnd($where) . " descripcion = '" . $descripcion . "'";
            }
            if($codigo != ''){
                $where .= $this->selectWhereAnd($where) . " codigo = '" . $codigo . "'";
            }
            if($fch_creacion != ''){
                $where .= $this->selectWhereAnd($where) . " fch_creacion = '" . $fch_creacion . "'";
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
