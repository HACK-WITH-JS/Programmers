
function solution(k, dungeons) {
    let answer = -1;
    const length = dungeons.length;
    const visited = Array(length).fill(false);
    
    function DFS(hp, L) {
        for(let i = 0; i < length; i++) {
            if(visited[i] || hp < dungeons[i][0]) {
                continue;
            }
            
            visited[i] = true;
            DFS(hp - dungeons[i][1], L + 1);
            visited[i] = false;
        }
        
        answer = Math.max(answer, L)
    }
    
    DFS(k, 0)
    
    return answer;
}

