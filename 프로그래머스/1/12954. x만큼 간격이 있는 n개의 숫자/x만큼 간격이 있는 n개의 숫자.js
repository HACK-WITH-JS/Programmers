function solution(x, n) {
    const answer = [x];
    let temp = x + x;
    
    for(let i = 1; i <= n-1; i++) {
        answer.push(temp);
        temp += x;
    }
    
    return answer;
}