function solution(a, b) {
    const minValue = Math.min(a, b);
    const maxValue = Math.max(a, b);
    
    let sum = 0;
    
    for(let i = minValue; i <= maxValue; i++) {
        sum += i;
    }
    
    return sum;
}