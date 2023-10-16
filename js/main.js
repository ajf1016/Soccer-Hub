window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const home = document.querySelector("#home");
  const goats = document.querySelector("#goats");
  const gallery = document.querySelector("#gallery");
  const sectionTop = home.clientHeight;

  // Add or remove 'sticky' class based on scroll position
  if (window.pageYOffset + 100 > sectionTop) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  // for changing header color

  const homeTop = home.offsetTop;
  const goatTop = goats.offsetTop;
  const galleryTop = gallery.offsetTop;

  const scrollY = window.scrollY;

  if (scrollY > 1020 && scrollY < 1700) {
    header.style.backgroundColor = "rgba(0,0,0,0.7)";
  } else if (scrollY > 1700 && scrollY < 2520) {
    header.style.backgroundColor = "rgba(153,0,0,.7)";
  } else if (scrollY > 2520) {
    header.style.backgroundColor = "rgba(97,12,159,0.9654455532212886)";
  }
  console.log(
    "scrollY : ",
    scrollY,
    "homeTop : ",
    homeTop,
    "goatTop : ",
    goatTop,
    "galleryTop : ",
    galleryTop
  );
});
