let __idiomatemp_ = localStorage.getItem("idioma_SC");
const meses = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
};

function printFecha() {
    console.log(__idiomatemp_)
    const fecha = new Date();
    const mm = meses["en"][fecha.getMonth()];

    document.getElementById("spnDia").innerHTML = fecha.getDate();
    document.getElementById("spnMes").innerHTML = mm;
    document.getElementById("spnAnio").innerHTML = fecha.getFullYear();
}
