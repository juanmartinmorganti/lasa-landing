document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Formulario de ejemplo. Después lo conectamos a WhatsApp o email.");
  });
});