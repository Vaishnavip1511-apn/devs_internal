
function submitForm() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
if (!name || !email || !phone) {
document.getElementById("error").innerText =
"Please fill all the fields.";
document.getElementById("confirmation").innerText = "";
}
else if (!email.includes("@") || !email.includes(".")) {
document.getElementById("error").innerText =
"Please enter a valid email address.";
document.getElementById("confirmation").innerText = "";
}
else if (isNaN(phone) || phone.length != 10) {
document.getElementById("error").innerText =
"Please enter a valid 10-digit phone number.";
document.getElementById("confirmation").innerText = "";
}
else {
document.getElementById("error").innerText = "";
document.getElementById("confirmation").innerText =
"Registration Successful! Name: " + name +
", Email: " + email +
", Phone: " + phone ;
}
}
function resetForm() {
document.getElementById("registrationForm").reset();
document.getElementById("error").innerText = "";
document.getElementById("confirmation").innerText = "";
}