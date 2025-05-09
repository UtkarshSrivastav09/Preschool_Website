// Navbar scroll effect
window.addEventListener('scroll', function() {
    let navbar = document.querySelector('.navbar');
    if (this.window.scrollY > 20) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

function validateForm(){
    var name = document.getElementById("nameInput").value;
    var fname = document.getElementById("fnameInput").value;
    var mname = document.getElementById("mnameInput").value;
    var address = document.getElementById("addressInput").value;
    var email = document.getElementById("emailInput").value;

    if (name == 'Shubh' ){
        alert("Login Successfully ...");
        // window.location.href('https://www.google.com');
        window.location.assign("https://www.google.com") ;
    }else{
        alert("Error!! Please check your detail and try again later.");
    }
}

// navbar toggle
const menuBtn =document.getElementById('menu-btn');
const navLinks =document.getElementById('nav-links');
const menuIcon = document.querySelector('i');

menuBtn.addEventListener('click',(e) =>{
    navLinks.classList.toggle('open')

    const isOpen = navLinks.classList.contains('open')
    menuIcon.setAttribute('class', isOpen ? 'bx bx-window-close' : 'bx bx-menu')
})


const scrollrevealOption = {
    distance : '50px',
    origin : 'bottom',
    duration : 1000
}
ScrollReveal().reveal('.left',{
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.right img', {
    ...scrollrevealOption,
    origin : 'right'
});
ScrollReveal().reveal('.heading', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.para', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.box', {
    ...scrollrevealOption,
    delay : 1000,
});
ScrollReveal().reveal('.left-box', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.mid', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.right-box', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.left-box li', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.right-box li', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.blog-box', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.contact-left', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.contact-right', {
    ...scrollrevealOption,
    delay : 500,
});
ScrollReveal().reveal('.footer-col', {
    ...scrollrevealOption,
    delay : 500,
});
