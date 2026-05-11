// Contadores e controle geral
let totalCadastros = 0;
let totalEstoqueBaixo = 0;

let vinhoMaisAntigo = "";
let safraMaisAntiga = 9999;

let continuar = true;

// botão para adicionar um novo vinho
const addVinho = document.getElementById("add-vinho");

function validarTexto(mensagem) {
  let valor;

  do {
    valor = prompt(mensagem);

    if (valor === null || valor.trim() === "") {
      alert("Entrada inválida! Digite um valor válido.");
    }
  } while (valor === null || valor.trim() === "");

  return valor;
}

// Função para validar número
function validarNumero(mensagem) {
  let numero;

  do {
    numero = Number(prompt(mensagem));

    if (isNaN(numero) || numero <= 0) {
      alert("Digite um número válido maior que zero.");
    }
  } while (isNaN(numero) || numero <= 0);

  return numero;
}

// Função para verificar estoque baixo
function verificarEstoque(quantidade) {
  if (quantidade < 5) {
    return true;
  } else {
    return false;
  }
}

// Função para classificar vinho
function classificarVinho(safra) {
  let classificacao = "";
  let anoAtual = 2026;
  let idade = anoAtual - safra;

  if (idade <= 5) {
    classificacao = "Jovem";
  } else if (idade <= 15) {
    classificacao = "Amadurecido";
  } else {
    classificacao = "Antigo";
  }

  return classificacao;
}

// Função para mostrar dados
function mostrarDados(
  nome,
  tipo,
  safra,
  quantidade,
  classificacao,
  estoqueBaixo
) {
  console.log("===== DADOS DO VINHO =====");
  console.log("Nome:", nome);
  console.log("Tipo:", tipo);
  console.log("Safra:", safra);
  console.log("Quantidade:", quantidade);
  console.log("Classificação:", classificacao);

  if (estoqueBaixo) {
    console.log("ATENÇÃO: Estoque baixo!");
    alert("O vinho " + nome + " está com estoque baixo!");
  }

  console.log("==========================");
}

function adicionarVinho() {
  do {
    //cadastro do vinho
    let nomeVinho = validarTexto("Digite o nome do vinho:");
    let tipoVinho = validarTexto("Digite o tipo do vinho:");
    let safraVinho = validarNumero("Digite a safra do vinho:");
    let quantidadeVinho = validarNumero(
      "Digite a quantidade em estoque do vinho:"
    );

    //processamento
    let estoqueBaixo = verificarEstoque(quantidadeVinho);
    let classificacaoVinho = classificarVinho(safraVinho);

    // Contadores
    totalCadastros++;

    if (estoqueBaixo) {
      totalEstoqueBaixo++;
    }

    // Verificar vinho mais antigo
    if (safraVinho < safraMaisAntiga) {
      safraMaisAntiga = safraVinho;
      vinhoMaisAntigo = nomeVinho;
    }

    // Exibir dados
    mostrarDados(
      nomeVinho,
      tipoVinho,
      safraVinho,
      quantidadeVinho,
      classificacaoVinho,
      estoqueBaixo
    );

    alert(
      `Vinho "${nomeVinho}" adicionado com sucesso! Veja os detalhes no console.`
    );

    // continuar cadastro
    continuar = confirm("Adicionar outro vinho?");
  } while (continuar);
}

// Evento para adicionar um novo vinho
addVinho.addEventListener("click", () => {
  adicionarVinho();

  // Resultado final
  console.log("===== RELATÓRIO FINAL =====");
  console.log("Total de cadastros:", totalCadastros);
  console.log("Total de vinhos com estoque baixo:", totalEstoqueBaixo);
  console.log("Vinho com safra mais antiga:", vinhoMaisAntigo);
  console.log("Safra mais antiga:", safraMaisAntiga);

  alert(
    "Cadastros realizados: " +
      totalCadastros +
      "\nVinhos com estoque baixo: " +
      totalEstoqueBaixo +
      "\nVinho mais antigo: " +
      vinhoMaisAntigo +
      "\nSafra: " +
      safraMaisAntiga
  );
});
