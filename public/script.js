function showAboutMe() {
    hideAllSections();
    document.getElementById('aboutMe').style.display = 'block';
}

function showExperience() {
    hideAllSections();
    document.getElementById('experience').style.display = 'block';
}

function showSkills() {
    hideAllSections();
    document.getElementById('skills').style.display = 'block';
}

function showCertifications() {
    hideAllSections();
    document.getElementById('certifications').style.display = 'block';
}

function hideAllSections() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
}

function goBack() {
    hideAllSections();
    document.getElementById('aboutMe').style.display = 'block';
}

// Initial display
showAboutMe();
