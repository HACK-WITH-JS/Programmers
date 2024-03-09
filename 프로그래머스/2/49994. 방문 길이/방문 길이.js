function solution(dirs) {
    var answer = 0;
    let cur = [0, 0]; // 행 좌표 열 좌표
    const set = new Set();
    const map = {
        U: [1, 0],
        L: [0, -1],
        D: [-1, 0],
        R: [0, 1]
    }
    
    
    for(let i = 0; i < dirs.length; i++) {
        const dir = dirs[i];
        const [dx, dy] = map[dir];
        const next = [cur[0] + dx, cur[1] + dy];
        
        // 좌표가 범위를 벗어난 경우
        if(next[0] < -5 || next[0] > 5 || next[1] < -5 || next[1] > 5 ) {
            continue;
        }
        
        set.add("" + cur[0] + cur[1] + next[0] + next[1]);
        set.add("" + next[0] + next[1] + cur[0] + cur[1]);
        cur = next;
    }
    
    return set.size / 2;
}