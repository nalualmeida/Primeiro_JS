var txtCheque = document.querySelector('#cheque')

function atualizar(){
    let saldo = Number(txtCheque.value)
    let calculo = 500 + saldo

    saldoAtual.value = calculo
}