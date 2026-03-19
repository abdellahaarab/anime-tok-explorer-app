document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  const modeBtn = document.getElementById("modeBtn");

  // Toggle menu
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Toggle dark/light
  modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
      modeBtn.textContent = "🌙";
    } else {
      modeBtn.textContent = "☀️";
    }
  });

});
