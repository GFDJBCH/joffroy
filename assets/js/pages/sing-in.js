let inpCorreo = document.getElementById("inpCorreo");
let inpContrasena = document.getElementById("inpContrasena");

let frmCrearCuenta = document.getElementById("frmCrearCuenta");
let inpCAName = frmCrearCuenta.querySelector("#inpCAName");
let inpCALastName = frmCrearCuenta.querySelector("#inpCALastName");
let inpCAEmail = frmCrearCuenta.querySelector("#inpCAEmail");
let inpCAPassword1 = frmCrearCuenta.querySelector("#inpCAPassword1");
let inpCAPassword2 = frmCrearCuenta.querySelector("#inpCAPassword2");

let inpSecCode = document.getElementById("inpSecCode");

const frmLogin = document.getElementById("frmLogin");
const btnSign = document.getElementById("btnSign");
let inpClrT_ = "#f5f8fa";
let inpClrF_ = "#eef3f7";
let parametrosCuenta_;


//#region Iniciar sesión
const loginValidation = FormValidation.formValidation(frmLogin, {
    fields: {
        email: {
            validators: {
                emailAddress: {
                    message: 'The value is not a valid email address'
                },
                notEmpty: {
                    message: 'Email address is required'
                },
                /*callback: {
                    message: 'Email address must be from joffroy.com domain',
                    callback: function(value) {
                        let domain = value.value.split("@")[1];
                        return (domain === "joffroy.com");
                    }
                }*/
            }
        }, password: {validators: {notEmpty: {message: "Password is required"}}}
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger,
        bootstrap: new FormValidation.plugins.Bootstrap5({rowSelector: ".fv-row"})
    }
});
btnSign.addEventListener("click", (e) => {
    e.preventDefault();
    if (loginValidation) {
        loginValidation.validate().then(function (status) {
            if (status === 'Valid') {
                btnSign.setAttribute('data-kt-indicator', 'on');
                btnSign.disabled = true;
                setTimeout(async function () {
                    btnSign.removeAttribute('data-kt-indicator');
                    btnSign.disabled = false;
                    $.ajax({
                        type: "POST",
                        url: 'controller/loginController.php',
                        data: {
                            action: "iniciar_sesion_empleado_controller",
                            correo: inpCorreo.value,
                            contrasena: inpContrasena.value
                        },
                        dataType: "json",
                        success: (response) => {
                            Swal.fire({
                                text: response.message,
                                buttonsStyling: false,
                                showConfirmButton: response.status !== "success",
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: `btn btn-danger`
                                },
                                timer: 2500
                            });
                            if (response.status === "success") {
                                location.href = response.redirect_url;
                            }
                        },
                        error: (error) => {
                            Swal.fire({
                                text: 'Incorrect user or password',
                                icon: "error",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-danger"
                                },
                                timer: 2500
                            });
                        }
                    });
                }, 1000);
            } else {
                toastr.error("Enter the requested information", "Error");
            }
        });
    }
});
//#endregion
//#region Recuperar contraseña
const frmReset = document.getElementById("frmReset");
const btnReset = document.getElementById("btnReset");
const resetValidation = FormValidation.formValidation(frmReset, {
    fields: {
        email: {
            validators: {
                emailAddress: {
                    message: 'The value is not a valid email address'
                },
                notEmpty: {
                    message: 'Email address is required'
                }
            }
        }
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger,
        bootstrap: new FormValidation.plugins.Bootstrap5({rowSelector: ".fv-row"})
    }
});
btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    if (resetValidation) {
        resetValidation.validate().then((status) => {
            if (status === 'Valid') {
                btnReset.setAttribute('data-kt-indicator', 'on');
                btnReset.disabled = true;
                setTimeout(function () {
                    btnReset.removeAttribute('data-kt-indicator');
                    btnReset.disabled = false;
                    const correo = frmReset.querySelector('#emailDeRecuperacion').value;
                    $.ajax({
                        url: 'controller/validarCorreo.php',
                        type: 'POST',
                        data: {correo: correo},
                        dataType: 'json',
                        success: (response) => {
                            if (response.status === "ok") {
                                document.getElementById('show_email_recovery').textContent = correo;
                                $('#mdlPasswordRecovery').modal('show');
                            } else {
                                Swal.fire({
                                    text: response.message,
                                    icon: "error",
                                    buttonsStyling: false,
                                    confirmButtonText: "Ok, got it!",
                                    customClass: {
                                        confirmButton: "btn btn-danger"
                                    },
                                    timer: 2500
                                });
                            }
                        },
                        error: (xhr, status, error) => {
                            Swal.fire({
                                text: "Ocurrió un error, intente más tarde.",
                                icon: "error",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-danger"
                                },
                                timer: 2500
                            });
                        }
                    });
                }, 1000);
            } else {
                toastr.error("Enter the requested information", "Error");
            }
        });
    }
});
//#endregion
//#region Crear cuenta
const btnCrear = document.getElementById("btnCrear");
const crearValidation = FormValidation.formValidation(frmCrearCuenta, {
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
        inpCAPassword2: {
            validators: {
                notEmpty: {
                    message: 'Confirm password is required'
                },
                identical: {
                    compare: function () {
                        return frmCrearCuenta.querySelector('[name="inpCAPassword1"]').value;
                    },
                    message: 'The password and confirm password do not match'
                }
            }
        },
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger,
        bootstrap: new FormValidation.plugins.Bootstrap5({rowSelector: ".fv-row"})
    }
});
btnCrear.addEventListener("click", (e) => {
    e.preventDefault();
    if (crearValidation) {
        crearValidation.validate().then((status) => {
            if (status === 'Valid') {
                btnCrear.setAttribute('data-kt-indicator', 'on');
                btnCrear.disabled = true;
                setTimeout(function () {
                    btnCrear.removeAttribute('data-kt-indicator');
                    btnCrear.disabled = false;
                    parametrosCuenta_ = {
                        socio: 0,
                        nombre: inpCAName.value,
                        apellidos: inpCALastName.value,
                        email: inpCAEmail.value,
                        contrasena: inpCAPassword1.value,
                        telefono: '',
                        puesto: '',
                        activo: 'sin confirmar'
                    };
                    generate();
                    $('#mdlCaptcha').modal('show');
                }, 1000);
            } else {
                toastr.error("Enter the requested information", "Error");
            }
        });
    }
});

