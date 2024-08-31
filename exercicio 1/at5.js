//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//utilizando if-else.
const prompt = require('prompt-sync')()

let Kg = Number(prompt("Informe seu peso: "))

let M = Number(prompt("Informe sua altura: "))

let imc = Kg / (M * M)

if (imc < 18.5) {
    console.log(`voce está Abaixo do peso`)
} else if (imc >= 18.5 && imc < 24.9) {
    console.log(`Voce está no Peso normal`)
} else if (imc >= 25 && imc < 29.9) {
    console.log(`Voce está com Sobrepeso`)
} else if (imc >= 30 && imc < 34.9) {
    console.log(`Voce está com Obesidade grau 1`)
} else if (imc >= 35 && imc < 39.9) {
    console.log(`Voce está com Obesidade grau 2`)
} else {
    console.log(`Voce está com Obesidade grau 3 (obesidade mórbida favor se cuidar!)`)
}

