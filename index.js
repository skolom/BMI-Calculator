const btnEl = document.getElementById("btn");
const bmiInputEl = document.getElementById("bmi-result");
const weightConditionEl = document.getElementById("weight-condition");


function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);

    bmiInputEl.value = (bmiValue).toFixed(2);

    if (bmiValue < 18.5) {
        weightConditionEl.innerHTML = "Under Weight"
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightConditionEl.innerHTML = "Normal weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        weightConditionEl.innerHTML = "Overweight";  
    } else if (bmiValue >= 30) {
        weightConditionEl.innerHTML = "Obesity";
    }
}

btnEl.addEventListener("click", calculateBMI);