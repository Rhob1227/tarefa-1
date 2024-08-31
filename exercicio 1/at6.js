//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')()

console.log("Iremos calcular um triangulo")
let A = Number(prompt("Digite o valor do lado A:"))
let B = Number(prompt("Digite o valor do lado B:"))
let C = Number(prompt("Digite o valor do lado C:"))


if (A < B + C && B < A + C && C < A + B) {
    
    if (A === B && B === C) {
        console.log("Os lados formam um triângulo equilátero.")
    } else if (A === B || A === C || B === C) {
        console.log("Os lados formam um triângulo isósceles.")
    } else {
        console.log("Os lados formam um triângulo escaleno.")
    }
} else {
    console.log("Os valores fornecidos não formam um triângulo.")
}