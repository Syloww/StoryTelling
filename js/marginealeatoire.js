// Récupère tous les éléments avec la classe "note"
const notes = document.querySelectorAll('.note');

notes.forEach(note => {
    // Génère une valeur aléatoire entre 50 et 100 pixels
    const randomMargin = Math.floor(Math.random() * 51) + 50; // entre 50 et 100
    // Choisit aléatoirement d'ajouter une marge à gauche ou à droite
    const marginDirection = Math.random() < 0.5 ? 'margin-left' : 'margin-right';

    // Applique la marge à l'élément
    note.style[marginDirection] = `${randomMargin}px`;
});