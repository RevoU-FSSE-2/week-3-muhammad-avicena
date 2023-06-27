const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function () {
  document.querySelector(".hero-navbar").classList.toggle("show");
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrollTop > 100) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});

