document.addEventListener("DOMContentLoaded", (e) => {
  function initAppSendingField(form) {
    const formPage = document.querySelector(form);
    if (!formPage) {
      return;
    }

    formPage.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(this);
      let allEmpty = true;

      for (let value of formData.values()) {
        if (value.trim() !== "") {
          allEmpty = false;
          break;
        }
      }

      if (allEmpty) {
        alert("Заполните хотя бы одно поле!");
        return;
      }

      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    });
  }
  initAppSendingField(".form-page--js");
});
