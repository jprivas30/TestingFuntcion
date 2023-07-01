import { expect } from "chai";
import { sumar, obtenerMaximoValor, filtarNumerosPares, multiplicarPorDos, convertirAString} from "../index.js";

describe("Testiando el archivo de funciones", () => {
  describe("Funcion Sumar", function () {
    it("Deberia sumar dos numeros correctamente", function () {
      let suma = sumar(3, 2);
      expect(suma).to.equal(5);
    });

    it("Deberia manejar numeros negativos", () => {
      let suma = sumar(-1, 2);
      expect(suma).to.equal(1);
    });

    it("Deberia manejar que envie solo numero 0", () => {
      let suma = sumar(0, 0);
      expect(suma).to.equal(0);
    });

    it("Deberia poder devolver NaN si enviamos un string", () => {
      let suma = sumar("hola", 2);
      expect(suma).to.be.a("string");
    });

    it("Deberia poder devolver NaN sin argumentos", () => {
      let suma = sumar();
      expect(suma).to.be.NaN;
    });
  });

  describe("Funcion que me retorna el Maximo de un array", () => {
    it("Deberia devolverme el valor maximo de un array de numeros", () => {
      const array = [2, 3, 4, 5, 6, 7, 8];
      const resultado = obtenerMaximoValor(array);
      expect(resultado).to.equal(8);
    });
    it("Deberia poder manejar un array vacio y retorname -Infinity", () => {
      const array = [];
      const resultado = obtenerMaximoValor(array);
      expect(resultado).to.equal(-Infinity);
    });
    it("Deberia poder manejar numeros negativos", () => {
      const array = [-2, -10, -11, -15, -16, -3];
      const resultado = obtenerMaximoValor(array);
      expect(resultado).to.equal(-2);
    });
  });

  describe('Funcion que filtra los numeros pares',()=>{
    it("Deberia filtrar y retorname un array con los numeros pares",()=>{
        let arr = [1,2,3,4,5,6,7,8]
        const resultado = filtarNumerosPares(arr)
        expect(resultado).to.deep.equal([2,4,6,8])
    })

    it("Deberia retornar un array vacio si no hay numeros pares",()=>{
        let arr = [1,3,5,7]
        const resultado = filtarNumerosPares(arr)
        expect(resultado).to.be.a("array").that.is.empty
    })

    it("Deberia retornar un array vacio si envio un array vacio",()=>{
        let arr = []
        const resultado = filtarNumerosPares(arr)
        expect(resultado).to.be.a("array").that.is.empty
    })
  })
});

describe("Testeando el archivo de funciones del gimnasio", () => {
  describe("Función multiplicarPorDos", function () {
    it("Debería multiplicar todos los elementos por dos", function () {
      let array = [5, 4, 8, 3, 9];
      let multiplicacion = multiplicarPorDos(array);
      expect(multiplicacion).to.deep.equal([10, 8, 16, 6, 18]);
    });
    it("Debería devolver un array vacío si se le pasa un array vacio", function () {
      let array = [];
      let multiplicacion = multiplicarPorDos(array);
      expect(multiplicacion).to.deep.equal([]);
    });
  });

  describe("Función convertirAString", function () {
    it("Debería devolver un nuevo array con los valores de la propiedad nombre", function () {
      let array = [
        { nombre: "Juan", edad: 28 },
        { nombre: "Jhosiany", edad: 28 },
        { nombre: "Jhoanna", edad: 53 },
      ];
      let nombres = convertirAString(array);
      expect(nombres).to.deep.equal(["Juan", "Jhosiany", "Jhoanna"]);
    });
    it("Debería devolver un array vacío si se le pasa un array vacio", function () {
      let array = [];
      let nombres = convertirAString(array);
      expect(nombres).to.deep.equal([]);
    });
  });
});
