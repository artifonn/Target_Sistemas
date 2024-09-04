// Desafio 2
let numero = parseInt(prompt('Informe um número'));
const resultado = document.getElementById('resultado');

function pertenceASequenciaFibonacci(numero) {
  let numeroZero = 0;
  let numeroUm = 1;
  let proximoNumero = numeroZero + numeroUm;

  if (numero === numeroZero || numero === numeroUm) {
    return `O número ${numero} pertence à sequência de Fibonacci!`;
  }

  while (proximoNumero <= numero) {
    if (proximoNumero === numero) {
      return `O número ${numero} pertence à sequência de Fibonacci!`;
    }
    numeroZero = numeroUm;
    numeroUm = proximoNumero;
    proximoNumero = numeroZero + numeroUm;
  }
  return `O número ${numero} não pertence à sequência de Fibonacci!`;
}

resultado.textContent = pertenceASequenciaFibonacci(numero);
