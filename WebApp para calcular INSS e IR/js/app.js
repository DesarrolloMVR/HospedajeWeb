document.addEventListener('DOMContentLoaded', () => {
    const calculatorForm = document.getElementById('calculator-form');
    const inssResult = document.getElementById('inss-result');
    const irResult = document.getElementById('ir-result');

    calculatorForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const salary = parseFloat(document.getElementById('salary').value);

        if (isNaN(salary)) {
            alert('Por favor, ingrese un salario válido.');
            return;
        }

        // Calcular INSS
        const inssPercentage = 0.0675; // Porcentaje de INSS para empleados (6.75%)
        const inssDeduction = salary * inssPercentage;
        inssResult.textContent = `Deducción INSS: C$ ${inssDeduction.toFixed(2)}`;

        // Calcular IR
        const taxableIncome = salary - inssDeduction;
        let irDeduction = 0;

        if (taxableIncome > 100000) {
            irDeduction = (taxableIncome - 100000) * 0.3 + 90000 * 0.2 + 50000 * 0.15;
        } else if (taxableIncome > 50000) {
            irDeduction = (taxableIncome - 50000) * 0.2 + 50000 * 0.15;
        } else if (taxableIncome > 0) {
            irDeduction = taxableIncome * 0.15;
        }

        irResult.textContent = `Deducción IR: C$ ${irDeduction.toFixed(2)}`;
    });
});
