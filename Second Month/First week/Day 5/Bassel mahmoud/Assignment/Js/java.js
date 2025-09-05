    const btn = document.getElementById('backToTop');
console.log("Hi");

    const toggleButton = () => {
      if (window.scrollY > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    };
    window.addEventListener('scroll', toggleButton, { passive: true });
    toggleButton();

    btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


const toggleBtn = document.getElementById("toggleBtn");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
