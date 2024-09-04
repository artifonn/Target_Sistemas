async function tratamentoDeDadosFaturamento() {
  try {
    const response = await fetch("dados.json");
    if (!response.ok) {
      throw new Error("Erro ao carregar os dados");
    }
    const dados = await response.json();

    let menorValorDeFaturamento = Infinity;
    let maiorValorDeFaturamento = -Infinity;
    let somarValoresDeFaturamento = 0;
    let diasComFaturamento = 0;
    let faturamentoSuperiorMediaMensal = 0;

    dados.forEach((dado) => {
      const valor = dado.valor;

      if (valor > 0) {
        if (valor < menorValorDeFaturamento) menorValorDeFaturamento = valor;
        if (valor > maiorValorDeFaturamento) maiorValorDeFaturamento = valor;
        somarValoresDeFaturamento += valor;
        diasComFaturamento++;
      }
    });

    const mediaDeFaturamento = somarValoresDeFaturamento / diasComFaturamento;

    dados.forEach((dado) => {
      if (dado.valor > mediaDeFaturamento) {
        faturamentoSuperiorMediaMensal++;
      }
    });

    return `Menor valor: ${menorValorDeFaturamento.toFixed(
      2
    )}, Maior valor: ${maiorValorDeFaturamento.toFixed(
      2
    )}, Dias acima da média: ${faturamentoSuperiorMediaMensal}`;
  } catch (error) {
    console.error("Erro ao carregar ou processar dados:", error);
    return "Ocorreu um erro ao processar os dados.";
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const resultado = await tratamentoDeDadosFaturamento();
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = resultado;
});
