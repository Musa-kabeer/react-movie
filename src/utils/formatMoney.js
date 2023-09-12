import { FormatMoney } from "format-money-js";

export function calculateMoney(money) {
  const fm = new FormatMoney({
    decimals: 2,
  });

  return fm.from(Number(money), { symbol: "$" });
}
