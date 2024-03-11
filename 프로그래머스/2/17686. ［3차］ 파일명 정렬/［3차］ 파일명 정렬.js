function solution(files) {
    var answer = [];
    
    for(let file of files) {
        console.log(splitFileName(file));
    }
    
    files.sort((a, b) => {
        const [h1, n1, t1] = splitFileName(a);
        const [h2, n2, t2] = splitFileName(b);
        
        if(h1.toLowerCase() === h2.toLowerCase()) {
            if(parseInt(n1) === parseInt(n2)) {
                return 0;
            }
            
            return parseInt(n1) - parseInt(n2);
        }
        
        return h1.toLowerCase() < h2.toLowerCase() ? -1 : 1;
    })
    
    return files;
}

function splitFileName(fileName) {
    let HEAD = '';
    let NUMBER = '';
    let TAIL = '';
    
    let index = 0;
    // 처음으로 숫자가 나오는 곳의 위치를 찾는다.
    while(index < fileName.length) {
        if(isNumber(fileName[index])) {
            break;
        }
        HEAD += fileName[index++];
    }
    // 첫번째 숫자부터 최대 5개까지는 NUMBER에 포함 가능하다.
    let numberIndex = index;
    while(numberIndex < fileName.length && numberIndex - index < 5) {
        if(!isNumber(fileName[numberIndex])) {
            break;
        }
        NUMBER += fileName[numberIndex++];
    }
    // 나머지는 TAIL이다.
    while(numberIndex < fileName.length) {
        TAIL += fileName[numberIndex++];
    }
    
    return [HEAD, NUMBER, TAIL];
}

function isNumber(c) {
    return c.charCodeAt(0) >= '0'.charCodeAt(0) && c.charCodeAt(0) <= '9'.charCodeAt(0);
}