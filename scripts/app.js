//Esta funcion en JavaScript lo que hace es que al presionar el boton de Más Info en la sección de los iconos// 
//te aparece un mensaje emergente que pide que aceptes para ir a esa informacion//
function mostrarMensaje() {
    let confirmar = confirm("Estás por ser dirigido a otra página. ¿Deseas aceptar?");
    if (confirmar) {
        // Redirigir a la nueva página aquí
        window.location.href = "https://www.ejemplo.com";
    }
}

//cambia el modo en que se ve, de claro a oscuro//
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});



