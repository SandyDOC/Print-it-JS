// Creation des points indicateurs (selon le nombre de slides)
const numberOfDots = slides.length;

for (let i = 0; i < numberOfDots; i++) {
    const createDot = document.createElement('span');
    createDot.classList.add('dot');
    createDot.dataset.index = i;
    createDot.classList.add('dot_selected')
    dotsContainer.appendChild(createDot);
    
}
//Récupération de toutes les class ".dot" des <span>
const dots = document.querySelectorAll('.dot');

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        // for (let i = 0; i < dots.length; i++) {
        //     const dot = dots[i];
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    })
};
console.log(updateDots(0))

// updateSlide();

// Fonction pour mettre à jour les images et le texte
function updateSlide(index = 0) {
    // bannerImage.setAttribute('src', './assets/images/slideshow/' + slides[index].image);
    bannerImage.src = './assets/images/slideshow/' + slides[index].image;
    bannerText.innerHTML = slides[index].tagLine;
}


