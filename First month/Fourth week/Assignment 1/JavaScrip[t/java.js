var btn1 = document.querySelector("#btn1");
var container = document.querySelector(".container");
btn1.addEventListener("click", (e) => {
  container.classList.add("anmi");
  console.log(e.target);
});
