const form = document.querySelector(".rating-form");
const ratingState = document.querySelector(".rating-state");
const thankState = document.querySelector(".thankyou-state");
const rating = document.getElementById("rating-selected");

let value = document.querySelector;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  ratingState.style.display = "none";
  thankState.style.display = "block";
  let val = document.querySelector(
    'input[name = "rating-options"]:checked'
  ).value;
  rating.innerHTML = val;
});
