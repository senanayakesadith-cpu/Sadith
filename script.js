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
