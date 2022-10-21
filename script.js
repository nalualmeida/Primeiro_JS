var txtNumero1 = document.querySelector('#numero1')
var txtNumero2 = document.querySelector('#numero2')

function somar(){
    let numero1 = Number(txtNumero1.value)
    let numero2 = Number(txtNumero2.value)
    let soma = numero1 + numero2

    resultado.value = soma
}