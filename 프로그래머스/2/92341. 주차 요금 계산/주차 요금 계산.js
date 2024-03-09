function solution(fees, records) {
    const [defaultTime, defaultFee, timeUnit, feeUnit] = fees;
    const inMap = new Map();
    const timeMap = new Map();
    let answer = [];
    
    for(let record of records) {
        const [time, carNumber, type] = record.split(' ');
        
        if(type === 'IN') {
            inMap.set(carNumber, time);
            
            if(timeMap.has(carNumber) === false) {
                timeMap.set(carNumber, 0);
            }
            
            continue;
        }
        
        // out이 나온 경우 시간을 계산한다.
        const inTime = inMap.get(carNumber);
        timeMap.set(carNumber, timeMap.get(carNumber) + calcTime(inTime, time));
        inMap.delete(carNumber);
    }
    
    // inMap에 남아 있는 모든 친구들은 23:59로 땡처리한다.
    for(const key of inMap.keys()) {
        const inTime = inMap.get(key);
        timeMap.set(key, timeMap.get(key) + calcTime(inTime, '23:59'));
        inMap.delete(key);
    }
    
    for(const carNumber of timeMap.keys()) {
        const time = timeMap.get(carNumber);
        
        if(time <= defaultTime) {
            answer.push({carNumber, fee: defaultFee});
            continue;
        }
        
        const fee = defaultFee + Math.ceil((time - defaultTime) / timeUnit) * feeUnit;
        answer.push({carNumber, fee});
    }
    
    answer.sort((a, b) => a.carNumber - b.carNumber);
    return answer.map(x => x.fee);
}

function calcTime(inTime, outTime) {
    const inArr = inTime.split(':').map(x => parseInt(x));
    const outArr = outTime.split(':').map(x => parseInt(x));
    const inSum = inArr[0] * 60 + inArr[1];
    const outSum = outArr[0] * 60 + outArr[1];
    return outSum - inSum;
}