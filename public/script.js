function showCertifications() {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = `
        <h2>Certifications</h2>
        <p><strong>AWS Certified Cloud Practitioner</strong><br>
        Expected Completion: Jan 15, 2024</p>
        <p><strong>CompTIA A+ CE</strong><br>
        Certified on: Oct 20, 2023<br>
        Verification Code: H1Y6H0TZKMR4QE5Z</p>
        <p><strong>Google IT Support by Google on Coursera</strong><br>
        Certificate Date: May 10, 2023</p>
        <button onclick="goBack()">Go Back</button>
    `;
}

// Add any other functions you need here

function goBack() {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = `
        <h1>Interactive IT Support CV</h1>
        <p>Welcome to my Interactive IT Support CV Game!</p>
        <p>Choose an option:</p>
        <button onclick="showAboutMe()">About Me</button>
        <button onclick="showExperience()">Experience</button>
        <button onclick="showSkills()">Skills</button>
        <button onclick="showCertifications()">Certifications</button>
        <button><a href="/download/resume.pdf" download>Download Resume</a></button>
        <button><a href="https://www.linkedin.com/in/angelomangune/" target="_blank">LinkedIn Profile</a></button>
    `;
}

// Add other functions for different sections as needed
