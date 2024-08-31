//Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let nota = Number(prompt("Informe sua nota: "))

if (nota >= 0 && nota <= 5.9){
    console.log("Voçe esta Reprovado")
} else if ( nota >= 6 && nota <=6.9 ){
    console.log("Voçe esta de Recuperação")
} else if (nota >= 7)
    console.log("Voce esta Aprovado")


