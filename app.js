new CircleType(document.getElementById("circle"));

const contactOverlay = document.querySelector("#contact-overlay");
const contactButton = document.querySelector("#contactMe");
const contactExitButton = document.querySelector(".innerOverlayExit");
const copyEmailButton = document.querySelector(".copyEmailButton");
const email = "hassanusaidahmad@gmail.com";

function toggleContactOverlay() {
  contactOverlay.classList.toggle("disabled");
  contactOverlay.classList.toggle("enabled");
}

copyEmailButton.addEventListener('click', function() {
  navigator.clipboard.writeText(email);
}, false)

contactButton.addEventListener('click', toggleContactOverlay, false);
contactExitButton.addEventListener('click', toggleContactOverlay, false);
