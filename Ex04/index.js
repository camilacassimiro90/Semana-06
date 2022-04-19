const buscarCep = async () => {
  const cep = document.getElementById('cep').value

  const url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url)
    .then(responde => responde.json())
    .then(mostrarEndereco)
  // .then(console.log)
  mostrarEndereco()
}

function mostrarEndereco(dados) {
  let res = document.getElementById('res')

  res.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                   <p>Complemento: ${dados.complemento}</p>
                   <p>Bairro: ${dados.bairro}</p>
                   <p>Cidade: ${dados.localidade}</p> - ${dados.uf}`
}
