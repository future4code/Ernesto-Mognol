import ex1 from "./ex1";
import ex2 from "./ex2";
import ex3 from "./ex3";
import ex4 from "./ex4";
import ex5 from "./ex5";
import ex6 from "./ex6";
import ex7 from "./ex7";
import ex8 from "./ex8";

test("Recebe um número e retorna um anterior a ele", () => {
  expect(ex1(100)).toBe(99);
  expect(ex1(99)).toBe(98);
  expect(ex1(1)).toBe(0);
  expect(ex1(0)).toBe(-1);
  expect(ex1(-100)).toBe(-101);
});

test("Recebe idade em anos, meses e dias e retorna em dias", () => {
  expect(ex2(0, 0, 1)).toBe(1);
  expect(ex2(0, 1, 0)).toBe(30);
  expect(ex2(0, 1, 1)).toBe(31);
  expect(ex2(1, 0, 1)).toBe(366);
});

test("Recebe um número e retorna true caso seja maior que 10", () => {
  expect(ex3(11)).toBe(true);
  expect(ex3(10)).toBe(false);
  expect(ex3(9)).toBe(false);
  expect(ex3(40)).toBe(true);
  expect(ex3(-50)).toBe(false);
});

test("Recebe número de maças compradas e dá desconto a partir da dúzia", () => {
  expect(ex4(12)).toBe(12);
  expect(ex4(10)).toBe(13);
  expect(ex4(14)).toBe(14);
});

test("Recebe ano atual e ano nascimento e determina se pode votar", () => {
  expect(ex5(16, 0)).toBe(true);
  expect(ex5(15, 0)).toBe(false);
  expect(ex5(2020, 2000)).toBe(true);
  expect(ex5(2021, 2005)).toBe(true);
  expect(ex5(2021, 2010)).toBe(false);
});

test("Recebe três valores e determina se é um triângulo", () => {
  expect(ex6(0, 0, 0)).toBe(false);
  expect(ex6(1, 2, 3)).toBe(false);
});

test("Verifica se é possível se aposentar", () => {
  expect(ex7(1950, 1960)).toBe(true);
  expect(ex7(1950, 1970)).toBe(true);
});

test("Recebe um número e retorna um anterior a ele", () => {
  expect(ex8(100)).toBe(99);
  expect(ex8(99)).toBe(98);
  expect(ex8(1)).toBe(0);
  expect(ex8(0)).toBe(-1);
  expect(ex8(-100)).toBe(-101);
});
