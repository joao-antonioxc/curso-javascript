const horaAgora = new Date()
const hora = horaAgora.getHours()
const mensagem = document.querySelector('#mensagem')
if (hora < 6) {
    mensagem.innerHTML = `<strong>Boa madrugada!</strong>`
    document.body.style.background = 'rebeccapurple'
    document.body.style.color = 'whitesmoke'
} else if (hora < 12) {
    mensagem.innerHTML = `<strong>Bom dia!</strong>`
    document.body.style.background = 'lightskyblue'
    document.body.style.color = 'darkorchid'
} else if (hora < 18) {
    mensagem.innerHTML = `<strong>Boa tarde!</strong>`
    document.body.style.background = 'lightsalmon'
    document.body.style.color = 'darkred'
} else {
    mensagem.innerHTML = `<strong>Boa noite!</strong>`
    document.body.style.background = 'darkblue'
    document.body.style.color = 'white'
}