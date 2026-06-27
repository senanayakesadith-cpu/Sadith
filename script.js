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
    if (charIndex < texts[index].length) {
        typingElement.textContent += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
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

document.addEventListener("DOMContentLoaded", () => {
    if (typingElement) {
        type();
    }
});

// Dark Mode Toggle
const btn = document.getElementById("themeBtn");

if (btn) {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            btn.innerHTML = "☀️ Light Mode";
            btn.style.backgroundColor = "#f1c40f";
            btn.style.color = "#000";
        } else {
            btn.innerHTML = "🌙 Dark Mode";
            btn.style.backgroundColor = "#2c3e50";
            btn.style.color = "#fff";
        }
    });
}
