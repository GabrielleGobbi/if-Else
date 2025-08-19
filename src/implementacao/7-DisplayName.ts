export function DisplayName(primeiroNome: string, sobrenome: string, apelido: string): string {
    if (apelido) {
        return `${primeiroNome} "${apelido}" ${sobrenome}`;
    }
    return `${primeiroNome} ${sobrenome}`;
}