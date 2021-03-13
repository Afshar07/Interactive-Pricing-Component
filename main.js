"use strict";
// Slider Range
const slider = document.getElementById("sRange");
const checkbox = document.getElementById("switch");

slider.addEventListener("input", function () {
  let sliderV = slider.value;
  let price;
  let output;
  switch (sliderV) {
    case "1":
      output = "10k";
      price = "8.00";
      break;
    case "2":
      output = "50k";
      price = "12.00";
      break;
    case "3":
      output = "100k";
      price = "16.00";
      break;
    case "4":
      output = `500 k`;
      price = "24.00";
      break;
    case "5":
      output = "1M";
      price = "36.00";
      break;
  }
  if (checkbox.checked) {
    price = ((price / 100) * 75).toFixed(2);
  }
  document.getElementById("rSliderValue").innerText = output;
  document.querySelector(".dollar").innerHTML = price;

  let value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #a5f3eb 0%, #a5f3eb " +
    value +
    "%, #b3b3b3 " +
    value +
    "%, #b3b3b3 100%)";
});

// Switch Toggle
checkbox.addEventListener("click", function () {
  let newPrice = document.querySelector(".dollar").innerHTML;
  if (!this.checked) {
    newPrice = ((newPrice / 3) * 4).toFixed(2);
  }
  if (this.checked) {
    newPrice = ((newPrice / 100) * 75).toFixed(2);
  }
  document.querySelector(".dollar").innerHTML = newPrice;
});
