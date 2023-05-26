function openTab(evt, tabName) {
  var i, tabPanel, tabLink;
  tabPanel = document.getElementsByClassName("tab-panel");
  for (i = 0; i < tabPanel.length; i++) {
    tabPanel[i].classList.remove("active");
  }
  tabLink = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].classList.remove("active");
  }
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");


  var image = document.getElementById("tab-image");
  image.src = "./assets/images/" + tabName + ".png";
}

//menu mobile

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menuItems = document.querySelector(".menu-items");
  const menuClose = document.getElementById("menu-close");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    menuItems.classList.toggle("active");
  });
  menuClose.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    menuItems.classList.remove("active");
  });
});



const priceSlider = document.getElementById("price-slider");
const minPrice = 0;
const maxPrice = 10000000;
const priceRange = document.querySelectorAll(".slider-label");

priceSlider.addEventListener("input", function() {
  let priceValue = priceSlider.value;
  priceRange[0].textContent = "تومان" + (minPrice + priceValue * (maxPrice - minPrice) / 100);
  priceRange[1].textContent = "تومان" + maxPrice;
});



