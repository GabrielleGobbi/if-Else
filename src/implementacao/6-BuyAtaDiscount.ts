export function BuyAtaDiscount(valorOriginal: number, formaDePagamento: string): number {
    let desconto = 0;

    if (formaDePagamento.toLowerCase() === "debito") {
        desconto = 0.05;
    } else if (formaDePagamento.toLowerCase() === "credito") {
        desconto = 0.03;
    } else if (
        formaDePagamento.toLowerCase() === "pix" ||
        formaDePagamento.toLowerCase() === "dinheiro"
    ) {
        desconto = 0.1;
    } else {
        const valorEmReais = valorOriginal / 100;
        return valorEmReais;
    }

    const valorFinal = valorOriginal * (1 - desconto);
    const valorEmReais = valorFinal / 100;
    
    return valorEmReais;
}