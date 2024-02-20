// 발표한 논문 n편 중 h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 H의 값이 이 과학자의 최대 H -Index이다
function solution(citations) {
    var answer = 0;
    
    citations.sort((a, b) => b - a)
    
    for(let i = 0; i < citations.length; i++) {
        if(i >= citations[i]) {
            return i;
        }
    }
    
    return citations.length;
}