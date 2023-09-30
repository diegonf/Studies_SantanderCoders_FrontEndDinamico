/* 
  setInterval e setTimeout
    setInterval: intervalo se sempre se repete
    setTimeout: executa uma vez
/*/

// *** Prioridade entra promise, setTimeout, e codigo sincrono
setTimeout(() => {
  console.log('setTimeout');
}, 0);

const minhaPromiseResolvida = Promise.resolve("Promise");
minhaPromiseResolvida.then((response) => console.log(response));

console.log('Código sincrono!');

// ***** Existe diferença de prioridade entre setInterval e setTimeout??
// setInterval(() => {
//   console.log('oi interval');
// }, 1000);

// setTimeout(() => {
//   console.log('oi timeout');
// }, 1000);

