let currentSocio = localStorage.getItem("socioComercial_ID");
let currentContacto = "";
const total_records = document.getElementById("total-records");
const btn_new_record = document.getElementById("btn-new-record");
const mdl_new_contact = new bootstrap.Modal(document.getElementById('mdl-new-contact'), {
    keyboard: false
});
getInfo();
btn_new_record.addEventListener('click', (event) => {
    mdl_new_contact.show();
});

const contactsTable = $("#contacts-table").DataTable({
    info: true,
    searching: true,
    paging: false,
    dom:
        "<'row'" +
        "<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
        "<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
        ">" +
        "<'table-responsive'tr>" +
        "<'row'" +
        "<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
        "<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
        ">",
    columns: [
        {data: "id", visible: false, searchable: false},
        {data: "socio", visible: false, searchable: false},
        {
            data: "nombre",
            title: (language === 'en' ? "Name" : "Nombre"),
            visible: true,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: "apellidos",
            title: (language === 'en' ? "Last name" : "Apellidos"),
            visible: true,
            searchable: true,
            className: 'w-200px'
        },
        {
            data: "telefono",
            title: (language === 'en' ? "Phone number" : "Teléfono"),
            visible: true,
            searchable: true,
            className: 'w-150px',
            render: function (data, type) {
                return data;
            }
        },
        {
            data: "email",
            title: (language === 'en' ? "Email" : "Correo"),
            visible: true,
            searchable: true,
            className: 'w-300px'
        },
        {
            data: "activo",
            title: (language === 'en' ? "Status" : "Estado"),
            visible: true,
            searchable: true,
            className: 'w-150px',
            render: function (data, type) {
                let dataString = '';
                if (data === 'confirmar') {
                    dataString = `<span class="text-success">${(language === 'en' ? "CONFIRMED" : "CONFIRMADO")}</span>`
                } else {
                    dataString = `<span class="text-danger">${(language === 'en' ? "UNCONFIRMED" : "SIN CONFIRMAR")}</span>`
                }
                return dataString;
            }
        },
        {
            defaultContent: `<button type="button" class="eliminar btn btn-sm btn-light btn-active-light-danger btn-icon">
<span class="svg-icon svg-icon-muted m-0 svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z" fill="black"/>
<path opacity="0.5" d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z" fill="black"/>
<path opacity="0.5" d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z" fill="black"/>
</svg></span>


</button>
<button type="button" class="actualizar btn btn-sm btn-light btn-active-light-warning btn-icon">
<span class="svg-icon svg-icon-muted m-0 svg-icon-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path opacity="0.3" fill-rule="evenodd" clip-rule="evenodd" d="M2 4.63158C2 3.1782 3.1782 2 4.63158 2H13.47C14.0155 2 14.278 2.66919 13.8778 3.04006L12.4556 4.35821C11.9009 4.87228 11.1726 5.15789 10.4163 5.15789H7.1579C6.05333 5.15789 5.15789 6.05333 5.15789 7.1579V16.8421C5.15789 17.9467 6.05333 18.8421 7.1579 18.8421H16.8421C17.9467 18.8421 18.8421 17.9467 18.8421 16.8421V13.7518C18.8421 12.927 19.1817 12.1387 19.7809 11.572L20.9878 10.4308C21.3703 10.0691 22 10.3403 22 10.8668V19.3684C22 20.8218 20.8218 22 19.3684 22H4.63158C3.1782 22 2 20.8218 2 19.3684V4.63158Z" fill="black"/>
<path d="M10.9256 11.1882C10.5351 10.7977 10.5351 10.1645 10.9256 9.77397L18.0669 2.6327C18.8479 1.85165 20.1143 1.85165 20.8953 2.6327L21.3665 3.10391C22.1476 3.88496 22.1476 5.15129 21.3665 5.93234L14.2252 13.0736C13.8347 13.4641 13.2016 13.4641 12.811 13.0736L10.9256 11.1882Z" fill="black"/>
<path d="M8.82343 12.0064L8.08852 14.3348C7.8655 15.0414 8.46151 15.7366 9.19388 15.6242L11.8974 15.2092C12.4642 15.1222 12.6916 14.4278 12.2861 14.0223L9.98595 11.7221C9.61452 11.3507 8.98154 11.5055 8.82343 12.0064Z" fill="black"/>
</svg></span>
</button>`,
            orderable: false,
            searchable: false,
            className: 'w-100px text-center',
        }
    ],
    ajax: {
        url: 'controller/buscar-contactos.php',
        type: 'POST',
        data: function (d) {
            d.socio = currentSocio;
        },
        complete: function (d) {
            if (d.responseJSON) {
                total_records.innerText = `#${d.responseJSON.recordsTotal}`;
            }
        }
    },
    language: {
        url: (language === 'en' ? "//cdn.datatables.net/plug-ins/1.13.6/i18n/en.json" : "//cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json")
    },
});
$('#contacts-table tbody').on('click', '.eliminar', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = contactsTable.row(row).data();
    Swal.fire({
        text: (language === 'en' ? "Do you want to delete the contact?" : "Desea eliminar el contacto?"),
        icon: "warning",
        showCancelButton: !0,
        buttonsStyling: !1,
        confirmButtonText: (language === 'en' ? "Yes, Delete!" : "Si, Eliminar!"),
        cancelButtonText: (language === 'en' ? "Cancel" : "Cancelar"),
        customClass: {confirmButton: "btn btn-danger", cancelButton: "btn btn-active-light"}
    }).then((function (t) {
        if (t.isConfirmed) {

            let datos = new FormData();
            datos.append("id", data.id);

            fetch('controller/eliminar-contacto.php', {
                method: "POST",
                body: datos
            })
                .then(response => response.json())
                .then(response => {
                    if (response.estado === 200) {
                        contactsTable.ajax.reload();
                        Swal.fire({
                            text: response.texto,
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Aceptar",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        });
                    } else {
                        Swal.fire({
                            text: response.texto,
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Aceptar",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        });
                    }
                });
        }
    }))
});
$('#contacts-table tbody').on('click', '.actualizar', function () {
    let row = $(this).closest('tr');
    if (row.hasClass('child')) {
        row = row.prev();
    }
    let data = contactsTable.row(row).data();
    mdl_new_contact.show();
    currentContacto = data.id;
    new_contact_name.value = data.nombre;
    new_contact_last_name.value = data.apellidos;
    new_contact_position.value = data.puesto;
    new_contact_phone.value = data.telefono;
    new_contact_email.value = data.email;
    sctn_pswrd.style.display = 'none';
    contactValidator.disableValidator('new-contact-new-password');
    contactValidator.disableValidator('new-contact-confirm-password');
});

const new_contact_form = document.getElementById("new-contact-form");
const new_contact_name = new_contact_form.querySelector("#new-contact-name");
const new_contact_last_name = new_contact_form.querySelector("#new-contact-last-name");
const new_contact_position = new_contact_form.querySelector("#new-contact-position");
const new_contact_phone = new_contact_form.querySelector("#new-contact-phone");
const new_contact_email = new_contact_form.querySelector("#new-contact-email");
const new_contact_new_password = new_contact_form.querySelector("#new-contact-new-password");
const new_contact_confirm_password = new_contact_form.querySelector("#new-contact-confirm-password");
const btn_submit_form = document.getElementById("btn-submit-form");
const sctn_pswrd = document.getElementById("sctn-pswrd");

let contactValidator = FormValidation.formValidation(new_contact_form, {
    framework: 'bootstrap',
    fields: {
        "new-contact-name": {validators: {notEmpty: {message: (language === 'en' ? 'The name is required.' : 'El nombre es requerido.')}}},
        "new-contact-last-name": {validators: {notEmpty: {message: (language === 'en' ? 'The last name is required.' : 'El apellido es requerido.')}}},
        "new-contact-email": {
            validators: {
                emailAddress: {
                    message: (language === 'en' ? 'It is not a valid email address.' : 'No es una dirección de correo electrónico válida.')
                }, notEmpty: {message: (language === 'en' ? 'The Email is required.' : 'El correo es requerido.')}
            }
        },
        "new-contact-new-password": {validators: {notEmpty: {message: (language === 'en' ? 'The password is required.' : 'La contraseña es requerida.')}}},
        "new-contact-confirm-password": {
            validators: {
                notEmpty: {
                    message: (language === 'en' ? 'Confirm password is required.' : 'Confirmar contraseña es requerida.')
                },
                identical: {
                    compare: function () {
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
                        contacto: currentContacto,
                        socio: currentSocio,
                        nombre: new_contact_name.value,
                        apellidos: new_contact_last_name.value,
                        email: new_contact_email.value,
                        contrasena: new_contact_new_password.value,
                        telefono: new_contact_phone.value,
                        puesto: new_contact_position.value,
                    };

                    $.ajax({
                        url: 'controller/guardar-contacto.php',
                        type: 'POST',
                        data: formData,
                        dataType: 'json',
                        success: function (response) {
                            if (response.estado === 200) {
                                new_contact_form.reset()
                                contactValidator.resetForm();
                                contactsTable.ajax.reload();
                                mdl_new_contact.hide();
                                Swal.fire({
                                    text: response.texto,
                                    icon: "success",
                                    buttonsStyling: false,
                                    confirmButtonText: "Aceptar",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
                                    }
                                });
                                if (currentContacto === "") {
                                    enviarCorreo(new_contact_email.value)
                                }
                            } else {
                                Swal.fire({
                                    text: response.texto,
                                    icon: "error",
                                    buttonsStyling: false,
                                    confirmButtonText: "Aceptar",
                                    customClass: {
                                        confirmButton: "btn btn-primary"
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

const mdl_new_contact_el = document.getElementById('mdl-new-contact')
mdl_new_contact_el.addEventListener('hidden.bs.modal', function (event) {
    currentContacto = "";
    new_contact_form.reset()
    contactValidator.resetForm();
    sctn_pswrd.style.display = 'block';
    contactValidator.enableValidator('new-contact-new-password');
    contactValidator.enableValidator('new-contact-confirm-password');
});

function getInfo() {
    $.ajax({
        url: 'controller/get-info.php',
        type: 'POST',
        dataType: 'json',
        success: function (response) {
            if (!response.id) {
                window.location.href = "sing-in.html";
            } else {
                currentSocio = response.partner;
                document.getElementById('spnNombreU').innerText += response.name;
                document.getElementById('spnCorreoU').innerText += response.email;
            }
        }
    });
}