var txtTempF = document.querySelector('#tempF')

function transform(){
    let tempF = Number(txtTempF.value)

    let calculo = (5 * (tempF-32) / 9)

    tempC.value = calculo.toFixed(3)
}