function solution(num) {
    if(num === 1) return 0;
    
    let cnt = 0;
    let val = num;
    
    while(val !== 1) {
        if(cnt > 500) {
            cnt = -1;
            break;
        }
        val = val % 2 === 0 ? val / 2 : val * 3 + 1;
        cnt++;
    }
    
    return cnt;
}