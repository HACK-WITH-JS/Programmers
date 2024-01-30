function solution(participant, completion) {
    var answer = '';
    const map = new Map();
    
    for(let p of participant) {
        if(map.has(p)) {
            map.set(p, map.get(p) + 1)
        } else {
            map.set(p, 1);
        }
    }
    
    for(let c of completion) {
        let val = map.get(c);
        
        if(val === 1) {
            map.delete(c);
        } else {
            map.set(c, val-1);
        }
    }
    
    return map.keys().next().value;
}