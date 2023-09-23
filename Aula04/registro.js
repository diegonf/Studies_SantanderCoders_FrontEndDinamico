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

const catalogo = JSON.parse(localStorage.getItem('catalogoAnimais')) ?? []; // Coalescencia Nula
// const catalogo = sessionStorage.getItem('catalogoAnimais') || []; // OU Lógico
dataNascimento.max = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];

// Create
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { nome, especie, peso, dataNascimento: dtNasc } = event.target;

  const novoAnimal = {
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

  catalogo.push(novoAnimal);
  localStorage.setItem('catalogoAnimais', JSON.stringify(catalogo));

  form.reset();

  console.log(catalogo);
})