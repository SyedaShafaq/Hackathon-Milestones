// Get References
var form = document.getElementById("wholeSection");
var resumeDisplay = document.getElementById('resumePreview');
// Event Listener
// Form Submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input from user
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
    // Generate resume
    var resumeHTML = "\n    <h2><b> Editable Resume</b></h2>\n    <h3> Personal Information </h3>\n    <p><b>Name:</b><span contenteditable = \"true\"> ".concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable = \"true\"> ").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable = \"true\"> ").concat(phone, "</span></p>\n    <p><b>Address:</b><span contenteditable = \"true\"> ").concat(address, "</span></p>\n    <h3>Education</h3>\n    <p contenteditable = \"true\">").concat(education, "</p>\n    <h3>Skills</h3>\n    <p contenteditable = \"true\">").concat(skills, "</p>\n    ");
    // Display resume in div
    resumeDisplay.innerHTML = resumeHTML;
    // Clear form fields
    //form.reset();
});
