document.addEventListener("DOMContentLoaded", (e) => {
  function initAppMaskPhone(form) {
    const formPage = document.querySelector(form);
    if (!formPage) {
      return;
    }
    const allPhoneFields = formPage.querySelectorAll(
      ".form-page__input--phone-js"
    );

    allPhoneFields.forEach((field) => {
      const mask = IMask(field, {
        mask: "+7 (000) 000-00-00",
      });
    });
  }
  initAppMaskPhone(".form-page--js");
});
