function isSumPossibleZ(numbers, expectedSum, numbersToSum, sum = 0) {
  invocation++;
  if (sum == expectedSum && numbersToSum == 0) return 1;
  if (numbersToSum == 0) return 0;
  if (numbers.length == 0)  return 0;
  const number = numbers[0];
  const newNumbers = numbers.slice(1);
  // with Number
  const withNumber = isSumPossibleZ(newNumbers, expectedSum, numbersToSum - 1, sum + number);
  // withOut Number
  const withoutNumber = isSumPossibleZ(newNumbers, expectedSum, numbersToSum , sum);
  return withNumber || withoutNumber;
}
let invocation = 0;
function isSumPossibleZMemo(numbers, expectedSum, numbersToSum, sum = 0, memo = {}) {
  invocation++;
  if (sum == expectedSum && numbersToSum == 0) return 1;
  if (numbersToSum == 0) return 0;
  if (numbers.length == 0)  return 0;
  const number = numbers[0];
  const newNumbers = numbers.slice(1);
  if (memo.hasOwnProperty(number)) {
    return memo[number];
  } 
  // with Number
  const withNumber = isSumPossibleZMemo(newNumbers, expectedSum, numbersToSum - 1, sum + number,memo);
  memo[number] = withNumber;
  // withOut Number
  const withoutNumber = isSumPossibleZMemo(newNumbers, expectedSum, numbersToSum , sum, memo);
  return withNumber || withoutNumber;
}

function isSumPossibleZ2(numbers, expectedSum, numbersToSum) {
  const possibleSums = [{sum: 0, ns: 0}];
  for(var i=0; i< numbers.length; i++) {
    const copyPS = [...possibleSums];
    for(var j=0; j< copyPS.length; j++) {
      const sum = possibleSums[j].sum + numbers[i];
      const ns = possibleSums[j].ns + 1;
      if (sum == expectedSum && ns == numbersToSum) return 1;
      possibleSums.push({ sum, ns });
    }
  }
  return 0;
}

invocation =0
console.log(isSumPossibleZMemo([40,55,60,62,18,11,21,28,31,38,40,55,60,62], 50, 3) == 1, invocation);
invocation =0
console.log(isSumPossibleZMemo([18,11,21,28,31,38,40,55,60,62], 10, 2) == 0 ,invocation)
invocation =0
console.log(isSumPossibleZMemo([3, 1, 1, 1], 3, 3) == 1, invocation)
invocation =0
console.log(isSumPossibleZMemo([3, 1, 1, 1], 3, 0) == 0, invocation)
invocation =0
console.log(isSumPossibleZMemo([1,2,3,4,5,6], 3, 0) == 0, invocation)