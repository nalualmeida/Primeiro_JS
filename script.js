var txtAnoNasc = document.querySelector('#anoNasc')

function calcular(){
    let anoNasc = Number(txtAnoNasc.value)

    let calculo = 2022 - anoNasc

    idade.value = calculo
}