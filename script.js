function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ============ Theme toggle ============ */
function applyThemeIcon() {
  const theme = document.documentElement.dataset.theme;
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.textContent = theme === "light" ? "🌙" : "☀️";
  });
}

function toggleTheme() {
  const next =
    document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
  applyThemeIcon();
}

applyThemeIcon();

document.getElementById("year").textContent = new Date().getFullYear();

/* ============ Typing animation ============ */
const phrases = [
  "full-stack applications.",
  "cloud-native solutions.",
  "AI agents & RAG apps.",
  "fast, modern UIs.",
];
const typedEl = document.getElementById("typed");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const phrase = phrases[phraseIndex];
  charIndex += deleting ? -1 : 1;
  typedEl.textContent = phrase.slice(0, charIndex);

  let delay = deleting ? 40 : 80;
  if (!deleting && charIndex === phrase.length) {
    delay = 2000;
    deleting = true;
  } else if (deleting && charIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    delay = 400;
  }
  setTimeout(type, delay);
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  typedEl.textContent = phrases[0];
} else {
  type();
}

/* ============ Scroll reveal (staggered per section) ============ */
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

document.querySelectorAll("section").forEach((section) => {
  section.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 80, 400)}ms`;
    observer.observe(el);
  });
});

/* ============ Active nav link highlight ============ */
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

/* ============ Scroll progress & back to top ============ */
const progressBar = document.getElementById("scroll-progress");
const backToTop = document.getElementById("back-to-top");

window.addEventListener(
  "scroll",
  () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${(window.scrollY / scrollable) * 100}%`;
    backToTop.classList.toggle("show", window.scrollY > 600);
  },
  { passive: true }
);
