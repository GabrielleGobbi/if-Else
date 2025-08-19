export function TaxExemption(
  aposentada: boolean,
  portadoraDeDoenca: boolean,
  totalDeRendimentos: number
): string {
  if (aposentada && portadoraDeDoenca) {
    return "ISENTA";
  }

  if (totalDeRendimentos <= 3036) {
    return "ISENTA";
  }

  if (totalDeRendimentos <= 33888) {
    return "ISENTA";
  }

  return "PEGA LEAO";
}
