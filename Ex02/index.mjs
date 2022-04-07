// - Crie um uma página html contendo:
// -- 2 inputs do tipo number;
// -- 1 select com as options Somar, Subtrair, Dividir, Multiplicar
// -- 1 button com o texto Calcular
// - Crie uma função JavaScript para efetuar as operações:
// -- Deve ser obtido os valores dos inputs
// -- Deve ser obtida a operação desejada de acordo com o valor do select
// -- Deve ser adicionado um elemento do tipo <p> via JavaScript para exibir o resultado do cálculo
// - Adicione o evento de click no botão calcular

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

  console.log(num1)
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
