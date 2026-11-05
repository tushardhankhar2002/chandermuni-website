// IMPORTANT: Replace this with the company's WhatsApp number in international format.
// India example: 919876543210 (country code 91, no +, spaces or dashes)
const WHATSAPP_NUMBER = "918920991692";

document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function openWhatsApp(message) {
  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Please add the real WhatsApp number in script.js first.");
    return;
  }
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

document.getElementById("whatsappLink").addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp("Hello Chander Muni, I would like to enquire about your construction services.");
});

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("message").value.trim();
  const message = `Hello Chander Muni,%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0AProject details: ${details}`;
  openWhatsApp(decodeURIComponent(message));
});
