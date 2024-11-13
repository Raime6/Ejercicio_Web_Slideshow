
/**
 * slideshow.js funtions
 * 
 * This functions will control the slideshow behaviour.
 * 
 * This slideshow has handlers to move slides forward and backwards.
 * 
 * Also it has points to show each slide.
 * 
 * It is automatic and we are able to see each slide every few moments.
 */


// Initialize a slideIndex container
let slideIndex = 1;
showSlide(slideIndex);

// We select ther arrows for next and prev slide
let prevSlideArrow = document.querySelector(".prev");
let nextSlideArrow = document.querySelector(".next");

prevSlideArrow.addEventListener("click", function()
{
    nextPrevSlide(-1);
});

nextSlideArrow.addEventListener("click", function()
{
    nextPrevSlide(1);
});

/**
 * 
 * @param {number} n 
 * 
 * This functions increases or decreases the slideIndex base on the received parameter
 */
function nextPrevSlide(n)
{
    slideIndex += n;
    showSlide(slideIndex);
}

/**
 * 
 * @param {"type: slideNumber"} slideNum
 * 
 * This functions shows a specific slide passed as an argument 
 */
function showSlide(slideNum)
{
    let slides = document.querySelectorAll(".mySlides");
    let dots   = document.querySelectorAll(".dot");

    if (slideIndex > slides.length)
        slideIndex = 1;

    if (slideNum < 1)
        slideIndex = slides.length;

    for (i = 0; i < slides.length; ++i)
    {
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
