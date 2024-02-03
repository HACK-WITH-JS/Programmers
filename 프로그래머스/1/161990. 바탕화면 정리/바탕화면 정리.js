// (세로, 가로)
// 모든 파일을 돌면서 파일의 최소 세로 좌표 최대 세로 좌표 최소 가로 좌표 최대 가로 좌표를 찾아주면 되겠수다.
// [최소 세로 좌표, 최소 가로 좌표, 최대 세로 좌표, 최대 가로 좌표]
function solution(wallpaper) {
    let answer = [9999, 9999, 0, 0];
    
    const rowLen = wallpaper.length;
    const colLen = wallpaper[0].length;
    
    for(let i = 0; i < rowLen; i++) {
        for(let j = 0; j < colLen; j++) {
            if(wallpaper[i][j] === '.') {
                continue;
            }
            
            answer[0] = Math.min(answer[0], i);
            answer[1] = Math.min(answer[1], j);
            answer[2] = Math.max(answer[2], i+1);
            answer[3] = Math.max(answer[3], j+1);
        }
    }
    
    return answer;
}