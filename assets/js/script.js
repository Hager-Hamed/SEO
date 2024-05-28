const navbar = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    // navbar.classList.remove("scrolled");
  }
});

let arr = [...document.querySelector(".ul").children];
arr.forEach((cil) => {
  cil.addEventListener("click", function () {
    cil.parentElement.classList.remove("open");
  });
});

document.querySelector(".nav .icon").onclick = function () {
  document.querySelector(".ul").classList.add("open");
};

let span = document.querySelector(".up");

window.addEventListener("scroll", function () {
  span.classList.toggle("show", window.scrollY > 1000);
});

span.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
