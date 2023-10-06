/* 
  Callback hell
    Estrutura de callbacks um dentro do outro (obvio que não é recomendado)
    Para evitar isso, criar uma Promisse
  Promises
    const myAsyncfuction = new Promise((resolve, reject) => {
      ... código aqui
    })
  Promise.all
    Retorna erro na primeira que der errado
    Ou resolve se todas resolverem
  Promise.race
    Retorna assim que a primeira promisse que finalizar. seja com resolve ou com reject.
*/

const interval = setInterval(() => console.log("."), 1000);

function asyncAction(message, duration, callback = () => {}) {
  setTimeout(() => {
    console.log(message);
    callback();
  }, duration);
}

function asyncActionWithPromise(message, duration) {
  return new Promise((resolve, reject) => {
    const erro = Math.random() > 0.9;
    if (erro) {
      reject("Deu ruim, otário!");
      return;
    }
    
    setTimeout(() => {
      console.log(message);
      resolve();
    }, duration);
  });
}

// setTimeout(() => {
//   console.log("Tomando café da manhã...");
//   setTimeout(() => {
//     console.log("Tomar banho e ficar cheirosin");
//     setTimeout(() => {
//       console.log("Sair para trabalhar");
//       clearInterval(interval);
//     }, 3000);
//   }, 3000);
// }, 2000);

// setTimeout(() => {
//   console.log("Batendo um rango");
// }, 2000);

//// VERSÃO COM CALLBACK RAIZ
// asyncAction("Tomando café da manhã...", 2000, () => {
//   asyncAction("Tomar banho e ficar cheirosin", 3000, () => {
//     asyncAction("Sair para trabalhar", 3000, () => {
//       clearInterval(interval);
//     });
//   });
// });

//// VERSÃO COM PROMISE
// asyncActionWithPromise("Tomando café da manhã...", 2000)
//   .then(() => asyncActionWithPromise("Tomar banho e ficar cheirosin", 3000))
//   .then(() => asyncActionWithPromise("Sair para trabalhar", 3000))
//   .then(() => clearInterval(interval))
//   .catch((error_msg) => console.log(error_msg));

//// VERSÃO COM ASYNC-AWAIT
// (async () => {
//   await asyncActionWithPromise("Tomando café da manhã...", 2000);
//   await asyncActionWithPromise("Tomar banho e ficar cheirosin", 3000);
//   await asyncActionWithPromise("Sair para trabalhar", 3000);
//   clearInterval(interval);
// })();

// Promise.all([
//   asyncActionWithPromise("Cobertura do bolo está pronta!", 5000),
//   asyncActionWithPromise("Massa do bolo está pronta!", 10000),
//   asyncActionWithPromise("Recheio do bolo está pronto!", 2000)
// ])
//   .then(() => console.log("O bolo todo ficou pronto, só servir!!"))
//   .catch(() => console.log("Nossa, que horror..."));


Promise.race([
  asyncActionWithPromise("The Flash", 3000),
  asyncActionWithPromise("Quicksilver", 3000),
  asyncActionWithPromise("Sonic", 2000)
])
  .then(() => console.log("Este é o personagem mais rápido do universo!"))
  .catch((erro) => console.log(erro));