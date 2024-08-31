//Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um numero para calcular o fatorial: "))

let fat = 1

if (numero >= 0){
    for (let i = 1; i <= numero; i++){
        fat *= i
    }    
    console.log(`O fatorial de ${numero} é ${fat}`)
}else{
    
    console.log("Por favor, não inserir numero negativo")
}

