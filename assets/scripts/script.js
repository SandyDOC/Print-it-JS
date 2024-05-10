updateSlide();

// Gestionnaire d'événement pour le clic sur la flèche gauche
arrowLeft.addEventListener('click', () => {
    console.log("J'ai cliqué sur la flèche gauche");
    currentSlideIndex--;// Décrémentez l'index de la diapositive actuelle
    
    if (currentSlideIndex < 0) {// Vérifiez si l'index est inférieur à 0
        currentSlideIndex = slides.length - 1;// Si c'est le cas, revenez à la dernière diapositive
    }

    updateSlide(currentSlideIndex);
    updateDots(currentSlideIndex);
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', () => {
    console.log("J'ai cliqué sur la flèche droite");
    currentSlideIndex++;// Incrémentez l'index de la diapositive actuelle

    if (currentSlideIndex === slides.length) {// Vérifiez si l'index dépasse la dernière diapositive
        currentSlideIndex = 0;// Si c'est le cas, revenez à la première diapositive
    }

    updateSlide(currentSlideIndex);
    updateDots(currentSlideIndex);
});
