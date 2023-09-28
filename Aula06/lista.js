const catalogo = JSON.parse(localStorage.getItem('catalogoAnimais')) ?? [];
console.log(catalogo);

catalogo.forEach((animal, index) => {
  // container.innerHTML += `
  //   <div class="elem">
  //     <img src="./assets/animal_${index}.jpg" />
  //     <p>${animal.nome}</p>
  //   </div>
  // `

  const elem = document.createElement('div');
  elem.className = 'elem'

  const img = document.createElement('img');
  img.src = `./assets/animal_${index}.jpg`

  const nome = document.createElement('a');
  nome.innerText = animal.nome
  nome.href = `./registro.html?id=${animal.id}`

  const btnDelete = document.createElement('button');
  btnDelete.innerText = "Remover";
  btnDelete.id = "delete";
  btnDelete.addEventListener('click', () => {
    if (confirm("Tem certeza que deseja deletar esse animal?")) {
      catalogo.splice(index, 1);
      localStorage.setItem('catalogoAnimais', JSON.stringify(catalogo));
      location.reload();
    }
  })


  // elem.appendChild(img);
  // elem.appendChild(nome);
  elem.append(img, nome, btnDelete);
  container.appendChild(elem);
});

console.log('passei aqui 1');


fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((response) => {
    console.log('respose: ', response);
    // console.log(response.json());
    return response.json();
  })
  .then((data) => {
    console.log(data.results);
    console.log('passei aqui 2');
  })
  .catch((error) => {
    console.log(error)
  })

console.log('passei aqui 3');

async function getProkemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  console.log(data.results);
  console.log('passei aqui 4');
}
getProkemon();

console.log('passei aqui 5');