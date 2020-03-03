module.exports = function countCats(matrix) {

  let ears = "^^";
  let firstLevelArr = [].concat(...matrix);
  let count = 0;
  for (let cat of firstLevelArr) {
    if (cat === ears) {
      count++
    }
  }
  return count
};
