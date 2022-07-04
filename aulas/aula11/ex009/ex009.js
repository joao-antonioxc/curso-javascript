const verificar = document.querySelector('#verificar')
verificar.addEventListener('click', clicou)
function clicou() {
    const nacionalidade = document.querySelector('#nacionalidade')
    const resposta = document.querySelector('#resposta')

    if (nacionalidade == 'Brasil') {
        resposta.innerHTML = `Você é <strong>Brasileiro</strong>`
    } else {
        resposta.innerHTML = `Você é <strong>Estrangeiro</strong>!`
    }
}
