<?php
    class socios{
        private $connection;
        public function __construct() {
            require '../config/database.php';
            $this->connection = $mysqli;
        }
        public function insertSocio($nbrNegocio, $prsNombre, $prsApellidos, $compania, $rgmCapital, $nbrComercial, $correo, $telefono, $calle, $nmrInterno, $nmrExterno, $cdgPostal, $colonia, $pais, $estado, $ciudad, $tpProveedor, $taxId, $lnaNegocio) {
            $query = "INSERT INTO `_EntidadesSocios`(`nbr_negocio`, `prs_nombre`, `prs_apellidos`, `compania`, `rgm_capital`, `nbr_comercial`, `correo`, `telefono`, `calle`, `nmr_interno`, `nmr_externo`, `cdg_postal`, `colonia`, `pais`, `estado`, `ciudad`, `tp_proveedor`, `tax_id`, `lna_negocio`, `activo`)
                      VALUES ('" . $nbrNegocio . "', '" . $prsNombre . "', '" . $prsApellidos . "', '" . $compania . "', '" . $rgmCapital . "', '" . $nbrComercial . "', '" . $correo . "', '" . $telefono . "', '" . $calle . "', '" . $nmrInterno . "', '" . $nmrExterno . "', '" . $cdgPostal . "', '" . $colonia . "', '" . $pais . "', '" . $estado . "', '" . $ciudad . "', '" . $tpProveedor . "', '" . $taxId . "', '" . $lnaNegocio . "', '1')";
                      
            $resultado = $this->connection->query($query);
            $vlr_respuesta = '';
        
            if ($resultado == true) {
                $vlr_respuesta = "true";
            } else {
                $vlr_respuesta = $resultado;
            }
        
            return $vlr_respuesta;
        }
        public function updateSocio($id, $nbrNegocio, $prsNombre, $prsApellidos, $compania, $rgmCapital, $nbrComercial, $correo, $telefono, $calle, $nmrInterno, $nmrExterno, $cdgPostal, $colonia, $pais, $estado, $ciudad, $tpProveedor, $taxId) {
            $query = "UPDATE `_EntidadesSocios` SET 
                        `nbr_negocio` = '" . $nbrNegocio . "',
                        `prs_nombre` = '" . $prsNombre . "',
                        `prs_apellidos` = '" . $prsApellidos . "',
                        `compania` = '" . $compania . "',
                        `rgm_capital` = '" . $rgmCapital . "',
                        `nbr_comercial` = '" . $nbrComercial . "',
                        `correo` = '" . $correo . "',
                        `telefono` = '" . $telefono . "',
                        `calle` = '" . $calle . "',
                        `nmr_interno` = '" . $nmrInterno . "',
                        `nmr_externo` = '" . $nmrExterno . "',
                        `cdg_postal` = '" . $cdgPostal . "',
                        `colonia` = '" . $colonia . "',
                        `pais` = '" . $pais . "',
                        `estado` = '" . $estado . "',
                        `ciudad` = '" . $ciudad . "',
                        `tp_proveedor` = '" . $tpProveedor . "',
                        `tax_id` = '" . $taxId . "'";

                      $query .= " WHERE `id` = " . $id;

            $resultado = $this->connection->query($query);
            
            if ($resultado) {
                $alerta = [
                "texto" => "Información actualizada correctamente",
                "lastId" => (int)$id,
                "estado" => 200,
            ];
            } else {
                $alerta = [
                "texto" => "Ningún cambio realizado.",
                "lastId" => (int)$id,
                "estado" => 400,
            ];
            }
            
            return json_encode($alerta);
        }
        public function updateSocioExtra($id, $actividad, $tipoEmpresa, $sectorEmpresa, $correo, $telefono, $pagina, $sectorCliente, $operaciones, $capacidad, $numero, $idioma) {
            $query = "UPDATE _EntidadesSocios SET 
                        actividad = '" . $actividad . "', tipoEmpresa = '" . $tipoEmpresa . "',
                        sectorEmpresa = '" . $sectorEmpresa . "', correoPublico = '" . $correo . "',
                        telefonoPublico = '" . $telefono . "', pagina = '" . $pagina . "',
                        sectorCliente = '" . $sectorCliente . "', operaciones = '" . $operaciones . "',
                        capacidad = '" . $capacidad . "', numero = " . $numero . ",
                        idioma = '" . $idioma . "' WHERE id = $id";

            $resultado = $this->connection->query($query);

            if ($resultado) {
                $alerta = [
                    "texto" => "Información actualizada correctamente",
                    "lastId" => (int)$id,
                    "estado" => 200,
                ];
            } else {
                $alerta = [
                    "texto" => "Ningún cambio realizado.",
                    "lastId" => (int)$id,
                    "estado" => 400,
                ];
            }

            return json_encode($alerta);
        }
        public function update_extra_info($id, $tipoOperacion, $confianza, $nacionalidad, $diasCredito, $limiteCredito, $sucursales, $areas, $justificacion, $seguridad, $iso) {
            $query = "UPDATE `_EntidadesSocios` SET 
                        `tipo_operacion` = '" . $tipoOperacion . "',
                        `confianza` = '" . $confianza . "',
                        `nacionalidad` = '" . $nacionalidad . "',
                        `dias_de_credito` = '" . $diasCredito . "',
                        `limite_de_credito` = '" . $limiteCredito . "',
                        `sucursales` = '" . $sucursales . "',
                        `areas` = '" . $areas . "',
                        `justificacion` = '" . $justificacion . "',
                        `seguridad` = '" . $seguridad . "',
                        `iso` = '" . $iso . "'
                      WHERE `id` = " . $id;
        
            $resultado = $this->connection->query($query);
            $vlr_respuesta = '';
        
            if ($resultado == true) {
                $vlr_respuesta = "true";
            } else {
                $vlr_respuesta = $resultado;
            }
        
            return $vlr_respuesta;
        }
        public function select_ultimo(){
            $query = "SELECT MAX(id) AS id FROM _EntidadesSocios";
            $resultado = $this->connection->query($query);
    
            return $resultado;
        }
        public function traer_datos_socios($socioId) {
            $datos = [];
//            $query = "SELECT _EntidadesSocios.* FROM _EntidadesSocios INNER JOIN _EntidadContactos ON _EntidadesSocios.id = _EntidadContactos.socio WHERE _EntidadesSocios.id = " . $socioId;
            $query = "SELECT _EntidadesSocios.* FROM _EntidadesSocios WHERE _EntidadesSocios.id = " . $socioId;
            $procedimiento = $this->connection->query($query);
            while ($row = $procedimiento->fetch_assoc()) {
                $filtro = (int)$row['tp_proveedor'] === 1 ? " and fisica is true" : " and moral is true";
                $queryDocumentos = "select count(id) as conteo from scc_documentos where fch_borrar is null $filtro;";
                $documentosRaw = $this->connection->query($queryDocumentos);
                $result = $documentosRaw->fetch_assoc();
                $conteo = $result['conteo'];
                $querySocioDoc = "select count(id) as conteo from _EntidadSocioDocumentos where estado = 'Accept' and socio = ".$row['id'].";";
                $socioDocRaw = $this->connection->query($querySocioDoc);
                $resultSocioDOc = $socioDocRaw->fetch_assoc();
                $conteoSocioDoc = $resultSocioDOc['conteo'];
                $porcentaje = ($conteoSocioDoc / $conteo) * 100;
                $content = [
                    'id' => $row['id'],
                    'nbr_negocio' => $row['nbr_negocio'],
                    'prs_nombre' => $row['prs_nombre'],
                    'prs_apellidos' => $row['prs_apellidos'],
                    'compania' => $row['compania'],
                    'rgm_capital' => $row['rgm_capital'],
                    'nbr_comercial' => $row['nbr_comercial'],
                    'correo' => $row['correo'],
                    'telefono' => $row['telefono'],
                    'calle' => $row['calle'],
                    'nmr_interno' => $row['nmr_interno'],
                    'nmr_externo' => $row['nmr_externo'],
                    'cdg_postal' => $row['cdg_postal'],
                    'colonia' => $row['colonia'],
                    'pais' => $row['pais'],
                    'estado' => $row['estado'],
                    'ciudad' => $row['ciudad'],
                    'tp_proveedor' => $row['tp_proveedor'],
                    'tax_id' => $row['tax_id'],
                    'lna_negocio' => $row['lna_negocio'],
                    'activo' => $row['activo'],
                    'confianza' => $row['confianza'],
                    'tipo_operacion' => $row['tipo_operacion'],
                    'nacionalidad' => $row['nacionalidad'],
                    'dias_de_credito' => $row['dias_de_credito'],
                    'limite_de_credito' => $row['limite_de_credito'],
                    'sucursales' => $row['sucursales'],
                    'areas' => $row['areas'],
                    'justificacion' => $row['justificacion'],
                    'iso' => (bool)$row['iso'],
                    'seguridad' => (bool)$row['seguridad'],

                    'actividad' => $row['actividad'],
                    'tipoEmpresa' => json_decode($row['tipoEmpresa']),
                    'sectorEmpresa' => json_decode($row['sectorEmpresa']),
                    'correoPublico' => $row['correoPublico'],
                    'telefonoPublico' => $row['telefonoPublico'],
                    'pagina' => $row['pagina'],
                    'sectorCliente' => json_decode($row['sectorCliente']),
                    'operaciones' => $row['operaciones'],
                    'capacidad' => json_decode($row['capacidad']),
                    'numero' => $row['numero'],
                    'idioma' => json_decode($row['idioma']),

                    'fch_creacion'=> $row['fch_creacion'],
                    'porcentaje'=> $porcentaje,
                ];
                $datos[] = $content;
            }
            return $datos;
        }
        public function traer_datos_socios_simple() {
            $datos = [];
            $query = "SELECT _EntidadesSocios.*, _EntidadContactos.id as id_contacto FROM _EntidadesSocios INNER JOIN _EntidadContactos ON _EntidadesSocios.id = _EntidadContactos.socio GROUP BY _EntidadesSocios.id;";
            $procedimiento = $this->connection->query($query);
            $rowcount = 0;
            while ($row = $procedimiento->fetch_assoc()) {
                $content = [
                    'id' => $row['id'],
                    'nbr_negocio' => $row['nbr_negocio'],
                    'prs_nombre' => $row['prs_nombre'],
                    'prs_apellidos' => $row['prs_apellidos'],
                    'compania' => $row['compania'],
                    'rgm_capital' => $row['rgm_capital'],
                    'nbr_comercial' => $row['nbr_comercial'],
                    'correo' => $row['correo'],
                    'telefono' => $row['telefono'],
                    'calle' => $row['calle'],
                    'nmr_interno' => $row['nmr_interno'],
                    'nmr_externo' => $row['nmr_externo'],
                    'cdg_postal' => $row['cdg_postal'],
                    'colonia' => $row['colonia'],
                    'pais' => $row['pais'],
                    'estado' => $row['estado'],
                    'ciudad' => $row['ciudad'],
                    'tp_proveedor' => $row['tp_proveedor'],
                    'tax_id' => $row['tax_id'],
                    'lna_negocio' => $row['lna_negocio'],
                    'activo' => $row['activo'],
                    'id_contacto' => $row['id_contacto'],
                ];
                $datos[] = $content;
            }
        
            return $datos;
        }
        public function getSociosFn() {
            $response = [];
            $querySocio = "select * from _EntidadesSocios;";
            $procedimiento = $this->connection->query($querySocio);

            while ($row = $procedimiento->fetch_assoc()) {

                $filtro = (int)$row['tp_proveedor'] === 1 ? " and fisica is true" : " and moral is true";

                $queryDocumentos = "select count(id) as conteo from scc_documentos where fch_borrar is null $filtro;";
                $documentosRaw = $this->connection->query($queryDocumentos);
                $result = $documentosRaw->fetch_assoc();
                $conteo = $result['conteo'];

                $querySocioDoc = "select COUNT(DISTINCT documento) AS conteo from _EntidadSocioDocumentos where estado = 'Accept' and socio = ".$row['id'].";";
                $socioDocRaw = $this->connection->query($querySocioDoc);
                $resultSocioDOc = $socioDocRaw->fetch_assoc();
                $conteoSocioDoc = $resultSocioDOc['conteo'];

                if ((int)$conteo !== 0):
                    $porcentaje = ($conteoSocioDoc / $conteo) * 100;
                else:
                    $porcentaje = 0;
                endif;

                $content = [
                    'id' => $row['id'],
                    'nbr_negocio' => $row['nbr_negocio'],
                    'prs_nombre' => $row['prs_nombre'],
                    'prs_apellidos' => $row['prs_apellidos'],
                    'compania' => $row['compania'],
                    'rgm_capital' => $row['rgm_capital'],
                    'nbr_comercial' => $row['nbr_comercial'],
                    'correo' => $row['correo'],
                    'telefono' => $row['telefono'],
                    'calle' => $row['calle'],
                    'nmr_interno' => $row['nmr_interno'],
                    'nmr_externo' => $row['nmr_externo'],
                    'cdg_postal' => $row['cdg_postal'],
                    'colonia' => $row['colonia'],
                    'pais' => $row['pais'],
                    'estado' => $row['estado'],
                    'ciudad' => $row['ciudad'],
                    'tp_proveedor' => (int)$row['tp_proveedor'],
                    'tax_id' => $row['tax_id'],
                    'lna_negocio' => $row['lna_negocio'],
                    'confianza' => $row['confianza'],
                    'tipo_operacion' => $row['tipo_operacion'],
                    'nacionalidad' => $row['nacionalidad'],
                    'dias_de_credito' => $row['dias_de_credito'],
                    'limite_de_credito' => $row['limite_de_credito'],
                    'sucursales' => $row['sucursales'],
                    'areas' => $row['areas'],
                    'justificacion' => $row['justificacion'],
                    'iso' => $row['iso'],
                    'seguridad' => $row['seguridad'],
                    'fch_creacion' => $row['fch_creacion'],
                    'activo' => $row['activo'],
                    'porcentaje' => $porcentaje,
                ];
                $response[] = $content;
            }

            return $response;
        }
        public function traer_datos_socios_contacto($socioId) {
            $datos = [];
        
            // Ejecución de la consulta
            $query = "SELECT _EntidadesSocios.*, _EntidadContactos.* FROM _EntidadesSocios INNER JOIN _EntidadContactos ON _EntidadesSocios.id = _EntidadContactos.socio WHERE _EntidadContactos.id = " . $socioId;

        
            $procedimiento = $this->connection->query($query);
        
            // Obtener los datos
            $rowcount = 0;
            while ($row = $procedimiento->fetch_assoc()) {
                $rowcount++;
        
                $content = [
                    'id' => $row['id'],
                    'nbr_negocio' => $row['nbr_negocio'],
                    'prs_nombre' => $row['prs_nombre'],
                    'prs_apellidos' => $row['prs_apellidos'],
                    'compania' => $row['compania'],
                    'rgm_capital' => $row['rgm_capital'],
                    'nbr_comercial' => $row['nbr_comercial'],
                    'correo' => $row['correo'],
                    'telefono' => $row['telefono'],
                    'calle' => $row['calle'],
                    'nmr_interno' => $row['nmr_interno'],
                    'nmr_externo' => $row['nmr_externo'],
                    'cdg_postal' => $row['cdg_postal'],
                    'colonia' => $row['colonia'],
                    'pais' => $row['pais'],
                    'estado' => $row['estado'],
                    'ciudad' => $row['ciudad'],
                    'tp_proveedor' => $row['tp_proveedor'],
                    'tax_id' => $row['tax_id'],
                    'lna_negocio' => $row['lna_negocio'],
                    'activo' => $row['activo'],
                    // Otros campos según sea necesario
                ];
        
                $datos[] = $content;
            }
        
            return $datos;
        }
        public function traer_datos_paises() {
            $datos = [];
            // Ejecución de la consulta
            $query = "SELECT * FROM _paises";
            $connection = conecion_remota();
            $procedimiento = $connection->query($query);
            // Obtener los datos
            while ($row = $procedimiento->fetch_assoc()) {
                $content = [
                    'Id' => $row['Id'],
                    'Codigo' => $row['Codigo'],
                    'Codigo2' => $row['Codigo2'],
                    'Nombre' => $row['Nombre']
                    // Otros campos según sea necesario
                ];
                $datos[] = $content;
            }
            // Cerrar la conexión
            mysqli_close($connection);
            return $datos;
        }
        public function traer_un_datos_paises($id) {
            $datos = [];
            
            // Ejecución de la consulta
            $query = "SELECT * FROM _paises where id=". $id .";";
            
            $connection = conecion_remota();

            $procedimiento = $connection->query($query);
            
            
            // Obtener los datos
            while ($row = $procedimiento->fetch_assoc()) {
                
                

                $content = [
                    'Id' => $row['Id'],
                    'Codigo' => $row['Codigo'],
                    'Codigo2' => $row['Codigo2'],
                    'Nombre' => $row['Nombre']
                    // Otros campos según sea necesario
                ];
            
                $datos[] = $content;
            }

            // Cerrar la conexión
            mysqli_close($connection);
            
            

            return $datos;
        }
        public function traer_roles() {
            $datos = [];
            
            // Ejecución de la consulta
            $query = "SELECT * FROM vw_partnerusercolabs";
            
            $connection = conecion_remota();

            $procedimiento = $connection->query($query);
            
            // Obtener los datos
            while ($row = $procedimiento->fetch_assoc()) {
                $content = [
                    'id' => $row['Nombre'],
                    'text' => $row['Nombre']
                    // Otros campos según sea necesario
                ];
            
                $datos[] = $content;
            }

            // Cerrar la conexión
            mysqli_close($connection);
            
            return $datos;
        }
        public function traer_datos_departamentos() {
            $datos = [];
            $query = "SELECT * FROM vw_unidadesdenegocio";
            $connection = conecion_remota();
            $procedimiento = $connection->query($query);
            while ($row = $procedimiento->fetch_assoc()) {
                $content = [
                    'Id' => $row['Id'],
                    'Nombre' => $row['ValorTexto'],
                    'Codigo' => $row['Codigo'],
                    'Descripcion' => $row['Descripcion'],
                    // Otros campos según sea necesario
                ];
        
                $datos[] = $content;
            }
            mysqli_close($connection);
            return $datos;
        }
        public function getBranch() {
            $datos = [];
            $query = "SELECT * FROM _Sucursales where Activa = 1;";
            $connection = conecion_remota();
            $procedimiento = $connection->query($query);
            while ($row = $procedimiento->fetch_assoc()) {
                $content = [
                    'id' => $row['Id'],
                    'text' => "(".$row['Codigo'].") ".$row['Descripcion'],
                    'Codigo' => $row['Codigo']
                ];
                $datos[] = $content;
            }
            mysqli_close($connection);
            return $datos;
        }
        public function traer_datos_grupos() {
            $datos = [];
        
            // Ejecución de la consulta
            $query = "SELECT * FROM Groups";
            
            $connection = conecion_remota();
        
            $procedimiento = $connection->query($query);
        
            // Obtener los datos
            while ($row = $procedimiento->fetch_assoc()) {
                $content = [
                    'Id' => $row['Id'],
                    'Name' => $row['Name'],
                    'DisplayName' => $row['DisplayName'],
                    'Description' => $row['Description'],
                    // Otros campos según sea necesario
                ];
        
                $datos[] = $content;
            }
        
            // Cerrar la conexión
            mysqli_close($connection);
        
            return $datos;
        }
        public function traer_datos_sucursales() {
            $datos = [];
        
            // Ejecución de la consulta
//            $query = "SELECT * FROM wms_Sucursales WHERE Activo = 1";
            $query = "SELECT * FROM _Sucursales";

            $connection = conecion_remota();
        
            $procedimiento = $connection->query($query);
        
            // Obtener los datos
            while ($row = $procedimiento->fetch_assoc()) {
                $content = [
                    'Id' => $row['Id'],
                    'Codigo' => $row['Codigo'],
                    'Nombre' => $row['Nombre'],
//                    'TimeZone' => $row['TimeZone'],
                    // Otros campos según sea necesario
                ];
        
                $datos[] = $content;
            }
        
            // Cerrar la conexión
            mysqli_close($connection);
        
            return $datos;
        }
        public function traer_datos_almacenes_yardas() {
            $datos = [];
            
            // Ejecución de la consulta
            $query = "SELECT * FROM vw_Departamentos;";
            
            $connection = conecion_remota();
            
            $procedimiento = $connection->query($query);
            
            // Obtener los datos
            while ($row = $procedimiento->fetch_assoc()) {
                $content = [
                    'Id' => $row['Id'],
                    'Codigo' => $row['Codigo'],
                    'Descripcion' => $row['Descripcion'],
                    'Description' => $row['Description'],
                    // Otros campos según sea necesario
                ];
                
                $datos[] = $content;
            }
            
            // Cerrar la conexión
            mysqli_close($connection);
            
            return $datos;
        }
        public function traer_datos_socios_general() {
            $datos = [];
            
            // Ejecución de la consulta
            $query = "SELECT * FROM `_EntidadesSocios` ";
            
            $procedimiento = $this->connection->query($query);
            
            // Obtener los datos
            $rowcount = 0;
            while ($row = $procedimiento->fetch_assoc()) {
                $rowcount++;
                
                $content = [
                    'id' => $row['id'],
                    'nbr_negocio' => $row['nbr_negocio'],
                    'prs_nombre' => $row['prs_nombre'],
                    'prs_apellidos' => $row['prs_apellidos'],
                    'compania' => $row['compania'],
                    'rgm_capital' => $row['rgm_capital'],
                    'nbr_comercial' => $row['nbr_comercial'],
                    'correo' => $row['correo'],
                    'telefono' => $row['telefono'],
                    'calle' => $row['calle'],
                    'nmr_interno' => $row['nmr_interno'],
                    'nmr_externo' => $row['nmr_externo'],
                    'cdg_postal' => $row['cdg_postal'],
                    'colonia' => $row['colonia'],
                    'pais' => $row['pais'],
                    'estado' => $row['estado'],
                    'ciudad' => $row['ciudad'],
                    'tp_proveedor' => $row['tp_proveedor'],
                    'tax_id' => $row['tax_id'],
                    'lna_negocio' => $row['lna_negocio'],
                    'activo' => $row['activo'],
                    // Otros campos según sea necesario
                ];
                
                $datos[] = $content;
            }
            
            return $datos;
        }
        public function traer_datos_socios_general_filtro($id, $pais, $extenjero, $activo) {
            $datos = [];
        
            // Construir la consulta base
            $query = "SELECT _EntidadesSocios.*, _EntidadContactos.id as id_contacto FROM _EntidadesSocios INNER JOIN _EntidadContactos ON _EntidadesSocios.id = _EntidadContactos.socio ";

            // Agregar las cláusulas WHERE según los filtros proporcionados
            $conditions = [];
            if ($id !== null) {
                $conditions[] = "_EntidadesSocios.id = " . $id;
            }

            if ($pais !== null) {
                $conditions[] = "_EntidadesSocios.pais = 1";
            } 
            if ($extenjero !== null) {
                $conditions[] = "_EntidadesSocios.pais != 1";
            }
            if ($activo !== null) {
                $conditions[] = "_EntidadesSocios.activo = 0";
            } else {
                $conditions[] = "_EntidadesSocios.activo = 1";
            }

            // Combinar las condiciones en una cláusula WHERE
            if (!empty($conditions)) {
                $query .= " WHERE " . implode(" AND ", $conditions);
            }

            $query .= " GROUP BY _EntidadesSocios.id";
            // echo $query;

            $procedimiento = $this->connection->query($query);
            while ($row = $procedimiento->fetch_assoc()) {
                $content = [
                    'id' => $row['id'],
                    'nbr_negocio' => $row['nbr_negocio'],
                    'prs_nombre' => $row['prs_nombre'],
                    'prs_apellidos' => $row['prs_apellidos'],
                    'compania' => $row['compania'],
                    'rgm_capital' => $row['rgm_capital'],
                    'nbr_comercial' => $row['nbr_comercial'],
                    'correo' => $row['correo'],
                    'telefono' => $row['telefono'],
                    'calle' => $row['calle'],
                    'nmr_interno' => $row['nmr_interno'],
                    'nmr_externo' => $row['nmr_externo'],
                    'cdg_postal' => $row['cdg_postal'],
                    'colonia' => $row['colonia'],
                    'pais' => $row['pais'],
                    'estado' => $row['estado'],
                    'ciudad' => $row['ciudad'],
                    'tp_proveedor' => $row['tp_proveedor'],
                    'tax_id' => $row['tax_id'],
                    'lna_negocio' => $row['lna_negocio'],
                    'activo' => $row['activo'],
                    'id_contacto' => $row['id_contacto']
                ];
                $datos[] = $content;
            }
        
            return $datos;
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
        public function registrar_factura($data) {
            $query = "INSERT INTO scc_invoice (partner, invoice, date, expire, amount, currency, payments, expense, company, branch, concepts, notes, withholding, globaltax, statusi, statuse)
                      VALUES (".$data["partner"].", '".$data["invoice"]."', '".$data["date"]."', ".$data["expire"].", ".$data["amount"].", '".$data["currency"]."', '".$data["payments"]."', ".$data["expense"].", ".$data["company"].", ".$data["branch"].", '".$data["concepts"]."', ".$data["notes"].", ".$data["withholding"].", ".$data["globaltax"].", '".$data["statusi"]."', '".$data["statuse"]."')";
            $resultado = $this->connection->query($query);
            if ($resultado == true) {
                $vlr_respuesta = "true";
            } else {
                $vlr_respuesta = $resultado;
            }
            return $vlr_respuesta;
        }
        public function registrar_factura_log($data) {
            $query = "INSERT INTO scc_invoice_log (invoice, username, description, statusi, statuse) VALUES (".$data["invoice"].", '".$data["username"]."', '".$data["description"]."', '".$data["statusi"]."', '".$data["statuse"]."')";
            $resultado = $this->connection->query($query);
            if ($resultado == true) {
                $vlr_respuesta = "true";
            } else {
                $vlr_respuesta = $resultado;
            }
            return $vlr_respuesta;
        }
        public function actualizar_factura($data) {
            $query = "UPDATE scc_invoice set invoice = '".$data["invoice"]."', date = '".$data["date"]."', expire = '".$data["expire"]."' WHERE id = ".$data["id"].";";
            $resultado = $this->connection->query($query);
            if ($resultado == true) {
                $vlr_respuesta = "true";
            } else {
                $vlr_respuesta = $resultado;
            }
            return $vlr_respuesta;
        }
        public function actualizar_factura_orden($data) {
            $query = "UPDATE scc_invoice set orderNumber = '".$data["orderNumber"]."' WHERE id = ".$data["id"].";";
            $resultado = $this->connection->query($query);
            if ($resultado == true) {
                $vlr_respuesta = "true";
            } else {
                $vlr_respuesta = $resultado;
            }
            return $vlr_respuesta;
        }
        public function buscar_facturas($socio) {
            $queryDocumento = "SELECT * FROM scc_invoice WHERE partner = $socio ORDER BY created_at desc;";
            $response = $this->connection->query($queryDocumento);
            $responseData = [];
            while ($rawDocumento = $response->fetch_assoc()) {

                $directorioPDF = '../documentos/'.$rawDocumento['partner'].'/facturas/pdf/';
                $pathPDF = 'documentos/'.$rawDocumento['partner'].'/facturas/pdf/';
                if (is_dir($directorioPDF)) {
                    $archivos = scandir($directorioPDF);
                    $informacionPDF = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioPDF . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionPDF[] = array(
                                'path' => $pathPDF.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $pdf = $informacionPDF;
                } else {
                    $pdf = [];
                }

                $directorioXML = '../documentos/'.$rawDocumento['partner'].'/facturas/xml/';
                $pathXML = 'documentos/'.$rawDocumento['partner'].'/facturas/xml/';
                if (is_dir($directorioXML)) {
                    $archivos = scandir($directorioXML);
                    $informacionXML = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioXML . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionXML[] = array(
                                'path' => $pathXML.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $xml = $informacionXML;
                } else {
                    $xml = [];
                }

                $directorioOther = '../documentos/'.$rawDocumento['partner'].'/facturas/other/';
                $pathOther = 'documentos/'.$rawDocumento['partner'].'/facturas/other/';
                if (is_dir($directorioOther)) {
                    $archivos = scandir($directorioOther);
                    $informacionOther = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioOther . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionOther[] = array(
                                'path' => $pathOther.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $other = $informacionOther;
                } else {
                    $other = [];
                }

                $directorioReceipt = '../documentos/'.$rawDocumento['partner'].'/facturas/receipt/';
                $pathReceipt = 'documentos/'.$rawDocumento['partner'].'/facturas/receipt/';
                if (is_dir($directorioReceipt)) {
                    $archivos = scandir($directorioReceipt);
                    $informacionReceipt = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioReceipt . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionReceipt[] = array(
                                'path' => $pathReceipt.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $recibo = $informacionReceipt;
                } else {
                    $recibo = [];
                }

                $responseData[] = [
                    "id" => $rawDocumento['id'],
                    "partner" => $rawDocumento['partner'],
                    "orderNumber" => $rawDocumento['orderNumber'],
                    "invoice" => $rawDocumento['invoice'],
                    "date" => $rawDocumento['date'],
                    "expire" => $rawDocumento['expire'],
                    "amount" => $rawDocumento['amount'],
                    "currency" => $rawDocumento['currency'],
                    "payments" => $rawDocumento['payments'],
                    "expense" => $rawDocumento['expense'],
                    "company" => $rawDocumento['company'],
                    "branch" => $rawDocumento['branch'],
                    "concepts" => $rawDocumento['concepts'],
                    "notes" => $rawDocumento['notes'],
                    "withholding" => $rawDocumento['withholding'],
                    "globaltax" => $rawDocumento['globaltax'],
                    "purchase" => $rawDocumento['purchase'],
                    "justification" => $rawDocumento['justification'],
                    "statusi" => $rawDocumento['statusi'],
                    "statuse" => $rawDocumento['statuse'],
                    "created_at" => $rawDocumento['created_at'],
                    "updated_at" => $rawDocumento['updated_at'],
                    "deleted_at" => $rawDocumento['deleted_at'],
                    "archivo_pdf" => $pdf,
                    "archivo_xml" => $xml,
                    "archivo_other" => $other,
                    "archivo_receipt" => $recibo,
                ];
            }
            $array = [
                "draw" => 1,
                "recordsTotal" => count($responseData),
                "recordsFiltered" => count($responseData),
                "data" => $responseData
            ];
            return $array;
        }
        public function buscar_facturas_todas() {
            $queryDocumento = "SELECT * FROM vw_scc_invoice WHERE statuse = 'pendiente' ORDER BY created_at desc;";
            $response = $this->connection->query($queryDocumento);
            $responseData = [];
            while ($rawDocumento = $response->fetch_assoc()) {

                $directorioPDF = '../documentos/'.$rawDocumento['partner'].'/facturas/pdf/';
                $pathPDF = 'documentos/'.$rawDocumento['partner'].'/facturas/pdf/';
                if (is_dir($directorioPDF)) {
                    $archivos = scandir($directorioPDF);
                    $informacionPDF = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioPDF . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionPDF[] = array(
                                'path' => $pathPDF.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $pdf = $informacionPDF;
                } else {
                    $pdf = [];
                }

                $directorioXML = '../documentos/'.$rawDocumento['partner'].'/facturas/xml/';
                $pathXML = 'documentos/'.$rawDocumento['partner'].'/facturas/xml/';
                if (is_dir($directorioXML)) {
                    $archivos = scandir($directorioXML);
                    $informacionXML = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioXML . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionXML[] = array(
                                'path' => $pathXML.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $xml = $informacionXML;
                } else {
                    $xml = [];
                }

                $directorioOther = '../documentos/'.$rawDocumento['partner'].'/facturas/other/';
                $pathOther = 'documentos/'.$rawDocumento['partner'].'/facturas/other/';
                if (is_dir($directorioOther)) {
                    $archivos = scandir($directorioOther);
                    $informacionOther = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioOther . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionOther[] = array(
                                'path' => $pathOther.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $other = $informacionOther;
                } else {
                    $other = [];
                }

                $directorioReceipt = '../documentos/'.$rawDocumento['partner'].'/facturas/receipt/';
                $pathReceipt = 'documentos/'.$rawDocumento['partner'].'/facturas/receipt/';
                if (is_dir($directorioReceipt)) {
                    $archivos = scandir($directorioReceipt);
                    $informacionReceipt = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioReceipt . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionReceipt[] = array(
                                'path' => $pathReceipt.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $recibo = $informacionReceipt;
                } else {
                    $recibo = [];
                }

                $responseData[] = [
                    "id" => $rawDocumento['id'],
                    "partner" => $rawDocumento['partner'],
                    "partner_name" => $rawDocumento['partner_name'],
                    "partner_type" => $rawDocumento['partner_type'],
                    "orderNumber" => $rawDocumento['orderNumber'],
                    "invoice" => $rawDocumento['invoice'],
                    "date" => $rawDocumento['date'],
                    "expire" => $rawDocumento['expire'],
                    "amount" => $rawDocumento['amount'],
                    "currency" => $rawDocumento['currency'],
                    "payments" => $rawDocumento['payments'],
                    "expense" => $rawDocumento['expense'],
                    "company" => $rawDocumento['company'],
                    "branch" => $rawDocumento['branch'],
                    "concepts" => $rawDocumento['concepts'],
                    "notes" => $rawDocumento['notes'],
                    "withholding" => $rawDocumento['withholding'],
                    "globaltax" => $rawDocumento['globaltax'],
                    "purchase" => $rawDocumento['purchase'],
                    "justification" => $rawDocumento['justification'],
                    "statusi" => $rawDocumento['statusi'],
                    "statuse" => $rawDocumento['statuse'],
                    "created_at" => $rawDocumento['created_at'],
                    "updated_at" => $rawDocumento['updated_at'],
                    "deleted_at" => $rawDocumento['deleted_at'],
                    "archivo_pdf" => $pdf,
                    "archivo_xml" => $xml,
                    "archivo_other" => $other,
                    "archivo_receipt" => $recibo,
                ];
            }
            $array = [
                "draw" => 1,
                "recordsTotal" => count($responseData),
                "recordsFiltered" => count($responseData),
                "data" => $responseData
            ];
            return $array;
        }
        public function buscar_ultima_factura($socio) {
            $queryDocumento = "SELECT * FROM scc_invoice WHERE partner = $socio ORDER BY created_at desc limit 1;";
            $response = $this->connection->query($queryDocumento);
            $responseData = [];
            while ($rawDocumento = $response->fetch_assoc()) {

                $directorioPDF = '../documentos/'.$rawDocumento['partner'].'/facturas/pdf/';
                $pathPDF = 'documentos/'.$rawDocumento['partner'].'/facturas/pdf/';
                if (is_dir($directorioPDF)) {
                    $archivos = scandir($directorioPDF);
                    $informacionPDF = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioPDF . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionPDF[] = array(
                                'path' => $pathPDF.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $pdf = $informacionPDF;
                } else {
                    $pdf = [];
                }

                $directorioXML = '../documentos/'.$rawDocumento['partner'].'/facturas/xml/';
                $pathXML = 'documentos/'.$rawDocumento['partner'].'/facturas/xml/';
                if (is_dir($directorioXML)) {
                    $archivos = scandir($directorioXML);
                    $informacionXML = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioXML . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionXML[] = array(
                                'path' => $pathXML.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $xml = $informacionXML;
                } else {
                    $xml = [];
                }

                $directorioOther = '../documentos/'.$rawDocumento['partner'].'/facturas/other/';
                $pathOther = 'documentos/'.$rawDocumento['partner'].'/facturas/other/';
                if (is_dir($directorioOther)) {
                    $archivos = scandir($directorioOther);
                    $informacionOther = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioOther . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionOther[] = array(
                                'path' => $pathOther.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $other = $informacionOther;
                } else {
                    $other = [];
                }

                $directorioReceipt = '../documentos/'.$rawDocumento['partner'].'/facturas/receipt/';
                $pathReceipt = 'documentos/'.$rawDocumento['partner'].'/facturas/receipt/';
                if (is_dir($directorioReceipt)) {
                    $archivos = scandir($directorioReceipt);
                    $informacionReceipt = array();
                    foreach ($archivos as $archivo) {
                        if ($archivo != "." && $archivo != "..") {
                            $ruta = realpath($directorioReceipt . '/' . $archivo);
                            $size = filesize($ruta);
                            $nombre = $archivo;

                            $informacionReceipt[] = array(
                                'path' => $pathReceipt.$nombre,
                                'size' => $size,
                                'name' => $nombre
                            );
                        }
                    }
                    $recibo = $informacionReceipt;
                } else {
                    $recibo = [];
                }

                $responseData[] = [
                    "id" => $rawDocumento['id'],
                    "partner" => $rawDocumento['partner'],
                    "invoice" => $rawDocumento['invoice'],
                    "date" => $rawDocumento['date'],
                    "expire" => $rawDocumento['expire'],
                    "amount" => $rawDocumento['amount'],
                    "currency" => $rawDocumento['currency'],
                    "payments" => $rawDocumento['payments'],
                    "expense" => $rawDocumento['expense'],
                    "company" => $rawDocumento['company'],
                    "branch" => $rawDocumento['branch'],
                    "concepts" => $rawDocumento['concepts'],
                    "notes" => $rawDocumento['notes'],
                    "withholding" => $rawDocumento['withholding'],
                    "globaltax" => $rawDocumento['globaltax'],
                    "purchase" => $rawDocumento['purchase'],
                    "justification" => $rawDocumento['justification'],
                    "statusi" => $rawDocumento['statusi'],
                    "statuse" => $rawDocumento['statuse'],
                    "created_at" => $rawDocumento['created_at'],
                    "updated_at" => $rawDocumento['updated_at'],
                    "deleted_at" => $rawDocumento['deleted_at'],
                    "archivo_pdf" => $pdf,
                    "archivo_xml" => $xml,
                    "archivo_other" => $other,
                    "archivo_receipt" => $recibo,
                ];
            }
            $array = [
                "draw" => 1,
                "recordsTotal" => count($responseData),
                "recordsFiltered" => count($responseData),
                "data" => $responseData
            ];
            return $array;
        }
    }
