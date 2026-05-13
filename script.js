const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const tabButtons = document.querySelectorAll(".tab-button");
const projectPanels = document.querySelectorAll(".project-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetPanelId = button.dataset.tabTarget;

    tabButtons.forEach((tabButton) => {
      const isActive = tabButton === button;
      tabButton.classList.toggle("active", isActive);
      tabButton.setAttribute("aria-selected", String(isActive));
    });

    projectPanels.forEach((panel) => {
      const isActive = panel.id === targetPanelId;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});
