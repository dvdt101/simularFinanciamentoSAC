//buscando elementos no html
let inputValor = document.getElementById("inputValor");
let inputPrazo = document.getElementById("inputPrazo");
let inputJuros = document.getElementById("inputJuros");
let simularBtn = document.getElementById("simularBtn");
let inputPrazoMeses = document.getElementById("inputPrazoMeses");
let inputJurosMes = document.getElementById("inputJuroMes");
let inputJurosAcumulados = document.getElementById("inputJurosAcumulados");
let tabelaParcelas = document.getElementById("tabelaParcelas");

//adicionado uma função a o evento click
simularBtn.addEventListener("click", function () {
  let valor = inputValor.valueAsNumber;

  //calculando Prazo meses, Juros ao mês e amortização
  let resultadoPrazoMes = inputPrazo.valueAsNumber * 12;
  let resultadoJurosMes = Math.pow(1 + inputJuros.valueAsNumber, 1 / 12) - 1;
  let amortizacao = valor / resultadoPrazoMes;
  // imprimindo os resultados
  inputPrazoMeses.value = resultadoPrazoMes;
  inputJurosMes.value = resultadoJurosMes;

  //declarando juros acumulados
  let jurosAcumulados = 0;

  //criando loop para calcular 5 prestações
  for (let i = 0; i < 5; i++) {
    //calculando juros e total para a tabela
    let juros = (valor - i * amortizacao) * resultadoJurosMes;
    let total = (valor - i * amortizacao) * resultadoJurosMes + amortizacao;

    //criando linhas e cedulas  para o tbody no html
    let row = tabelaParcelas.insertRow();
    let cellPrestacoes = row.insertCell();
    let cellamortizacao = row.insertCell();
    let cellJuros = row.insertCell();
    let cellTotal = row.insertCell();
    cellPrestacoes.style = "text-align: center;";
    cellamortizacao.style = "text-align: center;";
    cellJuros.style = "text-align: center;";
    cellTotal.style = "text-align: center;";

    //motando tabela com valores
    cellPrestacoes.innerHTML = i + 1;
    cellamortizacao.innerHTML = +amortizacao.toFixed(2);
    cellJuros.innerHTML = juros.toFixed(2) + "&nbsp &nbsp";
    cellTotal.innerHTML = total.toFixed(2);

    //calculando juros acumulados
    jurosAcumulados += (valor - i * amortizacao) * resultadoJurosMes;
  }
  //imprimindo resultado de juros acumulados
  inputJurosAcumulados.value = jurosAcumulados;
});
