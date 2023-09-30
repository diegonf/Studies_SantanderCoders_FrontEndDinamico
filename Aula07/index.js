/* 
  setInterval e setTimeout
    setInterval: intervalo se sempre se repete
    setTimeout: executa uma vez
/*/

// *** Prioridade entra promise, setTimeout, e codigo sincrono
setTimeout(() => {
  console.log('setTimeout'); // isso imprime em terceiro
}, 0);

const minhaPromiseResolvida = Promise.resolve("Promise");
minhaPromiseResolvida.then((response) => console.log(response)); // isso imprime em segundo

console.log('Código sincrono!'); // isso imprime primeiro

// ***** Existe diferença de prioridade entre setInterval e setTimeout??
// setInterval(() => {
//   console.log('oi interval');
// }, 1000);

// setTimeout(() => {
//   console.log('oi timeout');
// }, 1000);

