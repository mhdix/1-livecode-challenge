const openModalBtn = document.querySelector("#open-modal");
const closeModalBtns = document.querySelectorAll(".close-modal");
const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");

function openModal(e) {
  backdrop.classList.remove("hidden");
}

function closeModal(e) {
  backdrop.classList.add("hidden");
}

openModalBtn.addEventListener("click", openModal);
closeModalBtns.forEach((btn) => btn.addEventListener("click", closeModal));
backdrop.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => e.stopPropagation());
