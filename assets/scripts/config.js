// Tableau d'objets contenant les informations sur chaque image de la diapo du carrousel
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
    // {
    //     "image": "slide3.jpg",
    //     "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    // }

]

//Récupération des éléments utilisés pour le carrousel de la page web
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");

// Index de la diapositive actuelle
let currentSlideIndex = 0;
