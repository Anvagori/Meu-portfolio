
/* =========================================
   ANGEL GOMEZ - PORTFOLIO
   JAVASCRIPT
========================================= */

// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const menuIsOpen = navLinks.classList.contains("active");

    menuToggle.textContent = menuIsOpen ? "✕" : "☰";

    menuToggle.setAttribute("aria-expanded", menuIsOpen);

});


// FECHAR MENU AO CLICAR EM UM LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// ANO AUTOMÁTICO NO RODAPÉ

const footerText = document.querySelector(".footer-content p");

if (footerText) {

    const currentYear = new Date().getFullYear();

    footerText.textContent =
        `© ${currentYear} Angel Gomez. Desenvolvido com dedicação.`;

}


// ANIMAÇÃO DE ENTRADA DAS SEÇÕES

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


const animatedElements = document.querySelectorAll(
    ".about-content, .skill-card, .project-card, .experience-card"
);

animatedElements.forEach((element) => {

    element.classList.add("reveal");

    observer.observe(element);

});
