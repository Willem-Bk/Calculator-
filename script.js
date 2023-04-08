// opslaan van huidge nummer(currentNum), operator, en history(previousNum) en resultaat(result)
let currentNum = "";
let previousNum = "";
let operator = "";
let result = "";

// voeg een nummer toe aan het huidige nummer (currentNum)
function addNumber(num) {
 
  if (num === "." && currentNum.indexOf('.') !== -1) { // zorgt ervoor dat er maar 1 keer op de punt gedrukt kan worden 
    return;
  }
  if (currentNum === "0" && num === "0") { // zorgt ervoor dat er maar 1(0) kan staan, echter wanneer je vaker op de nul drukt bevriest de calculator!
    return;
  } else if (currentNum === "0" && num !== ".") { // doorgaan als aan beide voorwaarden is voldaan
    currentNum = num;
  } else if (currentNum.length <= 8) {
    currentNum += num;  
  }
  document.getElementById("result").value = currentNum;
}

// werk de operator bij wanneer er op geklikt wordt 
function onClickOperator(op) {
  if (currentNum === "") { // als er op een operator geklikt wordt gebeurt er niks 
    return;
  }
  operator = op;
  previousNum = currentNum;// geef de huidige waarde door en zet daarna op ""
  currentNum = "";
  document.getElementById("previous").value = previousNum;
  document.getElementById("operator").value = operator;
}

//  calculate and display the result when the "=" button is clicked
function onClickEquals() {
   
     if (currentNum === "" || previousNum === "" || operator === "") {
    return;
  }
   
  switch (operator) {  // hier heb ik gekozen voor switch omdat ik dit overzichtelijker vind.
    case "+":
      result = parseFloat(previousNum) + parseFloat(currentNum);// zet om naar getal evt met decimalen
      break;
    case "-":
      result = parseFloat(previousNum) - parseFloat(currentNum);
      break;
    case "*":
      result = parseFloat(previousNum) * parseFloat(currentNum);
      break;
    case "/":
      result = parseFloat(previousNum) / parseFloat(currentNum);
      break;
    default:
      result = "Error";
  }
  
  document.getElementById("result").value = result;//toont de uitkomst
  previousNum = "";
  currentNum = "";
  operator = "";
}

// reset alle waarde
function onClickCancel() {
  currentNum = "";
  previousNum = "";
  operator = "";
  result = "";
  document.getElementById("previous").value = "";
  document.getElementById("result").value = "";
  document.getElementById("operator").value = "";
}
