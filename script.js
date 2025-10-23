//your code here
const input = document.getElementById("input");

let expression = "";

// Add numbers
for (let i = 0; i <= 9; i++) {
  document.getElementById("block" + i).addEventListener("click", () => {
    expression += i;
    input.value = expression;
  });
}

// Add decimal
document.getElementById("dot").addEventListener("click", () => {
  expression += ".";
  input.value = expression;
});

// Add operators
document.getElementById("plus").addEventListener("click", () => {
  expression += "+";
  input.value = expression;
});

document.getElementById("minus").addEventListener("click", () => {
  expression += "-";
  input.value = expression;
});

document.getElementById("multiply").addEventListener("click", () => {
  expression += "*";
  input.value = expression;
});

document.getElementById("divide").addEventListener("click", () => {
  expression += "/";
  input.value = expression;
});

// Calculate answer
document.getElementById("ans").addEventListener("click", () => {
  try {
    const result = eval(expression); // simple evaluation
    input.value = result;
    expression = result.toString();
  } catch {
    input.value = "Error";
    expression = "";
  }
});

// Clear input
document.getElementById("clr").addEventListener("click", () => {
  expression = "";
  input.value = "";
});
