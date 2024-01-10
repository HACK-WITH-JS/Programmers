function solution(n) {
    let i = 1;
    let check = false;
    
    while(i * i <= n) {
        if(i * i === n) {
            check = true;
            break;
        } else {
            i++;
        }
    }
    
    return check ? (i + 1) * (i + 1) : -1;
}