// 추억 점수는 사진속 인물의 그리움의 총합이다.
function solution(name, yearning, photo) {
    var answer = [];
    const map = makeYearningMap(name, yearning);
    // 여기서부터 디버깅해야함
    for(let i = 0; i < photo.length; i++) {
        let p = photo[i];
        let score = 0;
        
        for(let j = 0; j < p.length; j++) {
            score += map[p[j]] !== undefined ? map[p[j]] : 0;
        }
        answer.push(score);
    }
    return answer;
}

function makeYearningMap(name, yearning) {
    const ret = {};
    
    for(let i = 0; i < name.length; i++) {
        ret[name[i]] = yearning[i];
    }
    
    return ret;
}