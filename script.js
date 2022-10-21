var txtNota1 = document.querySelector('#nota1')
var txtNota2 = document.querySelector('#nota2')
var txtNota3 = document.querySelector('#nota3')
var txtNota4 = document.querySelector('#nota4')

function calcular(){
    let nota1 = Number(txtNota1.value)
    let nota2 = Number(txtNota2.value)
    let nota3 = Number(txtNota3.value)
    let nota4 = Number(txtNota4.value)

    let resultado = (nota1 + nota2 + nota3 + nota4) / 4

    media.value = resultado.toFixed(2)
}