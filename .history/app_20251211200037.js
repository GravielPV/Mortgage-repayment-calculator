
let meses = document.getElementById('input-term');
let monto = document.getElementById('input-mortgage')
let interes = document.getElementById('input-interest')

function calcular(){

    let anoEnMeses = meses.value * 12;
    let monto1 = monto.value * anoEnMeses;
     let interesDecimal = interes.value / 100
     let interesAnual = interesDecimal /12
     let pagoMensual = (r * Math.pow(1 + r, anoEnMeses)) / (Math.pow(1 + r, n) - 1)

    console.log(anoEnMeses)

}


