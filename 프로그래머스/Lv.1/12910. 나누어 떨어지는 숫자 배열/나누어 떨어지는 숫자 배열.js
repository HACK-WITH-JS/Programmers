function solution(arr, divisor) {
    const temp = arr.filter(elem => elem % divisor === 0).sort((a, b) => a - b);
    return temp.length === 0 ? [-1] : temp;
}