const botao = document.querySelector('#botao')
botao.addEventListener('click', medir)
function medir() {
    const velocidade = Number(document.querySelector('#velocidade').value)
    const medicao =  document.querySelector('#medicao')

    if (velocidade > 66) {
        medicao.style.color = 'red'
        medicao.innerHTML =
        `A medição realizada foi de ${velocidade}.<br>
        O valor considerado é de ${velocidade - (velocidade * 10 / 100)}.<br>
        Nesta velocidade você foi multado por excesso de velocidade!`
    } else {
        medicao.style.color = 'green'
        medicao.innerHTML = `Você está dentro da velocidade permitida na via.<br>`
    }
    medicao.innerHTML += `Dirija com cuidado!`
}