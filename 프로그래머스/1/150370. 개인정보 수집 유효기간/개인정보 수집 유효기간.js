function solution(today, terms, privacies) {
    const answer = [];
    const termMap = makeTermMap(terms);
    const todayDate = new Date(today);
    
    for(let i = 0; i < privacies.length; i++) {
        const[yyyyMMdd, term] = privacies[i].split(' ');
        const expireDate =  new Date(changeMaxDuration(yyyyMMdd, term, termMap));
        
        if(todayDate > expireDate) {
            answer.push(i+1);
        }
    }
    
    return answer;
}

// 의심 되는 포인트는 여기
function changeMaxDuration(yyyyMMdd, term, termMap) {
    let [yyyy, MM, dd] = yyyyMMdd.split('.').map(elem => parseInt(elem));
    const plusMonth = termMap[term];
    
    MM += plusMonth;
    dd -= 1;
    
    if(dd === 0) {
        dd = 28;
        MM -= 1;
    }
    
    while (MM > 12) {
        yyyy += 1;
        MM -= 12;
    }
    
    return [yyyy, MM, dd].join('.');
}

function makeTermMap(terms) {
    const termMap = {};
    // 키 만들기
    for(let term of terms) {
        const[key, value] = term.split(' ');
        termMap[key] = parseInt(value);
    }
    
    return termMap;
}