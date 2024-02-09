// n이 10000제한인 상태에서.. 연속된 자연수의 합으로 n을 표현하는 방법의 수..
function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= n; i++) {
        let sum = 0;
        for(let j = i; j <= n; j++) {
            sum += j;
            
            if(sum === n) {
                answer++;
            } else if(sum > n) {
                break;
            }
        }
    }
    
    return answer;
}