let yearsInput = document.getElementById('input-term');
let montoInput = document.getElementById('input-mortgage');
let interesInput = document.getElementById('input-interest');
let repayment =document.getElementById('repayment');
let interestOnly = document.getElementById('interest-only')

if (repayment.checked){
    calcular();
}

function calcular(){

      let years = Number(yearsInput.value);
  let monto = Number(montoInput.value);
  let interes = Number(interesInput.value) / 100; 


     let r = interes / 12;
     let n = years * 12;
     let pagoMensual = monto * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

console.log("Pago mensual: " + Number(pagoMensual.toFixed(2)));



}





