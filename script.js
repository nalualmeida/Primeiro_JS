var txtAnoNasc = document.querySelector('#anoNasc')

function calcular(){
    let date = new Date()
    let anoAtual = date.getFullYear()
    let anoNasc = Number(txtAnoNasc.value)
    let calculo =  anoAtual - anoNasc
    idade.value = calculo
}
