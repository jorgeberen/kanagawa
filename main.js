var modal_form = document.querySelector(".modal-form");
var modal_overlay = document.querySelector(".modal-overlay");

function toggleModal() {
  modal_form.classList.toggle("no-display");
  modal_overlay.classList.toggle("activated");
}
