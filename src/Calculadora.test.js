
class Calculadora {
    #resultado;

    constructor() {
        this.#resultado = 0;
    }
    get resultado() {
        return this.#resultado;
    }

    set resultado(numero) {
        if (typeof numero == 'string') {
            numero = numero-0;
        }
        if (isNaN(numero)) {
            throw new TypeError("O argumento deve ser um número válido");
        }
        this.#resultado = numero;
    }
}

describe("calculadora", () => {

    it("Criar nova calculadora", () => {
        const calculadora = new Calculadora();
        expect(calculadora).toBeDefined();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe("number")
        expect(calculadora.resultado).toBe(0);
    });

    it("obtém resultado", () => {
        const calculadora = new Calculadora();
        //expect(calculadora).toBeDefined();
        expect(calculadora.resultado).toBeDefined();
        expect(typeof calculadora.resultado).toBe('number')

    })

    it('Atribui um novo valor à calculadora', () => {
        const calculadora = new Calculadora();
        expect(() => calculadora.resultado = "Texto").toThrow(TypeError);
        expect(() => calculadora.resultado = "Texto")
            .toThrow("O argumento deve ser um número válido");
        expect(calculadora.resultado).toBe(0);
        expect(() => calculadora.resultado = "0").not.toThrow(TypeError);
        expect(calculadora.resultado).toBe(0);

    })
})