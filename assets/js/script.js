// Tableau d'objets contenant les informations sur chaque image
const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
]

// Index de la diapositive actuelle
let currentSlideIndex = 0;

// Sélectionnez la flèche gauche
const arrowLeft = document.querySelector('.arrow_left');

// au chargement, charge la première image
updateSlide();

arrowLeft.addEventListener('click', () => {// Ajoutez un écouteur d'événements pour le clic sur la flèche gauche
    console.log("Flèche gauche cliquée");
    currentSlideIndex--;// Décrémentez l'index de la diapositive actuelle

    if (currentSlideIndex < 0) {// Vérifiez si l'index est inférieur à 0
        currentSlideIndex = slides.length - 1;// Si c'est le cas, revenez à la dernière diapositive
    }
    updateSlide(currentSlideIndex);// Mettez à jour la diapositive avec le nouvel index
});

// Sélectionnez la flèche droite
const arrowRight = document.querySelector('.arrow_right');

arrowRight.addEventListener('click', () => {// Ajoutez un écouteur d'événements pour le clic sur la flèche droite
    console.log("Flèche droite cliquée");
    currentSlideIndex++;// Incrémentez l'index de la diapositive actuelle

    if (currentSlideIndex === slides.length) {// Vérifiez si l'index dépasse la dernière diapositive
        currentSlideIndex = 0;// Si c'est le cas, revenez à la première diapositive
    }

    updateSlide(currentSlideIndex);// Mettez à jour la diapositive avec le nouvel index
});



// // Index de la diapositive actuelle
// let currentSlideIndex = 0;