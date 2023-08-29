/**
 * 2중 반복문과 조건문을 이용한 풀이
 * 물(숫자 0)을 기준으로 칼로리가 적은 순서대로 공평하게 음식을 배치
 * 핵심1: 홀수일 경우 해당 숫자를 2로 나누고 내림한만큼 해당 숫자를 answer 문자열과 합친다.
 * 핵심2: 짝수일 경우 해당 숫자를 2로 나눈만큼 해당 숫자를 answer 문자열과 합친다.
 * 핵심3: 반복문으로 만들어진 문자열을 거꾸로 뒤집고, 기존 문자열 + 숫자0 + 뒤집어진 기존 문자열 통해서 정답을 도출
 */
function solution(food) {
  let answer = "";

  for (let i = 1; i < food.length; i++) {
    // 홀수 경우 - 핵심1
    if (food[i] % 2 === 1) {
      const odd = Math.floor(food[i] / 2);
      for (let j = 0; j < odd; j++) {
        answer = answer + i;
      }
    }
    // 짝수 경우 - 핵심2
    else {
      const even = food[i] / 2;
      for (let j = 0; j < even; j++) {
        answer = answer + i;
      }
    }
  }
  let otherHalf = answer.split("").reverse().join(""); // 핵심3
  answer = answer.concat("0").concat(otherHalf);

  return answer;
}
