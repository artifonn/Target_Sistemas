const faturamentoMensalPorEstado = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  OUTROS: 19849.53,
};

const calcularPercentuais = (faturamentoMensalPorEstado) => {
  const percentuais = {};

  const total = Object.values(faturamentoMensalPorEstado).reduce(
    (acc, valor) => acc + valor,
    0
  );

  for (const estado in faturamentoMensalPorEstado) {
    percentuais[estado] =
      ((faturamentoMensalPorEstado[estado] / total) * 100).toFixed(2) + "%";
  }
  return percentuais;
};

const percentuais = calcularPercentuais(faturamentoMensalPorEstado);

console.log("Percentual de representação por estado: ");
for (const estado in percentuais) {
  console.log(`${estado}: ${percentuais[estado]}`);
}
