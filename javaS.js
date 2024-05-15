const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav_link');

window.addEventListener("scroll", handleScroll);

function handleScroll() {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const url = window.location.href;

    if (url.includes("index") && windowWidth > 1024) {
        if (scrollPosition >= 100) {
            nav.style.backgroundColor = 'white';
            navLinks.forEach(link => link.style.color = 'black');
        } else {
            nav.style.backgroundColor = 'transparent';
            navLinks.forEach(link => link.style.color = 'white');
        }
    }
}

window.addEventListener("scroll", handleSmallScroll);
function handleSmallScroll() {
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;
    const url = window.location.href;

    if (url.includes("index") && windowWidth <= 1024) {
        if (scrollPosition >= 100) {
            nav.style.backgroundColor = 'white';
        } else {
            nav.style.backgroundColor = 'transparent';
        }
    }
}

function showMenu() {
    const menu_icon = document.getElementById('menu_icon');
    const nav_ul = document.querySelector('nav ul');
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1024) {
        menu_icon.style.display = 'none';
        nav_ul.style.transform = 'translateY(-20%)'
    }
}

function closeMenu() {
    const xmark = document.getElementById('close_icon');
    const nav_ul = document.querySelector('nav ul');
    const windowWidth = window.innerWidth;

    if (windowWidth <= 1024) {
        menu_icon.style.display = 'flex';
        nav_ul.style.transform = 'translateY(-120%)'
    }

}
var counter1 = 0;
function openResidential() {
    counter1++
    if (counter1 % 2 !== 0) {
        var s1 = document.querySelector('#chev_down1');
        s1.style.transform = 'rotateZ(180deg)';
        var s2 = document.querySelector('.index_body3_residential');
        s2.style.height = '700px';
    }
    else {
        var s1 = document.querySelector('#chev_down1');
        s1.style.transform = 'rotateZ(0)';
        var s2 = document.querySelector('.index_body3_residential');
        s2.style.height = '200px';
    }

}
var counter2 = 0;
function openCommercial() {
    counter2++
    if (counter2 % 2 !== 0) {
        var s3 = document.querySelector('#chev_down2');
        s3.style.transform = 'rotateZ(180deg)';
        var s4 = document.querySelector('.index_body3_commercial');
        s4.style.height = '700px';
    }
    else {
        var s3 = document.querySelector('#chev_down2');
        s3.style.transform = 'rotateZ(0)';
        var s4 = document.querySelector('.index_body3_commercial');
        s4.style.height = '200px';
    }

}

var counter3 = 0;
function openUnits() {
    counter3++
    if (counter3 % 2 !== 0) {
        var s5 = document.querySelector('#chev_down3');
        s5.style.transform = 'rotateZ(180deg)';
        var s6 = document.querySelector('.index_body3_units');
        s6.style.height = '700px';
    }
    else {
        var s5 = document.querySelector('#chev_down3');
        s5.style.transform = 'rotateZ(0)';
        var s6 = document.querySelector('.index_body3_units');
        s6.style.height = '200px';
    }

}
const slides = document.querySelectorAll('.slides .slide');
let slideIndex = 0;
let intervalid = null;

document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalid = setInterval(nextSlide, 5000);
    }
}
function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.style.display = "none";
    });
    slides[slideIndex].style.display = "block";
}
function prevSlide() {
    clearInterval(intervalid)
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
window.addEventListener("scroll", (event) => {
    let scroll1 = this.scrollY;
    console.log(scroll1)
});
window.addEventListener("scroll", function () {
    let scrollHeight = window.scrollY;
    let topImage = this.document.querySelector('.image_container');
    if (scrollHeight >= 1000) {
        topImage.style.position = "absolute";
    }
    else {
        topImage.style.position = "fixed"
    }
});

var facebook = document.getElementById('facebook');
var twitter = document.getElementById('twitter');
var instagram = document.getElementById('instagram');
var social = document.getElementById('social');
var socialCount = 0;
function showSocial() {
    socialCount++;
    if (socialCount % 2 !== 0) {
        facebook.style.display = 'flex';
        twitter.style.display = 'flex';
        instagram.style.display = 'flex';
        social.style.transform = 'none';
    }
    else {
        facebook.style.display = 'none';
        twitter.style.display = 'none';
        instagram.style.display = 'none';
        social.style.transform = 'translateY(225px)';
    }
}