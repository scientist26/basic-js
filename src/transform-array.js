module.exports = function transform(arr) {
  // console.log(JSON.stringify(arr))
  if (arr.length === 0) {
    return arr
  }

  if (!Array.isArray(arr) || typeof(arr) !== 'object') {
    throw new Error()
  }

  let transformArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
        i += 1;
    } else if (arr[i] === '--discard-prev') {
        if (transformArr.length > 0) {
          transformArr.pop();
        }
    } else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        transformArr.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i > 0) {
        transformArr.push(arr[i - 1]);
      }
    } else {
      transformArr.push(arr[i])
  }
  }
  return transformArr;
};