//#endregion

function login() {
    disLogin(true);
    if (inpCorreo.value === "" || inpContrasena.value === "") {
        toastr.error("Enter the requested information", "Empty fields");
    } else {
        let usuario = inpCorreo;
        let domain = usuario.value.split('@')[1];
        if (domain === "joffroy.com") {
            parametros = {
                "id": '',
                'nombre': '',
                'apellidos': '',
                'correo': inpCorreo.value,
                'contrasena': inpContrasena.value,
                'id_puesto': '',
                'puesto': '',
                'fch_creacion': '',
                'estado': ''
            };
            $.ajax('https://pro.joffroy.com/Token', {
                type: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                crossDomain: true,
                data: {grant_type: "password", username: inpCorreo.value, password: inpContrasena.value},
                success: function (data, status, xhr) {
                    let respuesta = data;
                    let domain = inpCorreo.value.split('@')[1];
                    localStorage.setItem("socioComercial_ID", respuesta.access_token);
                    location.href = 'proveedores.html';
                },
                error: function (jqXhr, textStatus, errorMessage) {
                    Swal.fire({
                        position: '',
                        icon: 'error',
                        title: jqXhr.responseJSON.error_description,
                        showConfirmButton: false,
                        timer: 2500
                    })
                    myModal.hide();
                }
            });
        } else {
            parametros = {
                'correo': inpCorreo.value,
                'contrasena': inpContrasena.value,
            };
            $.ajax({
                async: false,
                type: "GET",
                url: 'controller/singIn_socio.php',
                data: parametros,
                success: function (data) {
                    respuesta = data;
                    let domain = inpCorreo.value.split('@')[1];
                    localStorage.setItem("socioComercial_ID", respuesta.socio);
                    localStorage.setItem("socioComercial_Tipo", "socio");
                    location.href = 'socios-docu.html';
                }
            });
        }
    }
    disLogin(false);
}

function disLogin(_dis) {
    inpCorreo.disabled = _dis;
    inpContrasena.disabled = _dis;
    btnSign.disabled = _dis;
    if (_dis === true) {
        inpCorreo.style.backgroundColor = inpClrT_;
        inpContrasena.style.backgroundColor = inpClrT_;
    } else {
        inpCorreo.style.backgroundColor = inpClrF_;
        inpContrasena.style.backgroundColor = inpClrF_;
    }
}

function createAccount() {
    document.getElementById('secc-left').className = 'transition h-100 w-50 d-flex justify-content-center align-content-center p-10';
    document.getElementById('secc-right').className = 'transition h-100 w-50 d-flex align-items-md-center bg-blue-pr';

    document.getElementById('secc-login').style.display = 'none';
    document.getElementById('secc-account').style.display = '';

    document.getElementById('secc-account').className = 'transition w-lg-700px p-10 p-lg-15 mx-auto';
}

function cancelAccount() {
    document.getElementById('secc-left').className = 'transition h-100 w-75 d-flex justify-content-center align-content-center p-10';
    document.getElementById('secc-right').className = 'transition h-100 w-xl-600px d-flex align-items-md-center bg-blue-pr';

    document.getElementById('secc-login').style.display = '';
    document.getElementById('secc-account').style.display = 'none';
}

function createUser() {
    setTimeout(enviarPagina, 2000);
}

