const operacao = "soma";
const numero1 = 10;
const numero2 = 5;
let resultado;

switch (operacao) {
  case "soma": // case "soma": é o valor que a variável operacao deve ter para que o bloco de código abaixo seja executado. // Se a variável operacao for igual a "soma", então executa o bloco de código abaixo.
    resultado = numero1 + numero2;
    break;
  case "subtracao": //case "subtracao": é o valor que a variável operacao deve ter para que o bloco de código abaixo seja executado. // Se a variável operacao for igual a "subtracao", então executa o bloco de código abaixo.	
    resultado = numero1 - numero2;
    break;
  case "multiplicacao": //case "multiplicacao": é o valor que a variável operacao deve ter para que o bloco de código abaixo seja executado. // Se a variável operacao for igual a "multiplicacao", então executa o bloco de código abaixo.
    resultado = numero1 * numero2;
    break;
  case "divisao":  //case "divisao": é o valor que a variável operacao deve ter para que o bloco de código abaixo seja executado. // Se a variável operacao for igual a "divisao", então executa o bloco de código abaixo.
    resultado = numero1 / numero2;
    break; // break; é usado para sair do bloco de código switch.
  default: //default: é o valor padrão que a variável operacao deve ter para que o bloco de código abaixo seja executado. // Se a variável operacao for diferente de "soma", "subtracao", "multiplicacao" e "divisao", então executa o bloco de código abaixo.
    console.log("Operação inválida");
    resultado = null; // Se a operação for inválida, então o resultado é null.
}

if (resultado !== null) {
  console.log(`O resultado da ${operacao} é: ${resultado}`);
}

//if (resultado !== null) {// Se o resultado for diferente de null, ou seja, se a operação for válida, então exibe o resultado. // Se o resultado for igual a null, então exibe a mensagem "Operação inválida". 
// else if (resultado === null) {// Se o resultado for igual a null, ou seja, se a operação for inválida, então exibe a mensagem "Operação inválida". // Se o resultado for diferente de null, então exibe o resultado. 
// Se o resultado for diferente de null, ou seja, se a operação for válida, então exibe o resultado. // Se o resultado for igual a null, então exibe a mensagem "Operação inválida".
// else {// Se a operação for inválida, então exibe a mensagem "Operação inválida". // Se a operação for válida, então exibe o resultado. 