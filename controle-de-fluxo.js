const numero1 = 300 
const numero2 = 2000
//if executa um bloco de código se uma condição especificada for verdadeira. // Exemplo: if (condição) { // bloco de código a ser executado }
//else executa um bloco de código se a mesma condição especificada for falsa. // Exemplo: if (condição) { // bloco de código a ser executado } else { // bloco de código a ser executado }
//else if executa um bloco de código se uma condição especificada for verdadeira. // Exemplo: if (condição) { // bloco de código a ser executado } else if (outra condição) { // bloco de código a ser executado }

if (numero1 > 1) {
  console.log('Este número é maior que 1')
}

if(numero1 > 200){
    console.log('Este número é maior que 200')
} 
else {
    console.log(`Este número é menor que 200`)
}

if(numero1 > numero2){
    console.log('Este número é maior que 200')
} else if(numero1 < numero2){
    console.log('Este número é menor que 200')
}