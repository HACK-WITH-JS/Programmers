// 사과의 점수는 [1 ~ k]
// 사과 상자의 가격: 가장 낮은 사과의 점수 * 개수
// 사과는 상자 단위로 판매하며 남는 사과는 버린다.
// 가장 비싼 사과 부터 담는다.
function solution(k, m, score) {
    let answer = 0;
    const boxCount = Math.floor(score.length / m);

    score.sort((a, b) => b - a);
    
    for(let i = 0; i < boxCount; i++) {
        let temp = score[i * m + m - 1];
        answer += temp * m;
    }
    
    return answer;
}