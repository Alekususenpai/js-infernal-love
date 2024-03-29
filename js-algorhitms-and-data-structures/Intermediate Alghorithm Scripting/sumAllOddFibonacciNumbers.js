/**Sum All Odd Fibonacci Numbers
 * 
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

 */

function sumFibs(num) {
  const fibonacciArr = [0, 1];
  if (num > 0) {
    for (let i = 0; i <= num; i++) {
      let newNum = fibonacciArr[i] + fibonacciArr[i + 1];
      if (newNum <= num) {
        fibonacciArr.push(newNum);
      }
    }
  }
  const filteredArr = fibonacciArr.filter((el) => el % 2);

  return filteredArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sumFibs(75025));
