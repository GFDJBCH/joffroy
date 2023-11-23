<?php
class scs_scs_documentos{
    private $connection;
    public function __construct() {
        require '../config/database.php';
        $this->connection = $mysqli;
    }
    public function insert($socio, $documento, $nombre, $emision, $vigencia, $url, $estado) {
        $query = "INSERT INTO `_EntidadSocioDocumentos` (`socio`, `documento`, `nombre`, `emision`, `vigencia`, `url`, `estado`)
              VALUES (?, ?, ?, ?, ?, ?, ?)";

        // Preparar la consulta con parámetros
        $stmt = $this->connection->prepare($query);

        // Asociar los valores a los parámetros de la consulta
        $stmt->bind_param("sssssss", $socio, $documento, $nombre, $emision, $vigencia, $url, $estado);

        // Ejecutar la consulta
        $resultado = $stmt->execute();

        // Obtener el ID del último registro insertado
        $inserted_id = $this->connection->insert_id;

        // Cerrar la declaración
        $stmt->close();

        // Verificar el resultado
        if ($resultado) {
            return $inserted_id; // Devolver el ID del registro insertado
        } else {
            return false;
        }
    }
    public function insertHistorialDocumento($socio, $documento, $comentario, $estado, $url) {
        $query = "INSERT INTO historial_documento (socio, documento, usuario, comentario, estado, url)
              VALUES (?, ?, null, ?, ?, ?)";

        // Preparar la consulta con parámetros
        $stmt = $this->connection->prepare($query);

        // Asociar los valores a los parámetros de la consulta
        $stmt->bind_param("sssss", $socio, $documento, $comentario, $estado, $url);

        // Ejecutar la consulta
        $resultado = $stmt->execute();

        // Obtener el ID del último registro insertado
        $inserted_id = $this->connection->insert_id;

        // Cerrar la declaración
        $stmt->close();

        // Verificar el resultado
        if ($resultado) {
            return $inserted_id; // Devolver el ID del registro insertado
        } else {
            return false;
        }
    }

