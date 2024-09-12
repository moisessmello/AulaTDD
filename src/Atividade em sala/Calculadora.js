class Calculadora {
    #resultado;

    constructor() {
        this.#resultado = 0;
    }

    get resultado() {
        return this.#resultado;
    }

    set resultado(numero) {
        if (typeof numero === 'string') {
            numero = numero - 0;
        }
        if (isNaN(numero) || typeof numero !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.#resultado = numero;
    }

    soma(valor) {
        this.resultado = this.resultado + this.#validarNumero(valor);
    }

    subtracao(valor) {
        this.resultado = this.resultado - this.#validarNumero(valor);
    }

    multiplicacao(valor) {
        this.resultado = this.resultado * this.#validarNumero(valor);
    }

    divisao(valor) {
        const numero = this.#validarNumero(valor);
        if (numero === 0) {
            throw new Error("Divisão ilegal por zero");
        }
        this.resultado = this.resultado / numero;
    }

    inversao() {
        this.resultado = -this.resultado;
    }

    #validarNumero(valor) {
        if (typeof valor === 'string') {
            valor = valor - 0;
        }
        if (isNaN(valor) || typeof valor !== 'number') {
            throw new TypeError("O argumento deve ser um número válido");
        }
        return valor;
    }
}

module.exports = Calculadora;