'use strict'
const slider = document.getElementById("sRange");
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
      output = "500k";
      price = "24.00";
      break;
    case "5":
      output = "1M";
      price = "36.00";
      break;
  };
  document.getElementById("rSliderValue").innerText = output;
  document.querySelector(".dollar").innerHTML = price;
});
