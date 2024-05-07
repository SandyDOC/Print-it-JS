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

//Add Event Listeners on arrows
//Left Arrow 
const arrowLeft = document.querySelector(".arrow_left");

function displayDirectionLeft() {
    console.log("Flèche gauche cliquée")
}

arrowLeft.addEventListener("click", displayDirectionLeft)

//Right Arrow
const arrowRight = document.querySelector(".arrow_right");

function displayDirectionRight() {
    console.log("Flèche droite cliquée")
}

arrowRight.addEventListener("click", displayDirectionRight)


