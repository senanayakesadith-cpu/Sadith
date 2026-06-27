document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // Typing Effect (FIXED)
    // ==========================
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

    if (typingElement) type();


    // ==========================
    // Dark Mode (IMPROVED)
    // ==========================
    const btn = document.getElementById("themeBtn");

    if (btn) {
        btn.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                btn.textContent = "☀️ Light Mode";
            } else {
                btn.textContent = "🌙 Dark Mode";
            }
        });
    }


    // ==========================
    // SKILLS ANIMATION (FIXED)
    // ==========================
    const skillCards = document.querySelectorAll(".skill-card");

    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                const bars = entry.target.querySelectorAll(".progress-fill");

                bars.forEach(bar => {
                    const width = bar.closest(".skill-item").dataset.width;
                    bar.style.width = width + "%";
                });

                observer.unobserve(entry.target);
            }

        });
    }, { threshold: 0.3 });

    skillCards.forEach(card => skillObserver.observe(card));


    // ==========================
    // PROJECT FILTER (FIXED)
    // ==========================
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            projectCards.forEach(card => {

                if (filter === "all" || card.dataset.category === filter) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });


    // ==========================
    // CONTACT ANIMATION (FIXED)
    // ==========================
    const contactCards = document.querySelectorAll(".contact-card");
    const ctaBtn = document.getElementById("ctaBtn");

    const contactObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const delay = parseInt(entry.target.dataset.delay) || 0;

                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay * 100);

                observer.unobserve(entry.target);
            }

        });

    }, { threshold: 0.3 });

    contactCards.forEach(card => contactObserver.observe(card));


    // ==========================
    // CTA BUTTON ANIMATION
    // ==========================
    if (ctaBtn) {
        const btnObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    ctaBtn.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        });

        btnObserver.observe(ctaBtn);
    }


    // ==========================
    // SCROLL ANIMATION (CLEANED)
    // ==========================
    const scrollElements = document.querySelectorAll(
        ".profile-card, .edu-card, .skill-card, .project-card"
    );

    const scrollObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    }, { threshold: 0.2 });

    scrollElements.forEach(el => scrollObserver.observe(el));

});
