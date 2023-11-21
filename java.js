document.addEventListener("DOMContentLoaded", function() {
    // Espera a que la página esté completamente cargada

    // Obtén el encabezado
    const header = document.querySelector(".animated-header");

    // Muestra el encabezado después de un breve retraso
    setTimeout(function() {
        header.classList.add("show");
    }, 500);
});
// Agrega funciones JavaScript según sea necesario

function agregarAlCarrito(idProducto) {
    // Puedes implementar lógica para agregar productos al carrito aquí

    // Redirige a la página de carrito
    window.location.href = 'mailto:pabloguu@mail.com';
}
