var txtAnoNasc = document.querySelector('#anoNasc')

function calcular(){
    let anoNasc = Number(txtAnoNasc.value)
    let date = new Date()
    let calculo = date.getFullYear() - Number(anoNasc.value)
    idade.value = calculo
}
