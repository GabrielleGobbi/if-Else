import { TaxExemption } from '../src/implementacao/4-TaxExemption';

describe('Exercício 04 - Isenção de Impostos', () => {
  test('deve ser ISENTA quando aposentada', () => {
    expect(TaxExemption(true, false, 5000000)).toBe("ISENTA");
  });

  test('deve ser ISENTA quando portadora de doença grave', () => {
    expect(TaxExemption(false, true, 4000000)).toBe("ISENTA");
  });

  test('deve ser VAZA LEAO quando rendimentos forem menores ou iguais a 28.559,70', () => {
    expect(TaxExemption(false, false, 2000000))
      .toBe("VAZA LEAO! JA TA DIFICIL SEM VOCE");
  });

  test('deve ser PEGA LEAO quando rendimentos forem maiores que 28.559,70 e sem isenções', () => {
    expect(TaxExemption(false, false, 3000000)).toBe("PEGA LEAO");
  });
});
