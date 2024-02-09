function solution(s) {
    let answer = [0, 0];
    
    while(s !== '1') {
        let zeroCount = s.split('').filter(x => x === '0').length;
        let oneCount = s.split('').filter(x => x === '1').length;
        answer[0]++;
        answer[1] += zeroCount;
        s = Number(oneCount).toString(2);
    }
    
    return answer;
}