    public function update($id, $nombre, $descripcion, $codigo){
        $query = "UPDATE `scc_documentos` SET `nombre`='".$nombre."', `descripcion`='".$descripcion."', `codigo`='".$codigo."' WHERE `id`=" . $id;
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
    public function select($id, $nombre, $descripcion, $codigo, $fch_creacion){
        $query = "SELECT * FROM `scc_documentos`" . $this->selectWhere($id, $nombre, $descripcion, $codigo, $fch_creacion);
        $resultado = $this->connection->query($query);

        return $resultado;
    }

    public function traer_datos_documentos_socio($socioId) {
        $datos = [];
        $query = "SELECT _EntidadSocioDocumentos.*, scc_documentos.nombre AS nombreDocumento, scc_documentos.nombre_ingles AS nombreInglesDocumento, (SELECT scc_scs_dcm_flujo.comentario AS comentario_ FROM scc_scs_dcm_flujo WHERE scc_scs_dcm_flujo.id = (SELECT MAX(scc_scs_dcm_flujo.id) AS id_ FROM scc_scs_dcm_flujo WHERE scc_scs_dcm_flujo.usuarios = _EntidadSocioDocumentos.socio AND scc_scs_dcm_flujo.scs_documentos = _EntidadSocioDocumentos.documento) ) AS comentario
        FROM _EntidadSocioDocumentos
        INNER JOIN scc_documentos ON _EntidadSocioDocumentos.documento = scc_documentos.id
        INNER JOIN (
          SELECT MAX(id) AS ultimo_id, documento
          FROM _EntidadSocioDocumentos
          WHERE socio = ". $socioId ."
          GROUP BY documento
        ) AS ultimos_docs ON _EntidadSocioDocumentos.id = ultimos_docs.ultimo_id
        GROUP BY _EntidadSocioDocumentos.documento;";
        $procedimiento = $this->connection->query($query);
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;
            $content = [
                'id' => $row['id'],
                'socio' => $row['socio'],
                'documento' => $row['documento'],
                'nombre' => $row['nombre'],
                'nombreInglesDocumento' => $row['nombreInglesDocumento'],
                'url' => $row['url'],
                'estado' => $row['estado'],
                'nombreDocumento' => $row['nombreDocumento'],
                'comentario' => $row['comentario'],
                'fch_creacion' => $row['fch_creacion'],
            ];
            $datos[] = $content;
        }
        return $datos;
    }
    public function insert_dcm_flujo($documento, $usuario, $comentario, $estado, $scc_scs_documentos) {
        $accion = "";
        $auxEstado = "";
        if ($estado == "Accept") {
            $accion = "Document Acceptance";
            $auxEstado = 'Aceptado';
        } else {
            $accion = "Document rejection";
            $auxEstado = 'Rechazado';
        }
        $query = "INSERT INTO historial_documento (socio, documento, usuario, comentario, estado) VALUES ($usuario, $documento, $usuario, '$comentario', '$auxEstado');";
        $this->connection->query($query);
        $query = "UPDATE `_EntidadSocioDocumentos` SET `estado` = '$estado' WHERE id = ".$scc_scs_documentos."; ";
        echo $query;
        $resultado = $this->connection->query($query);
        if ($resultado === true) {
            return "true";
        } else {
            return $this->connection->error;
        }
    }
    public function get_documentos()
    {
        $socio = $_POST["id"];
        $response = [];
        $documentos = [];
        $socioDocumentos = [];

        $queryDocumentos = 'SELECT * FROM scc_documentos where fch_borrar is null order by fch_creacion desc;';
        $documentosRaw = $this->connection->query($queryDocumentos);
        while ($row = $documentosRaw->fetch_assoc()) {
            $contentRaw = [
                'id' => $row['id'],
                'nombre' => $row['nombre'],
                'nombre_ingles' => $row['nombre_ingles'],
                'descripcion' => $row['descripcion'],
                'description_english' => $row['description_english'],
                'codigo' => $row['codigo'],
                'fisica' => $row['fisica'],
                'fisica_periodo' => $row['fisica_periodo'],
                'fisica_notificacion' => $row['fisica_notificacion'],
                'moral' => $row['moral'],
                'moral_periodo' => $row['moral_periodo'],
                'moral_notificacion' => $row['moral_notificacion'],
                'extranjero' => $row['extranjero'],
                'extranjero_periodo' => $row['extranjero_periodo'],
                'extranjero_notificacion' => $row['extranjero_notificacion'],
                'fch_creacion' => $row['fch_creacion'],
                'fch_borrar' => $row['fch_borrar'],
            ];
            $documentos[] = $contentRaw;
        }

        $querySocioDocumento = "SELECT * FROM _EntidadSocioDocumentos WHERE socio = $socio;";
        $socioDocumentosRaw = $this->connection->query($querySocioDocumento);
        while ($row = $socioDocumentosRaw->fetch_assoc()) {
            $contentSocioDocumento = [
                'id' => $row['id'],
                'socio' => $row['socio'],
                'documento' => $row['documento'],
                'nombre' => $row['nombre'],
                'url' => str_replace("../", "", $row['url']),
                'fch_creacion' => $row['fch_creacion'],
                'estado' => $row['estado']
            ];
            $socioDocumentos[] = $contentSocioDocumento;
        }

        $response[] = [
            "documentos" => $documentos,
            "socioDocumentos" => $socioDocumentos
        ];
        return $response[0];
    }
    public function get_documentos_socios_pendientes()
    {
        $response = [];

        $queryDocumentos = "SELECT * FROM vwsociosdocumentos where estado = 'revision' order by fch_creacion desc;";
        $documentosRaw = $this->connection->query($queryDocumentos);
        while ($row = $documentosRaw->fetch_assoc()) {
            $response[] = [
                'id' => $row['id'],
                'socio' => $row['socio'],
                'socio_nombre' => $row['socio_nombre'],
                'socio_tax_id' => $row['socio_tax_id'],
                'socio_negocio' => $row['socio_negocio'],
                'socio_comercial' => $row['socio_comercial'],
                'documento' => $row['documento'],
                'documento_codigo' => $row['documento_codigo'],
                'documento_nombre' => $row['documento_nombre'],
                'nombre' => $row['nombre'],
                'emision' => $row['emision'],
                'vigencia' => $row['vigencia'],
                'url' => $row['url'],
                'fch_creacion' => $row['fch_creacion'],
                'estado' => $row['estado']
            ];
        }

        return $response;
    }
    public function traer_datos_socios_documentos_losQueFaltan($id, $documentos_text) {
        $datos = [];

        // Ejecución de la consulta
        // $query = "SELECT * FROM scc_vw_dc_socios WHERE id = " . $id;
        // $query = "SELECT `sc`.`id` AS `id`, `sc`.`nbr_comercial` AS `nbr_comercial`, `vd`.`id` AS `id_documento`, `vd`.`nombre` AS `documento`, `vd`.`descripcion` AS `descripcion`, `vd`.`codigo` AS `codigo`, `vd`.`negocio_1` AS `negocio`, `vd`.`tipo_prs` AS `tipo_prs` FROM (`scc_vw_documentos_` `vd` join `_EntidadesSocios` `sc`) WHERE `vd`.`tipo_prs` = `sc`.`tp_proveedor` AND (`vd`.`negocio_1` = `sc`.`lna_negocio` OR `vd`.`negocio_2` = `sc`.`lna_negocio` ) AND (`vd`.`negocio_1` = `sc`.`lna_negocio` OR `vd`.`negocio_2` = `sc`.`lna_negocio` ) AND (FIND_IN_SET(vd.id, '". $documentos_text ."') = 0) AND sc.id = " . $id;
        $query = "SELECT `sc`.`id` AS `id`, `sc`.`nbr_comercial` AS `nbr_comercial`, `vd`.`id` AS `id_documento`, `vd`.`nombre` AS `documento`, `vd`.`nombre_ingles` AS `documento_ingles`, `vd`.`descripcion` AS `descripcion`, `vd`.`codigo` AS `codigo`, `vd`.`negocio` AS `negocio`, `vd`.`negocio` AS `tipo_prs` FROM (`scc_vw_documentos_c_sb` `vd` join `_EntidadesSocios` `sc`) WHERE `vd`.`negocio` = `sc`.`tp_proveedor` AND (FIND_IN_SET(vd.id, '". $documentos_text ."') = 0) AND sc.id = " . $id;

        // echo $query;


        $procedimiento = $this->connection->query($query);

        // Obtener los datos
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;

            $content = [
                'id' => $row['id'],
                'nbr_comercial' => $row['nbr_comercial'],
                'id_documento' => $row['id_documento'],
                'documento' => $row['documento'],
                'documento_ingles' => $row['documento_ingles'],
                'descripcion' => $row['descripcion'],
                'codigo' => $row['codigo'],
                'negocio' => $row['negocio'],
                'tipo_prs' => $row['tipo_prs'],
                // Otros campos según sea necesario
            ];

            $datos[] = $content;
        }

