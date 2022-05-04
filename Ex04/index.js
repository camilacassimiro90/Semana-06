const botao = document.getElementById('botao')
const cep = document.getElementById('cep')
const res = document.getElementById('res')

botao.addEventListener('click', pesquisar)
async function pesquisar() {
  if (cep.value.length === 0) {
    alert('Preencher campo!')
  } else if (cep.value.length !== 8) {
    alert('CEP inválido!')
  } else {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cep.value}/json/`
      )
      const dados = await response.json()
      if (dados.erro === true) {
        alert('Não foi possível consultar o CEP informado!')
      } else {
        res.innerHTML = `${dados.logradouro}
                  ${dados.complemento}
                  ${dados.bairro}
                  ${dados.localidade} - ${dados.uf}
                  ${dados.cep}`
      }
    } catch (err) {
      console.log(err)
    }
  }
}
