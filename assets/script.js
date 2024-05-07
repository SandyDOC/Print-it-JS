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
// // Sélectionnez les flèches gauche et droite
// const arrowLeft = document.querySelector('.arrow_left');
// const arrowRight = document.querySelector('.arrow_right');

// // Ajoutez un écouteur d'événements pour le clic sur la flèche gauche
// arrowLeft.addEventListener('click', function () {
//     // Logique pour afficher l'image précédente ou effectuer une action associée
//     console.log('Flèche gauche cliquée');
//     // Décrémente l'index de la diapositive
//     currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
//     // Mettez à jour la diapositive avec le nouvel index
//     updateSlide(currentSlideIndex);

//     // Ajoutez un écouteur d'événements pour le clic sur la flèche droite
//     arrowRight.addEventListener('click', function () {
//         // Logique pour afficher l'image suivante ou effectuer une action associée
//         console.log('Flèche droite cliquée');
//         // Incrémente l'index de la diapositive
//         currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//         // Mettez à jour la diapositive avec le nouvel index
//         updateSlide(currentSlideIndex);
//     });
// });

// // Sélectionnez la div contenant les bullet points
// const dotsContainer = document.querySelector('.dots');

// // Sélectionnez l'image et le texte correspondant
// const bannerImage = document.querySelector('.banner-img');
// const bannerText = document.querySelector('#banner p');

// // Index de la diapositive actuelle
// let currentSlideIndex = 0;

// // Fonction pour mettre à jour la diapositive
// function updateSlide(index) {
//     // Mettez à jour l'image
//     bannerImage.src = './assets/images/slideshow/' + slides[index].image;
//     // Mettez à jour le texte
//     bannerText.innerHTML = slides[index].tagLine;

//     // Mettez à jour le bullet point actif
//     const dots = dotsContainer.querySelectorAll('.dot');
//     dots.forEach((dot, i) => {

//         dot.classList.remove('dot_selected'); // Supprime la classe dot_selected de tous les points
//         if (i === index) {
//             dot.classList.add('dot_selected'); // Ajoute la classe dot_selected au point correspondant à l'index
//         }
//     });

//     // Mettez à jour l'index de la diapositive actuelle
//     currentSlideIndex = index;
// }

// // Fonction pour faire défiler les images automatiquement
// function autoSlide() {
//     // Incrémente l'index de la diapositive
//     currentSlideIndex = (currentSlideIndex + 1) % slides.length;
//     // Mettez à jour la diapositive avec le nouvel index
//     updateSlide(currentSlideIndex);
// }

// Sélectionnez la flèche gauche
// const arrowLeft = document.querySelector('.arrow_left');
// // Ajoutez un écouteur d'événements pour le clic sur la flèche gauche
// arrowLeft.addEventListener('click', function() {
//     // Vérifiez si l'index de la diapositive est égal à 0
//     if (currentSlideIndex === 0) {
//         // Si c'est le cas, affichez la dernière diapositive
//         currentSlideIndex = slides.length - 1;
//     } else {
//         // Sinon, décrémentez simplement l'index de la diapositive
//         currentSlideIndex--;
//     }
//     // Mettez à jour la diapositive avec le nouvel index
//     updateSlide(currentSlideIndex);
// });
// // Sélectionnez la flèche droite
// const arrowRight = document.querySelector('.arrow_right');
// // Ajoutez un écouteur d'événements pour le clic sur la flèche droite
// arrowRight.addEventListener('click', function() {
//     // Vérifiez si l'index de la diapositive est égal à la dernière diapositive
//     if (currentSlideIndex === slides.length - 1) {
//         // Si c'est le cas, affichez la première diapositive
//         currentSlideIndex = 0;
//     } else {
//         // Sinon, incrémentez simplement l'index de la diapositive
//         currentSlideIndex++;
//     }
//     // Mettez à jour la diapositive avec le nouvel index
//     updateSlide(currentSlideIndex);
// });
// // Fonction pour mettre à jour la diapositive
// function updateSlide(index) {
//     // Mettez à jour l'image
//     bannerImage.src = './assets/images/slideshow/' + slides[index].image;
//     // Mettez à jour le texte
//     bannerText.innerHTML = slides[index].tagLine;
//     // Mettez à jour le bullet point actif
//     const dots = dotsContainer.querySelectorAll('.dot');
//     for (let i = 0; i < dots.length; i++) {
//         const dot = dots[i];
//         dot.classList.remove('dot_selected'); // Supprime la classe dot_selected de tous les points
//         if (i === index) {
//             dot.classList.add('dot_selected'); // Ajoute la classe dot_selected au point correspondant à l'index
//         }
//     }
//     // Mettez à jour l'index de la diapositive actuelle
//     currentSlideIndex = index;
// }

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dots = document.querySelectorAll('.dot'); // Sélectionnez tous les points

let currentIndex = 0;

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte
function updateCarousel(index, direction) {
      //correction du bug pour la première et la dernière image
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    // Mettre à jour l'image
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // Mettre à jour le texte
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1);
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ;
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});


// Afficher la première diapositive au chargement de la page
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); // Mettez à jour les points indicateurs pour la première diapositive





