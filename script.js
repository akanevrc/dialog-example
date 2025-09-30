// <dialog>用
const dialog = document.querySelector("#dialog");
const dialogOpenButton = document.querySelector("#dialog-open-button");
const dialogCloseButton = document.querySelector("#dialog-close-button");

dialogOpenButton.addEventListener("click", () => {
  dialog.showModal();
});

dialogCloseButton.addEventListener("click", () => {
  dialog.close();
});

// <div>用
const divDialogBg = document.querySelector("#div-dialog-bg");
const divDialog = document.querySelector("#div-dialog");
const divDialogOpenButton = document.querySelector("#div-dialog-open-button");
const divDialogCloseButton = document.querySelector("#div-dialog-close-button");

divDialogOpenButton.addEventListener("click", () => {
  divDialogBg.classList.remove("inactive");
});

divDialogCloseButton.addEventListener("click", () => {
  divDialogBg.classList.add("inactive");
});
