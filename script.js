var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("main-header").style.top = "0";
  } else {
    document.getElementById("main-header").style.top = "-60px"; // Ajusta este valor según la altura de tu encabezado
  }
  prevScrollpos = currentScrollPos;
};

document.addEventListener("DOMContentLoaded", function () {
    // Cambiar el fondo del body
    document.body.style.background = "#f0f0f0 url('img/fondo.jpg') center/cover";

    const gatitosContainer = document.getElementById("gatitosContainer");

    // Array de imágenes de gatitos negros (puedes agregar más según sea necesario)
    const gatitos = [
        "gatito1.jpg",
        "gatito2.jpg",
        "gatito3.jpg",
        "gatito4.jpg"
        // Agrega más imágenes aquí
    ];

    // Generar las tarjetas de gatitos
    gatitos.forEach(function (imagen) {
        const gatitoCard = document.createElement("div");
        gatitoCard.classList.add("gatitoCard");

        const gatitoImage = document.createElement("img");
        gatitoImage.classList.add("gatitoImage");
        gatitoImage.src = `img/${imagen}`;
        gatitoImage.alt = "Gatito negro";

        const adoptarButton = document.createElement("button");
        adoptarButton.innerText = "Adoptar";
        adoptarButton.classList.add("adoptarButton");

        // Agrega el enlace de WhatsApp al hacer clic en la imagen o en el botón
        adoptarButton.addEventListener("click", function () {
            window.location.href = "https://api.whatsapp.com/send?phone=+59168745040"; // Reemplaza con tu número de teléfono de WhatsApp
        });

        gatitoCard.appendChild(gatitoImage);
        gatitoCard.appendChild(adoptarButton);
        gatitosContainer.appendChild(gatitoCard);
    });
});
