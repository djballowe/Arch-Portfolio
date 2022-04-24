let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(int) {
    showSlides(slideIndex += int);
}

function showSlides(int) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (int > slides.length) {slideIndex = 1}

    if (int < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}