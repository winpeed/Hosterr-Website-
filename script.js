const hamburger = document.getElementsByClassName("hamburger");
const navigation = document.getElementsByTagName("nav");

hamburger[0].addEventListener("click", () => {
  navigation[0].classList.toggle("nav-open");
  hamburger[0].classList.toggle("close-nav");
});
