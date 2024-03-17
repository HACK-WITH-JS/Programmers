function solution(n, wires) {
    let answer = Infinity;
    
    // 각 node에 연결된 간선을 초기화
    const tree = Array.from({ length: n + 1 }, () => []);
    
    for(const [v1, v2] of wires) {
        tree[v1].push(v2);
        tree[v2].push(v1);
    }
    
    // BFS 알고리즘으로 간선을 queue에 들어온 순서대로 끊어주고,
    // 간선에 의해 분리된 각 그룹에 속한 총 노드 수의 차를 구함
    for(const [v1, v2] of wires) {
        answer = Math.min(answer, Math.abs(bfs(v1, v2, tree) - bfs(v2, v1, tree)));
    }
    
    return answer;
}

function bfs(root, exceptNode, tree) {
    let count = 0;
    const queue = [root];
    const visited = new Array(tree.length).fill(false);
    
    // 항상 최소 하나의 노드가 queue에 존재하므로 do-while을 사용
    do {
        const current = queue.shift();
        visited[current] = true;
        for(const node of tree[current]) {
        	// (node !== exceptNode)로 간선을 분리
            if(node !== exceptNode && visited[node] === false) {
                queue.push(node);
            }
        }
        count += 1;
    } while(queue.length > 0)
        
    return count;
}