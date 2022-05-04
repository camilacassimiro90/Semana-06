const uf = document.getElementById('uf')
const cidade = document.getElementById('cidade')
const rua = document.getElementById('rua')
const botao = document.getElementById('botao')
const res = document.getElementById('res')
const tabela = document.getElementById('tabela')
const paragrafo = document.createElement('p')
const th = document.createElement('th')

botao.addEventListener('click', consultar)
async function consultar() {
  if (uf.value.length === 0 || uf.value.length > 2) {
    alert(`ERRO: Preencha o campo UF.`)
  } else if (cidade.value.length === 0) {
    alert(`ERRO: Preencha o campo Cidade`)
  } else if (rua.value.length === 0) {
    alert(`ERRO: Preencha o campo Rua`)
  } else {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${uf.value}/${cidade.value}/${rua.value}/json/`
      )
      const cep = await response.json()
      if (cep[0] == undefined) {
        // alert('ERRO: Não foi possível encontrar o CEP!')
        paragrafo.textContent = 'Não foi possível encontrar CEP!'
        th.innerHTML = ''
      } else {
        paragrafo.textContent = ''
        th.innerHTML = `<tr><th>Logradouro: ${cep[0].logradouro}</td></tr>
        <tr><th>Complemento: ${cep[0].complemento}</td></tr>
        <tr><th>Bairro: ${cep[0].bairro}</td></tr>
        <tr><th>Localidade:${cep[0].localidade}</td></tr>
        <tr><th>UF:${cep[0].uf}</td></tr>
        <tr><th> CEP: </th> <td> ${cep[0].cep} </td></tr>
        <tr><th>DDD: </th><td>${cep[0].ddd}</td></tr>`
      }
    } catch (err) {
      alert('ERRO: ', err)
    }
  }
  tabela.appendChild(th)
  res.appendChild(paragrafo)
}
