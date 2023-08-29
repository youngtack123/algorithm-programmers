/**
 * 반복문을 활용한 풀이
 * t배열에서 p의 길이만큼 만들 수 있는 문자열을 자르고, p보다 작거나 같은지 검증.
 */
function solution(t, p) {
  let answer = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let tmp = t.substr(i, p.length);

    if (tmp <= p) answer++;
  }
  return answer;
}
