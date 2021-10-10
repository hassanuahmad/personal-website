new CircleType(document.getElementById("circle"));

const contactMe = document.getElementById("contactMe");
const heroLine = document.querySelector(".heroHeaderLine");
const contactMeInfo = document.querySelector(".contactMeInfo");

contactMe.addEventListener("mouseover", () => {
    heroLine.classList.add("noOpa");
    contactMeInfo.classList.add("yesOpa");
});

contactMe.addEventListener("mouseout", () => {
    setTimeout(() => {
        heroLine.classList.remove("noOpa");
        contactMeInfo.classList.remove("yesOpa");
    }, 5000);
});

const circleHover = document.querySelector(".bigCircle");

circleHover.addEventListener("mouseover", () => {
    circleHover.classList.add("bigForHover");
});

circleHover.addEventListener("mouseout", () => {
    circleHover.classList.remove("bigForHover");
});

const copyEmail = document.querySelector(".copyEmail");

copyEmail.addEventListener("mouseover", () => {
    copyEmail.classList.add("underlineMail");
});

copyEmail.addEventListener("mouseout", () => {
    copyEmail.classList.remove("underlineMail");
});

copyEmail.addEventListener("click", () => {
    navigator.clipboard.writeText("hassanusaidahmad@gmail.com");
    document.getElementById("contact-id").innerHTML =
        "Email copied! Cant wait to hear from you";
});

const defaultMail = document.querySelector(".openMail");

defaultMail.addEventListener("mouseover", () => {
    defaultMail.classList.add("underlineMail");
});

defaultMail.addEventListener("mouseout", () => {
    defaultMail.classList.remove("underlineMail");
});
