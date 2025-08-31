// ✅ Navigation: Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (!hamburger || !navLinks) {
    console.error('Hamburger or navLinks element not found');
} else {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('.thumbnails img');

if (!mainImage || thumbnails.length === 0) {
    console.error('Gallery elements not found');
} else {
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            mainImage.src = thumbnail.src; 
            mainImage.alt = thumbnail.alt;
        });
    });
}
