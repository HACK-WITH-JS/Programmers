function solution(arr) {
    if(arr.length === 1) {
        return [-1];
    }
    
    let minValue = arr[0];
    let answer = [];
    
    for(let i = 1; i < arr.length; i++) {
        minValue = Math.min(arr[i], minValue);
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== minValue) {
            answer.push(arr[i]);
        }
    }
    
    return answer;
}