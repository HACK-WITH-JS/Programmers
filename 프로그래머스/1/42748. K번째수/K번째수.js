function solution(array, commands) {
    var answer = [];
    
    
    for(let [left, right, k] of commands) {
        answer.push(solve(array, left, right, k));
    }
    
    
    return answer;
}

function solve(array, left, right, k) {
    let temp = [];
    for(let i = left - 1; i < right; i++) {
        temp.push(array[i]);
    }
    temp.sort((a, b) => a - b);
    return temp[k-1];
}