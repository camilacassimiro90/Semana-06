function calcular() {
  let num1 = Number(document.getElementById('num1').value)
  let num2 = Number(document.getElementById('num2').value)
  let res = document.getElementById('res')
  let texto = ''

  if (document.getElementById('soma').selected) texto = soma(num1, num2)
  if (document.getElementById('subtracao').selected)
    texto = subtracao(num1, num2)
  if (document.getElementById('multiplicacao').selected)
    texto = multiplicacao(num1, num2)
  if (document.getElementById('divisao').selected) texto = divisao(num1, num2)

  res.innerHTML = `<p> O resultado entre os números é: ${texto}`
}

function soma(n1, n2) {
  return n1 + n2
}

function subtracao(n1, n2) {
  return n1 - n2
}

function multiplicacao(n1, n2) {
  return n1 * n2
}

function divisao(n1, n2) {
  return n1 / n2
}
