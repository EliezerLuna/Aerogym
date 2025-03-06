window.addEventListener("scroll", function () {
    const header = document.querySelector(".header"); // Seleccionamos el header
    if (window.scrollY > 50) { // Si el usuario ha bajado más de 50px
        header.classList.add("scrolled"); // Agregamos la clase
    } else {
        header.classList.remove("scrolled"); // Quitamos la clase si vuelve arriba
    }
});

window.addEventListener("scroll", function() {
    let imagen = document.getElementById("menuImage");
    if (window.scrollY > 50) { // Si el scroll supera los 50px
        imagen.src = "./assets/images/logo_grupocga.png"; // Cambia la imagen
    } else {
        imagen.src = "./assets/images/logo_grupocga_blanco.png"; // Vuelve a la imagen original
    }
});