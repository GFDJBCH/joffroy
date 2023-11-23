<?php
    class Documento {
        private $connection;
        public function __construct() {
            require '../config/database.php';
            $this->connection = $mysqli;
        }
        public function validar_codigo($datos) {
            $query = "SELECT count(id) as count FROM scc_documentos WHERE codigo = '".$datos['codigo']."' AND id != ".(is_null($datos['id'])? 0 : $datos['id']).";";
            $response = $this->connection->query($query);
            $raw = $response->fetch_assoc();
            if ((int)$raw['count'] != 0) {
                return true;
            } else {
                return false;
            }
        }
        public function buscar_documento($id) {
            $queryDocumento = "SELECT * FROM scc_documentos WHERE id = $id;";
            $responseDocumento = $this->connection->query($queryDocumento);
            $rawDocumento = $responseDocumento->fetch_assoc();

            $dataDocumento = [
                "id" => $rawDocumento['id'],
                "nombre" => $rawDocumento['nombre'],
                "nombre_ingles" => $rawDocumento['nombre_ingles'],
                "descripcion" => $rawDocumento['descripcion'],
                "description_english" => $rawDocumento['description_english'],
                "codigo" => $rawDocumento['codigo'],
                "fisica" => (bool)$rawDocumento['fisica'],
                "fisica_periodo" => $rawDocumento['fisica_periodo'],
                "fisica_notificacion" => $rawDocumento['fisica_notificacion'],
                "moral" => (bool)$rawDocumento['moral'],
                "moral_periodo" => $rawDocumento['moral_periodo'],
                "moral_notificacion" => $rawDocumento['moral_notificacion'],
                "extranjero" => (bool)$rawDocumento['extranjero'],
                "extranjero_periodo" => $rawDocumento['extranjero_periodo'],
                "extranjero_notificacion" => $rawDocumento['extranjero_notificacion'],
                "fch_creacion" => $rawDocumento['fch_creacion'],
                "fch_borrar" => $rawDocumento['fch_borrar'],
                "negocios" => json_decode($rawDocumento['unidades']),
                "sucursales" => json_decode($rawDocumento['sucursales']),
                "flujos" => json_decode($rawDocumento['flujos']),
            ];
            return $dataDocumento;
        }
        public function buscar_documentos($filtro) {
            $queryDocumento = "SELECT * FROM scc_documentos WHERE $filtro ORDER BY fch_creacion desc, codigo;";
            $responseDocumento = $this->connection->query($queryDocumento);
            $responseDocumentos = [];
            while ($rawDocumento = $responseDocumento->fetch_assoc()) {
                $responseDocumentos[] = [
                    "id" => $rawDocumento['id'],
                    "nombre" => $rawDocumento['nombre'],
                    "nombre_ingles" => $rawDocumento['nombre_ingles'],
                    "descripcion" => $rawDocumento['descripcion'],
                    "description_english" => $rawDocumento['description_english'],
                    "codigo" => $rawDocumento['codigo'],
                    "fisica" => (bool)$rawDocumento['fisica'],
                    "fisica_periodo" => $rawDocumento['fisica_periodo'],
                    "fisica_notificacion" => $rawDocumento['fisica_notificacion'],
                    "moral" => (bool)$rawDocumento['moral'],
                    "moral_periodo" => $rawDocumento['moral_periodo'],
                    "moral_notificacion" => $rawDocumento['moral_notificacion'],
                    "extranjero" => (bool)$rawDocumento['extranjero'],
                    "extranjero_periodo" => $rawDocumento['extranjero_periodo'],
                    "extranjero_notificacion" => $rawDocumento['extranjero_notificacion'],
                    "fch_creacion" => $rawDocumento['fch_creacion'],
                    "fch_borrar" => $rawDocumento['fch_borrar'],
                    "negocios" => json_decode($rawDocumento['unidades']),
                    "sucursales" => json_decode($rawDocumento['sucursales']),
                    "flujos" => json_decode($rawDocumento['flujos']),
                ];
            }
            return $responseDocumentos;
        }
        public function registrar_documento($datos)
        {
            $query = "insert into scc_documentos (nombre, nombre_ingles, descripcion, description_english, codigo, fisica, moral, extranjero, unidades, sucursales, flujos) values ('".$datos['nombre']."', '".$datos['nombre_ingles']."', '".$datos['descripcion']."', '".$datos['description_english']."', '".$datos['codigo']."', ".$datos['fisica'].", ".$datos['moral'].", ".$datos['extranjero'].", '".$datos['unidades']."', '".$datos['sucursales']."', '".$datos['flujos']."');";
            return $this->connection->query($query);
        }
        public function actualizar_documento($datos)
        {
            $query = "update scc_documentos set nombre = '".$datos['nombre']."', nombre_ingles = '".$datos['nombre_ingles']."', descripcion = '".$datos['descripcion']."', description_english = '".$datos['description_english']."', codigo = '".$datos['codigo']."', fisica = ".$datos['fisica'].", moral = ".$datos['moral'].", extranjero = ".$datos['extranjero'].", unidades = '".$datos['unidades']."', sucursales = '".$datos['sucursales']."', flujos = '".$datos['flujos']."' where id = ".$datos['id'].";";
            return $this->connection->query($query);
        }
        public function eliminar_documento($id)
        {
            $query = "update scc_documentos set fch_borrar = current_timestamp where id = $id;";
            return $this->connection->query($query);
        }

        public function obtener_documentos_faltantes($socio) {
            $queryDocumento = "SELECT d.* FROM scc_documentos d LEFT JOIN _EntidadSocioDocumentos sd ON d.id = sd.documento AND sd.socio = $socio WHERE sd.documento IS NULL;";
            $responseDocumento = $this->connection->query($queryDocumento);
            $responseDocumentos = [];
            while ($rawDocumento = $responseDocumento->fetch_assoc()) {
                $responseDocumentos[] = [
                    "id" => $rawDocumento['id'],
                    "nombre" => $rawDocumento['nombre'],
                    "nombre_ingles" => $rawDocumento['nombre_ingles'],
                    "descripcion" => $rawDocumento['descripcion'],
                    "description_english" => $rawDocumento['description_english'],
                    "codigo" => $rawDocumento['codigo'],
                    "fisica" => (bool)$rawDocumento['fisica'],
                    "fisica_periodo" => $rawDocumento['fisica_periodo'],
                    "fisica_notificacion" => $rawDocumento['fisica_notificacion'],
                    "moral" => (bool)$rawDocumento['moral'],
                    "moral_periodo" => $rawDocumento['moral_periodo'],
                    "moral_notificacion" => $rawDocumento['moral_notificacion'],
                    "extranjero" => (bool)$rawDocumento['extranjero'],
                    "extranjero_periodo" => $rawDocumento['extranjero_periodo'],
                    "extranjero_notificacion" => $rawDocumento['extranjero_notificacion'],
                    "fch_creacion" => $rawDocumento['fch_creacion'],
                    "fch_borrar" => $rawDocumento['fch_borrar'],
                    "negocios" => json_decode($rawDocumento['unidades']),
                    "sucursales" => json_decode($rawDocumento['sucursales']),
                    "flujos" => json_decode($rawDocumento['flujos']),
                ];
            }
            return $responseDocumentos;
        }
        public function obtener_documento_socio($socio, $documento) {
            $queryDocumento = "select * from _EntidadSocioDocumentos where socio = $socio and documento = $documento;";
            $responseDocumento = $this->connection->query($queryDocumento);
            $responseDocumentos = [];
            while ($rawDocumento = $responseDocumento->fetch_assoc()) {
                $responseDocumentos[] = [
                    "id" => $rawDocumento['id'],
                    "socio" => $rawDocumento['socio'],
                    "documento" => $rawDocumento['documento'],
                    "nombre" => $rawDocumento['nombre'],
                    "emision" => $rawDocumento['emision'],
                    "vigencia" => $rawDocumento['vigencia'],
                    "url" => $rawDocumento['url'],
                    "fch_creacion" => $rawDocumento['fch_creacion'],
                    "estado" => $rawDocumento['estado']
                ];
            }
            return $responseDocumentos;
        }
    }
