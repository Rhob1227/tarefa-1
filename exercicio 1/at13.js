//Faça um algoritmo para receber números decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.


const prompt = require('prompt-sync')()

let soma = 0
let contador = 0
let numero

do {
    
    numero = Number(prompt("Digite um número decima (ao digitar 0 voce encerra o programa): "))
    
    
    if (numero !== 0) {
        
        soma += numero

        
        contador++
    }

} while (numero !== 0)


if (contador > 0) {
    
    let media = soma / contador

    
    console.log("A média aritmética dos números inseridos é: " + media)
} else {
    
    console.log("Nenhum número válido foi inserido.")
}