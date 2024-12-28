const numero1 =  10
const numero2 =  20
let numero3 = 30

//const soma1 = 'AB' - numero2 // NaN = Not a Number (Não é um número), quando tentamos fazer uma operação matemática com um valor que não é um número.
// NaN é um valor especial que é retornado quando uma operação matemática falha. 
// Por exemplo, se você tentar somar um número com uma string, o resultado será NaN.
// NaN é um valor primitivo e não um objeto.
// Você pode usar a função isNaN() para verificar se o resultado de uma operação é NaN. // Exemplo: isNaN(soma) // true
// Null é um valor especial que significa "nada" ou "vazio". // Exemplo: let x = null // x é nulo //
const soma = numero1 + numero2 // O operador + é usado para adição.
const subtracao = numero1 - numero2 // O operador - é usado para subtração.
const multiplicacao = numero1 * numero2 //  O operador * é usado para multiplicação.
const divisao = numero1 / numero2 //  O operador / é usado para divisão.
const resto = numero1 % numero2 // O operador % é usado para encontrar o resto da divisão de dois números.
const potencia = numero1 ** numero2 // ** é o operador de exponenciação, que calcula a base elevada à potência do expoente, ou seja, base^expoente.
const potencia2 = Math.pow(numero1, numero2) // Math.pow() é uma função que retorna a base elevada à potência do expoente, ou seja, base^expoente.
const numeroNegativo = -3 // O operador - é usado para negar um número, tornando-o negativo.
const numeroAbsoluto = Math.abs(numeroNegativo) // Calcula o valor absoluto de numeroNegativo
const incremento = numero3 + 5 // Incrementa numero3 por 5 de maneira independente
const decremento = numero3 - 5 // Decrementa numero3 por 5 de maneira independente
const incremento2 = numero3 + 1 // Incrementa numero3 por 1 de maneira independente
const decremento2 = numero3 - 1 // Decrementa numero3 por 1 de maneira independente


console.log({ soma })
console.log({ subtracao })
console.log({ multiplicacao })
console.log({ divisao })
console.log({ resto })
console.log({ potencia })
console.log({ potencia2 })
console.log({ incremento })
console.log({ decremento })
console.log({ incremento2 })
console.log({ decremento2 })
console.log({ numeroNegativo })  
console.log({ numeroAbsoluto })