document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const modeBtn = document.getElementById("modeBtn");

  // check elements exist (fix error)
  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  if (modeBtn) {
    modeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");

      if (document.body.classList.contains("light")) {
        modeBtn.textContent = "🌙";
      } else {
        modeBtn.textContent = "☀️";
      }
    });
  }

});
