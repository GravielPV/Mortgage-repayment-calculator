// INPUTS
const montoInput = document.getElementById("input-mortgage");
const yearsInput = document.getElementById("input-term");
const interesInput = document.getElementById("input-interest");

// RADIOS
const repaymentRadio = document.getElementById("repayment");
const interestOnlyRadio = document.getElementById("interest-only");

// RESULTADOS
const resultadoBox = document.querySelector(".resultado");
const derechoBox = document.querySelector(".derecho");

const monthlyText = document.getElementById("monthly-repayment");
const totalText = document.getElementById("total-repayment");

// CLEAR ALL
const clearAllBtn = document.getElementById("clear-all");

// FORMATO MONEDA
function formatoMoneda(valor) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(valor);
}

// CALCULAR
function calcular() {
  const monto = Number(montoInput.value);
  const years = Number(yearsInput.value);
  const interes = Number(interesInput.value) / 100;

  if (!monto || !years || !interes) {
    alert("Please complete all fields");
    return;
  }

  const r = interes / 12;
  const n = years * 12;

  let pagoMensual = 0;
  let pagoTotal = 0;

  // REPAYMENT
  if (repaymentRadio.checked) {
    pagoMensual =
      (monto * r * Math.pow(1 + r, n)) /
      (Math.pow(1 + r, n) - 1);

    pagoTotal = pagoMensual * n;
  }

  // INTEREST ONLY
  if (interestOnlyRadio.checked) {
    pagoMensual = monto * r;
    pagoTotal = pagoMensual * n;
  }

  // MOSTRAR RESULTADOS
  monthlyText.textContent = formatoMoneda(pagoMensual);
  totalText.textContent = formatoMoneda(pagoTotal);

  derechoBox.style.display = "none";
  resultadoBox.style.display = "block";
}

// CLEAR ALL
clearAllBtn.addEventListener("click", (e) => {
  e.preventDefault();

  montoInput.value = "";
  yearsInput.value = "";
  interesInput.value = "";

  repaymentRadio.checked = true;
  interestOnlyRadio.checked = false;

  resultadoBox.style.display = "none";
  derechoBox.style.display = "block";
});
