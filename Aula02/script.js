// equalButton.addEventListener("click", () => {
//   const firstNum = Math.max(Number(num1.value), 0);
//   const secNum =  Math.max(Number(num2.value), 0);
//   const op = operation.value;

//   if (secNum == 0 && op == "/") {
//     console.error("Não é possível realizar uma divisão por zero!")
//     return;
//   }

//   // NÃO USEM EVAL() PELO AMOR DE JESUS CRISTINHO
//   // console.log(eval(`${firstNum}${op}${secNum}`));

//   switch(op) {
//     case "+":
//       result.innerText = firstNum + secNum;
//       break;
//     case "-":
//       result.innerText = firstNum - secNum;
//       break;
//     case "*":
//       result.innerText = firstNum * secNum;
//       break;
//     case "/":
//       result.innerText = firstNum / secNum;
//       break;
//     default:
//       console.log("Operação não identificada.")
//   }

//   if (result.innerText > 20) {
//     result.classList.remove("orange-result");
//     result.classList.add("green-result");
//     // result.className = "green-result";
//   } else {
//     result.className = "orange-result";
//   }
// });

const numElems = document.querySelectorAll(".nums");
for (let elem of numElems) { 
  elem.addEventListener("input", () => calcularResultado()) 
}

operation.addEventListener("input", () => calcularResultado())

const calcularResultado = () => {
  const value1 = Math.max(Number(numElems[0].value, 0));
  const value2 = Math.max(Number(numElems[1].value, 0));
  const op = operation.value;

  switch (op) {
    case "+":
      result.innerText = value1 + value2;
      break;
    case "-":
      result.innerText = value1 - value2;
      break;
    case "*":
      result.innerText = value1 * value2;
      break;
    case "/":
      result.innerText = value1 / value2;
      break;
    default:
      console.log("Operação não identificada.")
  }

  if (result.innerText > 20) {
    result.classList.remove("orange-result");
    result.classList.add("green-result");
    // result.className = "green-result";
  } else {
    result.className = "orange-result";
  }
}