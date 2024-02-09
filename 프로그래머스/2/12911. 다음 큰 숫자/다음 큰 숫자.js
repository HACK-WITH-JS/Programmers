// N의 다음 큰 숫자는 n보다 큰 자연수이다.
// N의 다음 큰 숫자와 N은 2진수로 변환했을 대 1의 개수가 동일하다.
// n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수이다.
function solution(n) {
    let answer = n + 1;
    const oneCount = n.toString(2).split('').filter(x => x === '1').length;
    
    while(true) {
        let tempCount = answer.toString(2).split('').filter(x => x === '1').length;
        
        if(tempCount === oneCount) {
            break;
        }
        
        answer++;
    }
    
    return answer;
}