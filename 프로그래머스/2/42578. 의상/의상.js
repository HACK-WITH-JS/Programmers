function solution(clothes) {
    let answer = 1;
    
    const map = new Map();
    
    for(let [clothe, option] of clothes) {
        // console.log(`${option}: ${clothe}`)
        let arr = map.get(option);
        
        if(arr === undefined || arr === null) {
            arr = [];
            map.set(option, arr);
        }
        
        arr.push(clothe);
    }
    
    for(let key of map.keys()) {
        answer *= (map.get(key).length + 1);
    }
    
    return answer-1;
}