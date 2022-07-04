const botao = document.querySelector('#botao')
botao.addEventListener('click', calculo)
function calculo() {
    const idade = Number(document.querySelector('#idade').value)
    const resposta = document.querySelector('#resposta')
    if (idade < 16) {
        resposta.innerHTML = 'Você <strong>não pode Votar</strong>!'
    } else if (idade < 18 || idade >= 67) {
        resposta.innerHTML = 'O voto pra você é <strong>Opcional</strong>!'
    } else {
        resposta.innerHTML = 'O voto pra você é <strong>Obrigatório</strong>!'
    }
}