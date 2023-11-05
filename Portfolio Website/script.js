// Toggle Icon
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Section Active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Remove toggle icon and navbar
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// Scroll Reveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .home-sci, .services-container, .portfolio-box, .contact form, .about .btn-box a', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img , .portfolio-box h4', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

// slide 1st for portfolio

const btnLeft = document.querySelector('.left-btn')
const btnRight = document.querySelector('.right-btn')
const slider = document.querySelector('#slider')
const sliderItems = document.querySelectorAll('.sliderItem')
const slidesCount = sliderItems.length

let currentSlide = 0;

function slideLeft(){
    if (currentSlide == 0){
        currentSlide = slidesCount -1;
    }
    else{
        currentSlide--
    }
    sliderItems.forEach(el => {
        el.classList.remove('active')
    })
    sliderItems[currentSlide].classList.add('active');
}

function slideRight(){
    if (currentSlide >= slidesCount - 1){
        currentSlide = 0;
    }
    else{
        currentSlide++
    }
    sliderItems.forEach(el => {
        el.classList.remove('active')
    })
    sliderItems[currentSlide].classList.add('active');
}

btnRight.addEventListener('click', slideRight)

btnLeft.addEventListener('click', slideLeft)


// slider for digital art
const btnLeft1 = document.querySelector('.left-btn1')
const btnRight1 = document.querySelector('.right-btn1')
const slider1 = document.querySelector('#slider1')
const sliderItems1 = document.querySelectorAll('.sliderItem1')
const slidesCount1 = sliderItems1.length

let currentSlide1 = 0;

function slideLeft1(){
    if (currentSlide1 == 0){
        currentSlide1 = slidesCount1 - 1;
    }
    else{
        currentSlide1--
    }
    sliderItems1.forEach(el => {
        el.classList.remove('active')
    })
    sliderItems1[currentSlide1].classList.add('active');
}

function slideRight1(){
    if (currentSlide1 >= slidesCount1 - 1){
        currentSlide1 = 0;
    }
    else{
        currentSlide1++
    }
    sliderItems1.forEach(el => {
        el.classList.remove('active')
    })
    sliderItems1[currentSlide1].classList.add('active');
}

btnRight1.addEventListener('click', slideRight1)

btnLeft1.addEventListener('click', slideLeft1)

// slider for 3rd portfolio

const btnLeft2 = document.querySelector('.left-btn2')
const btnRight2 = document.querySelector('.right-btn2')
const slider2 = document.querySelector('#slider2')
const sliderItems2 = document.querySelectorAll('.sliderItem2')
const slidesCount2 = sliderItems2.length

let currentSlide2 = 0;

function slideLeft2(){
    if (currentSlide2 == 0){
        currentSlide2 = slidesCount2 - 1;
    }
    else{
        currentSlide2--
    }
    sliderItems2.forEach(el => {
        el.classList.remove('active')
    })
    sliderItems2[currentSlide2].classList.add('active');
}

function slideRight2(){
    if (currentSlide2 >= slidesCount2 - 1){
        currentSlide2 = 0;
    }
    else{
        currentSlide2++
    }
    sliderItems2.forEach(el => {
        el.classList.remove('active')
    })
    sliderItems2[currentSlide2].classList.add('active');
}

btnRight2.addEventListener('click', slideRight2)

btnLeft2.addEventListener('click', slideLeft2)

// slider for 4th portfolio

// const btnLeft3 = document.querySelector('.left-btn3')
// const btnRight3 = document.querySelector('.right-btn3')
// const slider3 = document.querySelector('#slider3')
// const sliderItems3 = document.querySelectorAll('.sliderItem3')
// const slidesCount3 = sliderItems3.length

// let currentSlide3 = 0;

// function slideLeft3(){
//     if (currentSlide3 == 0){
//         currentSlide3 = slidesCount3 - 1;
//     }
//     else{
//         currentSlide3--
//     }
//     sliderItems3.forEach(el => {
//         el.classList.remove('active')
//     })
//     sliderItems3[currentSlide3].classList.add('active');
// }

// function slideRight3(){
//     if (currentSlide3 >= slidesCount3 - 1){
//         currentSlide3 = 0;
//     }
//     else{
//         currentSlide3++
//     }
//     sliderItems3.forEach(el => {
//         el.classList.remove('active')
//     })
//     sliderItems3[currentSlide3].classList.add('active');
// }

// btnRight3.addEventListener('click', slideRight3)

// btnLeft3.addEventListener('click', slideLeft3)