function funcaoIinverterString(texto) {
  let stringInvertida = '';

  for (let i = texto.length - 1; i >= 0; i--) {
    stringInvertida += texto[i];
  }
  return stringInvertida;
}

const textoDeEntrada = 'Texto que será invertido!';
const resultado = funcaoIinverterString(textoDeEntrada);

console.log(`String invertida: ${resultado}`);
