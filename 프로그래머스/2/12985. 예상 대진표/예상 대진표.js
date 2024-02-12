function solution(n,a,b) {
    let answer = 1;
    
    if(Math.abs(a - b) === 1 && Math.abs(Math.floor(a / 2) - Math.floor(b / 2))) {
        return answer;
    }
    
    while(true) {
        a = nextNumber(a);
        b = nextNumber(b);
        answer++;
        
        if(Math.abs(a - b) === 1 && Math.abs(Math.floor(a / 2) - Math.floor(b / 2))) {
            return answer;
        }
        
    }

    return answer;
}

function nextNumber(n) {
    if(n % 2 === 0) {
        return n / 2;
    } else {
        return Math.floor(n / 2) + 1;
    }
}