// 노란색과 갈색으로 색칠된 격자의 개수는 알고 있지만 전체 카펫의 크기는 모름.
// 카펫의 가로 세로 크기를 담아 리턴하셈
// 카펫의 가로 길이가 무조건 더 크다.
// 노란색 카펫이 무조건 기준이 될 수 밖에 없음.
// 갈색은 가로칸의 개수가 노란색의 2배 + 2 세로칸의 길이가 노란색 세로 길이 곱하기 2
function solution(brown, yellow) {
    const answer = [];
    
    for(let yHeight = 1; yHeight <= yellow; yHeight++) {
        if(yellow % yHeight !== 0) {
            continue;
        }
        
        let yWidth = yellow / yHeight;
        
        if(yWidth < yHeight) {
            break;
        }
        
        let brwonWidth = (yWidth + 2) * 2;
        let brwonHeight = yHeight * 2;
        
        if(brwonWidth + brwonHeight === brown) {
            answer[0] = yWidth + 2;
            answer[1] = yHeight + 2;
            break;
        }
    }
    
    return answer;
}