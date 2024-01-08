function solution(arr) {
    return arr.reduce((acc, elem) => acc + elem) / arr.length;
}