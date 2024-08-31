//Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//controle if-else.

const prompt = require('prompt-sync')()

let idade = Number(prompt("Informe sua idade: "))

if (idade >= 0 && idade <= 12){
    console.log("Voce e uma Crinça")
} else if ( idade >= 13 && idade <= 17 ){
    console.log("Voce e um adolecente")
}else if ( idade >= 18 && idade <= 60 ){
    console.log("Voce e um adulto")
}else if ( idade >= 61)
    console.log("Voce e um idoso")
