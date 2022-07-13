Array.prototype.uniq = function() {
  let result = [];

  for (let i = 0; i < this.length; i++) {
      if (!result.includes(this[i])) {
          result.push(this[i]);
      }
  }
  return result;
}

console.log([1,2,2,3,3,3].uniq());

Array.prototype.twoSum = function() {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        for (let j = 1; j < this.length; j++) {
            if (j > i && this[i] + this[j] === 0) {
                result.push([i, j]);
            }
        }
    }
    return result;
}

console.log([1,-1,0,3,6,-3].twoSum());


Array.prototype.transpose = function() {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        let temp = [];

        for (let j = 0; j < this.length; j ++) {
            temp.push(this[j][i]);
        }
        result.push(temp);
    }
    return result;
}

console.log(([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]).transpose());

