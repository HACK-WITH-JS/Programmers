function solution(s) {
    const numberMap = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    }
    
    let answer = '';
    let tempStr = '';
    
    for(let i = 0; i < s.length; i++) {
        // 숫자면 그냥 더해버림
        if(isNum(s[i])) {
            answer += s[i];
            continue;
        }
        
        // 키 값을 만들기 위해서 더해주고 맵에 존재하는지 확인
        tempStr += s[i];
        if(numberMap[tempStr]) {
            answer += numberMap[tempStr];
            tempStr = '';
        }
        
    }
    
    return Number(answer);
}

function isNum(c) {
    return !isNaN(c);
}