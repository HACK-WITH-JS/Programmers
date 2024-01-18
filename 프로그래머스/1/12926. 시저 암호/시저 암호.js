// fromCharCode
// charCodeAt
// 알파벳 개수 26개
function solution(s, n) {
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        answer += change(s[i], n);
    }
    
    return answer;
}

function change(c, n) {
    if(c === ' ') {
        return ' ';
    }
    
    const aCharCode = 'a'.charCodeAt(0);
    const zCharCode =  'z'.charCodeAt(0);
    const ACharCode = 'A'.charCodeAt(0);
    const ZCharCode = 'Z'.charCodeAt(0);
    
    let temp = String.fromCharCode(c.charCodeAt(0) + n);
    
    // 소문자인 경우
    if(c.charCodeAt(0) >= aCharCode && c.charCodeAt(0) <= zCharCode) {
        if(temp.charCodeAt(0) > zCharCode) {
            temp = String.fromCharCode(temp.charCodeAt(0) - 26);
        }
    }
    
    // 대문자인 경우
    if(c.charCodeAt(0) >= ACharCode && c.charCodeAt(0) <= ZCharCode) {
        if(temp.charCodeAt(0) > ZCharCode) {
            temp = String.fromCharCode(temp.charCodeAt(0) - 26);
        }
    }
    
    return temp;
}