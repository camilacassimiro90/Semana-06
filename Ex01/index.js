// - Crie uma página html e adicione um título h1 com a descrição "Título da página";
// - Adicione um botão com a descrição "Alterar título" e adicione o evento de click nele para uma função javascript;
// - Crie a função javascript para alterar o título, nela deve ser buscado o elemento h1 e alterado o texto para "Título da página alterado";

let titulo = document.querySelector('#titulo')
let botao = document.getElementById('botao')

botao.addEventListener('click', function () {
  // alert('quero trocar o titulo') testando se botão funciona.
  titulo.textContent = 'Título da página alterado'
})
