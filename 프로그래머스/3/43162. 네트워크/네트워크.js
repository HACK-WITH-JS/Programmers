function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);
    
    for(let i = 0; i < n; i++) {
        if(visited[i] === false) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
    
    function dfs(index) {
        visited[index] = true;
        
        for(let next = 0; next < n; next++) {
            if(computers[index][next] === 1 && visited[next] === false) {
                dfs(next);
            }
        }
    }
}