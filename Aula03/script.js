/* 
  CRUD
    Read - get
    Create - post
    Update - put
    Delete - delete

  Form
    - Método padrão é o get
      Os valores são passados na url do navegador
      http://127.0.0.1:5500/Aula03/index.html?name=Kadu&especie=cachorro&peso=25&dataNascimento=2022-01-01
    - Pode fazer também do tipo post, colocando no form no html method='post'
*/

const catalogo = []
dataNascimento.max = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0];

// Create
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { nome, especie, peso, dataNascimento: dtNasc } = event.target;
  // equivale a => nome = event.target.nome (destructuring)

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

  form.reset();

  console.log(catalogo);
})