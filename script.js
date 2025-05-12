const button = document.getElementById("animateBtn");
const status = document.getElementById("status");

if (localStorage.getItem("clicked") === "true") {
  status.textContent = "You clicked the button before!";
}

button.addEventListener("click", () => {
  button.classList.add("clicked");
  localStorage.setItem("clicked", "true");
  status.textContent = "Button clicked and saved!";
  setTimeout(() => button.classList.remove("clicked"), 400);
});
