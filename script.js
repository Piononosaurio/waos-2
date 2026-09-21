const inicio = document.getElementById("inicio");
const mensaje = document.getElementById("mensaje");

const abrirBtn = document.getElementById("abrirBtn");
const volverBtn = document.getElementById("volverBtn");

const petalsContainer = document.getElementById("petals");
const musica = document.getElementById("musica");

abrirBtn.addEventListener("click", () => {
    musica.volume = 0.35;
    musica.play();

    inicio.classList.remove("activa");

    setTimeout(() => {
        mensaje.classList.add("activa");
    }, 350);
});

volverBtn.addEventListener("click", () => {
    mensaje.classList.remove("activa");

    setTimeout(() => {
        inicio.classList.add("activa");
    }, 350);
});

function crearPetalo() {
    const petalo = document.createElement("div");

    petalo.classList.add("petal");

    const flores = [
        "🌼",
        "🌻",
        "✿",
        "❀"
    ];

    petalo.textContent =
        flores[Math.floor(Math.random() * flores.length)];

    petalo.style.left =
        Math.random() * 100 + "vw";

    const tamaño =
        Math.random() * 12 + 12;

    petalo.style.fontSize =
        tamaño + "px";

    const duración =
        Math.random() * 6 + 6;

    petalo.style.animationDuration =
        duración + "s";

    petalo.style.animationDelay =
        Math.random() * 2 + "s";

    petalsContainer.appendChild(petalo);

    setTimeout(() => {
        petalo.remove();
    }, (duración + 2) * 1000);
}

setInterval(crearPetalo, 900);

for (let i = 0; i < 8; i++) {
    setTimeout(() => {
        crearPetalo();
    }, i * 400);
}
