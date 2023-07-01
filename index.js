export const sumar = (n1, n2) => {
  return n1 + n2;
};

export const obtenerMaximoValor = (arr) => {
  return Math.max(...arr);
};

export const filtarNumerosPares = (arr) => {
  return arr.filter((item) => item % 2 === 0);
};

export const multiplicarPorDos = (arr) => {
  return arr.map(item => item * 2);
};

export const convertirAString = (arr) => {
  return arr.map(objeto => objeto.nombre);
};
