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
        <button class="back-btn" onclick="goBack()">Go Back</button>
    `;
}

// Add other functions for different sections as needed

function goBack() {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = `
        <h1>Interactive IT Support CV</h1>
        <p>Welcome to my Interactive IT Support CV Game!</p>
        <div class="options">
            <button class="option-btn" onclick="showAboutMe()">About Me</button>
            <button class="option-btn" onclick="showExperience()">Experience</button>
            <button class="option-btn" onclick="showSkills()">Skills</button>
            <button class="option-btn" onclick="showCertifications()">Certifications</button>
            <a href="/download/resume.pdf" download class="resume-btn">Download Resume</a>
            <a href="https://www.linkedin.com/in/angelomangune/" target="_blank" class="linkedin-btn">LinkedIn Profile</a>
        </div>
    `;
}

// Add other functions for different sections as needed
