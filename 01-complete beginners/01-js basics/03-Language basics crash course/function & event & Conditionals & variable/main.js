// variable
const mydiv = document.querySelector("div");
// anonymous function
mydiv.addEventListener("click", function () {
  alert("anonymous function.");
});

// arrow function.
mydiv.addEventListener("click", () => {
  alert("arrow function.");
});
// num1 & num2 is argiment
function multiple(num1, num2) {
  const mult = num1 * num2;
  return mult
}
// variable
const myhtml = document.querySelector("html")
myhtml.addEventListener("keyup", () => {
  // Conditionals
  if (this.event.key === "Enter") {
    alert(multiple(2, 5));
  }
  else if (window.event.key === "Control") {
    alert(multiple(5, 3))
  }
  else {
    alert(event.key)
  }
});

