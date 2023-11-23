let id_socio = localStorage.getItem("socioComercial_ID");
let indicador_G_U = "";
let id_contacto;
let GOA = 1;

function validarParametros(nombre, apellido, email, _password, contrasena2, telefono, puesto) {
    let errores = [];
    if (!nombre) {
        errores.push('The Name field is required.');
    }
    if (!apellido) {
        errores.push('The Last Name field is required.');
    }
    if (!email) {
        errores.push('The Email field is required.');
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errores.push('The Email field is invalid.');
    }
    if (!_password) {
        errores.push('The Password field is required.');
    } else if (_password != contrasena2) {
        errores.push('The Password field is required.');
    }


    if (!telefono) {
        errores.push('The Phone field is required.');
    }
    if (errores.length > 0) {
        return errores;
    } else {
        return true;
    }
}

function contacto_i_a() {
    const socio = id_contacto;
    const nombre = inpCAName.value;
    const apellido = inpCALastName.value;
    const email = inpCAEmail.value;
    const contrasena = inpCAPassword1.value;
    const contrasena2 = inpCAPassword1.value;
    const telefono = inpCAMovil.value;
    const puesto = inpCAPuesto.value;
    let resultado = true;

    if (resultado === true) {
        let datos = {
            socio: socio,
            nombre: nombre,
            apellidos: apellido,
            email: email,
            contrasena: contrasena,
            telefono: telefono,
            puesto: puesto
        };
        $.ajax({
            url: 'controller/update_contacto.php',
            type: 'GET',
            data: datos,
            success: function (respuesta) {
                toastr.success("Update information");
                tablaSocios();
                $("#mdlNuevo").modal("hide");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });

    } else {
        toastr.warning(resultado.join('\n'));
    }

}


function recibirDatos() {
    let datos = {
        socio: id_socio,
    };
    $.ajax({
        url: 'controller/traerContacto.php',
        method: 'POST',
        data: {
            id: id_socio
        },
        dataType: 'json',
        success: function (respuesta) {
            document.getElementById('mostrarCantidad').innerText = respuesta.length;
            datos = respuesta;
            $('#nombre').val(datos[0].nombre);
            $('#apellido').val(datos[0].apellidos);
            $('#email').val(datos[0].email);
            $('#contrasena').val(datos[0].contrasena);
            $('#contrasena2').val(datos[0].contrasena);
            $('#telefono').val(datos[0].telefono);
            $('#puesto').val(datos[0].puesto);
            id_contacto = datos[0].id;
            if (datos[0].nombre != "") {
                indicador_G_U = "0";
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

}

recibirDatos()

const frmRegistro = document.getElementById("frmRegistro");
const inpCAName = frmRegistro.querySelector("#inpCAName");
const inpCALastName = frmRegistro.querySelector("#inpCALastName");
const inpCAEmail = frmRegistro.querySelector("#inpCAEmail");
const inpCAMovil = frmRegistro.querySelector("#inpCAMovil");
const inpCAPassword1 = frmRegistro.querySelector("#inpCAPassword1");
const inpCAPuesto = frmRegistro.querySelector("#inpCAPuesto");
const btnRegistrar = document.getElementById("btnRegistrar");
const concatoValidation = FormValidation.formValidation(frmRegistro, {
    fields: {
        inpCAName: {
            validators: {
                notEmpty: {
                    message: 'Name is required'
                }
            }
        },
        inpCALastName: {
            validators: {
                notEmpty: {
                    message: 'Last name is required'
                }
            }
        },
        inpCAEmail: {
            validators: {
                emailAddress: {
                    message: 'The value is not a valid email address'
                },
                notEmpty: {
                    message: 'Email address is required'
                },
                callback: {
                    message: 'Email address cannot be from joffroy.com domain',
                    callback: function (value) {
                        let domain = value.value.split("@")[1];
                        return (domain !== "joffroy.com");
                    }
                }
            }
        },
        inpCAPassword1: {
            validators: {
                notEmpty: {
                    message: 'Password is required'
                }
            }
        },
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger,
        bootstrap: new FormValidation.plugins.Bootstrap5({rowSelector: ".fv-row"})
    }
});
btnRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    if (concatoValidation) {
        concatoValidation.validate().then((status) => {
            if (status === 'Valid') {
                btnRegistrar.setAttribute('data-kt-indicator', 'on');
                btnRegistrar.disabled = true;
                setTimeout(function () {
                    btnRegistrar.removeAttribute('data-kt-indicator');
                    btnRegistrar.disabled = false;
                    guardarOActualizar();
                }, 1000);
            } else {
                toastr.error("Enter the requested information", "Error");
            }
        });
    }
});

function registrarContacto() {

    let parametrosCuenta_ = {
        "socio": id_socio,
        "nombre": inpCAName.value,
        "apellidos": inpCALastName.value,
        "email": inpCAEmail.value,
        "contrasena": inpCAPassword1.value,
        "telefono": inpCAMovil.value,
        "puesto": inpCAPuesto.value,
        "activo": 'confirmar'
    };

    $.ajax({
        async: false,
        type: "GET",
        url: 'controller/insertContacto.php',
        data: parametrosCuenta_,
        success: function (data) {
            toastr.success("Save information");
            tablaSocios();
            $("#mdlNuevo").modal("hide");
        }
    });

}

function enviarCorreo(correo) {
    $.ajax({
        url: 'controller/EnviarCorreo.php?correo=' + correo,
        type: "GET",
        dataType: "json",
        success: (response) => {
            console.log(response);
        },
        error: (xhr, status, error) => {
            console.error("Error en la solicitud Ajax: " + status);
            console.error(xhr.responseText);
        }
    });
}

function tablaSocios() {
    $.ajax({
        url: 'controller/traerLosContacto.php',
        type: 'POST',
        data: {
            id: id_socio
        },
        dataType: 'json',
        success: function (response) {
            let tbody = $('#proveedoresTbody');
            tbody.html("");
            $.each(response, function (index, data) {
                let row = $('<tr class="fw-normal"></tr>');
                let column1 = $('<td></td>').html(data.nombre + " " + data.apellidos);
                let column2 = $('<td></td>').html(data.email);
                let column3 = $('<td></td>').html(data.telefono);
                let column4 = $('<td></td>').html(data.puesto);
                let column5 = $('<td></td>').html('<div class="d-flex justify-content-end flex-shrink-0"><a  onclick=' + "'" + 'llenarDatos("' + data.nombre + '", "' + data.apellidos + '", "' + data.email + '", "' + data.telefono + '", "' + data.contrasena + '", "' + data.puesto + '", "' + data.id + '");' + "'" + '" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"><span class="svg-icon svg-icon-3" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black" /><path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black" /></svg></span></a>' +
                    '<a  onclick="borrarContacto(' + data.id + ')" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"><span class="svg-icon svg-icon-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"></path><path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"></path><path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"></path></svg></span></a></div>');
                row.append(column1, column2, column3, column4, column5);
                tbody.append(row);
            });

        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });


}


tablaSocios()


function llenarDatos(nombre, apellido, email, movil, password, puesto, id_contacto_) {
    inpCAName.value = nombre;
    inpCALastName.value = apellido;
    inpCAEmail.value = email;
    inpCAMovil.value = movil;
    inpCAPassword1.value = password;
    inpCAPuesto.value = puesto;
    id_contacto = id_contacto_;
    GOA = 2;
    $("#mdlNuevo").modal("show");
    document.getElementById("inpCAPassword1_mostrar").style.display = "none";
}

function guardarOActualizar() {
    if (GOA === 1) {
        registrarContacto();
    } else {
        contacto_i_a();
    }
}

function abrirModal() {
    GOA = 1;
    document.getElementById("inpCAPassword1_mostrar").style.display = "block";
    inpCAName.value = "";
    inpCALastName.value = "";
    inpCAEmail.value = "";
    inpCAPassword1.value = "";
    inpCAMovil.value = "";
    inpCAPuesto.value = "";

    $("#mdlNuevo").modal("show");

}

function borrarContacto(valor_del_id) {
    id_contacto = valor_del_id;

    Swal.fire({
        title: 'Esta seguro?',
        text: 'Desea dar de baja este contacto?',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: `No`,
        buttonsStyling: false,
        customClass: {confirmButton: "btn btn-sm btn-danger w-80px", cancelButton: "btn btn-sm btn-active-light w-80px"}
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'controller/BorrarContacto.php',
                method: 'GET',
                data: {id: id_contacto},
                success: function (response) {
                    $("#confirmModal").modal("hide");
                    tablaSocios();
                },
                error: function (xhr, status, error) {
                    $("#confirmModal").modal("hide");
                    tablaSocios();
                }
            });
        }
    });
}

function confirmacionDeBorrar() {
    $.ajax({
        url: 'controller/BorrarContacto.php',
        method: 'GET',
        data: {id: id_contacto},
        success: function (response) {
            $("#confirmModal").modal("hide");
            tablaSocios();
        },
        error: function (xhr, status, error) {
            $("#confirmModal").modal("hide");
            tablaSocios();
        }
    });
}


function cargarDatos() {
    $.ajax({
        url: 'controller/traerUnSocio.php',
        type: 'POST',
        data: {id: id_socio},
        dataType: 'json',
        success: function (data) {
            if (data.length > 0) {
                getDocuments(data[0].tp_proveedor);
            }
        },
        error: function (xhr, status, error) {
            console.error('Error en la petición Ajax:', error);
        }
    });
}

cargarDatos();

function getDocuments(tipoProveedor) {
    $.ajax({
        url: 'controller/obtener-documentos.php',
        type: 'POST',
        data: {
            id: localStorage.getItem('socioComercial_ID')
        },
        dataType: 'json',
        success: function (response) {
            let contador = 0;
            response.forEach(documento => {
                if (tipoProveedor === "1" && documento.fisica === true) {
                    contador++;
                } else if (tipoProveedor === "2" && documento.moral === true) {
                    contador++;
                }
            });
            document.getElementById('count-documents').innerHTML = `<span class="position-absolute top-0 start-100 translate-middle badge badge-circle badge-danger text-white">${contador}</span>`;
        }
    });
}
