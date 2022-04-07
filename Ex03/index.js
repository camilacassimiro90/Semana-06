const buscarCep = async () => {
  const cep = document.getElementById('cep').value
  const url = `https://viacep.com.br/ws/${cep}/json/`
  fetch(url)
    .then(responde => responde.json())
    .then(console.log)
}
