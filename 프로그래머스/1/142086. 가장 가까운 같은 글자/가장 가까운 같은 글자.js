function solution(s) {
    const map = {};
    let answer = [];
    
    for(let i = 0; i < s.length; i++) {
        // 문자가 처음 나온 경우
        if(map[s[i]] === undefined) {
            answer.push(-1);
            map[s[i]] = i;
            continue;
        }
        
        // 문자가 나온 적 있는 경우
        answer.push(i - map[s[i]]);
        map[s[i]] = i;
    }
    
    return answer;
}