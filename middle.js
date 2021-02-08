const middle = function(arr) {
  const midArrNum = [];
  //Logic if the array is empty or has only one element
  if (arr.length <= 1) {
    return [];
  }
  //Logic if the array's length is odd.
  if (arr.length % 2 !== 0) {
    midArrNum.push(arr[Math.floor((arr.length / 2))]);
    return midArrNum;
  //Logic if the array's length is even
  } else {
    const num1 = arr[(arr.length / 2) - 1];
    const num2 = arr[(arr.length / 2)];
    midArrNum.push(num1, num2);
    return midArrNum;
  }
};

module.exports = middle;


