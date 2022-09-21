let banco_de_dados = {
  nome: "",
  saldo: 0,
  historico: "",
};

function nome() {
  banco_de_dados.nome = window.prompt(
    `Em primeiro lugar, digite seu nome no campo abaixo:`
  );

  mostra_nome();
}

function saldo_in() {
  banco_de_dados.saldo = Number(
    window.prompt(
      `Olá, ${banco_de_dados.nome}. Seja bem-vindo ao VestidoBank, seu banco não Nu!
     \nPara começar alguma operação de sua escolha, por favor, digite seu saldo atual abaixo:
     \n(Obs.: Sem o R$)`
    )
  );

  adicionar_historico(`Definiu saldo como R$${banco_de_dados.saldo}`);
}

function operacao() {
  let op = window.prompt(`Ótimo! Seu saldo atual é de R$${banco_de_dados.saldo}.
                        \nO que quer fazer agora? Escolha um número:
                        \n1 - Adicionar fundos
                        \n2 - Retirar fundos
                        \n3 - Sair`);
  return op;
}

function adicionar() {
  let add = Number(
    window.prompt(`Saldo atual: R$${banco_de_dados.saldo}
                                   \nQuanto quer adicionar?
                                   \n(Obs.: Sem o R$)`)
  );

  banco_de_dados.saldo = banco_de_dados.saldo + add;

  adicionar_historico(
    `Adicionou: ${add}. Saldo final: R$${banco_de_dados.saldo}.`
  );
}

function retirar() {
  let ret = Number(
    window.prompt(`Saldo atual: R$${banco_de_dados.saldo}
                                       \nQuanto quer retirar?
                                       \n(Obs.: Sem o R$)`)
  );

  banco_de_dados.saldo = banco_de_dados.saldo - ret;

  adicionar_historico(
    `Retirou: ${ret}. Saldo final: R$${banco_de_dados.saldo}.`
  );
}

function banco() {
  nome();

  saldo_in();

  let no_banco = true;

  while (no_banco) {
    let op = operacao();

    switch (op) {
      case "1":
        adicionar();
        break;
      case "2":
        retirar();
        break;
      case "3":
        no_banco = false;
        break;
      default:
        window.alert(`Operação inválida`);
        break;
    }
  }

  mostra_saldo();
  mostra_historico();
}

function mostra_saldo() {
  let saldo_tela = document.getElementById("saldo");

  saldo_tela.innerHTML = `R$${banco_de_dados.saldo}`;
}

function adicionar_historico(hist) {
  banco_de_dados.historico = banco_de_dados.historico + `${hist}<br />`;
}

function mostra_historico() {
  let hist = document.getElementById("hist");

  hist.innerHTML = `${banco_de_dados.historico}`;
}

function mostra_nome() {
  let nome = document.getElementById("nome");

  nome.innerHTML = `${banco_de_dados.nome}`;
}
