function solution(s) {
    var answer = 0;
    const len = s.length
    for(let i = 0; i < len; i++) {
        // console.log(s);
        
        if(check(s)) answer++;
        
        const temp = s[0];
        s[0] = '';
        s = s.substring(1) + temp;
    }
    
    return answer;
}

function check(s) {
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '{' || s[i] === '(' || s[i] === '[') {
            stack.push(s[i]);
            continue;
        }
        
        if(s[i] === '}') {
            if(stack[stack.length-1] === '{') {
                stack.pop();
            } else {
                return false;
            }
        } else if(s[i] === ')') {
            if(stack[stack.length-1] === '(') {
                stack.pop();
            } else {
                return false;
            }
        } else {
            if(stack[stack.length-1] === '[') {
                stack.pop();
            }else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}