// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    // dots.forEach((dot, i) => {
        for (let i = 0; i < dots.length; i++) {
            const dot = dots[i];
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    }
};

// updateSlide();

// Fonction pour mettre à jour les images et le texte
function updateSlide(index=0) {
  bannerImage.src = './assets/images/slideshow/' + slides[index].image;
  bannerText.innerHTML = slides[index].tagLine;
}


