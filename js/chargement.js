document.addEventListener("DOMContentLoaded", function () {
    const loadingElement = document.getElementById("chargement");

    if (loadingElement) {
        setTimeout(() => {
            loadingElement.style.display = "none"; // Cache l'élément de chargement après 1 seconde
        }, 500); // 1000 millisecondes = 1 seconde
    }    
});
