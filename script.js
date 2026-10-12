const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function isDark() {
    const chosen = root.getAttribute("data-theme");
    if (chosen) return chosen === "dark";
    return darkQuery.matches;
}

function updateIcon(){
    themeBtn.textContent = isDark() ? "☀" : "☾";
    themeBtn.setAttribute("aria-label", isDark() ? "Açık temaya geç" : "Koyu temaya geç");
}

themeBtn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
        localStorage.setItem("tema", next);
    } catch (e) {}
    updateIcon();
});

darkQuery.addEventListener("change", updateIcon);
updateIcon();

const header = document.getElementById("top");

function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 8);
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
