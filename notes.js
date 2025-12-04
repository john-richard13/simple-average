//Vamos criar um script simples para analisar notas de alunos e determinar se eles passaram ou falharam com base em uma média mínima.

let nota1, nota2, nota3;

// Loop até o usuário digitar um número válido
do {
    let entrada = prompt("Digite a primeira nota:");

    if (entrada === null) {
        alert("Entrada cancelada.");
        break;
    }

    nota1 = parseFloat(entrada.replace(',', '.'));

    if (Number.isNaN(nota1)) {
        alert("Valor inválido! Digite apenas números.");
    }

} while (Number.isNaN(nota1));

do {
    let entrada = prompt("Digite a segunda nota:");

    if (entrada === null) {
        alert("Entrada cancelada.");
        break;
    }

    nota2 = parseFloat(entrada.replace(',', '.'));

    if (Number.isNaN(nota2)) {
        alert("Valor inválido! Digite apenas números.");
    }

} while (Number.isNaN(nota2));

do {
    let entrada = prompt("Digite a terceira nota:");

    if (entrada === null) {
        alert("Entrada cancelada.");
        break;
    }

    nota3 = parseFloat(entrada.replace(',', '.'));

    if (Number.isNaN(nota3)) {
        alert("Valor inválido! Digite apenas números.");
    }

} while (Number.isNaN(nota3));



//Calculando a média das notas
let media = (nota1 + nota2 + nota3) / 3;
console.log("A média das notas é: " + media.toFixed(2));
alert("A média das notas é: " + media.toFixed(2));

//Definindo a média mínima para aprovação
const mediaMinima = 6.0;

//Verificando se o aluno passou ou falhou
if (media >= mediaMinima) {
    console.log("Parabéns! Você passou.");
    alert("Parabéns! Você passou.");
} else {
    console.log("Infelizmente, você não passou.");
    alert("Infelizmente, você não passou.");
}

alert('Fim do programa.');
