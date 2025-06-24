// Get Slider Items
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// get number of slides
let slideCount = sliderImages.length;
// set current slide
let currentSlide = 6;
// slide number element
let slideNumberElement = document.getElementById('slider-number');
// prev and next buttom
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
// Handel Click On previous and Next Buttom
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
// Create The Main Ul Elements
let paginationElement = document.createElement('ul');
paginationElement.setAttribute('id', 'pagination-ul');
for (let i = 0; i < slideCount; i++) {
    let paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i + 1);
    paginationItem.appendChild(document.createTextNode(i + 1));
    paginationElement.appendChild(paginationItem);   
}
document.getElementById('indicators').appendChild(paginationElement);
// get the new ul 
let paginationNewUl = document.getElementById('pagination-ul');
// Get pagination Itemsn
let paginationNewlis = Array.from(document.querySelectorAll('#pagination-ul li'));
for (let i = 0; i < paginationNewlis.length; i++) {
    paginationNewlis[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    };
}
theChecker();
// All function  
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}
function theChecker () {
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slideCount);
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add('active');
    paginationNewUl.children[currentSlide - 1].classList.add('active');
    // check if current slide is the first or last 
    if (currentSlide == 1) {
        // add class disabled to prev button
        prevButton.classList.add('disabled');
    } else {
        // remove class disabled to prev button
        prevButton.classList.remove('disabled'); 
    }
    if (currentSlide == slideCount) {
        // add class disabled to next button
        nextButton.classList.add('disabled');
    } else {
        // remove class disabled to next button
        nextButton.classList.remove('disabled'); 
    }
}
function removeAllActive() {
    removeActive(sliderImages);
    removeActive(paginationNewlis);
} 
function removeActive(array) {
    array.forEach( (ele) => {
        ele.classList.remove('active');
    });
}   
