// 길이가 n인 벽 벽에 페인트를 덧칠함. 일부만 덧칠할 거임
// 각 벽은 길이가 1인 구역 n개로 나뉠거임
// 롤러의 길이는 m미터 
// 롤러는 벽을 벗어나서는 안되고 구역을 전부 칠할거임
// 한 구역에 페인트를 여러번 칠해도 됨 안칠해도 되는 구간에 칠해도 되지만 정한 구역은 무조건 칠해야 함
// 하지만 롤러로 페인트 칠은 최소로 할거임
function solution(n, m, section) {
    if(n === 1) return 1;
    let answer = 0;
    let start = section.shift();
    
    while(section.length > 0) {
        let temp = section.shift()
        
        if(section.length === 0) {
            if(temp - start + 1 > m) {
                answer += 2;
            } else {
                answer++;
            }
            break;
        }
        
        if(temp - start + 1 > m) {
            start = temp;
            answer++;
        }
    }
    
    
    return answer;
}