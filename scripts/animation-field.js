document.addEventListener("DOMContentLoaded", (e) => {
  function initAppField(form) {
    const formPage = document.querySelector(form);
    const allInputs = formPage.querySelectorAll("input");
    let rowTarget = null;
    if (!formPage) {
      return;
    }

    allInputs.forEach((input) => {
      input.addEventListener("focus", (e) => {
        rowTarget = e.target.closest(".form-page__row--js");
        rowTarget.classList.add("form-page__row--active");
      });
      input.addEventListener("change", (e) => {
        if (input.value === "") {
          rowTarget.classList.remove("form-page__row--active");
        }
      });
    });
    document.addEventListener("click", (e) => {
      allInputs.forEach((input) => {
        const row = input.closest(".form-page__row--js");
        const isClickInside = input.contains(e.target) || input === e.target;

        if (!isClickInside && input.value === "") {
          row.classList.remove("form-page__row--active");
        }
      });
    });
  }

  initAppField(".form-page--js");
});
