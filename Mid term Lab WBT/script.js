let registrants = [];

let virtualCount = 0;

let inPersonCount = 0;

document. getElementById("registrationForm"). addEventListener("submit", function(e) {

e.preventDefault();

let name = document. getElementById("fullname"). value. trim();

let email = document. getElementById("email"). value. trim();

let company = document. getElementById("company"). value. trim();

let attendance = document. querySelector("input[name='attendance']:checked");

let valid = true;

// Name validation

if (name. length 100) {

document. getElementById("nameError"). innerText = 'Name must be between 6 and 100 characters';

valid = false;

} else {

document. getElementById("nameError"). innerText = "";

}

// Email validation

if (! email. includes("@") ||! email. includes(".") ) {

document. getElementById("emailError"). innerText = "Please provide a valid professional email.";

valid = false;

} else {

document. getElementById("emailError"). innerText = "";

}

// Company: (optional but max 100 chars)

if (company. length > 100) {

document. getElementById("companyError"). innerText = "You may input a maximum of 100 characters.";

valid = false;

} else {

document. getElementById("companyError"). innerText
 
    // Attendance validation
    if (!attendance) {
        document.getElementById("attendanceError").innerText = "Please select your attendance type.";
        valid = false;
    } else {
        document.getElementById("attendanceError").innerText = "";
    }
 
    if (!valid) return;
 
    // Store data in JS arrays (no DB)
    registrants.push({
        name: name,
        email: email,
        company: company,
        attendance: attendance.value
    });
 
    if (attendance.value === "Virtual") virtualCount++;
    else inPersonCount++;
 
    alert("Registration Successful!");
 
    document.getElementById("registrationForm").reset();
    updateAnalytics();
});
 
function updateAnalytics() {
    document.getElementById("totalCount").innerText = registrants.length;
    document.getElementById("virtualCount").innerText = virtualCount;
    document.getElementById("inpersonCount").innerText = inPersonCount;
}
 
// Show/Hide analytics panel
document.getElementById("analyticsBtn").addEventListener("click", function() {
    let panel = document.getElementById("analyticsPanel");
 
    if (panel.classList.contains("hidden")) {
        panel.classList.remove("hidden");
        this.innerText = "Hide Event Analytics";
    } else {
        panel.classList.add("hidden");
        this.innerText = "Show Event Analytics";
    }
});
