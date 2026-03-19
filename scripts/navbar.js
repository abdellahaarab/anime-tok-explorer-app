document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const modeBtn = document.getElementById("modeBtn");

  // check elements exist (fix error)
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      console.log("TOgel '''''''");
      navLinks.classList.toggle("show");
    });
  }

  if (modeBtn) {
    modeBtn.addEventListener("click", () => {
      document.body.classList.toggle("light");
      console.log("Test darck");

      if (document.body.classList.contains("light")) {
        modeBtn.textContent = "🌙";
      } else {
        modeBtn.textContent = "☀️";
      }
    });
  }

});



