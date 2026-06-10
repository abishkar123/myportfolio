function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const navLinks = document.querySelectorAll("#desktop-nav .nav-links a");
const sections = [...navLinks].map((link) =>
  document.querySelector(link.getAttribute("href"))
);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          )
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => section && sectionObserver.observe(section));
