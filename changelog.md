# Changelog

## 2023-07-19

### LOGIN - Recuperar contraseña
- <span style="color:green">ADDED:</span> Se agregó archivo para verificar la existencia de un correo (`controller/validarCorreo.php`).
- <span style="color:green">ADDED:</span> Se agregó función "validarCorreo" en model/contactos.php.
- <span style="color:green">ADDED:</span> Se agregó validación de formulario para solicitar recuperar contraseña.
- <span style="color:gold">MODIFY:</span> Cambio a model/contactos.php, función "`recuperar_contrasena`", se eliminó "echo" de la contraseña.
- <span style="color:darkgray">DEPRECATED:</span> Ya no se utiliza la función "`login`".
- <span style="color:darkgray">DEPRECATED:</span> Ya no se utiliza la función "`disLogin`".

### LOGIN - Sesión
- <span style="color:green">ADDED:</span> Se agregó validación de formulario para las credenciales de sesión.
- <span style="color:gold">MODIFY:</span> Se modificó la manera en la que se valida el inicio de sesión.
- <span style="color:darkgray">DEPRECATED:</span> Ya no se utiliza la función "`recuperarContrasena`".

### LOGIN - Crear cuenta
- <span style="color:green">ADDED:</span> Se agregó validación del formulario de registro.
- <span style="color:gold">MODIFY:</span> Se modificó la manera en la que se validará el formulario de registro.
- <span style="color:gold">MODIFY:</span> Cambio de nombre de función de "`envioDeCorreo`" a "`enviarCorreo`".
- <span style="color:darkgray">DEPRECATED:</span> Ya no se utiliza la función "`crearCuenta`".

## 2023-07-20

### SOCIOS
- <span style="color:gold">MODIFY:</span> Se optimizó la función que genera la fecha en (`socios-docu.html`).
- <span style="color:gold">MODIFY:</span> Se optimizó la función que genera las traducciones.
- <span style="color:gold">MODIFY:</span> Se cambiaron las card de la información.
- <span style="color:gold">MODIFY:</span> Se cambió el diseño del modal de "view document".
- <span style="color:gold">MODIFY:</span> Se cambió el diseño del modal de "Bitácora".

### CONTACTOS
- <span style="color:green">ADDED:</span> Se agregó validación de formulario para el registro de un nuevo contacto.
- <span style="color:green">ADDED:</span> Se agregó validación de formulario para la actualización de un contacto.
- <span style="color:gold">MODIFY:</span> Se cambio el diseño de la tabla ligeramente.
- <span style="color:gold">MODIFY:</span> Se cambio el diseño de la confirmación de "`Eliminar`".

### INFORMACIÓN
- <span style="color:green">ADDED:</span> Se agrego un bloqueo para la sección de información general.

### DASHBOARD
- <span style="color:green">ADDED:</span> Se agrego un bloqueo para la sección de información general.
- <span style="color:green">ADDED:</span> Se agrego un bloqueo para la sección de notificaciones.
- <span style="color:green">ADDED:</span> Se agrego un bloqueo para la sección de documentos.

### PROVEEDORES
- <span style="color:green">ADDED:</span> Se agregaron funciones para el filtro de proveedores (`select2`).
- <span style="color:gold">MODIFY:</span> Se limpio/optimizó la función (`cargarTablaProvedores`).
- <span style="color:gold">MODIFY:</span> Se limpio/optimizó la función (`traerProvedores`).
- <span style="color:gold">MODIFY:</span> Se limpio/optimizó la función (`obtenerPaises`).
- <span style="color:gold">MODIFY:</span> Se limpio/optimizó la función (`cargarTablaProvedores_filtro`).

Agregar fecha de vencimiento manual para los documentos
Confirmacion de eliminacion de datos

Fisica, Moral, extranjero
Filtros persistentes.
verificar el spanglish
codigo y nombre no repetirse en el apartado administrativo al agregar un documento
