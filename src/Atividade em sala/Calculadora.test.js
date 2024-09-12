const Calculadora = require('./Calculadora');

describe("Operações básicas da Calculadora", () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    it("Método soma - Deve somar corretamente um valor numérico", () => {
        expect(calculadora.soma).toBeDefined();  
        expect(calculadora.soma.length).toBe(1);  
        
        calculadora.soma(5);  
        expect(calculadora.resultado).toBe(5);

        calculadora.soma("3");  
        expect(calculadora.resultado).toBe(8);

        expect(() => calculadora.soma("Texto")).toThrow("O argumento deve ser um número válido");
    });

    it("Método subtração - Deve subtrair corretamente um valor numérico", () => {
        expect(calculadora.subtracao).toBeDefined();
        expect(calculadora.subtracao.length).toBe(1);

        calculadora.subtracao(5);
        expect(calculadora.resultado).toBe(-5);

        calculadora.subtracao("2");
        expect(calculadora.resultado).toBe(-7);

        expect(() => calculadora.subtracao("Texto")).toThrow("O argumento deve ser um número válido");
    });

    it("Método multiplicação - Deve multiplicar corretamente por um valor numérico", () => {
        expect(calculadora.multiplicacao).toBeDefined();
        expect(calculadora.multiplicacao.length).toBe(1);

        calculadora.resultado = 5;  
        calculadora.multiplicacao(2);
        expect(calculadora.resultado).toBe(10);

        calculadora.multiplicacao("3");
        expect(calculadora.resultado).toBe(30);

        expect(() => calculadora.multiplicacao("Texto")).toThrow("O argumento deve ser um número válido");
    });

    it("Método divisão - Deve dividir corretamente por um valor numérico", () => {
        expect(calculadora.divisao).toBeDefined();
        expect(calculadora.divisao.length).toBe(1);

        calculadora.resultado = 10;
        calculadora.divisao(2);
        expect(calculadora.resultado).toBe(5);

        calculadora.divisao("5");
        expect(calculadora.resultado).toBe(1);

        expect(() => calculadora.divisao(0)).toThrow("Divisão ilegal por zero");
        expect(() => calculadora.divisao("0")).toThrow("Divisão ilegal por zero");

        expect(() => calculadora.divisao("Texto")).toThrow("O argumento deve ser um número válido");
    });

    it("Método inversão - Deve inverter o sinal do resultado", () => {
        expect(calculadora.inversao).toBeDefined();
        expect(calculadora.inversao.length).toBe(0);  

        calculadora.resultado = 5;
        calculadora.inversao();
        expect(calculadora.resultado).toBe(-5);

        calculadora.inversao();
        expect(calculadora.resultado).toBe(5);
    });
});