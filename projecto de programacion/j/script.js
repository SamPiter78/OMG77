function selectGame(element) {
    alert(`Has seleccionado: ${element.querySelector('h3').textContent}`);
}

let container = document.querySelector('.game-container');
container.addEventListener('scroll', function() {
    let maxScroll = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft === maxScroll) {
        // Aquí puedes duplicar el contenido, llamar a una API, etc. 
        // Por simplicidad, simplemente clonaremos el contenido.
        let clone = container.firstElementChild.cloneNode(true);
        container.appendChild(clone);
    }
});
function goToPage() {
    window.location.href = "../pag2.html"; // Cambia esta URL por la de tu página deseada
}
