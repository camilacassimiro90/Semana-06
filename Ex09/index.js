const carregar = () => {
  const titulo = document.querySelector('h1')
  const descricao = document.querySelector('#descricao')
  const listaItens = document.querySelectorAll('li.itens')
  console.log(titulo.textContent)
  console.log(descricao.textContent)
  listaItens.forEach(elemento => {
    console.log(elemento.textContent)
  })
}
