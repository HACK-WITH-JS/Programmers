// 풀이 전략 = 슬라이딩 윈도우
function solution(want, number, discount) {
    let answer = 0;
    const slice = number.reduce((acc, value) => acc + value);
    const wantMap = new Map();
    
    for(let i = 0; i < want.length; i++) {
        wantMap.set(want[i], number[i]);
    }
    
    for(let i = 0; i <= discount.length - slice; i++) {
        const disCountMap = new Map();
        
        for(let j = i; j < i + slice; j++) {
            if(disCountMap.has(discount[j])) {
                disCountMap.set(discount[j], disCountMap.get(discount[j]) + 1);
            } else {
                disCountMap.set(discount[j], 1);
            }
        }
        
        if(check(wantMap, disCountMap)) {
            answer++;   
        }
    }
    
    return answer;
}

function check(wantMap, disCountMap) {
    
    for(const [key, value] of wantMap.entries()) {
        // console.log(key, value);
        const disCountValue = disCountMap.get(key);
        
        if(disCountValue === undefined || disCountValue === null) {
            return false;
        }
        
        if(disCountValue < value) {
            return false;
        }
        
    }
    
    return true;
}