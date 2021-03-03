const isOdd = (nbr1) => {
  if (nbr1 % 2 === 0) {
    return false
  }
  else {
    return true
  }
}
console.log(isOdd(9))

const isEven = (nbr2) => {
  return !isOdd(nbr2)
}
console.log(isEven(10))