        return $datos;
    }
    public function traer_datos_socios_documentos_revision() {
        $datos = [];

        // Ejecución de la consulta
        // $query = "SELECT * FROM scc_vw_dc_socios WHERE id = " . $id;
        $query = "SELECT `sc`.`id` AS `id`, `sc`.`nbr_comercial` AS `nbr_comercial`, sc_d.documento AS `id_documento`, `sc_o_d`.`nombre` AS `documento`,`sc_o_d`.`nombre_ingles` AS `documento_ingles`, `sc_o_d`.`descripcion` AS `descripcion`, `sc_o_d`.`codigo` AS `codigo`, sc_d.estado, sc_d.url, sc_d.id AS id_flujo, DATE(sc_d.fch_creacion) AS fch_creacion FROM ( `_EntidadesSocios` `sc` join _EntidadSocioDocumentos sc_d join scc_documentos sc_o_d  ) WHERE   sc_d.socio = sc.id AND sc_o_d.id = sc_d.documento  AND sc_d.estado = 'revision';";



        $procedimiento = $this->connection->query($query);

        // Obtener los datos
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;

            $content = [
                'id' => $row['id'],
                'nbr_comercial' => $row['nbr_comercial'],
                'id_documento' => $row['id_documento'],
                'documento' => $row['documento'],
                'documento_ingles' => $row['documento_ingles'],
                'descripcion' => $row['descripcion'],
                'codigo' => $row['codigo'],
                'estado' => $row['estado'],
                'url' => $row['url'],
                'fch_creacion' => $row['fch_creacion'],
                'id_flujo' => $row['id_flujo'],
                // Otros campos según sea necesario
            ];

            $datos[] = $content;
        }
        return $datos;

    }
    public function traer_datos_socios_documentos_revision_filtro($id, $pais, $extenjero, $activo) {
        $datos = [];

        // Construir la consulta base
        $query = "SELECT `sc`.`id` AS `id`, `sc`.`nbr_comercial` AS `nbr_comercial`, sc_d.documento AS `id_documento`, `sc_o_d`.`nombre` AS `documento`,`sc_o_d`.`nombre` AS `documento`, `sc_o_d`.`nombre_ingles`, `sc_o_d`.`descripcion` AS `descripcion`, `sc_o_d`.`codigo` AS `codigo`, sc_d.estado, sc_d.url, sc_d.id AS id_flujo, DATE(sc_d.fch_creacion) AS fch_creacion FROM ( `_EntidadesSocios` `sc` join _EntidadSocioDocumentos sc_d join scc_documentos sc_o_d  ) ";



        // Agregar las cláusulas WHERE según los filtros proporcionados
        $conditions = [];

        $conditions[] = "sc_d.socio = sc.id AND sc_o_d.id = sc_d.documento  AND sc_d.estado = 'revision'";

        if ($id !== null) {
            $conditions[] = "sc.id = " . $id;
        }

        if ($pais !== null) {
            $conditions[] = "sc.pais = 1";
        }
        if ($extenjero !== null) {
            $conditions[] = "sc.pais != 1";
        }
        if ($activo !== null) {
            $conditions[] = "sc.activo = 0";
        } else {
            $conditions[] = "sc.activo = 1";
        }

        // Combinar las condiciones en una cláusula WHERE
        if (!empty($conditions)) {
            $query .= " WHERE " . implode(" AND ", $conditions);
        }

        // echo $query;

        $procedimiento = $this->connection->query($query);

        // Obtener los datos
        $rowcount = 0;
        while ($row = $procedimiento->fetch_assoc()) {
            $rowcount++;

            //Traer porcentaje de documento
            $content = [
                'id' => $row['id'],
                'nbr_comercial' => $row['nbr_comercial'],
                'id_documento' => $row['id_documento'],
                'documento' => $row['documento'],
                'nombre_ingles' => $row['nombre_ingles'],
                'descripcion' => $row['descripcion'],
                'codigo' => $row['codigo'],
                'estado' => $row['estado'],
                'url' => $row['url'],
                'fch_creacion' => $row['fch_creacion'],
                'id_flujo' => $row['id_flujo'],
                // Otros campos según sea necesario
            ];

            $datos[] = $content;
        }

        return $datos;
    }
    public function traer_ultimo_flujo($usuarios, $scs_documentos) {
        // Ejecución de la consulta
        $query = "SELECT *
                  FROM scc_scs_dcm_flujo
                  WHERE usuarios = '" . $usuarios . "' AND scs_documentos = '" . $scs_documentos . "'
                  AND fecha = (SELECT MAX(fecha) FROM scc_scs_dcm_flujo WHERE usuarios = '" . $usuarios . "' AND scs_documentos = '" . $scs_documentos . "')";
        

                //   if ($scs_documentos == 38) {
                  
                //   echo $query;
                // }
        


        $procedimiento = $this->connection->query($query);

        // Obtener los datos
        $datos = [];
        while ($row = $procedimiento->fetch_assoc()) {
            $content = [
                'id' => $row['id'],
                'usuarios' => $row['usuarios'],
                'scs_documentos' => $row['scs_documentos'],
                'comentario' => $row['comentario'],
                'fecha' => $row['fecha'],
                'estado' => $row['estado'],
                // Otros campos según sea necesario
            ];

            $datos[] = $content;
        }

        return $datos;
    }
    public function traer_estado_de_documento($usuarios, $scs_documentos) {
        // Ejecución de la consulta
        // $query = "SELECT _EntidadSocioDocumentos.*, scc_documentos.nombre AS nombreDocumento, (SELECT scc_scs_dcm_flujo.comentario AS comentario_ FROM scc_scs_dcm_flujo WHERE scc_scs_dcm_flujo.id = (SELECT MAX(scc_scs_dcm_flujo.id) AS id_ FROM scc_scs_dcm_flujo WHERE scc_scs_dcm_flujo.usuarios = _EntidadSocioDocumentos.socio AND scc_scs_dcm_flujo.scs_documentos = _EntidadSocioDocumentos.documento) ) AS comentario
        // FROM _EntidadSocioDocumentos
        // INNER JOIN scc_documentos ON _EntidadSocioDocumentos.documento = scc_documentos.id
        // INNER JOIN (
        //   SELECT MAX(id) AS ultimo_id, documento
        //   FROM _EntidadSocioDocumentos
        //   WHERE socio = ". $usuarios ." AND documento = ". $scs_documentos ." 
        //   GROUP BY documento
        // ) AS ultimos_docs ON _EntidadSocioDocumentos.id = ultimos_docs.ultimo_id
        // GROUP BY _EntidadSocioDocumentos.documento;";
        $query = "SELECT _EntidadSocioDocumentos.*,
        scc_documentos.nombre AS nombreDocumento,
        (SELECT scc_scs_dcm_flujo.comentario AS comentario_ FROM scc_scs_dcm_flujo WHERE scc_scs_dcm_flujo.id=(SELECT MAX(scc_scs_dcm_flujo.id)AS id_ FROM scc_scs_dcm_flujo WHERE scc_scs_dcm_flujo.usuarios=_EntidadSocioDocumentos.socio AND scc_scs_dcm_flujo.scs_documentos=_EntidadSocioDocumentos.documento))AS comentario,
        (SELECT scc_scs_dcm_flujo.fecha AS comentario_ FROM scc_scs_dcm_flujo WHERE scc_scs_dcm_flujo.id=(SELECT MAX(scc_scs_dcm_flujo.id)AS id_ FROM scc_scs_dcm_flujo WHERE scc_scs_dcm_flujo.usuarios=_EntidadSocioDocumentos.socio AND scc_scs_dcm_flujo.scs_documentos=_EntidadSocioDocumentos.documento))AS fecha_Actualizado
        FROM _EntidadSocioDocumentos INNER JOIN scc_documentos ON _EntidadSocioDocumentos.documento=scc_documentos.id INNER JOIN(SELECT MAX(id)AS ultimo_id,
        documento FROM _EntidadSocioDocumentos WHERE socio = ". $usuarios ." AND documento = ". $scs_documentos ."  
        GROUP BY documento)AS ultimos_docs ON _EntidadSocioDocumentos.id=ultimos_docs.ultimo_id GROUP BY _EntidadSocioDocumentos.documento;";
        

                //   if ($scs_documentos == 38) {
                  
                //   echo $query;
                // }
        


        $procedimiento = $this->connection->query($query);

        // Obtener los datos
        $datos = [];
        while ($row = $procedimiento->fetch_assoc()) {
            $content = [
                'id' => $row['id'],
                'documento' => $row['documento'],
                
                'comentario' => $row['comentario'],
                
                'estado' => $row['estado'],
                // Otros campos según sea necesario
                'fch_creacion' => $row['fch_creacion'],
                'fecha_Actualizado' => $row['fecha_Actualizado'],
            ];

            $datos[] = $content;
        }

        return $datos;
    }
    public function traer_documento_socio($socio, $documento) {


        // Obtener los datos del documento
        $query = "SELECT *
                  FROM _EntidadSocioDocumentos
                  WHERE socio = '" . $socio . "' AND documento = '" . $documento . "'";


        $procedimiento = $this->connection->query($query);

        // Obtener los datos
        $datos = [];
        while ($row = $procedimiento->fetch_assoc()) {
            $content = [
                'id' => $row['id'],
                'socio' => $row['socio'],
                'documento' => $row['documento'],
                // Otros campos según sea necesario
            ];



            $datos[] = $content;
        }

        return $datos;
    }
    public function traer_notificacion_documento_socio($usuario) {
        // Obtener los datos del documento
        $query = "SELECT `sc`.`id` AS `id_socio`, `sc`.`nbr_comercial` AS `nbr_comercial`,
                         `vd`.`id` AS `id_documento`, `vd`.`nombre` AS `documento`, `vd`.`nombre_ingles` AS `documento_ingles`,
                         `vd`.`descripcion` AS `descripcion`, `vd`.`codigo` AS `codigo`,
                         `vd`.`negocio` AS `negocio`, `vd`.`negocio` AS `tipo_prs`,
                         `flujo`.`usuarios` AS `usuarios`, `flujo`.`comentario` AS `comentario`,
                         `flujo`.`fecha` AS `fecha`, `flujo`.`estado` AS `estado`
                  FROM `scc_vw_documentos_c_sb` `vd`
                  INNER JOIN `_EntidadesSocios` `sc` ON `vd`.`negocio` = `sc`.`tp_proveedor`
                  INNER JOIN (
                    SELECT `scs_documentos`, `usuarios`, `comentario`, `fecha`, `estado`
                    FROM `scc_scs_dcm_flujo`
                    WHERE `usuarios` = '" . $usuario . "'
                    AND (`scs_documentos`, `fecha`) IN (
                      SELECT `scs_documentos`, MAX(`fecha`)
                      FROM `scc_scs_dcm_flujo`
                      WHERE `usuarios` = '" . $usuario . "'
                      GROUP BY `scs_documentos`
                    )
                  ) `flujo` ON `vd`.`id` = `flujo`.`scs_documentos`
                  GROUP BY `id_documento`";

        // echo $query;

        $procedimiento = $this->connection->query($query);

        // Obtener los datos
        $datos = [];
        while ($row = $procedimiento->fetch_assoc()) {
            $content = [
                'id_socio' => $row['id_socio'],
                'nbr_comercial' => $row['nbr_comercial'],
                'id_documento' => $row['id_documento'],
                'documento' => $row['documento'],
                'documento_ingles' => $row['documento_ingles'],
                'descripcion' => $row['descripcion'],
                'codigo' => $row['codigo'],
                'negocio' => $row['negocio'],
                'tipo_prs' => $row['tipo_prs'],
                'usuarios' => $row['usuarios'],
                'comentario' => $row['comentario'],
                'fecha' => $row['fecha'],
                'estado' => $row['estado'],
                // Otros campos según sea necesario
            ];

            $datos[] = $content;
        }

        return $datos;
    }
    public function select_documentos_notificaciones_by_usuario($usuario)
    {
        $query = "SELECT _EntidadSocioDocumentos.*, scc_documentos.nombre AS nombreDocumento, scc_documentos.nombre_ingles AS nombreInglesDocumento,
                (SELECT scc_scs_dcm_flujo.comentario AS comentario_
                FROM scc_scs_dcm_flujo
                WHERE scc_scs_dcm_flujo.id = (SELECT MAX(scc_scs_dcm_flujo.id) AS id_
                                            FROM scc_scs_dcm_flujo
                                            WHERE scc_scs_dcm_flujo.usuarios = _EntidadSocioDocumentos.socio
                                            AND scc_scs_dcm_flujo.scs_documentos = _EntidadSocioDocumentos.documento)) AS comentario,
                scc_documentos_settings_time.*, scc_documentos_notificaciones_c.fecha
                FROM _EntidadSocioDocumentos
                INNER JOIN scc_documentos ON _EntidadSocioDocumentos.documento = scc_documentos.id
                INNER JOIN (
                SELECT MAX(id) AS ultimo_id, documento
                FROM _EntidadSocioDocumentos
                WHERE socio = " . $usuario . "
                GROUP BY documento
                ) AS ultimos_docs ON _EntidadSocioDocumentos.id = ultimos_docs.ultimo_id
                LEFT JOIN scc_documentos_notificaciones_c ON _EntidadSocioDocumentos.documento = scc_documentos_notificaciones_c.id_documento
                AND _EntidadSocioDocumentos.socio = scc_documentos_notificaciones_c.usuarios
                INNER JOIN _EntidadesSocios ON _EntidadSocioDocumentos.socio = _EntidadesSocios.id
                INNER JOIN scc_documentos_settings_time ON scc_documentos_settings_time.documento = _EntidadSocioDocumentos.documento
                AND _EntidadesSocios.tp_proveedor = scc_documentos_settings_time.tipo_prs
                GROUP BY _EntidadSocioDocumentos.documento";

        $resultado = $this->connection->query($query);

        // Obtener los datos
        $datos = array();
        while ($row = $resultado->fetch_assoc()) {
            $content = [
                // 'id_socio' => $row['id_socio'],
                // 'nbr_comercial' => $row['nbr_comercial'],
                // 'id_documento' => $row['id_documento'],
                // 'documento' => $row['documento'],
                // 'documento_ingles' => $row['documento_ingles'],
                // 'descripcion' => $row['descripcion'],
                // 'codigo' => $row['codigo'],
                // 'negocio' => $row['negocio'],
                // 'tipo_prs' => $row['tipo_prs'],
                // 'usuarios' => $row['usuarios'],
                // 'comentario' => $row['comentario'],
                'id' => $row['id'],
                'socio' => $row['socio'],
                'documento' => $row['documento'],
                'nombreDocumento' => $row['nombreDocumento'],
                
                'nombreInglesDocumento' => $row['nombreInglesDocumento'],
                'fecha' => $row['fecha'],
                'estado' => $row['estado'],
                'expiracion' => $row['expiracion'],
                'expiracion_cnt' => $row['expiracion_cnt'],
                'notificacion' => $row['notificacion'],
                'notificacion_cnt' => $row['notificacion_cnt'],
                'expiracionTiempo' => $row['expiracionTiempo'],
                'expiracionTime' => $row['expiracionTime'],
                'Expiracion_dias' => $row['Expiracion_dias'],
                'notificacionTiempo' => $row['notificacionTiempo'],
                'notificacionTime' => $row['notificacionTime'],
                'Notification_dias' => $row['Notification_dias'],
                // Otros campos según sea necesario
            ];

            $datos[] = $content;
        }

        return $datos;
    }
    public function get_expiration()
    {
        $socio = $_POST["id"];
        $socioDocumentos = [];

        $querySocioDocumento = "SELECT * FROM vwsociosdocumentos WHERE socio = $socio;";
        $socioDocumentosRaw = $this->connection->query($querySocioDocumento);
        while ($row = $socioDocumentosRaw->fetch_assoc()) {
            $contentSocioDocumento = [
                'id' => $row['id'],
                'socio' => $row['socio'],
                'socio_nombre' => $row['socio_nombre'],
                'socio_tax_id' => $row['socio_tax_id'],
                'socio_negocio' => $row['socio_negocio'],
                'socio_comercial' => $row['socio_comercial'],
                'documento' => $row['documento'],
                'documento_codigo' => $row['documento_codigo'],
                'documento_nombre' => $row['documento_nombre'],
                'nombre' => $row['nombre'],
                'emision' => $row['emision'],
                'vigencia' => $row['vigencia'],
                'url' => str_replace("../", "", $row['url']),
                'fch_creacion' => $row['fch_creacion'],
                'estado' => $row['estado']
            ];
            $socioDocumentos[] = $contentSocioDocumento;
        }

        return $socioDocumentos;
    }
    public function traer_datos_documentos_settings_tiempo($usuarios) {
        $content = [];
        $query = "select * from historial_documento where id = $usuarios;";
        $procedimiento = $this->connection->query($query);
        while ($row = $procedimiento->fetch_assoc()) {
            $content[] = [
                'id' => $row['id'],
                'created_at' => $row['created_at']
            ];
        }
        return $content;
    }
    public function traer_historial_socios_documentos($id, $documentos_text) {
        $datos = [];

        $datosFlujo = [];

        // Ejecución de la consulta
        $query = "SELECT h.*, s.nbr_comercial
                  FROM scc_scs_dcm_historial h
                  INNER JOIN scc_documentos d ON d.id = h.scs_documentos
                  INNER JOIN _EntidadesSocios s ON s.id = h.socio
                  WHERE h.scs_documentos = " . $id . " AND h.socio = " . $documentos_text;

        $procedimiento = $this->connection->query($query);
        $query = "SELECT * FROM `scc_scs_dcm_flujo` WHERE scs_documentos=".$id." AND usuarios=".$documentos_text."; ";
        $procedimiento2 = $this->connection->query($query);
        $numeroIndicador = 0;
        while ($row = $procedimiento2->fetch_assoc()) {
            $content = [
                'estado' => $row['estado'],
                'comentario' => $row['comentario'],
            ];
            $datosFlujo[] = $content;
        }
        while ($row = $procedimiento->fetch_assoc()) {
            $estado = "";
            $comentario = "";
            if ( $row['accion'] == "Document rejection" || $row['accion'] == "Document Acceptance") {
                # code...

                // echo $datosFlujo[$numeroIndicador]["estado"];

                $estado = $datosFlujo[$numeroIndicador]["estado"];
                $comentario = $datosFlujo[$numeroIndicador]["comentario"];

                $numeroIndicador += 1;
            }


            $content = [
                'id' => $row['id'],
                'scs_documentos' => $row['scs_documentos'],
                'socio' => $row['socio'],
                'area' => $row['area'],
                'accion' => $row['accion'],
                'fecha' => $row['fecha'],
                'nbr_comercial' => $row['nbr_comercial'],
                // Otros campos según sea necesario
                'estado' => $estado,
                'comentario' => $comentario,

            ];

            $datos[] = $content;
        }



        return $datos;
    }
    public function traer_historial_socios_documentos_bitacora($id, $documentos_text) {
        $datos = [];
        $datosFlujo = [];
        $query = "select hd.id, hd.socio, hd.documento, d.nombre, d.nombre_ingles, hd.usuario, hd.comentario, hd.estado, hd.url, hd.created_at, hd.updated_at from historial_documento hd
join scc_documentos d on hd.documento = d.id where hd.socio = $documentos_text and hd.documento = $id;";
        $procedimiento = $this->connection->query($query);
        $contador = 1;
        while ($row = $procedimiento->fetch_assoc()) {
            $usuario = "";
            $connectionJoffroy = conecion_remota();
            $queryUsuario = "SELECT NombreCompleto FROM vw_flujo_colaborador WHERE Id = ?";
            $stmt = $connectionJoffroy->prepare($queryUsuario);
            $stmt->bind_param("i", $row['usuario']);
            $stmt->execute();
            $usuarioRaw = $stmt->get_result();
            if ($usuarioRaw->num_rows > 0) {
                while ($rowUsuario = $usuarioRaw->fetch_assoc()) {
                    $usuario = $rowUsuario['NombreCompleto'];
                }
            } else {
                $usuario = "Usuario no encontrado";
            }
            $stmt->close();
            $datos[] = [
                'conteo' => $contador,
                'id' => $row['id'],
                'socio' => $row['socio'],
                'documento' => $row['documento'],
                'nombre' => $row['nombre'],
                'nombre_ingles' => $row['nombre_ingles'],
                'usuario' => $row['usuario'],
                'usuario_nombre' => $usuario,
                'comentario' => $row['comentario'],
                'estado' => $row['estado'],
                'created_at' => $row['created_at'],
                'updated_at' => $row['updated_at'],
                'url' => $row['url'],
            ];
            $contador++;
        }
        return $datos;
    }
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
