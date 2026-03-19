document.addEventListener("DOMContentLoaded", () => {
  console.log("test");

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const modeBtn = document.getElementById("modeBtn");

  // using onclick directly
  if (menuBtn && navLinks) {
    menuBtn.onclick = () => {
      console.log("TOgel '''''''");
      navLinks.classList.toggle("show");
    };
  }

  if (modeBtn) {
    modeBtn.onclick = () => {
      document.body.classList.toggle("light");
      console.log("Test darck");

      if (document.body.classList.contains("light")) {
        modeBtn.textContent = "🌙";
      } else {
        modeBtn.textContent = "☀️";
      }
    };
  }

});
