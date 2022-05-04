const uf = document.getElementById('uf')
const cidade = document.getElementById('cidade')
const rua = document.getElementById('rua')
const botao = document.getElementById('botao')
const res = document.getElementById('res')

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
        alert('ERRO: Não foi possível encontrar o endereço!')
      } else {
        res.innerHTML = `
                Logradouro: ${cep[0].logradouro}
                Complemento: ${cep[0]?.complemento}
                Bairro: ${cep[0].bairro}
                Localidade:${cep[0].localidade}
                UF:${cep[0].uf}`
      }
    } catch (err) {
      alert('ERRO: ', err)
    }
  }
}
