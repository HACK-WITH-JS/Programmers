function solution(s) {
    let answer = 0;
    
    while(s.length > 0) {
        let temp = [0, 0];
        const start = s[0];
        temp[0] = 1;
        let cursor = 1;
        
        while(cursor < s.length && temp[0] !== temp[1]) {
            if(s[cursor] === start) {
                temp[0]++;
            } else {
                temp[1]++;
            }
            
            // console.log(`첫 문자의 개수 ${temp[0]}, 첫 문자가 아닌 문자의 개수${temp[1]}`);
            cursor++;
        }
        s = s.substring(cursor);
        answer++;
        // console.log(`다음 문자열: ${s}`);
    }
    
    
    return answer;
}