//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()

let maça = Number(prompt("Escreva quantos R$ e a maçã: "))

let quantidade = Number(prompt("Escreva quantas maçãs voçe comprou: "))

let preço = maça * quantidade

if (quantidade >= 6){
    console.log(`Voce ira pagar um total de: ${preço} R$`)
} else ( console.log(`Voce ira pagar um total de; ${preço} R$`))





