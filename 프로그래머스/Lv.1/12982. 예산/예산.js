function solution(d, budget) {
    let answer = 0;
    let temp = budget;
    d.sort((a, b) => a - b);;
    
    for(let i = 0; i < d.length; i++) {
        if(temp - d[i] >= 0) {
            answer++;
            temp -= d[i];
        }
        console.log(`${i+1}번째 부서의 지원 금액: ${d[i]}, 지원 후 남은 금액:${temp}, 현재 지원 된 부서의 수:${answer}`);
    }
    
    return answer;
}