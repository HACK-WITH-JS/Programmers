// 출연한 가수의 점수가 지금까지의 출연자 점수 중 상위 k번째 이내이면 명예의 전당에 올라간다.
// 초기 k일 까지는 모든 출연 가수의 점수가 명예의 전당에 올라간다.
function solution(k, score) {
    const answer = [];
    const temp = [];
    
    if(score.length < k) {
        for(let i = 0; i < score.length; i++) {
            temp.push(score[i]);
             temp.sort((a, b) => a - b);
            answer.push(temp[0]);
        }
        return answer;
    }
    
    // 초기 k일까지 반복문을 돌린다.
    for(let i = 0; i < k; i++) {
        temp.push(score[i]);
        temp.sort((a, b) => a - b);
        answer.push(temp[0]);
    }
    
    // k일 이후 최소값 보다 높은 점수가 나온다면 0번째 값이랑 바꾼후 정렬한다.
    for(let i = k; i < score.length; i++) {
        if(temp[0] < score[i]) {
            temp[0] = score[i];
            temp.sort((a, b) => a - b);
            answer.push(temp[0]);
        } else {
            answer.push(temp[0]);            
        }

    }
    
    return answer;
}