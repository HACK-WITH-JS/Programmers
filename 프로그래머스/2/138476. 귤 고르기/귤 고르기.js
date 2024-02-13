function solution(k, tangerine) {
    let answer = 0;
    let temp = 0;
    const arr = [];
    const map = new Map();
    
    for(const t of tangerine) {
        if(map.has(t)) {
            map.set(t, map.get(t) + 1);
        } else {
            map.set(t, 1);
        }
    }
    //     
    for(const [key, value] of map.entries()){
        arr.push([key, value]);
    }
    
    arr.sort((a, b) => b[1] - a[1]);
    
    let start = 0;
    
    while(temp < k && start < arr.length) {
        temp += arr[start][1];
        start++;
        answer++;
    }
    
    return answer;
}