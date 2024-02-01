function solution(s, skip, index) {
    var answer = '';
    
    for(let i = 0; i < s.length; i++) {
        answer += String.fromCharCode(hash(index, s[i], skip));
    }
    
    return answer;
}

function hash(index, char, skip) {
    const zCharCode = "z".charCodeAt();
    const skipCodes = [];
    let code = char.charCodeAt();
    
    for(let i = 0; i < skip.length; i++) {
        skipCodes.push(skip[i].charCodeAt());
    }
    
    for(let i = 0; i < index; i++) {
        code++;
        
        if(code > zCharCode) {
            code -= 26;
        }
        
        while(skipCodes.indexOf(code) > -1) {
            code++;
            
            if(code > zCharCode) {
                code -= 26;
            }
        }
        
    }
    
    return code;
}