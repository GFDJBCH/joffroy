const currentUserId = localStorage.getItem("socioComercial_ID");
const currentUserEmail = localStorage.getItem("socioComercial_correo_user");
const currentUserTipo = localStorage.getItem("socioComercial_Tipo");

const profile_form = document.getElementById('profile-form');
const profile_name = profile_form.querySelector('#profile-name');
const profile_phone = profile_form.querySelector('#profile-phone');
const profile_email = profile_form.querySelector('#profile-email');
const btn_profile_password = document.getElementById('btn-profile-password');
const btn_profile_save = document.getElementById('btn-profile-save');

const menu_administrador = document.getElementById('menu-administrador');
const menu_proveedor = document.getElementById('menu-proveedor');

const change_password = document.getElementById('change-password');
const change_confirm = document.getElementById('change-confirm');

obtener_informacion();

function obtener_informacion() {
    const datos = new FormData();
    datos.append("usuario", currentUserId);
    datos.append("correo", currentUserEmail);

    fetch('controller/buscar-usuario.php', {
        method: "POST",
        body: datos
    })
        .then(response => response.json())
        .then(response => {
            if (response) {
                if (response.length > 0) {
                    profile_name.value = response[0].nombre;
                    profile_phone.value = response[0].telefono;
                    profile_email.value = response[0].correo;
                }
            }
        });
}

const mdl_change_password = new bootstrap.Modal(document.getElementById("mdl-change-password"), {
    keyboard: false
});

btn_profile_password.addEventListener("click", (function (e) {
    e.preventDefault();
    mdl_change_password.show();
}));
if (currentUserTipo === 'socio') {
    menu_administrador.style.display = 'inline';
    menu_proveedor.style.display = 'none';
} else {
    menu_administrador.style.display = 'none';
    menu_proveedor.style.display = 'inline';
}
