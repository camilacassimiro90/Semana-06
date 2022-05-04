const botao = document.getElementById('botao')

botao.addEventListener('click', inverter)

const vermelho = 'vermelho'
const azul = 'azul'

function inverter() {
  const listaItens = document.querySelectorAll('li')

  listaItens.forEach(item => {
    item.className === azul
      ? (item.className = vermelho)
      : (item.className = azul)
  })
}
