function solution(topping) {
    let answer = 0;
    let setOne = new Set();
    let setTwo = new Set(topping);
    let map = new Map();
    
    for(let i = 0; i < topping.length; i++) {
        const t = topping[i];
        
        if(map.has(t)) {
            map.set(t, map.get(t) + 1);
        } else {
            map.set(t, 1);
        }
    }
    
    for(let i = 0; i < topping.length; i++) {
        const t = topping[i];
        setOne.add(t);
        
        if(map.get(t) === 1) {
            setTwo.delete(t);
            map.set(t, 0);
        } else {
            map.set(t, map.get(t) - 1);
        }
        
        
        if(setOne.size === setTwo.size) answer++;
    }
    
    return answer;
}