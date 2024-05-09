// Fonction pour mettre à jour la diapositive
function updateSlide(index = 0) {

    
    // Mettez à jour l'image
    const bannerImage = document.querySelector(".banner-img");
    bannerImage.src = './assets/images/slideshow/' + slides[index].image;

    // Mettez à jour le texte
    const bannerText = document.querySelector("#banner p");
    bannerText.innerHTML = slides[index].tagLine;

    // Mettez à jour les bullet points
    const dots = document.querySelectorAll('.dot');
    for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        if (i === index) {// Ajoutez la classe dot_selected au point correspondant à l'index
            dot.classList.add('dot_selected');
        } else {// Supprimez la classe dot_selected de tous les points
            dot.classList.remove('dot_selected');
        }
    }
    currentSlideIndex = index;// Mettez à jour l'index de la diapositive actuelle
}