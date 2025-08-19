export function NamingTheStones(a: number, b: number, c: number): string {
  const numeros = [a, b, c];
  numeros.sort((x, y) => x - y);
  return numeros.join(", ");
}
