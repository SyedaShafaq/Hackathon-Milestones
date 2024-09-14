// Get References
const form = document.getElementById("wholeSection") as HTMLFormElement;
const resumeDisplay = document.getElementById('resumePreview') as HTMLDivElement;
const shareableLink = document.getElementById('shareableLink') as HTMLDivElement;
    
const link = document.getElementById(`link`) as HTMLAnchorElement;
    const downloadPdfButton = document.getElementById('downloadLink') as HTMLButtonElement;
// Event Listener
// Form Submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload
    
    // Collect input from user
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    //if (!name || !email || !phone || !address || !education || !skills) {
        //alert('Please fill in all fields.');
       // return;
    //}
    const resumeData = {
        name,
        email,
        phone,
        education,
        skills
        };
        localStorage.setItem(username, JSON.stringify(resumeData));

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
    // Generate a shareable URL with the username
    const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`; 
// Display the shareable link
shareableLink.style.display = 'block';
link.href = shareableURL;
link.textContent = shareableURL;


});
downloadPdfButton.addEventListener('click', () => {
    window.print();
});
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
        const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value=
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
 
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});
