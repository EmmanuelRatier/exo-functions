const count = (min, max, step) => {
  for (let i = min; i <= max; i += step) {
    console.log(i)
  }
}
count(10, 100, 10)