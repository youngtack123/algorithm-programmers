/**
 * Set, Map 객체를 이용한 풀이
 * 중복값을 허용하지 않는 Set에 topping배열의 원소를 하나씩 삽입하고, Map에서는 지워나가면서, 두개의 객체의 길이가 같은지 비교
 */
function solution(topping) {
  if (topping.length === 1) return 0;

  let answer = 0;
  const leftSet = new Set();
  const rightMap = new Map();

  for (let el of topping) {
    rightMap.set(el, (rightMap.get(el) || 0) + 1);
  }

  for (let i = 0; i < topping.length; i++) {
    const el = topping[i];

    leftSet.add(el);
    rightMap.set(el, rightMap.get(el) - 1);

    if (rightMap.get(el) === 0) {
      rightMap.delete(el);
    }

    if (leftSet.size === rightMap.size) answer++;
  }

  return answer;
}
