function solution(X, Y) {
    
    const xArr = X.split('');
    const yArr = Y.split('');
    let map = makeMap(yArr);
    let numbers = findNumbers(xArr, map);
    
    if(numbers.length === 0) return "-1";
    numbers.sort((a, b) => b - a);
    const ans = numbers.reduce((acc, value) => acc + value);
    
    return ans[0] === '0' ? '0' : ans;
}

function findNumbers(xArr, map) {
    let ret = [];
    
    for(let i = 0; i < xArr.length; i++) {
        let num = xArr[i];
        
        if(!map.has(num)) continue;
        
        if(map.get(num) >= 1) {
            map.set(num, map.get(num) - 1);
            ret.push(num);
        }
    }
    
    return ret;
}

function makeMap(yArr) {
    let map = new Map();
    
    for(let i = 0; i < yArr.length; i++) {
        if(map.has(yArr[i])) {
            map.set(yArr[i], map.get(yArr[i]) + 1);
        } else {
            map.set(yArr[i], 1);
        }
    }
    
    return map;
}