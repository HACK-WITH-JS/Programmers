function solution(t, p) {
    let answer = 0;
    const length = p.length;
    const numP = parseInt(p);
    
    for(let i = 0; i < t.length - length + 1; i++) {
        if(parseInt(t.substring(i, i + length)) <= numP) {
            answer++;
        }
    }
    
    
    return answer;
}