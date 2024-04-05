const display = document.getElementById("display");

function adicionaraodisplay(input) {
    display.value += input;
}

function limpar() {
    display.value = "";
}

function calcularExpressao(expressao) {
    const validacao = /^[\d.()*/+\-]*$/;
    if (!validacao.test(expressao)) {
        throw new Error('Expressão inválida');
    }
    
    try {
        const resultado = Function(`'use strict'; return (${expressao})`)();
        return Number(resultado.toFixed(2));
    } catch (error) {
        throw new Error('Erro ao calcular');
    }
}

function calcular() {
    try {
        const resultado = calcularExpressao(display.value);
        display.value = resultado;
    } catch (error) {
        display.value = error.message;
    }
}
