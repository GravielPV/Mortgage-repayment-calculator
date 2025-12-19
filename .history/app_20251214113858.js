const yearsInput = document.getElementById("input-term");
const montoInput = document.getElementById("input-mortgage");
const interesInput = document.getElementById("input-interest");

const repayment = document.getElementById("repayment");
const interestOnly = document.getElementById("interest-only");


repayment.addEventListener("change", calcular);
interestOnly.addEventListener("change", calcular);

function formatoRD(valor) {
  return new Intl.NumberFormat("es-DO", {
    style: "currency",
    currency: "DOP",
    minimumFractionDigits: 2,
  }).format(valor);
}


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

      let totalPayment = pagoMensual * n;

      
      console.log("Pago mensual:  " + formatoRD(pagoMensual));
      console.log('Pago Total: ' + formatoRD(totalPayment))
  }


  if (interestOnly.checked) {
    const pagoMensualInterestOnly = monto * r;
    const pagoTotalOnly = r -monto

    console.log(
      "Pago mensual de Interes mensual:  " +
        formatoRD(pagoMensualInterestOnly)
    );

    console.log(formatoRD(p))
  }
}
