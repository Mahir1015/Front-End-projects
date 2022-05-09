const slides = document.getElementsByClassName("slides")[0].children;

function currentSlide(n){
    let i;
    for(i = 0; i < slides.length; i++){
        slides[i].className = slides[i].className.replace(" active", "")
    }
    slides[n - 1].className += " active"
}
