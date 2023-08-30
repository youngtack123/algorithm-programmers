/**
 * 반복문을 통한 풀이
 * 핵심1: currentAmount -> 현재 가지고 있는 콜라 수(마트에서 추가로 받은 콜라 포함)
 * 핵심2: cokeEarned -> 마트에서 받은 콜라
 */
function solution(a, b, n) {
  let answer = 0;

  while (a <= n) {
    let currentAmount = Math.floor(n / a) * b + (n % a); // 핵심1
    let cokeEarned = Math.floor(n / a) * b; // 핵심2
    n = currentAmount;
    answer += cokeEarned;
  }

  return answer;
}
