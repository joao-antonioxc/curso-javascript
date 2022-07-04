const verificar = document.querySelector('#verificar')
verificar.addEventListener('click', clicou)

function clicou() {
    const nacionalidade = document.querySelector('#nacionalidade').value.toLowerCase()
    const resposta = document.querySelector('.resposta')
    
    if (nacionalidade == 'brasil') {
        resposta.innerHTML = `Você é <strong>Brasileiro</strong>!`
    } else {
        resposta.innerHTML = `Você é <strong>Estrangeiro</strong>!`
    }
}
