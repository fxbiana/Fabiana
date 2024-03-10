var currentSlide = 0;

var descriptions = [
    "A car that I would love to have! I also pulled this photo from Pinterest.",
    "Puppy! Super cute! I also have a dog, his name is Rio. He is an English Bulldog",
    "Would love to visit Italy one day. I am astonished by their architecture.",
    "Some inspiration for what I'd like my apartment/house to look like in the future.",
    "My favorite sport! It's not my photo, but I love to swim (especially for my school)."
];

function showSlides(n) {
    currentSlide += n;
    if (currentSlide >= descriptions.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = descriptions.length - 1;
    }

    var slides = document.getElementsByClassName("Slide");
    var descriptionContainer = document.querySelector(".description-container");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlide].style.display = "block";
    descriptionContainer.innerHTML = `<p class="description">${descriptions[currentSlide]}</p>`;
}

function plusSlides(n) {
    showSlides(n);
}

function slideNow(n) {
    currentSlide = n;
    showSlides(0);
}

setInterval(function () {
    plusSlides(1);
}, 4500);

showSlides(0);
