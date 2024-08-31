//Escrena um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

function ordenar(num1, num2) {
    if (num1 < num2) {
        console.log(num1, num2)
    } else {
        console.log(num2, num1)
    }
}

let n1 = Number(prompt(`Digite o primeiro valor: `))

let n2 = Number(prompt(`Digite o segundo valor: `))

if (n1 !== n2) {
    ordenar(n1, n2);
} else {
    console.log(`Os valores devem ser diferentes.`)
}