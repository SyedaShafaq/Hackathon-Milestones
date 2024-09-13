// Get References
const form = document.getElementById("wholeSection") as HTMLFormElement;
const resumeDisplay = document.getElementById('resumePreview') as HTMLDivElement;

// Event Listener
// Form Submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload
    
    // Collect input from user
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    //if (!name || !email || !phone || !address || !education || !skills) {
        //alert('Please fill in all fields.');
       // return;
    //}

    // Generate resume
    const resumeHTML = `
    <h2><b> Editable Resume</b></h2>
    <h3> Personal Information </h3>
    <p><b>Name:</b><span contenteditable = "true"> ${name}</span></p>
    <p><b>Email:</b><span contenteditable = "true"> ${email}</span></p>
    <p><b>Phone:</b><span contenteditable = "true"> ${phone}</span></p>
    <p><b>Address:</b><span contenteditable = "true"> ${address}</span></p>
    <h3>Education</h3>
    <p contenteditable = "true">${education}</p>
    <h3>Skills</h3>
    <p contenteditable = "true">${skills}</p>
    `;
    
    // Display resume in div
    resumeDisplay.innerHTML = resumeHTML;
    
    // Clear form fields
    //form.reset();
});
