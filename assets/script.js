const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
//Add Event Listeners into arrows
// Sélectionnez les flèches gauche et droite
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Ajoutez un écouteur d'événements pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function() {
    // Logique pour afficher l'image précédente ou effectuer une action associée
    console.log('Flèche gauche cliquée');
    // Décrémente l'index de la diapositive
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    // Mettez à jour la diapositive avec le nouvel index
    updateSlide(currentSlideIndex);
// // Sélectionnez la flèche gauche
// const arrowLeft = document.querySelector('.arrow_left');

//4
// Ajoutez un écouteur d'événements pour le clic sur la flèche gauche
// arrowLeft.addEventListener('click', function() {
// });

// Sélectionnez la flèche droite
// const arrowRight = document.querySelector('.arrow_right');

// Ajoutez un écouteur d'événements pour le clic sur la flèche droite
arrowRight.addEventListener('click', function() {
    // Logique pour afficher l'image suivante ou effectuer une action associée
    console.log('Flèche droite cliquée');
    // Incrémente l'index de la diapositive
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    // Mettez à jour la diapositive avec le nouvel index
    updateSlide(currentSlideIndex);
});
});

// Ajoutez un écouteur d'événements pour le clic sur la flèche droite
// arrowRight.addEventListener('click', function() {
//     // Ajoutez votre logique pour afficher l'image suivante ou effectuer une autre action
// });
//3---
// Sélectionnez la div contenant les bullet points
const dotsContainer = document.querySelector('.dots');

// Parcours des diapositives pour créer les bullet points
// for (let i = 0; i < slides.length; i++) {

//     // Créez un élément span pour chaque diapositive
//     // const dot = document.createElement('span');
//     // dot.classList.add('dot');
    
//     // Ajoutez un attribut data-index pour stocker l'index de la diapositive
//     dot.setAttribute('data-index', i);
    
//     // Ajoutez le bullet point à la div des bullet points
//     dotsContainer.appendChild(dot);

//     // Si c'est le premier bullet point, ajoutez-lui une classe spécifique
//     if (i === 0) {
//         dot.classList.add('active');
//     }
// }
//4--
// Sélectionnez l'image et le texte correspondant
const bannerImage = document.querySelector('.banner-img');
const bannerText = document.querySelector('#banner p');

// Index de la diapositive actuelle
let currentSlideIndex = 0;

// Fonction pour mettre à jour la diapositive
function updateSlide(index) {
    // Mettez à jour l'image
    bannerImage.src = './assets/images/slideshow/' + slides[index].image;
    // Mettez à jour le texte
    bannerText.innerHTML = slides[index].tagLine;

    // Mettez à jour le bullet point actif
    const dots = dotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
    //     if (i === index) {
    //         dot.classList.add('dot_selected');
    //     } else {
    //         dot.classList.remove('dot_selected');
    //     }
    // });
    dot.classList.remove('dot_selected'); // Supprime la classe dot_selected de tous les points
    if (i === index) {
        dot.classList.add('dot_selected'); // Ajoute la classe dot_selected au point correspondant à l'index
    }
});

    // Mettez à jour l'index de la diapositive actuelle
    currentSlideIndex = index;
}

// Ajoutez un écouteur d'événements pour le clic sur la flèche droite
// arrowRight.addEventListener('click', function() {
//     // Incrémente l'index de la diapositive
//     currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//     // Mettez à jour la diapositive avec le nouvel index
//     updateSlide(currentSlideIndex);
// });

//5
// Fonction pour faire défiler les images automatiquement
function autoSlide() {
    // Incrémente l'index de la diapositive
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    // Mettez à jour la diapositive avec le nouvel index
    updateSlide(currentSlideIndex);
}

// Démarrez le défilement automatique toutes les X millisecondes (par exemple, toutes les 5 secondes)
setInterval(autoSlide, 2200); // Modifier le délai selon vos besoins





