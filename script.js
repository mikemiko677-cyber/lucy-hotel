const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");


/* =========================
   MOBILE MENU
========================= */

menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});


closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});


document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

        });

    });


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mobileMenu.classList.remove("active");

    }

});


/* =========================
   RESERVATION FORM
========================= */

const reservationForm =
    document.getElementById("reservationForm");

const formMessage =
    document.getElementById("formMessage");


reservationForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const fullName =
            document
                .getElementById("fullName")
                .value
                .trim();


        const email =
            document
                .getElementById("email")
                .value
                .trim();


        const phone =
            document
                .getElementById("phone")
                .value
                .trim();


        const checkIn =
            document
                .getElementById("checkIn")
                .value;


        const checkOut =
            document
                .getElementById("checkOut")
                .value;


        if (
            !fullName ||
            !email ||
            !phone ||
            !checkIn ||
            !checkOut
        ) {

            formMessage.textContent =
                "Please complete the required reservation details.";

            return;

        }


        if (
            new Date(checkOut) <=
            new Date(checkIn)
        ) {

            formMessage.textContent =
                "Check-out must be after check-in.";

            return;

        }


        formMessage.textContent =
            "Reservation request prepared. Connect this form to your hotel backend or email service to receive real reservations.";

    }
);


/* =========================
   MINIMUM DATE
========================= */

const checkIn =
    document.getElementById("checkIn");

const checkOut =
    document.getElementById("checkOut");


const today =
    new Date()
        .toISOString()
        .split("T")[0];


checkIn.min = today;

checkOut.min = today;


checkIn.addEventListener("change", () => {

    if (!checkIn.value) {
        return;
    }


    checkOut.min =
        checkIn.value;


    if (
        checkOut.value &&
        checkOut.value <= checkIn.value
    ) {

        checkOut.value = "";

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".room-card, .facility-card, .service-row, .intro-copy, .split-content, .contact-details"
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {

            threshold: 0.12

        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   HERO PARALLAX
========================= */

const heroImage =
    document.querySelector(".hero-image");


window.addEventListener("scroll", () => {

    if (
        window.innerWidth <= 800
    ) {

        heroImage.style.transform =
            "none";

        return;

    }


    const scroll =
        window.scrollY;


    heroImage.style.transform =
        `scale(1.03) translateY(${scroll * 0.035}px)`;

});