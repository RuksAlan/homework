const inputRisk = document.getElementById("range");
const profitabilityPercentage = document.getElementById(
  "profitability--percentage",
);
const profitabilityRisk = document.getElementById("profitability--risk");

inputRisk.addEventListener("input", function () {
  const value = parseInt(this.value);
  let profitabilityRiskName = "Низкий риск";
  let profitabilityPercentageNum = "до 5%";

  if (value > 30 && value <= 60) {
    profitabilityRiskName = "Средний риск";
    profitabilityPercentageNum = "до 7%";
  } else if (value > 60) {
    profitabilityRiskName = "Высокий риск";
    profitabilityPercentageNum = "до 10%";
  }

  profitabilityRisk.textContent = profitabilityRiskName;
  profitabilityPercentage.textContent = profitabilityPercentageNum;
});
