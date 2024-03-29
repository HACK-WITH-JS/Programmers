function solution(x, n) {
    return new Array(n).fill(0).map((value, index) => x * (index+1));
}