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
