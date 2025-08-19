import { TaxExemption } from '../src/implementacao/4-TaxExemption';

describe('TaxExemption', () => {
  test('deve ser ISENTA quando renda mensal for menor ou igual a 3036', () => {
    expect(TaxExemption(false, false, 3000)).toBe("ISENTA");
  });

  test('deve ser ISENTA quando rendimentos anuais forem menores ou iguais a 33888', () => {
    expect(TaxExemption(false, false, 33000)).toBe("ISENTA");
  });

  test('deve ser ISENTA quando aposentada e com doença grave', () => {
    expect(TaxExemption(true, true, 50000)).toBe("ISENTA");
  });

  test('deve ser PEGA LEAO quando não se enquadra nas isenções', () => {
    expect(TaxExemption(false, false, 34000)).toBe("PEGA LEAO");
  });
});
