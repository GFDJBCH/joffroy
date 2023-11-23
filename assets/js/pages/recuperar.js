const url = new URL(window.location.href);
const currentEmail = url.searchParams.get('email');
if (!currentEmail) {
    window.location.href = 'sing-in.html';
}

const new_contact_form = document.getElementById("new-contact-form");
const new_contact_new_password = new_contact_form.querySelector("#new-contact-new-password");
const new_contact_confirm_password = new_contact_form.querySelector("#new-contact-confirm-password");
const btn_submit_form = document.getElementById("btn-contact-submit");

let contactValidator = FormValidation.formValidation(new_contact_form, {
    fields: {
        "new-contact-new-password": {validators: {notEmpty: {message: (language === 'en' ? 'The password is required.' : 'La contraseña es requerida.')}}},
        "new-contact-confirm-password": {
            validators: {
                notEmpty: {
                    message: (language === 'en' ? 'Confirm password is required.' : 'Confirmar contraseña es requerida.')
                },
                identical: {
                    compare: function() {
                        return new_contact_form.querySelector('[name="new-contact-new-password"]').value;
                    },
                    message: (language === 'en' ? 'The password and confirm password do not match.' : 'La contraseña y la contraseña de confirmación no coinciden.')
                }
            }
        },
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        bootstrap: new FormValidation.plugins.Bootstrap5({
            rowSelector: '.fv-row',
            eleInvalidClass: '',
            eleValidClass: ''
        })
    }
});
btn_submit_form.addEventListener('click', function (e) {
    e.preventDefault();
    if (contactValidator) {
        contactValidator.validate().then(function (status) {
            if (status === 'Valid') {
                btn_submit_form.setAttribute('data-kt-indicator', 'on');
                btn_submit_form.disabled = true;
                setTimeout(function () {
                    btn_submit_form.removeAttribute('data-kt-indicator');
                    btn_submit_form.disabled = false;

                    let formData = {
                        email: currentEmail,
                        contrasena: new_contact_new_password.value,
                    };

                    $.ajax({
                        url: 'controller/cambiar-password.php',
                        type: 'POST',
                        data: formData,
                        dataType: 'json',
                        success: function(response) {
                            if (response.estado === 200) {
                                new_contact_form.reset();
                                contactValidator.resetForm();
                                Swal.fire({
                                    text: response.texto,
                                    icon: "success",
                                    buttonsStyling: false,
                                    confirmButtonText: (language === 'en'? "Understood" : "Entendido"),
                                    customClass: {
                                        confirmButton: "btn btn-joffroy-primary"
                                    }
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        window.location.href = 'sing-in.html';
                                    }
                                })
                            } else {
                                Swal.fire({
                                    text: response.texto,
                                    icon: "error",
                                    buttonsStyling: false,
                                    confirmButtonText: (language === 'en'? "Understood" : "Entendido"),
                                    customClass: {
                                        confirmButton: "btn btn-joffroy-primary"
                                    }
                                });
                            }
                        }
                    });

                }, 1100);
            }
        });
    }
});

function validarCorreo(correo) {
    $.ajax({
        type: 'POST',
        url: 'controller/confirmar-contacto.php',
        data: { correo: correo },
        dataType: 'json',
        success: function(response) {
            if (response === 1) {
                document.getElementById("mensaje").innerHTML = `
                    <h1 class="text-success">Cuenta confirmada correctamente.</h1>
                    <h1 class="text-white">Ya puede cerrar esta página</h1>
                `;
            } else if (response === 2) {
                document.getElementById("mensaje").innerHTML = `
                    <h1 class="text-warning">La cuenta ya ha sido confirmada</h1>
                    <h1 class="text-white">Ya puede cerrar esta página</h1>
                `;
            } else {
                document.getElementById("mensaje").innerHTML = `
                    <h1 class="text-danger">Lo sentimos, pero la cuenta que ingresó no existe en nuestros registros.</h1>
                `;
            }
        }
    });
}

