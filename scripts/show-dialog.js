document.addEventListener("DOMContentLoaded", (e) => {
  function initAppDialog(dialog, buttons, scrollbar) {
    const dialogPage = document.querySelector(dialog);
    const buttonsPage = document.querySelectorAll(buttons);
    const closeButton = dialogPage.querySelector(".button-close--dialog");
    if (!buttonsPage) {
      return;
    }
    buttonsPage.forEach((button) => {
      button.addEventListener("click", (e) => {
        dialogPage.classList.add("dialog-popup--active");
        document.body.style.height = "auto";
      });
    });
    closeButton.addEventListener("click", (e) => {
      dialogPage.classList.remove("dialog-popup--active");
      document.body.style.removeProperty("height");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        dialogPage.classList.remove("dialog-popup--active");
        document.body.style.removeProperty("height");
      }
    });
  }
  initAppDialog(".dialog-popup--js", ".button-action--js");
});
