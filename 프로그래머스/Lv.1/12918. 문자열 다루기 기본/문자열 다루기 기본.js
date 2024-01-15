function solution(s) {
    if(s.length !== 4 && s.length !== 6) {
        return false;
    }
    
    return checkDigit(s);
}

function checkDigit(s) {
    let ret = true;
    
    for(let i = 0; i < s.length; i++) {
        if(isNaN(s[i])) {
            return false;
        }
    }
    
    return true;
}