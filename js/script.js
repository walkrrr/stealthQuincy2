var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
  fans.innerText = "123k";
});

fish.addEventListener("mouseover", function () {
  fish.innerText = "47k";
});

pets.addEventListener("mouseover", function () {
  pets.innerText = "20k";
});
