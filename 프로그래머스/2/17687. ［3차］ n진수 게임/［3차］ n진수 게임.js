function solution(n, t, m, p) {
    var answer = '';
    let maxLength = m * (t - 1) + p - 1;
    let str = makeStr(n, maxLength);
    
    let x = 1;
    
    while(answer.length < t) {
        const index = m * (x-1) + p-1;
        answer += str[index];
        x++;
    }
    
    return answer;
}

function makeStr(n, maxLength) {
    let ret = '';
    let i = 0;
    
    while(ret.length <= maxLength) {
        ret += i.toString(n).toUpperCase();
        i++;
    }
    
    return ret;
}