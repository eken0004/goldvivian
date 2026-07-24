const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = lightbox?.querySelector("img");

document.querySelectorAll("[data-lightbox-src]").forEach((button) => {
  button.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = button.dataset.lightboxSrc;
    lightboxImage.alt = button.querySelector("img")?.alt || "";
    lightbox.showModal();
  });
});

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target.closest("[data-lightbox-close]")) {
    lightbox.close();
  }
});
