//Escreva um programa que gera e imprime os primeiros 10 números da sequência de
//Fibonacci utilizando um loop for.

let num1 = 0
let num2 = 1

console.log("Os primeiros 10 numeros da sequência de Fibonacci são: ")


for (let i = 0; i < 10; i++) {
    
    let proximoNumero = num1 + num2
    
    console.log(`${num1} + ${num2} = ${proximoNumero}`)
    
    
    
    
    num1 = num2
    num2 = proximoNumero
}
//Não faço ideia se estar entendivel peço perdão >-<