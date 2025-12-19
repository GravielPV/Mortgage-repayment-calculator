
let meses = document.getElementById('input-term');
let monto = document.getElementById('input-mortgage')
let interes = document.getElementById('input-interest')

function calcular(){

    let anoEnMeses = meses.value * 12;  // N //
    let monto1 = monto.value * anoEnMeses;
     let interesDecimal = interes.value / 100
     let interesAnual = interesDecimal /12 // R//
     let pagoMensual = (interesAnual * Math.pow(1 + interesAnual, anoEnMeses)) / (Math.pow(1 + interesAnual, anoEnMeses) - 1)

// console.log(pagoMensual.toFixed(2));

console.log()


}


