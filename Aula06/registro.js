/* 
  Continuação do CRUD

  JSON - JS Object Notation
    Padrão de arquivo do tipo object, que utiliza chave: valor.
    É um padrão de arquivo que surgiu do javascript, mas vai além do javascript.
    Meio que substituiu o .xml

  sessionStorage / localStorage
    session -> dados persistem no recarregamento da página
            -> dados são apagados ao fechar aba do navegador
    local   -> dados persistem no navegador
            -> pode recarregar a página, fechar e abrir pc, reiniciar o pc, e os dados persistirão
            -> só não tem acesso de um pra outro navegador

*/

import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// console.log(uuidv4()); 

let animal;
const catalogo = JSON.parse(localStorage.getItem('catalogoAnimais')) ?? []; // Coalescencia Nula
// const catalogo = sessionStorage.getItem('catalogoAnimais') || []; // OU Lógico
console.log(catalogo);

const getAnimal = () => {
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get('id');

  animal = catalogo.find(item => item.id === id);

  if(!animal) return;
  
  nome.value = animal.nome;
  especie.value = animal.especie;
  peso.value = animal.peso;
  dataNascimento.value = animal.dataNascimento;
}

getAnimal();

dataNascimento.max = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];

// Create
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { nome, especie, peso, dataNascimento: dtNasc } = event.target;

  const novoAnimal = {
    id: uuidv4(),
    nome: nome.value,
    especie: especie.value,
    peso: peso.value,
    dataNascimento: dtNasc.value,
  };

  let error = false;

  if (novoAnimal.nome === '') {
    nomeError.innerText = "Nome é obrigatório";
    error = true;
  }

  if (novoAnimal.especie === '') {
    especieError.innerText = "Espécie é obrigatória";
    error = true;
  }

  if (parseFloat(novoAnimal.peso) <= 0) {
    pesoError.innerText = "Peso deve ser acima de zero";
    error = true;
  }

  if (novoAnimal.peso === '') {
    pesoError.innerText = "Peso não pode ficar em branco";
    error = true;
  }

  if (novoAnimal.dataNascimento === '') {
    dataNascimentoError.innerText = "Data de nascimento é obrigatório";
    error = true;
  }


  if (error) {
    setTimeout(() => {
      nomeError.innerText = '';
      especieError.innerText = '';
      pesoError.innerText = '';
      pesoError.innerText = '';
      dataNascimentoError.innerText = '';
    }, 2000)
    return;
  }

  if(animal) {
    animal.nome = nome.value;
    animal.especie = especie.value;
    animal.peso = peso.value;
    animal.dataNascimento = dtNasc.value;
  } else {
    catalogo.push(novoAnimal);
  }
  localStorage.setItem('catalogoAnimais', JSON.stringify(catalogo));

  form.reset();
  location.href = './';
})