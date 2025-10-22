// exportação padrão - default exports

function divisao(num1, num2) {
    return num1 / num2;
}

function multiplicacao (num1, num2) {
    return num1 * num2;
}

const complexos = {
    divisao,
    multiplicacao
};

export default complexos;