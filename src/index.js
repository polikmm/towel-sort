
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let arr = [];
  if(!matrix || !matrix.length) return arr
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0 || i == 0) arr = arr.concat(matrix[i])
    if (i % 2 !== 0 || i == 1) arr = arr.concat(matrix[i].reverse())
  }
  return arr
}
