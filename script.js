const form = document.querySelector("form");
const showMoodBtn = document.getElementById("showMoodBtn");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const currentMood = document.querySelector("currentMood");
const currentMoodText = document.querySelector(".currentMood-text");
const image = document.querySelector(".pet-image");

showMoodBtn.addEventListener("click", ischecked);

closeModal.addEventListener("click", modalClosed);

function ischecked() {
  const selectedMood = document.querySelector(
    'input[name="mood"]:checked'
  ).value;

  if (selectedMood) {
    modal.classList.remove("hidden");
    currentMoodText.textContent = selectedMood;
    image.setAttribute("src", `./images/${selectedMood}.jpeg`);
  }
}

function modalClosed() {
  modal.classList.add("hidden");
  form.reset();
}
