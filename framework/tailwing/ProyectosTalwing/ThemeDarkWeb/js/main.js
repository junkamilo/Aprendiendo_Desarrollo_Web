document.addEventListener("DOMContentLoaded", () => {
  const menuToggleButton = document.getElementById("menu-toggle-button");
  const navbar = document.getElementById("navbar-default");

  if (menuToggleButton && navbar) {
    menuToggleButton.addEventListener("click", () => {
      navbar.classList.toggle("hidden");
      const isExpanded =
        menuToggleButton.getAttribute("aria-expanded") === "true";
      menuToggleButton.setAttribute("aria-expanded", !isExpanded);
    });
  }

  const themeToggleButton = document.getElementById("theme-toggle");
  const darkIcon = document.getElementById("theme-toggle-dark-icon");
  const lightIcon = document.getElementById("theme-toggle-light-icon");

  // Función para aplicar el tema y actualizar el icono
  const applyTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      darkIcon.classList.remove("hidden");
      lightIcon.classList.add("hidden");
    } else {
      document.documentElement.removeAttribute("data-theme");
      darkIcon.classList.add("hidden");
      lightIcon.classList.remove("hidden");
    }
  };

  const savedTheme = localStorage.getItem("color-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

  applyTheme(currentTheme);
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
      const isDarkMode = document.documentElement.hasAttribute("data-theme");
      if (isDarkMode) {
        // Cambiar a modo claro
        localStorage.setItem("color-theme", "light");
        applyTheme("light");
      } else {
        // Cambiar a modo oscuro
        localStorage.setItem("color-theme", "dark");
        applyTheme("dark");
      }
    });
  }
});
