/**
 *
 * @param {number} k
 * @param {number} m
 * @param {number} score
 * @returns 과일 장수가 얻을 수 있는 최대 이익
 */
function solution(k, m, score) {
  let box = new Map();

  // score을 내림차순 정렬한다.
  const ordered = score.sort((a, b) => b - a);

  // m개 만큼 자른다.
  for (let i = 0; i < ordered.length; i += m) {
    if (ordered.length >= i + m) {
      let tmp = ordered.slice(i, i + m);

      // Key Point 1: Map의 키로 배열을 사용할 수 없기 때문에, JSON.stringify를 활용하여, 문자열로 만들어 키로 사용한다.
      let key = JSON.stringify(tmp);

      if (box.has(key)) {
        box.set(key, box.get(key) + 1);
      } else {
        box.set(key, 1);
      }
    }
  }

  let answer = 0;

  box.forEach((count, key) => {
    // Key Point 2: 키로 사용하려고 만든 문자열을 다시 배열로 변환한다.
    const originalArray = JSON.parse(key);

    answer += Math.min(...originalArray) * m * count;
  });

  return answer;
}
