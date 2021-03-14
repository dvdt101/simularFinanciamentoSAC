//buscando elementos no html
let valor = document.getElementById("inputValor");
let simularBtn = document.getElementById("simularBtn");

//adicionado uma função a o evento click
simularBtn.addEventListener("click", function () {
  //calculando Prazo meses, Juros ao mês e amortização
  let resultadoPrazoMes =
    document.getElementById("inputPrazo").valueAsNumber * 12;

  let inputJuros = document.getElementById("inputJuros");
  let resultadoJurosMes = Math.pow(1 + inputJuros.valueAsNumber, 1 / 12) - 1;

  let amortizacao = valor.valueAsNumber / resultadoPrazoMes;
  // imprimindo os resultados
  document.getElementById("inputPrazoMeses").value = resultadoPrazoMes;
  document.getElementById("inputJuroMes").value = resultadoJurosMes;

  //declarando juros acumulados
  var total = 0;

  //criando loop para calcular 5 prestações
  for (let i = 0; i < 5; i++) {
    //calculando juros e total para a tabela
    let juros = (valor.valueAsNumber - i * amortizacao) * resultadoJurosMes;
    total =
      (valor.valueAsNumber - i * amortizacao) * resultadoJurosMes + amortizacao;

    //criando linhas e cedulas  para o tbody no html
    let tabelaParcelas = document.getElementById("tabelaParcelas");
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
  }

  //calculando juros acumulados
  var totalj = 0;
  for (var i = 0; i < resultadoPrazoMes; i++) {
    var saldoDevedor = valor.valueAsNumber - i * amortizacao;
    var jurosP = saldoDevedor * resultadoJurosMes;
    totalj += jurosP;
  }
  //imprimindo resultado de juros acumulados
  document.getElementById("inputJurosAcumulados").value = totalj.toFixed(2);
});
