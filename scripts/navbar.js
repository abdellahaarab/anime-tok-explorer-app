console.log("JS Loaded");

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.classList.toggle("show");
    console.log("menu toggled");
  }
}

function toggleMode() {
  const modeBtn = document.getElementById("modeBtn");
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    modeBtn.textContent = "🌙";
  } else {
    modeBtn.textContent = "☀️";
  }

  console.log("mode toggled");
}

/* bind directly AFTER DOM is ready */
window.onload = () => {
  const menuBtn = document.getElementById("menuBtn");
  const modeBtn = document.getElementById("modeBtn");

  if (menuBtn) menuBtn.onclick = toggleMenu;
  if (modeBtn) modeBtn.onclick = toggleMode;
};
