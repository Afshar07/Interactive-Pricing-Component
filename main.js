'use strict'
const slider = document.getElementById("sRange");
slider.addEventListener("input", function () {
  let sliderV = slider.value;
  let output;
  switch (sliderV) {
    case "1":
      output = "10k";
      break;
    case "2":
      output = "50k";
      break;
    case "3":
      output = "100k";
      break;
    case "4":
      output = "500k";
      break;
    case "5":
      output = "1M";
      break;
  };
  document.getElementById("rSliderValue").innerText = output;
});
