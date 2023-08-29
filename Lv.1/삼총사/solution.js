/**
 * 3중 for문을 활용한 풀이
 * 배열에서 만들 수 있는 경우의 수, 3학생의 정수 번호의 합이 0일경우를 검증
 */
function solution(number) {
  let answer = 0;

  if (number.length < 3) return;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }
  return answer;
}
