var txtBase = document.querySelector('#base')
var txtAltura = document.querySelector('#altura')

function calcular(){
    let base = Number(txtBase.value)
    let altura = Number(txtAltura.value)
    let calculo = (base + altura) / 2

    area.value = calculo
}