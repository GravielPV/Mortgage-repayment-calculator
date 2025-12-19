const yearsInput = document.getElementById("input-term");
const montoInput = document.getElementById("input-mortgage");
const interesInput = document.getElementById("input-interest");

const repayment = document.getElementById("repayment");
const interestOnly = document.getElementById("interest-only");


repayment.addEventListener("change", calcular);
interestOnly.addEventListener("change", calcular);

function calcular() {
  const yearsValue = yearsInput.value;
  const montoValue = montoInput.value;
  const interesValue = interesInput.value;

 
  if (!yearsValue || !montoValue || !interesValue) {
    console.log("Por favor complete todos los campos");
    return;
  }

  const years = Number(yearsValue);
  const monto = Number(montoValue);
  const interes = Number(interesValue) / 100;

  const r = interes / 12;
  const n = years * 12;

  if (repayment.checked) {
    const pagoMensual =
      (monto * (r * Math.pow(1 + r, n))) /
      (Math.pow(1 + r, n) - 1);

    console.log("Pago mensual: " + pagoMensual.toFixed(2));
  }


  if (interestOnly.checked) {
    const pagoMensualInterestOnly = monto * r;

    console.log(
      "Pago mensual (Interest Only): " +
        pagoMensualInterestOnly.toFixed(2)
    );
  }
}
