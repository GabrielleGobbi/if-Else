import { NamingTheStones } from '../src/implementacao/3-NamingTheStones';

describe('ordenarAscendente', () => {
  test('deve ordenar 3, 1, 2 em ordem crescente', () => {
    expect(NamingTheStones(3, 1, 2)).toBe("1, 2, 3");
  });

  test('deve manter números iguais na mesma ordem', () => {
    expect(NamingTheStones(7, 7, 7)).toBe("7, 7, 7");
  });

  test('deve ordenar números já em ordem crescente', () => {
    expect(NamingTheStones(1, 2, 3)).toBe("1, 2, 3");
  });

  test('deve ordenar números em ordem decrescente', () => {
    expect(NamingTheStones(9, 5, 1)).toBe("1, 5, 9");
  });
});
