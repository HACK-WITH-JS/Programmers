function solution(numbers, target) {
    let answer = 0;
    
    function DFS(cur, idx, numbers, target) {
        if(idx >= numbers.length) {
            if(cur === target) {
                answer++;
            }
            return;
        }
        
        DFS(cur + numbers[idx], idx + 1, numbers, target);
        DFS(cur - numbers[idx], idx + 1, numbers, target);
    }
    
    DFS(numbers[0], 1, numbers, target);
    DFS(-numbers[0], 1, numbers, target);
    
    return answer;
}