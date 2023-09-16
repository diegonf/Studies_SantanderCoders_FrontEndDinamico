/* 
  DOM - Document Object Model
  Porque no HTML a tag <script> vem no final no body?
    Porque o DOM precisa carregar primeiro antes do javascript entrar para manipular o DOM
  document
    Modo de acessar o DOM
    Objeto que "transforma" todo o html em um objeto para ser acessado pelo javascript
  window
    É o pai de todo mundo
    Objeto global que pode ser acessado pelo javascript
    Contém todas as funções globais do javascript, como alert e fetch
    Não necessita utilizar window.qualquer_coisa
    document é um objeto do window.
  
    Métodos de seleção de elemento HTML
      document.getElementById('id').innerText
              .querySelector('#id').innerText
              .querySelectorAll('#id').innerText
      id.innerText ou window.id.innerText (variável global criado com o id dentro de window)
*/

/* 
  Extras p/ estudar
    - Como acessar uma variavel declarada em um arquivo .js quando o import do .js no html está como type="module"?
*/

// const doc = document;
// console.log(doc.getElementById('num')); // dessa forma ele pega o elemento como um todo
// console.log(doc.getElementById('num').innerText); // dessa forma ele ja pega o valor

// outras formas de selecionar o elemento
// console.log(doc.querySelector('#num').innerText);
// console.log(doc.querySelectorAll('#num')); // imprime uma lista do tipoe NodeList (similar ao Array)
// console.log(doc.querySelectorAll('#num')[0].innerText);
// console.log('num.innerText: ', num.innerText); // só pegar o nome do id e acessar como variavel. Isso só funciona como id, e não funcionariad dessa forma se tivesse hífen ou outro caracter especial no meio. Isso existe por causa do window.num (o navegador cria dentro do objeto global window os elementos HTML que contém id)


sumButton.addEventListener('click', () => {
  // let currNum = parseInt(num.innerText);
  // num.innerText = ++currNum;
  let currNum = parseInt(num.value);
  // console.log(currNum);
  currNum++
  num.value = Math.max(currNum, 0);
});

subButton.addEventListener('click', () => {
  // let currNum = parseInt(num.innerText);
  // num.innerText = --currNum;
  let currNum = parseInt(num.value);
  currNum--;
  num.value = Math.max(currNum, 0);
});