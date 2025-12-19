  const yearsInput = document.getElementById("input-term");
    const montoInput = document.getElementById("input-mortgage");
    const interesInput = document.getElementById("input-interest");

    const repayment = document.getElementById("repayment");
    const interestOnly = document.getElementById("interest-only");

    const resultadoBox = document.getElementById("resultado");
    const pagoMensualText = document.getElementById("pago-mensual");
    const pagoTotalText = document.getElementById("pago-total");

    repayment.addEventListener("change", calcular);
    interestOnly.addEventListener("change", calcular);
    yearsInput.addEventListener("input", calcular);
    montoInput.addEventListener("input", calcular);
    interesInput.addEventListener("input", calcular);

    function formatoRD(valor) {
      return new Intl.NumberFormat("es-DO", {
        style: "currency",
        currency: "DOP",
        minimumFractionDigits: 2,
      }).format(valor);
    }

    function calcular() {
      const years = Number(yearsInput.value);
      const monto = Number(montoInput.value);
      const interes = Number(interesInput.value) / 100;

      if (!years || !monto || !interes) {
        resultadoBox.style.display = "none";
        return;
      }

      if (!repayment.checked && !interestOnly.checked) {
        resultadoBox.style.display = "none";
        return;
      }

      const r = interes / 12;
      const n = years * 12;

      let pagoMensual = 0;
      let pagoTotal = 0;

      if (repayment.checked) {
        pagoMensual =
          (monto * r * Math.pow(1 + r, n)) /
          (Math.pow(1 + r, n) - 1);

        pagoTotal = pagoMensual * n;
      }

      if (interestOnly.checked) {
        pagoMensual = monto * r;
        pagoTotal = pagoMensual * n;
      }

      pagoMensualText.textContent =
        "Pago mensual: " + formatoRD(pagoMensual);

      pagoTotalText.textContent =
        "Pago total: " + formatoRD(pagoTotal);

      resultadoBox.style.display = "block";
    }