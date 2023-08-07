function rollDice(numSides = 6) {
    var numDice = parseInt(document.getElementById("numDice").value);
    var diceBox = document.getElementById("diceBox");
    diceBox.innerHTML = ''; // Limpa os dados anteriores
  
    for (var i = 0; i < numDice; i++) {
      var result = Math.floor(Math.random() * numSides) + 1;
  
      // Cria a div para o dado e adiciona a classe de animação temporária
      var dice = document.createElement("div");
      dice.classList.add("dice", "dice-animation-temp");
      dice.textContent = result;
      diceBox.appendChild(dice);
    }
  
    // Remove a classe de animação temporária após a animação ser concluída
    setTimeout(function () {
      var tempDice = document.querySelectorAll(".dice-animation-temp");
      tempDice.forEach((die) => die.classList.remove("dice-animation-temp"));
  
      // Chama a função showResults() após a animação ser concluída
      showResults();
    }, 1000);
  }
  
  function showResults() {
    var diceElements = document.querySelectorAll(".dice");
    var results = [];
  
    for (var i = 0; i < diceElements.length; i++) {
      var result = parseInt(diceElements[i].textContent);
      results.push(result);
    }
  
    results.sort((a, b) => b - a);
    var maxResult = results[0];
    var externalValue = parseInt(document.getElementById("externalValue").value);
    var sumResults = maxResult + externalValue;
  
    document.getElementById("results").textContent = "Resultados dos dados: " + results.join(", ");
    document.getElementById("maxResult").textContent = maxResult;
    document.getElementById("sumResults").textContent = sumResults;
  }
  
  function rollSelectedDice() {
    var numSides = parseInt(document.getElementById("diceSides").value);
    rollDice(numSides);
  }
  