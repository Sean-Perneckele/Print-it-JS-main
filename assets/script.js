const slides = [
	{
		image: "./assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "./assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "./assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "./assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let activeSlideIndex = 0;
const dotContainer = document.querySelector(".dots");

for (let i of slides) {
	const dot = '<span class=dot>' + '</span>';

	dotContainer.insertAdjacentHTML("afterbegin", dot);
}


let ArrowLeft = document.querySelector(".arrow_left").addEventListener("click", function () {
	if (activeSlideIndex > 0) {
		activeSlideIndex--;
	}
	else {
		activeSlideIndex = slides.length - 1;
	}
	updateDots();
	displaySlide();
});

let ArrowRight = document.querySelector(".arrow_right").addEventListener("click", function () {

	defilementDroite();
	updateDots();
	displaySlide();
});

let defilement;

defilement = setInterval(() => {

	defilementDroite();
	updateDots();
	displaySlide();
}, 5000);


function updateDots() {
	const dots = document.querySelectorAll('.dot');

	dots.forEach((dot, index) => {
		if (index === activeSlideIndex) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});

}
updateDots()

function displaySlide() {
	const slide = slides[activeSlideIndex];
	const image = slide.image;
	const tagLine = slide.tagLine;
	console.log(activeSlideIndex)

	const img = document.querySelector(".banner-img");
	img.src = image;

	const content = document.querySelector("#banner p");
	content.innerHTML = tagLine;
}

function defilementDroite() {

	if (activeSlideIndex < slides.length - 1) {
		activeSlideIndex++;
	} else {
		activeSlideIndex = 0;
	}
}

