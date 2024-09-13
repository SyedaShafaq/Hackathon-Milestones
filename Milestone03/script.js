// Get References
const form = document.getElementById('formResume');
const resumeDisplay = document.getElementById('resumePreview');

// Ensure form and resumeDisplay are not null
if (form && resumeDisplay) {
    // Event Listener
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page reload

        // Collect input from user
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const education = document.getElementById('educationContainer').value;
        const skills = document.getElementById('skillsContainer').value;

        // Validate inputs
        if (!name || !email || !phone || !address || !education || !skills) {
            alert('Please fill in all fields.');
            return;
        }

        // Generate resume
        const resumeHTML = `
            <h2><b>Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Address:</b> ${address}</p>
            <h3>Education</h3>
            <p><b>${education}</b></p>
            <h3>Skills</h3>
            <p><b>${skills}</b></p>
        `;

        // Display resume in div
        resumeDisplay.innerHTML = resumeHTML;

        // Clear form fields
        form.reset();
    });
} else {
    console.error('Form or resume display element not found');
}
