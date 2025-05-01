document.addEventListener("DOMContentLoaded", (e) => {
  const scrollbar = Scrollbar.init(
    document.querySelector("#scrollbar-custom"),
    {
      damping: 0.2,
    }
  );
  

  const header = document.querySelector(".header-page--sticky");

  scrollbar.addListener(({ offset }) => {
    const scrollY = offset.y;

    if (scrollY > 0) {
      header.style.transform = `translateY(${scrollY}px)`;
    } else {
      header.style.transform = "translateY(0)";
    }
  });
});
