function goToPage() {
    window.location.href = "../pag2.html"; // Cambia esta URL por la de tu página deseada
}

function uploadPhoto() {
    const inputElement = document.getElementById('photoUpload');
    const file = inputElement.files[0];
    if (file) {
        // Procesar y subir la foto
        // En un escenario real, aquí enviarías el archivo a un servidor back-end
        alert('Foto seleccionada: ' + file.name);
    } else {
        alert('Por favor, selecciona una foto para subir.');
    }
}
function uploadPhoto() {
    const inputElement = document.getElementById('photoUpload');
    const file = inputElement.files[0];
    if (file) {
        // Para propósitos de demostración, mostrar la imagen subida
        const reader = new FileReader();
        reader.onload = function(event) {
            const imgElement = document.createElement('img');
            imgElement.src = event.target.result;
            document.getElementById('photosContainer').appendChild(imgElement);
        }
        reader.readAsDataURL(file);
        
        alert('Foto seleccionada: ' + file.name);
    } else {
        alert('Por favor, selecciona una foto para subir.');
    }
}
