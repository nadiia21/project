const modalTrigger = document.querySelectorAll([".button_element", ".btn_element"]);
const btn_close = document.querySelectorAll(".modal_close");
modal = document.querySelector("#myModal");

modalTrigger.forEach((btn) => {
btn.addEventListener("click", openModal);
});

btn_close.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

function closeModal() {
modal.classList.add("hide");
modal.classList.remove("show");
document.body.style.overflow = "";
}

function openModal() {
modal.classList.add("show");
modal.classList.remove("hide");
document.body.style.overflow = "hidden";
}
