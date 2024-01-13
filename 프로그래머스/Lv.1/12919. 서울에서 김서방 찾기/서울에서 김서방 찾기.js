function solution(seoul) {
    let ans = 0;
    
    for(let i = 0; i < seoul.length; i++) {
        if(seoul[i] === 'Kim') {
            ans = i;
            break;
        }
    }
    
    return `김서방은 ${ans}에 있다`;
}