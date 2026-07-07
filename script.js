/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menuBtn.innerHTML =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

/* Close menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = "☰";

    });

});

/* ==========================================
   HEADER SHADOW
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   GOOGLE CALENDAR POPUP
========================================== */

const calendarBtn = document.getElementById("calendarBtn");

if (calendarBtn) {

    calendarBtn.addEventListener("click", function (e) {

        e.preventDefault();

        window.open(

            "YOUR_GOOGLE_CALENDAR_LINK",

            "Appointment",

            "width=900,height=700,left=200,top=60"

        );

    });

}

/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

    ".card, .review-card, .highlight, .contact-card"

);

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

},

{
    threshold:0.2
}

);

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform = "translateY(40px)";

    el.style.transition = ".7s ease";

    observer.observe(el);

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style, {

    position:"fixed",

    left:"20px",

    bottom:"20px",

    width:"55px",

    height:"55px",

    border:"none",

    borderRadius:"50%",

    background:"#0A7DB8",

    color:"#fff",

    fontSize:"22px",

    cursor:"pointer",

    display:"none",

    boxShadow:"0 12px 25px rgba(0,0,0,.18)",

    transition:".3s",

    zIndex:"999"

});

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ==========================================
   BUTTON HOVER EFFECT
========================================== */

topBtn.addEventListener("mouseenter", () => {

    topBtn.style.transform = "scale(1.1)";

});

topBtn.addEventListener("mouseleave", () => {

    topBtn.style.transform = "scale(1)";

});