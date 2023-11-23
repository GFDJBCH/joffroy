let arrUsuarios_ = [{
    'id': 1,
    'nombre': 'Usuario de prueba',
    'seudonimo': 'Test',
    'correo': 'test@joffroy.com',
    'contrasena': 'j0ffr0y/',
    'puesto': 'Programador',
    'imagen': '',
    'tipo': 'joffroy'
}, {
    'id': 2,
    'nombre': 'Usuario de prueba',
    'seudonimo': 'Test',
    'correo': 'test@test.com',
    'puesto': 'Gerente general',
    'contrasena': 'j0ffr0y/',
    'imagen': '',
    'tipo': 'proveedor'
}];

function buscarUsuarioCC(_id, _nombre, _correo, _contrasena) {
    let usuario;
    for (let i = 0; i < arrUsuarios_.length; i++) {
        if (_id === arrUsuarios_[i]['id']) {
            usuario = arrUsuarios_[i];
            break;
        } else if (_nombre === arrUsuarios_[i]['nombre']) {
            usuario = arrUsuarios_[i];
            break;
        } else if (_correo === arrUsuarios_[i]['correo'] && _contrasena === arrUsuarios_[i]['contrasena']) {
            usuario = arrUsuarios_[i];
            break;
        }
    }
    return usuario;
}
