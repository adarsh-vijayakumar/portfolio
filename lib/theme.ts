export type Theme = "light" | "dark";

export const themeStorageKey = "adarsh-portfolio-theme";

// Runs before the page paints so a saved dark theme doesn't flash white.
export const themeInitializer = `(() => {
  let theme = "light";
  try {
    if (localStorage.getItem("${themeStorageKey}") === "dark") theme = "dark";
  } catch {}
  document.documentElement.dataset.theme = theme;
})();`;
