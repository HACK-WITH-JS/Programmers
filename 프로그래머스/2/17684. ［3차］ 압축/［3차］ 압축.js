function solution(msg) {
    const ret = [];
    let map = makeDefaultMap();
    let nextIndex = 27;
    
    let i = 0;
    
    while(i < msg.length) {
        // map에 존재하는 가장 긴 문자열을 찾는다!
        let plusIndex = 1;
        while(i + plusIndex <= msg.length && map.has(msg.substring(i, i + plusIndex))) {
            plusIndex++;
        }
        
        ret.push(map.get(msg.substring(i, i + plusIndex - 1)));
        const nextString = msg.substring(i, i + plusIndex);
        map.set(nextString, nextIndex++);
        i += plusIndex - 1;
    }
    
    
    return ret;
}

function makeDefaultMap() {
    const ret = new Map();
    
    for(let i = 1; i <= 26; i++) {
       ret.set(String.fromCharCode('A'.charCodeAt(0) + (i - 1)), i);
    }
    
    return ret;
}