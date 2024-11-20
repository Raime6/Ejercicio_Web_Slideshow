
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
let autoSlide;
let dots       = document.getElementsByClassName("dot");

// Adds to every dot a click event
for (let i = 0; i < dots.length; i++)
{
    const dot = dots[i];
    dot.addEventListener("click", function()
    {
        
        stopAutoSlide();
        currentSlide(i + 1);
        startAutoSlide();
    })
}

// Shows first slide when charging web
showSlide(slideIndex);

// Initites auto performance of slideshow
startAutoSlide();

// We select ther arrows for next and prev slide
let prevSlideArrow = document.querySelector(".prev");
let nextSlideArrow = document.querySelector(".next");

prevSlideArrow.addEventListener("click", function()
{
    stopAutoSlide();
    nextPrevSlide(-1);
    startAutoSlide();
});

nextSlideArrow.addEventListener("click", function()
{
    stopAutoSlide();
    nextPrevSlide(1);
    startAutoSlide();
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
 * Click on dots updates the slideIndex
 * 
 * @param {number} n
 */
function currentSlide(n)
{
    console.log(n);
    
    slideIndex = n;
    showSlide(slideIndex);
}

/**
 * 
 * @param {number} slideNum
 * 
 * This functions shows a specific slide passed as an argument 
 */
function showSlide(slideNum)
{
    let slides = document.querySelectorAll(".mySlides");

    if (slideIndex > slides.length)
        slideIndex = 1;

    if (slideNum < 1)
        slideIndex = slides.length;

    for (j = 0; j < slides.length; ++j)
    {
        slides[j].style.display = "none";
        dots[j].className = dots[j].className.replace("active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


/**
 * Automates nextPrevSlide() function call using the built-in setInterval() function
 * 
 * Value 1 as enter paramenter to pass to the next slide
 */
function startAutoSlide()
{
    autoSlide = setInterval(function()
    {
        nextPrevSlide(1);
    }, 3000); // Sets time between calls in miliseconds
}

// Stops auto performance of slideShow
function stopAutoSlide()
{
    clearInterval(autoSlide);
}
