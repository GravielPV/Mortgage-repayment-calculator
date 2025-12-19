
let meses = document.getElementById('input-term');
let monto = document.getElementById('input-mortgage')
let interes = document.getElementById('input-interest')

function calcular(){

    let anoe = meses.value * 12;
    let monto1 = monto.value * calculoMes;
     let interesDecimal = interes.value / 100
     let interesAnual = interesDecimal /12

    console.log(calculoMes)

}


