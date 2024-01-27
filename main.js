document.getElementById("hamburger").addEventListener("click", function () {
  var sidbar = document.getElementById("sidbar");
  sidbar.style.transform = " translateY(0)";
  var hamburger = document.getElementById("hamburger");
  hamburger.style.display = "none";
  var close = document.getElementById("close");
  close.style.display = "flex";

});

document.getElementById("close").addEventListener("click", function () {
  var sidbar = document.getElementById("sidbar");
  sidbar.style.transform = " translateY(-100%)";
  var hamburger = document.getElementById("hamburger");
  hamburger.style.display = "flex";
  var close = document.getElementById("close");
  close.style.display = "none";


});
document.getElementById("how").addEventListener("click", function () {
  var sidbar = document.getElementById("sidbar");
  sidbar.style.transform = " translateY(-100%)";
});