function solution(arr) {
    var answer = 1;
    
    for(let i = 0; i < arr.length; i++) {
        console.log(`arr[i] = ${arr[i]}, lcm: ${lcm(answer, arr[i])}`);
        answer = lcm(answer, arr[i]);
    }
    
    return answer;
}

function lcm(num1, num2) {
    return num1 * num2 / gcd(num1, num2);
}

function gcd(num1, num2) {
    if(num2 === 0) {
        return num1;
    }
    
    return gcd(num2, num1 % num2);
}