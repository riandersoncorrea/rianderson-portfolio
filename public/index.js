const menuToggle = document.querySelector(".menu-toggle");
const menuConteudo = document.getElementById("menu-conteudo");
const links = menuConteudo.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
  menuConteudo.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menuConteudo.classList.remove("active");
  });
});
