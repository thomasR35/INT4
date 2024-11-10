addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".MenusMenus ul li a");
  const menuImages = document.querySelectorAll(".menuAll img");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const menuType = this.getAttribute("href").substring(1);

      menuImages.forEach((img) => {
        img.style.display = "inline-block";
      });

      if (menuType !== "ALL") {
        menuImages.forEach((img) => {
          if (!img.src.includes(menuType.toLowerCase())) {
            img.style.display = "none";
          }
        });
      }
    });
  });
});
const menuImages = document.querySelectorAll(".menu-image");

menuImages.forEach((img) => {
  img.addEventListener("mouseenter", function () {
    // Ajoutez la classe "hover" à l'image survolée
    this.classList.add("hover");
  });

  img.addEventListener("mouseleave", function () {
    // Supprimez la classe "hover" de l'image lorsque vous ne la survolez plus
    this.classList.remove("hover");
  });
});
