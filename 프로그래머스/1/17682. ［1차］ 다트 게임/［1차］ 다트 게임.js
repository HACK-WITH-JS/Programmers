function solution(dartResult) {
    let scores = [0, 0, 0];
    let cur = 0;
    let temp = "";
    
    for(let i = 0; i < dartResult.length; i++) {
        // 기회 하나의 데이터를 다 읽은 것
        if((temp.length !== 0 && isNum(dartResult[i]))) {
            scores[cur] = calcScore(temp, cur++, scores);
            // 하나 더 읽어야 되는지?
            if(i + 1 < dartResult.length && isNum(dartResult[i+1])) {
                temp = dartResult[i] + dartResult[i+1];
                i++;
            } else {
                temp = dartResult[i];    
            }
            
            continue;
        }
        
        if(isNum(dartResult[i])) {
            if(i + 1 < dartResult.length && isNum(dartResult[i+1])) {
                temp = dartResult[i] + dartResult[i+1];
                i++;
                continue
            }
        }
        
        temp += dartResult[i];
    }
    
    scores[cur] = calcScore(temp, cur, scores);
    
    // console.log(scores);
    
    return scores.reduce((acc, value) => acc + value);
}

function calcScore(dart, cur, scores) {
    // console.log(`${dart}의 점수를 계산합니다. 현재 cur:${cur}`);
    
    const isTen = isNum(dart[0] + dart[1]);
    let score =  isTen ? Number(dart[0] + dart[1]) : Number(dart[0]);
    const bonus = isTen ? dart[2] : dart[1];
    const option = dart.split(score).join('').split(bonus).join('');
    
    if(bonus === 'S') {
        score = score;
    } else if(bonus === 'D') {
        score = score * score;
    } else if (bonus === 'T') {
        score = score * score * score;
    }
    
    if(option === '*') {
        if(cur >= 1) {
            scores[cur-1] *= 2;
        }
        score *= 2;
    }
    
    if(option === '#') {
        score = score * -1;
    }
    
    return score;
}

function isNum(num) {
    return !isNaN(num)
}