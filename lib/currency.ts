// Currency utility for Sri Lankan Rupees (LKR)
export const CURRENCY = {
  code: "LKR",
  symbol: "Rs.",
  name: "Sri Lankan Rupee",
}

// Format price in LKR
export function formatPrice(amount: number): string {
  return `${CURRENCY.symbol} ${amount.toLocaleString("en-LK")}`
}

// Convert USD to LKR (approximate rate - you can adjust this)
export const USD_TO_LKR_RATE = 320

export function convertToLKR(usdAmount: number): number {
  return Math.round(usdAmount * USD_TO_LKR_RATE)
}
