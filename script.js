document.addEventListener("DOMContentLoaded", () => {

    /* TYPING EFFECT */
    const texts = [
        "Undergraduate",
        "Web Developer",
        "Photographer",
        "Videographer"
    ];

    let index = 0;
    let charIndex = 0;

    const typingElement = document.getElementById("typing");

    function type() {
        if (!typingElement) return;

        if (charIndex < texts[index].length) {
            typingElement.textContent += texts[index].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (!typingElement) return;

        if (charIndex > 0) {
            typingElement.textContent =
                texts[index].substring(0, charIndex - 1);

            charIndex--;
            setTimeout(erase, 50);
        } else {
            index = (index + 1) % texts.length;
            setTimeout(type, 500);
        }
    }

    if (typingElement) {
        type();
    }

    /* DARK MODE */

    const themeBtn = document.getElementById("themeBtn");

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeBtn.textContent = "☀️ Light Mode";
            } else {
                themeBtn.textContent = "🌙 Dark Mode";
            }
        });
    }

    /* SKILL ANIMATION */

    const skillCards = document.querySelectorAll(".skill-card");

    const skillObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                const bars =
                    entry.target.querySelectorAll(".progress-fill");

                bars.forEach(bar => {
                    const width =
                        bar.closest(".skill-item").dataset.width;

                    bar.style.width = width + "%";
                });

                observer.unobserve(entry.target);
            }
        });

    }, {
        threshold: 0.3
    });

    skillCards.forEach(card => {
        skillObserver.observe(card);
    });

    /* PROJECT FILTER */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const filter = button.dataset.filter;

            projectCards.forEach(card => {

                if (
                    filter === "all" ||
                    card.dataset.category === filter
                ) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });


    /* CONTACT ANIMATION */

    const contactCards =
        document.querySelectorAll(".contact-card");

    const contactObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.3
        }
    );

    contactCards.forEach(card => {
        contactObserver.observe(card);
    });


    /* ABOUT STATS COUNTER */

    const statNumbers =
        document.querySelectorAll(".number");

    function animateNumber(element) {

        const target =
            parseInt(element.dataset.count);

        let current = 0;

        const increment =
            Math.max(1, Math.floor(target / 50));

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            element.textContent = current;

        }, 30);
    }

    const statsObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateNumber(entry.target);

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.5
        }
    );

    statNumbers.forEach(number => {
        statsObserver.observe(number);
    });


    /* SCROLL ANIMATION */

    const scrollElements =
        document.querySelectorAll(
            ".about-card, .edu-card, .skill-card, .project-card"
        );

    const scrollObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.2
        }
    );

    scrollElements.forEach(element => {
        scrollObserver.observe(element);
    });

});