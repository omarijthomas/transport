/*
  FAITH CARE TRANSPORTATION — EDITABLE PLACEHOLDERS
  Change the sample details below, then save and redeploy the website.
*/
const SITE_CONFIG = {
  phoneDisplay: "(555) 123-4567",
  phoneLink: "+15551234567",
  email: "info@faithcaretransportation.com",
  serviceArea: "Jackson, MS and surrounding areas",
  address: "Jackson, Mississippi"
};

document.querySelectorAll("[data-phone]").forEach(el => el.textContent = SITE_CONFIG.phoneDisplay);
document.querySelectorAll("[data-phone-link]").forEach(el => el.href = `tel:${SITE_CONFIG.phoneLink}`);
document.querySelectorAll("[data-email]").forEach(el => el.textContent = SITE_CONFIG.email);
document.querySelectorAll("[data-email-link]").forEach(el => el.href = `mailto:${SITE_CONFIG.email}`);
document.querySelectorAll("[data-service-area]").forEach(el => el.textContent = SITE_CONFIG.serviceArea);
document.querySelectorAll("[data-address]").forEach(el => el.textContent = SITE_CONFIG.address);
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
  toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

/*
  This demo form opens the visitor's email app with an inquiry draft.
  It does NOT transmit or store the form automatically.
  Replace with a properly configured form service before public launch.
*/
document.getElementById("ride-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Transportation Inquiry — Faith Care Transportation");
  const body = encodeURIComponent(
`New transportation inquiry

Name: ${form.get("name")}
Phone: ${form.get("phone")}
Email: ${form.get("email") || "Not provided"}
Pickup area: ${form.get("pickup")}
Destination area: ${form.get("destination")}
Preferred date: ${form.get("date") || "Not specified"}
Trip type: ${form.get("trip")}
Scheduling notes: ${form.get("details") || "None"}

Please do not add or request sensitive medical details by email.`
  );
  document.getElementById("form-status").textContent =
    "Your email app should open with the inquiry drafted. The website has not sent or stored your information.";
  window.location.href = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;
});
