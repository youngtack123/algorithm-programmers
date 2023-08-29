/**
 * 반복문과 조건문을 활용한 풀이
 * 핵심1: 값이 이미 있는 경우 가장 가까운 위치를 찾아야하므로 배열을 뒤에서부터 검색, lastIndexOf를 활용
 * 핵심2: tmp의 길이에서 중복된 가장 가까운 위치의 문자열의 index의 차이를 answer배열에 넣어준다
 */
function solution(s) {
  let answer = [];
  let tmp = [];

  for (let i = 0; i < s.length; i++) {
    // s의 첫번째 문자열은 항상 -1 이다.
    if (i === 0) {
      answer.push(-1);
      tmp.push(s[i]);
    } else {
      // 해당 값이 이미 있는 경우(중복된 문자열이 있는 경우)
      if (tmp.includes(s[i])) {
        const targetIndex = tmp.lastIndexOf(s[i]); // 핵심1
        answer.push(tmp.length - targetIndex); // 핵심2
        tmp.push(s[i]);
      }
      // 없는 경우(즉, 문자열이 중복되지않고 처음인 경우)
      else {
        answer.push(-1);
        tmp.push(s[i]);
      }
    }
  }
  return answer;
}
