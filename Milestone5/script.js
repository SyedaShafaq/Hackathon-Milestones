// Get References
var form = document.getElementById("wholeSection");
var resumeDisplay = document.getElementById('resumePreview');
var shareableLink = document.getElementById('shareableLink');
var link = document.getElementById("link");
var downloadPdfButton = document.getElementById('downloadLink');
// Event Listener
// Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input from user
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    //if (!name || !email || !phone || !address || !education || !skills) {
    //alert('Please fill in all fields.');
    // return;
    //}
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Generate resume
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3> Personal Information </h3>\n    <p><b>Name:</b><span contenteditable = \"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable = \"true\"> ").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable = \"true\"> ").concat(phone, "</span></p>\n    <p><b>Address:</b><span contenteditable = \"true\"> ").concat(address, "</span></p>\n    <h3>Education</h3>\n    <p contenteditable = \"true\">").concat(education, "</p>\n    <h3>Skills</h3>\n    <p contenteditable = \"true\">").concat(skills, "</p>\n    ");
    // Display resume in div
    resumeDisplay.innerHTML = resumeHTML;
    // Generate a shareable URL with the username
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link
    shareableLink.style.display = 'block';
    link.href = shareableURL;
    link.textContent = shareableURL;
});
downloadPdfButton.addEventListener('click', function () {
    window.print();
});
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
