let arrUsuarios_ = [{
    'id'                    : 1,
    'nombre'                : 'LESLIE ARLETH',
    'apellidos'             : 'VALDEZ BUITIMEA',
    'nombre_cmp'            : 'LESLIE ARLETH VALDEZ BUITIMEA',
    'razon_scl'             : '',
    'regimen_cpt'           : '',
    'nombre_cmr'            : 'Acromn Tec',
    'email'                 : 'corpcenter@acromntec.com',
    'telefono'              : '631-999-0000',
    'colonia'               : '',
    'calle'                 : '',
    'numero_int'            : '',
    'numero_ext'            : '',
    'codigo_pst'            : '',
    'pais'                  : 'Mexico',
    'estado'                : 'Sonora',
    'ciudad'                : 'Nogales',
    'tipo_prv'              : 'Persona fisica',
    'identificador_fsc'     : 'xx0xx0x0x0x',
    'linea_ngc'             : 'Tecnologias de la informacion',
    'logo'                  : '',
    'fecha_crc'             : '',
    'fecha_dsc'             : '',
    'activo'                : 'activo'
},{
    'id'                    : 2,
    'nombre'                : '',
    'apellidos'             : '',
    'razon_scl'             : '',
    'rgimen_cpt'            : '',
    'nombre_cmr'            : '',
    'email'                 : '',
    'telefono'              : '',
    'colonia'               : '',
    'calle'                 : '',
    'numero_int'            : '',
    'numero_ext'            : '',
    'codigo_pst'            : '',
    'pais'                  : '',
    'estado'                : '',
    'ciudad'                : '',
    'tipo_prv'              : '',
    'identificador_fsc'     : '',
    'linea_ngc'             : '',
    'logo'                  : '',
    'fecha_crc'             : '',
    'fecha_dsc'             : '',
    'activo'                : ''
}];

function buscarScs(_id, _razon_scl, _tipo_prv, _linea_ngc){
    var usuario;

    for(var i=0; i<arrUsuarios_.length; i++) {
        if(_id == arrUsuarios_[i]['id']){
            usuario = arrUsuarios_[i];
            break;
        }
        else if(_nombre == arrUsuarios_[i]['nombre']){
            usuario = arrUsuarios_[i];
            break;
        }
        else if(_correo == arrUsuarios_[i]['correo'] && _contrasena == arrUsuarios_[i]['contrasena']){
            usuario = arrUsuarios_[i];
            break;
        }
    }

    return usuario;
}