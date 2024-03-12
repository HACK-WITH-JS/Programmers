function solution(bridge_length, weight, truck_weights) {
    let time = 1;
    let weightSum = 0;
    const q = [];
    
    while(truck_weights.length !== 0 || q.length !== 0) {
        // q의 값 중 다리를 다 지난 친구들은 큐에서 제거함.
        while(q.length !== 0 && time - q[0].enterTime >= bridge_length) {
            const truck = q.shift();
            weightSum -= truck.weight;
        }
        // truck이 남아있다면 다리에 올릴 수 있는지 검사함.
        if(truck_weights.length > 0) {
            if(weight >= truck_weights[0] + weightSum) {
                weightSum += truck_weights[0];
                q.push({weight: truck_weights[0], enterTime: time})
                truck_weights.shift();
            }
        }
        
        time++;
    }
    
    return time-1;
}