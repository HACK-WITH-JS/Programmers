function solution(arr) {
    const minValue = Math.min(...arr);
    const answer = arr.filter(x => x !== minValue);
    return answer.length === 0 ? [-1] : answer;
}