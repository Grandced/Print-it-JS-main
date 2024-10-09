/*tableau des slide et du slogan */
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
/*********************variable qui sélection l'image de la banniére du htlm et qui change a chaque slide **********/
const imageElement = document.querySelector('.banner-img');

/*********************variable qui selection, les élément <p> de l'ID #banner (slogan)*****************************/
const taglineElement = document.querySelector('#banner p');

/*********************variable qui selection, les élément (dots) en bas du carousel********************************/
const dotsContainer = document.querySelector('.dots');

/**********************Defini la Slide active au debut, la premiere donc 0 *****************************************/
let currentIndex = 0;


/************************************fonction pour crée les dots**********************************************************/
function createDots() {
	slides.forEach((slide, index) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (index === 0) dot.classList.add('active'); // Active la première dot
		dot.addEventListener('click', () => {
			currentIndex = index;
			updateCarousel();
		});
		dotsContainer.appendChild(dot);
	});
}
/************crée la slide de base ***********/
const Slide_base = slides[currentIndex];
/************met a jour l'image et le slogan dans la slide de base ******/
imageElement.src = Slide_base.image;
taglineElement.innerHTML = Slide_base.tagLine;

function updateCarousel() {

	const currentSlide = slides[currentIndex];

	// Applique un effet de fondu en réduisant l'opacité
	imageElement.style.transition = "opacity 0.5s ease-in-out"; // Transition pour le fondu
	taglineElement.style.transition = "opacity 0.5s ease-in-out"; // Transition pour le slogan

	imageElement.style.opacity = 0; // Rend l'image invisible
	taglineElement.style.opacity = 0; // Rend le slogan invisible

	setTimeout(() => {
		// Met à jour l'image et le slogan
		imageElement.src = currentSlide.image;
		taglineElement.innerHTML = currentSlide.tagLine;
		
		// Réapplique l'opacité pour un fondu en douceur
		imageElement.style.opacity = 1;
		taglineElement.style.opacity = 1;

		// Met à jour les dots
		document.querySelectorAll('.dot').forEach((dot, index) => {
			dot.classList.toggle('dot_selected', index === currentIndex);
		  });
	}, 400); // Délai pour le fondu
}

/********************************Fontion pour la fleche suivante****************************************************/
function nextSlide() {
	currentIndex++;
	if (currentIndex >= slides.length) {
		currentIndex = 0; /*Retour au début si on dépasse la dernière image**************************************/
	}
	updateCarousel();
}
/********************************Fontion pour la fleche précédente***************************************************/
function previousSlide() {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1; /* Retour à la dernière slide si on dépasse le début******************/
	}
	updateCarousel();
}

createDots();
updateCarousel();
