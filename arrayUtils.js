const biggest = (tab) => {
  return Math.max(...tab)
}
console.log(biggest([99, 100, 101, 1]))


const sortAscend = (nbr) => {
  return nbr.sort((a, b) => a - b)
}

console.log(sortAscend([99, 100, 101, 1]))

const makeUnique = (listNbr) => {
  const Mu = new Set(listNbr)
  return [...Mu]
}

console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))