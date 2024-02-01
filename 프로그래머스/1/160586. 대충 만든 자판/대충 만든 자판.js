function solution(keymap, targets) {
    const answer = [];
    
    for(let target of targets) {
        const cnt = calcCnt(keymap, target);
        answer.push(cnt);
    }
    
    return answer;
}

// target을 입력하기 위해서 keymap을 두들 기는 최소한의 수
function calcCnt(keymap, target) {
    let ret = 0;
    
    for(let i = 0; i < target.length; i++) {
        let char = target[i];
        let minIndex = 9999;
        
        for(let key of keymap) {
            let idx = key.indexOf(char);
            if(idx < 0) continue;
            
            minIndex = minIndex > idx ? idx : minIndex;
        }
        
        if(minIndex === 9999) {
            ret = -1;
            break;
        } else {
            ret += minIndex + 1;
        }
    }
    
    return ret;
}