const catalogo = JSON.parse(localStorage.getItem('catalogoAnimais')) ?? [];

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
  
  const nome = document.createElement('b');
  nome.innerText = animal.nome

  const btnDelete = document.createElement('button');
  btnDelete.innerText = "Remover";
  btnDelete.id = "delete";
  btnDelete.addEventListener('click', () => {
    if(confirm("Tem certeza que deseja deletar esse animal?")) {
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