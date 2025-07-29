import partners from "./partners.js";

const logosContainer = document.querySelector(".partners-logos");

partners.forEach(({ id, nome, logo }) => {
  const img = document.createElement("img");
  img.src = logo;
  img.alt = nome;
  img.loading = "lazy";
  logosContainer.appendChild(img);
});
