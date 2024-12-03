// Appliquer une transition au corps pour le fondu
document.body.style.transition = 'background-color 0.5s ease';

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Position actuelle de scroll en pixels
    const windowHeight = window.innerHeight; // Hauteur de la fenêtre en pixels
  
    if (scrollPosition > windowHeight) {
        document.body.style.backgroundColor = ''; // Retour au style par défaut
    } else {
        document.body.style.backgroundColor = 'black'; // Appliquer le fond noir
    }
});
