function solution(numbers) {
    let sum = 45;
    numbers.forEach(num => sum -= num);
    return sum;
}