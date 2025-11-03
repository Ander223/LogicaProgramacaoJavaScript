alert('Boas vindas ao jogo do número secreto!');    // palavra reservada "alert" cria um alerta no navegador
let numeroSecreto = 5;                                  //palavra reservada "let" para criar variáveis
let chute = prompt('Escolha um número entre 1 e 10');  // "prompt" mostra uma mensagem na tela e neste caso esta salvando o valor na variavel CHUTE

if ( chute == numeroSecreto){
    console.log('Isso ai! Você descobriu o número secreto (5)')  // "console.log" cria uma mensagen no depurador de codigo no navegador
} 