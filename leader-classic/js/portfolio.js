const inputRisk = document.getElementById("input--risk");
const profitabilityProcent = document.getElementById("profitability--procent");
const profitabilityRisk = document.getElementById("profitability--risk");

inputRisk.addEventListener("input", function () {
  const value = parseInt(this.value);
  let profitabilityRisk = "Низкий риск";
  let profitabilityProcent = "до 5%";

  if (value > 30 && value <= 60) {
    profitabilityRisk = "Средний риск";
    profitabilityProcent = "до 7%";
  } else if (value > 60) {
    profitabilityRisk = "Высокий риск";
    profitabilityProcent = "до 10%";
  }

  profitabilityRisk.textContent = riskText;
  profitabilityProcent.textContent = yieldPercent;
});
