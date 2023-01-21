export function formatPrice(price: number) {
  return price.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}
