document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetSectionId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetSectionId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    sections.forEach(section => {
        section.addEventListener('mouseover', () => {
            section.classList.add('section-hover');
        });

        section.addEventListener('mouseout', () => {
            section.classList.remove('section-hover');
        });
    });
});
