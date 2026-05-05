// Theme toggle (keep your original feature)
function changeTheme() {
  document.body.classList.toggle("light");
}


// FORM SUBMIT MESSAGE
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("msg").textContent =
    "Thank you for your submission!";

  document.getElementById("form").reset();
});