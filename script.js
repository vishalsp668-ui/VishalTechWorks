/* =================================
   PORTFOLIO JAVASCRIPT
================================= */


/* LOADER */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 250);
    }
});


/* DARK / LIGHT THEME */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        const isLight = document.body.classList.contains("light");

        themeBtn.textContent = isLight ? "🌙" : "☀️";
    });
}


/* MOBILE NAVIGATION */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("active");

        menuBtn.setAttribute("aria-expanded", String(isOpen));

        menuBtn.textContent = isOpen ? "✕" : "☰";

    });


    // Close menu after clicking a link

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

            menuBtn.textContent = "☰";

        });

    });

}


/* TYPING ANIMATION */

const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "AI/ML Engineer",
        "Machine Learning Enthusiast",
        "Web Developer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        typing.textContent = currentWord.slice(0, charIndex);


        if (!deleting && charIndex < currentWord.length) {

            charIndex++;

            setTimeout(typeEffect, 105);

        }

        else if (!deleting) {

            deleting = true;

            setTimeout(typeEffect, 1000);

        }

        else if (charIndex > 0) {

            charIndex--;

            setTimeout(typeEffect, 55);

        }

        else {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

            setTimeout(typeEffect, 250);

        }

    }

    typeEffect();

}


/* CUSTOM CURSOR */

const dot = document.getElementById("cursorDot");
const ring = document.getElementById("cursorRing");

document.addEventListener("mousemove", (event) => {

    const x = event.clientX + "px";
    const y = event.clientY + "px";

    if (dot) {
        dot.style.left = x;
        dot.style.top = y;
    }

    if (ring) {
        ring.style.left = x;
        ring.style.top = y;
    }

});


/* SCROLL REVEAL ANIMATION */

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealItems.forEach(item => {
        observer.observe(item);
    });

}

else {

    revealItems.forEach(item => {
        item.classList.add("show");
    });

}


/* BACK TO TOP BUTTON */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (topBtn) {

        topBtn.classList.toggle("show", window.scrollY > 400);

    }

});


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* AUTOMATIC COPYRIGHT YEAR */

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


/* CONTACT FORM */

// Add your real email address here.

const PORTFOLIO_EMAIL = "vishalsp668@gmail.com";

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();

        const senderEmail = document.getElementById("senderEmail").value.trim();

        const message = document.getElementById("message").value.trim();


        // Check empty fields

        if (!name || !senderEmail || !message) {
            return;
        }


        // Check email configuration

        if (PORTFOLIO_EMAIL === "your-enail@example.com") {

            alert("Please add your real email address in script.js first.");

            return;

        }


        // Prepare email

        const subject = encodeURIComponent(
            "Portfolio message from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + senderEmail +
            "\n\nMessage:\n" + message
        );


        // Open default email application

        window.location.href =
            "mailto:" + PORTFOLIO_EMAIL +
            "?subject=" + subject +
            "&body=" + body;

    });

}