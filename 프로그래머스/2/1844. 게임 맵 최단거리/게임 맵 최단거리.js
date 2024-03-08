// BFS 돌리면 끝
function solution(maps) {
    var answer = 0;
    
    let row = maps.length;
    let col = maps[0].length;
    let distance = make2DArray(row, col);
    // 북 동 남 서
    const dx = [-1, 0, 1, 0]; // 행좌표
    const dy = [0, 1, 0, -1] // 열좌표
    
    let cur = [0, 0];
    const q = [];
    q.push(cur);
    
    while(q.length !== 0) {
        cur = q.shift();
        
        for(let dir = 0; dir < 4; dir++) {
            const nextX = cur[0] + dx[dir];
            const nextY = cur[1] + dy[dir];
            
            // 첫 좌표는 무시함.
            if(nextX === 0 && nextY === 0) continue;
            // 좌표가 보드 바깥으로 나갈 경우 무시함.
            if(nextX < 0 || nextX >= row || nextY < 0 || nextY >= col) continue;
            // 벽인경우
            if(maps[nextX][nextY] === 0) continue;
            // 이미 방문한 경우
            if(distance[nextX][nextY] > 0) continue;
            
            distance[nextX][nextY] = distance[cur[0]][cur[1]] + 1;
            q.push([nextX, nextY]);
        }
    }
    
    return distance[row-1][col-1] === 0 ? -1 : distance[row-1][col-1] + 1;
}

function make2DArray(row, col) {
    let ret = [];
    
    for(let i = 0; i < row; i++) {
        let arr = [];
        for(let j = 0; j < col; j++) {
            arr.push(0);
        }
        ret.push(arr);
    }
    
    return ret;
}