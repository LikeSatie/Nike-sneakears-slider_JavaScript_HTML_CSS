var sliderId = document.getElementById("slider");
var sliderImgsLinks = [
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-jump.png",
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-on-foot.png",
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-playground.png",
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax-top-view.png",
  "https://netology-code.github.io/hj-homeworks/browser/slider/i/airmax.png"
];
var curretnImgIndex = 0;
setInterval(function() {
  sliderId.src = sliderImgsLinks[curretnImgIndex];
  if (curretnImgIndex++ >= sliderImgsLinks.length - 1) {
    curretnImgIndex = 0;
  }
}, 5000);
