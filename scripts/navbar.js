/* Dark mode */
document.getElementById("modeBtn").onclick = () => {
  document.body.classList.toggle("dark");
};

  // Toggle menu mobile
  document.getElementById("menuBtn").onclick = () => {
    document.getElementById("navLinks").classList.toggle("show");
  };
  
  // Dark / Light mode
  document.getElementById("modeBtn").onclick = () => {
    document.body.classList.toggle("light");
    modeBtn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
  };
