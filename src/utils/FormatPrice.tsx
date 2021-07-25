

export const formatPrice = (number: number) => {
  let newNumber = Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number / 100);
  return newNumber
}