function enviarPagina() {
    location.href = 'partners-verification.html';
}

function crearCuenta() {
    let resVerificacion = verificacionCuenta();
    if (resVerificacion === true) {
        parametrosCuenta_ = {
            "socio": 0,
            "nombre": inpCAName.value,
            "apellidos": inpCALastName.value,
            "email": inpCAEmail.value,
            "contrasena": inpCAPassword1.value,
            "telefono": '',
            "puesto": '',
            "activo": 'sin confirmar'
        };
        generate();
        $('#mdlCaptcha').modal('show');
    } else {
    }
}

function verificacionCuenta() {
    let respuesta = true;
    if (inpCAName.value === '' || inpCAName.value === null || inpCALastName.value === '' || inpCALastName.value === null || inpCAEmail.value === '' || inpCAEmail.value === null || inpCAPassword1.value === '' || inpCAPassword1.value === null || inpCAPassword2.value === '' || inpCAPassword2.value === null || inpCAPassword1.value != inpCAPassword2.value) {
        respuesta = false;
        if (inpCAName.value === '' || inpCAName.value === null) {
            toastr.warning("Enter the information of all the fields", "Empty name field");
        } else if (inpCALastName.value === '' || inpCALastName.value === null) {
            toastr.warning("Enter the information of all the fields", "Empty last name field");
        } else if (inpCAEmail.value === '' || inpCAEmail.value === null) {
            toastr.warning("Enter the information of all the fields", "Empty email field");
        } else if (inpCAPassword1.value === '' || inpCAPassword1.value === null) {
            toastr.warning("Enter the information of all the fields", "Empty password field");
        } else if (inpCAPassword2.value === '' || inpCAPassword2.value === null) {
            toastr.warning("Enter the information of all the fields", "Empty password field");
        } else if (inpCAPassword1.value !== inpCAPassword2.value) {
            toastr.warning("Check that the passwords are the same", "Passwords not the same");
        }

    }
    let domain = inpCAEmail.value.split('@')[1];
    if (domain === "joffroy.com") {
        toastr.warning('Mail from joffroy.com can only be administrative.');
        respuesta = false;
    }
    return respuesta;
}

function registroCuenta() {
    let resVerificacion = verificacionCaptcha();
    if (resVerificacion === true) {
        let respuesta = "";
        $.ajax({
            async: false,
            type: "GET",
            url: 'controller/insertContacto.php',
            data: parametrosCuenta_,
            success: (data) => {
                if (data.status === "ok") {
                    $('#mdlCaptcha').modal('hide');
                    $('#mdlMensaje').modal('show');
                    enviarCorreo(inpCAEmail.value);
                    document.getElementById('mostrar_correo').textContent = inpCAEmail.value;
                } else {
                    Swal.fire({
                        text: data.message,
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-danger"
                        },
                        timer: 2500
                    });
                }
            }
        });
    }
}

function verificacionCaptcha() {
    let respuesta = true;
    if (inpSecCode.value === '' || inpSecCode.value === null) {
        respuesta = false;
        toastr.error("Enter the information of all the fields", "Empty security code field");
    } else if (inpSecCode.value !== captcha.innerHTML) {
        respuesta = false;
        toastr.error("Enter the information of all the fields", "Security code error");
    }
    return respuesta;
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
            console.error(xhr.responseText);
        }
    });
}

function cierreMensaje() {
    document.getElementById('secc-left').className = 'transition h-100 w-75 d-flex justify-content-center align-content-center p-10';
    document.getElementById('secc-right').className = 'transition h-100 w-xl-600px d-flex align-items-md-center bg-blue-pr';

    document.getElementById('secc-login').style.display = '';
    document.getElementById('secc-account').style.display = 'none';

    $('#mdlMensaje').modal('hide');

    document.getElementById('inpCAName').value = '';
    document.getElementById('inpCALastName').value = '';
    document.getElementById('inpCAEmail').value = '';
    document.getElementById('inpCAPassword1').value = '';
    document.getElementById('inpCAPassword2').value = '';
    document.getElementById('inpSecCode').value = '';
}

function forgotPassword() {
    document.getElementById("secc-login").style.display = "none";
    document.getElementById("secc-reset").style.display = "";
}

function backForgotPassword() {
    document.getElementById("secc-login").style.display = "";
    document.getElementById("secc-reset").style.display = "none";
}

function recuperarContrasena() {
    let correo = $("#emailDeRecuperacion").val();
    $.ajax({
        url: 'controller/EnviarRecuperacionDeCorreo.php',
        type: 'GET',
        data: {correo: correo},
        success: function (response) {
            document.getElementById('show_email_recovery').textContent = $("#emailDeRecuperacion").val();
            $('#mdlPasswordRecovery').modal('show');
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    });
}

function cerrarModalDeRecuperacionDeContRASENA() {
    $('#mdlPasswordRecovery').modal('hide');
    location.reload();
}