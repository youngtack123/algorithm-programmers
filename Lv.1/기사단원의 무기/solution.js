/**
 *
 * @param {number} number
 * @param {number} limit
 * @param {number} power
 * @returns 무기점의 주인이 무기를 모두 만들기 위해 필요한 철의 무게
 */
function solution(number, limit, power) {
  let numberArr = [];
  for (let i = 1; i <= number; i++) {
    numberArr.push(i);
  }

  const divisorCountArr = numberArr.map((num) => getDivisorCount(num));

  let answer = 0;

  for (let i = 0; i < divisorCountArr.length; i++) {
    if (divisorCountArr[i] > limit) {
      divisorCountArr[i] = power;
    }
    answer += divisorCountArr[i];
  }
  return answer;
}

function getDivisorCount(num) {
  let count = 0;

  for (let j = 0; j < num + 1; j++) {
    if (num % j === 0) {
      count++;
    }
  }
  return count;
}
