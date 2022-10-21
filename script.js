var txtSoftwares = document.querySelector('#qtdSoftwares')

function calcular(){
    let softwares = Number(txtSoftwares.value)

    let calculo = 500 + (50 * softwares)

    salarioBruto.value = calculo
}