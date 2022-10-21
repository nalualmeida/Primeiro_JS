var txtAnoNasc = document.querySelector('#anoNasc')

function calcular(){
    let anoNasc = Number(txtAnoNasc.value)
    let date = new Date()
    let calculo = date.getFullYear() - Nuber(anoNasc.value)
    idade.value = calculo
}
