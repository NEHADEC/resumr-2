document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    var output = document.getElementById("resume-output");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Capture form data
        var formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            education: document.getElementById("education").value,
            experience: document.getElementById("experience").value,
            skills: document.getElementById("skills").value,
        };
        // Generate resume
        output.innerHTML = generateResume(formData);
    });
});
function generateResume(data) {
    return "\n      <h3>".concat(data.name, "</h3>\n      <p><strong>Email:</strong> ").concat(data.email, "</p>\n      <p><strong>Education:</strong> ").concat(data.education, "</p>\n      <p><strong>Experience:</strong> ").concat(data.experience, "</p>\n      <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n    ");
}
