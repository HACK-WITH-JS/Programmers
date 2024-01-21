function solution(a, b, n) {
    let answer = 0;
    
    // a개 이상의 콜라를 가지고 있다면 b개의 콜라를 받을 수 있음
    while(n >= a) {
        n -= a;
        n += b;
        answer += b;
    }
    
    return answer;
}