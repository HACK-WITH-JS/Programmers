function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i <= right; i++) {
        answer += dividCount(i) % 2 === 0 ? i : -i;
    }
    
    return answer;
}

function dividCount(number) {
    let ret = 0;
    for(let i = 1; i <= number; i++) {
        if(number % i === 0) {
            ret++;
        }
    }
    return ret;
}