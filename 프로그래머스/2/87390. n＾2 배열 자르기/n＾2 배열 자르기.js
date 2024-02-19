// 2차원 배열을 만든다.
// i행 i열까지의 모든 빈칸 숫자를 i로 채운다.
// 1행 2행 n행을 잘라서 모두 이어붙인 새로운 1차원 배열을 만든다.
// 새로운 배열을 arr이라할때 arr[left] ~ arr[right] 까지가 내가 원하는 배열이다.
function solution(n, left, right) {
    var answer = [];
    
    for(let i = left; i <= right; i++) {
        const row = Math.floor(i / n) + 1;
        const col = i % n + 1;
        answer.push(Math.max(row, col));
    }
    
    return answer;
}