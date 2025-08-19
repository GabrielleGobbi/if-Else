export function evenOrOdd(jogada1: number, jogada2: number): string {
  const soma = jogada1 + jogada2;
  return soma % 2 === 0 ? "par" : "ímpar";
}
